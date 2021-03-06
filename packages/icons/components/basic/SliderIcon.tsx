// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Slider from '@iconify-icons/clarity/slider-line';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const SliderIcon: FC<Omit<IIconProps, 'icon'>> = ({
  size,
  className,
  color,
}) => {
  return (
    <Icon
      icon={<ReactIcon icon={Slider} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default SliderIcon;
