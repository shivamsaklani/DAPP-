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
import { Connect } from './Components/Connect';
import { Transaction } from './Components/Transaction';
import { Token } from './Components/Token';

function App() {
  return (
 

  
   <ConnectionProvider endpoint='https://solana-devnet.g.alchemy.com/v2/urVCtd75CI0AmlC1SMfFAmybHGk0kQGE'>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
      <BrowserRouter>
 
 <Routes>
   <Route path='/' element={<Layout />} >
   <Route path='airdrop' element={<AirDrop/>}/>
   <Route path='connect' element={<Connect/>}/>
   <Route path='transaction' element={<Transaction/>}/>
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
