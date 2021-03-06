// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Copy from '@iconify-icons/carbon/copy';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const CopyIcon: FC<Omit<IIconProps, 'icon'>> = ({ size, className, color }) => {
  return (
    <Icon
      icon={<ReactIcon icon={Copy} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default CopyIcon;
