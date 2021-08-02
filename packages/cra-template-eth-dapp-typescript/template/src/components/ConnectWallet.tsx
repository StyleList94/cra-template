import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { useEagerConnect, useInactiveListener } from '../hooks';
import connectorList, { resetWalletConnectConnector } from '../lib/connectors';

type ConnectorName = 'MetaMask' | 'Portis' | 'WalletConnect' | 'WalletLink';

const ConnectWallet = () => {
  const [isConnecing, setIsConnecing] = useState(false);
  const { activate, deactivate, active, error } = useWeb3React<Web3Provider>();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  const handleClick = (connectorName: ConnectorName) => () => {
    setIsConnecing(true);
    activate(connectorList[connectorName]);
  };

  const handleDisconnect = () => {
    deactivate();
  };

  const handleRetry = () => {
    setIsConnecing(false);
    resetWalletConnectConnector(connectorList['WalletConnect']);
    deactivate();
  };

  useEffect(() => {
    if (active) {
      setIsConnecing(false);
    }
  }, [active]);

  return (
    <div className="connect-wallet">
      {active && (
        <button className="button-disconnect" onClick={handleDisconnect}>
          Disconnect Wallet
        </button>
      )}
      {!active && (
        <>
          <button onClick={handleClick('MetaMask')} disabled={isConnecing}>
            Connect on MetaMask
          </button>
          <button onClick={handleClick('Portis')} disabled={isConnecing}>
            Connect on Portis
          </button>
          <button onClick={handleClick('WalletConnect')} disabled={isConnecing}>
            Connect on WalletConnect
          </button>
          <button onClick={handleClick('WalletLink')} disabled={isConnecing}>
            Connect on WalletLink
          </button>
        </>
      )}
      {!active && error && <button onClick={handleRetry}>Retry</button>}
    </div>
  );
};

export default ConnectWallet;
