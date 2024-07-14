import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import useDelayedNavigation from './useDelayedNavigation';

interface DelayedLinkProps extends TouchableOpacityProps {
  href: string;
  style?: StyleProp<ViewStyle | TextStyle>;
  navigationDelay?: number;
  postNavigationDelay?: number;
}

const DelayedLink: React.FC<DelayedLinkProps> = ({ href, style, children, ...props }) => {
  const delayedNavigate = useDelayedNavigation();

  const handlePress = () => {
    delayedNavigate(href);
  };

  return (
    <TouchableOpacity onPress={handlePress} {...props}>
      {typeof children === 'string' ? <Text style={style}>{children}</Text> : children}
    </TouchableOpacity>
  );
};

export default DelayedLink;
