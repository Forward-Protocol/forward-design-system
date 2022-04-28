// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as SafePal } from '../../../assets/icons/wallet/SafePal.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const SafePalLogo: FC<Omit<ICryptoLogoProps, 'icon'>> = ({
  size,
  className,
}) => {
  return <CryptoLogo logo={<SafePal />} size={size} className={className} />;
};

export default SafePalLogo;