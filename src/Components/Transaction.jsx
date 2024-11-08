import { Button, FormControl, FormGroup, InputGroup, } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import {Root,TabsContent,TabsList,TabsTrigger} from '@radix-ui/react-tabs'


import { Box } from "@radix-ui/themes";
import { useRef } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
export function Sendtransaction(){


    const receiver=useRef();
    const Amount=useRef();
    const wallet=useWallet();
    const {connection}=useConnection();


    async function SendSOL(){
      const to=receiver.current.value;
      const SOL=Amount.current.value;
      const transaction = new Transaction ();
      transaction.add(SystemProgram.transfer({
        fromPubkey:wallet.publicKey,
        toPubkey:new PublicKey(to),
        lamports:SOL*LAMPORTS_PER_SOL
      }));
      await wallet.sendTransaction(transaction,connection);
      alert(`${SOL} SOL sent to ${to}`);

    }

    return(<>
<Box className="d-flex-sm m-3 container-sm justify-content-center align-items-center m-3 row">
<Root defaultValue="send">
    <TabsList className="d-flex justify-content-around nav nav-tabs " >
        <TabsTrigger className="nav-link btn-light text-white "  value="send">Send</TabsTrigger>
        <TabsTrigger  className="nav-link text-white" value="receive">Receive</TabsTrigger>
    </TabsList>

  
        {/* Send Tab Content */}
       
        <TabsContent className=" align-items-center d-flex justify-content-center row " value="send">
          
                <h1 className="text-center mb-3">Send Solana</h1>
              
                    <FormGroup className="mb-3">
                        <FormControl
                            type="text"
                            className="mb-3"
                            value={localStorage.getItem("publickey")}
                            readOnly
                        />
                        <FormControl
                            type="text"
                            className="mb-3"
                            ref={receiver}
                            placeholder="Receiver Address"
                        />
                        <InputGroup className="mb-3">
                            <InputGroupText>SOL</InputGroupText>
                            <FormControl
                                size="lg"
                                ref={Amount}
                                type="text"
                                placeholder="Amount"
                            />
                        </InputGroup>
                    </FormGroup>
                    <Button className="bg-success text-white" onClick={SendSOL} variant="dark">
                        Send
                    </Button>
               
        </TabsContent>

        {/* Receive Tab Content */}
        <TabsContent className=" align-items-center d-flex justify-content-center row " value="receive">
         
                <h1 className="text-center mb-3">Receive Solana</h1>
            
                    <InputGroup className="mb-3">
                        <FormControl
                            value={localStorage.getItem("publickey")}
                            readOnly
                        />
                    </InputGroup>
                    <p>Receive Using this Public Address</p>
               
        </TabsContent>
  
 
</Root>
</Box>

  
        
            
        </>
    );
}