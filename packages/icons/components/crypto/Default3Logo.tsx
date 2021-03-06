// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as Default3 } from '../../assets/logos/crypto/Default3.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const Default3Logo: FC<Omit<ICryptoLogoProps, 'logo'>> = ({
  size,
  className,
}) => {
  return <CryptoLogo logo={<Default3 />} size={size} className={className} />;
};

export default Default3Logo;
