import React from 'react';
import logo from './logo.svg';
import './App.css';
import algosdk from 'algosdk';

function App() {
  let keys = algosdk.generateAccount();
  let mnemonic = algosdk.secretKeyToMnemonic(keys.sk);
  const [state, setState] = React.useState({
    addr: keys.addr,
    mnemonic: mnemonic,
  });
  return (
    <div className="App">
      <header className="App-header" style={{WebkitAppRegion: 'drag'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use <code>AlgoSDK</code> to generate Algorand keys.
        </p>
        <p>
          <code>address: </code> {state.addr}
        </p>
        <p>
          <code>mnemonic: </code> {state.mnemonic}
        </p>
        <button style={{lineHeight: 2}} onClick={()=>{
          let keys = algosdk.generateAccount();
          let mnemonic = algosdk.secretKeyToMnemonic(keys.sk);
          setState({addr: keys.addr, mnemonic: mnemonic,})
        }}>
          regenerate
        </button>
      </header>
    </div>
  );
}

export default App;
