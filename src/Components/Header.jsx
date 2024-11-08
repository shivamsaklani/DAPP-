import {  WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Container, Nav, Navbar, NavbarBrand,  } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CustomHeader(){
    return (

        
       <Navbar  className="d-flex justify-content-around" color="white" variant="dark">
        <Container>
     

            <NavbarBrand href="/">DAPP Application</NavbarBrand>

            <Nav className="me-auto">
           
            <Link className="m-3 text-white text-decoration-none " to='/airdrop'>AirDrop</Link>
            <Link className="m-3 text-white text-decoration-none " to='/transaction'>Transactions </Link>
            <Link className="m-3 text-white text-decoration-none " to='/createToken'>Create Token </Link>
            <Link className="m-3 text-white text-decoration-none " to='/liquidity-pool'>Liquidity Pool </Link>
           
        </Nav>
        <Nav>
        <WalletMultiButton className="m-3">Connect</WalletMultiButton>
            
        </Nav>
        

      
        
        

        </Container>
      


       </Navbar>
    )
}