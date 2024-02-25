import { Dimensions, Platform, StatusBar } from 'react-native';

import clsx, { ClassValue } from 'clsx';
import * as Device from 'expo-device';
import { twMerge } from 'tailwind-merge';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT =
  Platform.OS === 'android' && Platform.Version > 26
    ? Dimensions.get('screen').height - (StatusBar.currentHeight ?? 0) + 5
    : Dimensions.get('window').height;

/**
 * cn function to be used with tailwindCSS classes
 */
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const isTablet = () => {
  return Device.deviceType === Device.DeviceType.TABLET;
};

const referenceHeight = 812;
export const verticalScale = (size) => {
  return (SCREEN_HEIGHT / referenceHeight) * size;
};
