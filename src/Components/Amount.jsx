import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export function CurrentAmount(){
    const {connection}=useConnection();
    const Wallet=useWallet();
    const [balance,setbalance]=useState();

    useEffect(
       ()=>async function getbalance(){
        const bal=await connection.getBalance(Wallet.publicKey);
        setbalance(bal/LAMPORTS_PER_SOL);


        }
,balance);
   
    return(<Container className="justify-content-center d-flex">
        <p className="text-light mt-3 mb-3">Current SOL in your Account- {balance}</p>
       


    </Container>);
}