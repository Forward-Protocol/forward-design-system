// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as Coinbase } from '../../../assets/icons/wallet/Coinbase.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const CoinbaseLogo: FC<Omit<ICryptoLogoProps, 'icon'>> = ({
  size,
  className,
}) => {
  return <CryptoLogo logo={<Coinbase />} size={size} className={className} />;
};

export default CoinbaseLogo;