import image from '../assets/Images/token.png';
import { Box } from "@radix-ui/themes";
import { useRef } from "react";
import { Button, Card, CardBody, CardImg, CardText, Container, FormControl, FormLabel } from "react-bootstrap";
import { Keypair, SystemProgram, Transaction} from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { TOKEN_2022_PROGRAM_ID, getMintLen, createInitializeMetadataPointerInstruction, createInitializeMintInstruction, TYPE_SIZE, LENGTH_SIZE, ExtensionType, getAssociatedTokenAddressSync, createAssociatedTokenAccount, createAssociatedTokenAccountInstruction, createMint, createMintToInstruction} from "@solana/spl-token"
import { createInitializeInstruction, pack } from '@solana/spl-token-metadata';
export function Token(){
    const {connection}=useConnection();
    const wallet =useWallet();
    const Name =useRef('');
    const Symbol=useRef('');
    const ImageUrl=useRef('');
    const Size=useRef();
    async function createToken(){
      
        const mintkeypair=Keypair.generate(); // generates new keypair for mint account
        const tokendata={
            mint:mintkeypair.publicKey,
            name:Name.current.value,
            symbol:Symbol.current.value,
            uri:ImageUrl.current.value,
            additionalMetadata: [],
        };

       console.log(Size.current.value);

        const mintLen=getMintLen([ExtensionType.MetadataPointer]);
        const tokenLen=TYPE_SIZE+LENGTH_SIZE+pack(tokendata).length;
        //Minimum Balance for creating new tokens
        const lamports =await connection.getMinimumBalanceForRentExemption(mintLen +tokenLen);
         
        const transaction=new Transaction().add(
            //new Mint Account Created
            SystemProgram.createAccount({
                fromPubkey:wallet.publicKey,
                newAccountPubkey:mintkeypair.publicKey,
                space:mintLen,
                lamports,
                programId:TOKEN_2022_PROGRAM_ID

            }),
            //Run the above create Mint Account Instruction

            createInitializeMetadataPointerInstruction(mintkeypair.publicKey,wallet.publicKey,mintkeypair.publicKey,TOKEN_2022_PROGRAM_ID),
            createInitializeMintInstruction(mintkeypair.publicKey,9,wallet.publicKey,null,TOKEN_2022_PROGRAM_ID),
            createInitializeInstruction({
                programId:TOKEN_2022_PROGRAM_ID,
                mint:mintkeypair.publicKey,
                metadata: mintkeypair.publicKey,
                name:tokendata.name,
                symbol:tokendata.symbol,
                uri:tokendata.uri,
                mintAuthority:wallet.publicKey,
                updateAuthority:wallet.publicKey
            })
        );
        transaction.feePayer=wallet.publicKey;
        transaction.recentBlockhash=(await connection.getLatestBlockhash()).blockhash;
     
        transaction.partialSign(mintkeypair);
      
        await wallet.sendTransaction(transaction,connection);
        alert(`token mint created ${mintkeypair.publicKey.toBase58()}`);


        // Create Mint Tokens 

        const associatedToken = getAssociatedTokenAddressSync(
            mintkeypair.publicKey,
            wallet.publicKey,
            false,
            TOKEN_2022_PROGRAM_ID

        );
        
        const MintToken=new Transaction().add(
            createAssociatedTokenAccountInstruction(
                wallet.publicKey,
                associatedToken,
                wallet.publicKey,
                mintkeypair.publicKey,
                TOKEN_2022_PROGRAM_ID,

            ),
        );

        await wallet.sendTransaction(MintToken,connection);

        const MintSize=new Transaction().add(
            createMintToInstruction(
                mintkeypair.publicKey,
                associatedToken,
                wallet.publicKey,
                Size.current.value,
                [],
                TOKEN_2022_PROGRAM_ID




            )
        )

        await wallet.sendTransaction(MintSize,connection);

    

    }

    return(
      <Box className="bg-dark rounded-5 p-5 m-3 ">
        <Container className="justify-content-center d-flex mb-3 row p-5">

        <h1 className="text-light fs-4 text-center">SOLANA TOKEN CREATE</h1>
        <span className="text-ligth fs-6 text-center">Create your Own Token in just a Tap</span>
        
       
        </Container>
       <Container className='d-flex justify-content-center col mb-3'>

       <CardImg className='rounded-5 h-50 w-50 ' src={image}/>
         
    

       </Container>
         
           

      

        <Container className="row">
            <Container className="col-md-6 mb-3">
                <FormLabel >
                    Name:
                </FormLabel>
                <FormControl type="text" ref={Name} className="p-50 " placeholder="Put the name of the Token"/>
                <FormLabel>
                    Symbol:
                </FormLabel>
                <FormControl type="text" ref={Symbol} placeholder="Put the symbol of Token"/>


            </Container>
            <Container className="col-md-6 mb-3">
            <FormLabel>
                   Image :
                </FormLabel>
                <FormControl type="url" ref={ImageUrl} placeholder="Enter the Image Url"/>
                <FormLabel>
                    Supply :
                </FormLabel>
                <FormControl type="text" ref={Size} placeholder="Enter the Supply for token"/>


            </Container>
            
          
        </Container>
        <Container className="d-flex mt-3 mb-3 justify-content-center">

        <Button className="btn btn-success" onClick={createToken} size="lg" >Create Token</Button>
        </Container>
        


      </Box>
    
    );
}