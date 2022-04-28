// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as BUSD } from '../../assets/icons/crypto/BUSD.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const BUSDLogo: FC<Omit<ICryptoLogoProps, 'icon'>> = ({ size, className }) => {
  return <CryptoLogo logo={<BUSD />} size={size} className={className} />;
};

export default BUSDLogo;