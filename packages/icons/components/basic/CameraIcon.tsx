// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Camera from '@iconify-icons/carbon/camera';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const CameraIcon: FC<Omit<IIconProps, 'icon'>> = ({
  size,
  className,
  color,
}) => {
  return (
    <Icon
      icon={<ReactIcon icon={Camera} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default CameraIcon;
