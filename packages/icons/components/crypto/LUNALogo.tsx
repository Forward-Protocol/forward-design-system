// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as LUNA } from '../../assets/logos/crypto/LUNA.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const LUNALogo: FC<Omit<ICryptoLogoProps, 'logo'>> = ({ size, className }) => {
  return <CryptoLogo logo={<LUNA />} size={size} className={className} />;
};

export default LUNALogo;
