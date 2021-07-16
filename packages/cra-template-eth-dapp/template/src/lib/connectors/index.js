import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from './portis-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 137, 80001],
});

export const portis = new PortisConnector({
  dAppId: '68b06260-223e-4d08-bd13-d6b654b8e5bd',
  networks: [1, 3, 4, 5, 42, 137, 80001],
});

export const connectorList = {
  Metamask: injected,
  Portis: portis,
};

export default connectorList;
