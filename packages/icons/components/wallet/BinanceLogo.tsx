// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as Binance } from '../../assets/logos/wallet/Binance.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const BinanceLogo: FC<Omit<ICryptoLogoProps, 'logo'>> = ({
  size,
  className,
}) => {
  return <CryptoLogo logo={<Binance />} size={size} className={className} />;
};

export default BinanceLogo;
