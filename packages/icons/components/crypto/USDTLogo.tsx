// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as USDT } from '../../assets/logos/crypto/USDT.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const USDTLogo: FC<Omit<ICryptoLogoProps, 'logo'>> = ({ size, className }) => {
  return <CryptoLogo logo={<USDT />} size={size} className={className} />;
};

export default USDTLogo;
