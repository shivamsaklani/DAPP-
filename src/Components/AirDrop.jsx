import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useRef } from 'react';
import {Button,FormControl,FormGroup, InputGroup} from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
export function AirDrop(){
  const Wallet=useWallet();
  const lamport=useRef();
  const {connection} =useConnection();
Wallet?  localStorage.setItem("publickey",Wallet.publicKey.toString()):null;
   async function SendAirDrop(){
     await connection.requestAirdrop(Wallet.publicKey,lamport.current.value*1000000000);
     alert("AirDrop Successful Please wait...");

   }
    return (
      Wallet?<> 
        <div id='Airdrop'>
        
         <FormGroup className='mb-3'>
           <FormControl size='lg' type='text' value={localStorage.getItem("publickey")}  readOnly/>
           </FormGroup>
           <InputGroup className='mb-3'>
           <InputGroupText>
             Amount
           </InputGroupText>
           <FormControl type='text' ref={lamport} placeholder='Enter Amount'/>
           </InputGroup>
     
         
         <Button size='lg' className="bg-success btn text-white" variant='dark' onClick={SendAirDrop}>AirDrop</Button>
        
        </div>
        </>:<div>
          <h1 className='text-light '>Please Connect your Wallet With DAPP and Then Procced For AirDrop</h1>
        </div>);
}