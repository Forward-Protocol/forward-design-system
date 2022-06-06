// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Image from '@iconify-icons/carbon/image';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const ImageIcon: FC<Omit<IIconProps, 'icon'>> = ({
  size,
  className,
  color,
}) => {
  return (
    <Icon
      icon={<ReactIcon icon={Image} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default ImageIcon;