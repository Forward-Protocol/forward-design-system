// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Save from '@iconify-icons/carbon/download';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const SaveIcon: FC<Omit<IIconProps, 'icon'>> = ({ size, className, color }) => {
  return (
    <Icon
      icon={<ReactIcon icon={Save} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default SaveIcon;
