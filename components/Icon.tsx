import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

MIcon.loadFont();

Ionicons.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const MaterialIcon = ({size, name, color}: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} />
);

export const IIcon = ({size, name, color}: IconProps) => (
  <Ionicons size={IconSizes[size]} name={name} color={color} />
);

export const Icons = {
  Entypo,
  SimpleLineIcons,
  Ionicons,
};
