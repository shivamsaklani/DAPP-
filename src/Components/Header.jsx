import {  WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CustomHeader(){
    return (
       <Navbar color="white" variant="dark">
        <Container>
        <NavbarCollapse>
            <NavbarBrand>DAPP Application</NavbarBrand>
        </NavbarCollapse>
        
        <Nav className="g-3 text-white text-decoration-none ">
           
            <Link className="m-3 text-white text-decoration-none " to='/airdrop'>AirDrop</Link>
            <Link className="m-3 text-white text-decoration-none " to='/transaction'>Transactions </Link>
            <Link className="m-3 text-white text-decoration-none " to='/createToken'>Create Token </Link>
            
        </Nav>
        <Nav>
            <WalletMultiButton className="m-3">Connect</WalletMultiButton>
           
        </Nav>

        </Container>
      


       </Navbar>
    )
}