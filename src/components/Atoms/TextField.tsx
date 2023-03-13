import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT} from '../../Theme/font';
import {COLOR} from '../../Theme/color';

type Props = {
  text?: any;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?:
    | 'PRIMARY'
    | 'WHITE_PRIMARY'
    | 'WHITE_SECONDARY'
    | 'DARK_PRIMARY'
    | 'DARK_SECONDARY'
    | 'YELLOW_PRIMARY';
  numberOfLines?: number | undefined;
  weight?: '100' | '200' | '400' | '500' | '600' | '700' | '800' | '900';
  lineHeight?: 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36;
  onPress?: () => void;
};

const TextField = ({
  text = '',
  size = 'sm',
  color = 'DARK_PRIMARY',
  weight = '400',
  lineHeight = 16,
  onPress,
  numberOfLines = undefined,
}: Props) => {
  const DynamicStyle = {
    fontSize: FONT?.[size] || 12,
    fontWeight: weight,
    color: COLOR?.[color],
    lineHeight: lineHeight,
  };

  if (typeof onPress === 'function') {
    return (
      <Text
        style={{...DynamicStyle}}
        onPress={onPress}
        numberOfLines={numberOfLines}>
        {text}
      </Text>
    );
  }
  return (
    <Text style={{...DynamicStyle}} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default TextField;

const styles = StyleSheet.create({});
