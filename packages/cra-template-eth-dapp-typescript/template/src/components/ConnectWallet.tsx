import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { useEagerConnect, useInactiveListener } from '../hooks';
import connectorList from '../lib/connectors';

const ConnectWallet = () => {
  const { activate, deactivate, active } = useWeb3React<Web3Provider>();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  const handleClick = (connectorName: 'Metamask' | 'Portis') => () => {
    activate(connectorList[connectorName]);
  };

  const handleDisconnect = () => {
    deactivate();
  };

  return (
    <div className="connect-wallet">
      {active && <button onClick={handleDisconnect}>Disconnect Wallet</button>}
      {!active && (
        <button onClick={handleClick('Metamask')}>Connect on Metamask</button>
      )}
      {!active && (
        <button onClick={handleClick('Portis')}>Connect on Portis</button>
      )}
    </div>
  );
};

export default ConnectWallet;
