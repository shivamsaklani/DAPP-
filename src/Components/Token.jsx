import { Box } from "@radix-ui/themes";
import { Button, Container, FormControl, FormLabel } from "react-bootstrap";

export function Token(){
    return(
      <Box className="d-flex m-3 bg-dark rounded-5 justify-content-center align-items-center m-3 row">
        <Container className="justify-content-center d-flex mb-3 row p-5">

        <h1 className="text-light fs-4 text-center">SOLANA TOKEN CREATE</h1>
        <span className="text-ligth fs-6 text-center">Create your Own Token in just a Tap</span>
        </Container>

        <Container className="row">
            <Container className="col-md-6 mb-3">
                <FormLabel >
                    Name:
                </FormLabel>
                <FormControl type="text" className="p-50 " placeholder="Put the name of the Token"/>
                <FormLabel>
                    Symbol:
                </FormLabel>
                <FormControl type="text" placeholder="Put the symbol of Token"/>


            </Container>
            <Container className="col-md-6 mb-3">
            <FormLabel>
                   Image :
                </FormLabel>
                <FormControl type="url" placeholder="Put the name of the Token"/>
                <FormLabel>
                    Supply :
                </FormLabel>
                <FormControl type="text" placeholder="Put the symbol of Token"/>


            </Container>
            
          
        </Container>
        <Container className="d-flex mt-3 mb-3 justify-content-center">

        <Button className="btn btn-success" size="lg" >Create Token</Button>
        </Container>
        


      </Box>
    
    );
}