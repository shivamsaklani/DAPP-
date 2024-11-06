import { Button, FormControl, FormGroup, InputGroup, } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import {Root,TabsContent,TabsList,TabsTrigger} from '@radix-ui/react-tabs'
import { Box } from "@radix-ui/themes";
export function Transaction(){

    return(<>

<Root defaultValue="send">
    <TabsList className="d-flex justify-content-around nav nav-tabs " >
        <TabsTrigger className="nav-link text-white "  value="send">Send</TabsTrigger>
        <TabsTrigger  className="nav-link text-white" value="receive">Receive</TabsTrigger>
    </TabsList>

  
        {/* Send Tab Content */}
        <Box pt="3">
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
                            placeholder="Receiver Address"
                        />
                        <InputGroup className="mb-3">
                            <InputGroupText>SOL</InputGroupText>
                            <FormControl
                                size="lg"
                                type="text"
                                placeholder="Amount"
                            />
                        </InputGroup>
                    </FormGroup>
                    <Button className="bg-success text-white" variant="dark">
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
        </Box>
 
</Root>

  
        
            
        </>
    );
}