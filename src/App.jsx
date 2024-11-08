import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Layout } from './Components/Layout';
import { AirDrop } from './Components/AirDrop';

import { Token } from './Components/Token';
import { Sendtransaction } from './Components/Transaction';

function App() {
  return (
 

  
   <ConnectionProvider endpoint='https://solana-devnet.g.alchemy.com/v2/urVCtd75CI0AmlC1SMfFAmybHGk0kQGE'>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
      <BrowserRouter>
 
 <Routes>
   <Route path='/' element={<Layout />} >
   <Route path='airdrop' element={<AirDrop/>}/>
   <Route path='transaction' element={<Sendtransaction/>}/>
   <Route path='createToken' element={<Token/>}/>
   </Route>
   
 </Routes>

</BrowserRouter>
      </WalletModalProvider>
    </WalletProvider>
   </ConnectionProvider>
    
  
  );
}

export default App;
