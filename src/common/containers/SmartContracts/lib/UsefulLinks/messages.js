import { FormattedMessage } from 'react-intl';
import React from 'react';

const messages = {
  contracts: [
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.contracts.capabilities"
          defaultMessage="Approach and capabilities"
        />
      ),
      url:
        'https://docs.wavesplatform.com/en/technical-details/waves-contracts-language-description/approach-and-capabilities.html',
    },
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.contracts.language"
          defaultMessage="Language description"
        />
      ),
      url:
        'https://docs.wavesplatform.com/en/technical-details/waves-contracts-language-description/language-description.html',
    },
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.contracts.library"
          defaultMessage="Standard library"
        />
      ),
      url:
        'https://docs.wavesplatform.com/en/technical-details/waves-contracts-language-description/standard-library.html',
    },
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.contracts.ide"
          defaultMessage="RIDE IDE"
        />
      ),
      url: 'https://ide.wavesplatform.com',
    },
  ],
  platform: [
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.platform.features"
          defaultMessage="Platform Features"
        />
      ),
      url: 'https://docs.wavesplatform.com/en/',
    },
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.platform.node"
          defaultMessage="About Waves Node"
        />
      ),
      url:
        'https://docs.wavesplatform.com/en/waves-full-node/what-is-a-full-node.html',
    },
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.platform.wallet"
          defaultMessage="About Waves Wallet"
        />
      ),
      url:
        'https://docs.wavesplatform.com/en/waves-client/install-waves-client.html',
    },
  ],
  tutorials: [
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.tutorials.console"
          defaultMessage="Console"
        />
      ),
      url: 'https://youtu.be/sOZuE9Ebfko',
    },
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.tutorials.escrow"
          defaultMessage="Escrow"
        />
      ),
      url: 'https://youtu.be/31dwYcgb65M',
    },
    {
      text: (
        <FormattedMessage
          id="smartContracts.usefulLinks.tutorials.multisig"
          defaultMessage="Multisignature"
        />
      ),
      url: 'https://youtu.be/o2msjSo0y0o',
    },
  ],
};

export default messages;
