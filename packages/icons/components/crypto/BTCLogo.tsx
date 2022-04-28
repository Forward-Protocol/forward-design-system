// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as BTC } from '../../assets/icons/crypto/BTC.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const BTCLogo: FC<Omit<ICryptoLogoProps, 'icon'>> = ({ size, className }) => {
  return <CryptoLogo logo={<BTC />} size={size} className={className} />;
};

export default BTCLogo;