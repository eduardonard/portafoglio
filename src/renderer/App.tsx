import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { myWallet } from './components/csv-reader';

function WalletPage() {
  return (
    <div className="" style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Wallet</h1>
      <h2>Balance: ${myWallet.getBalance()}</h2>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WalletPage />} />
      </Routes>
    </Router>
  );
}
