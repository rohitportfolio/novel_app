import {StyleSheet, View} from 'react-native';
import React from 'react';

type Size = 0 | 8 | 16 | 24 | 32 | 40;

type SpaceProp = {
  paddingTop?: Size;
  paddingBottom?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
  marginTop?: Size;
  marginBottom?: Size;
  marginLeft?: Size;
  marginRight?: Size;
  paddingHorizontal?: Size;
  paddingVertical?: Size;
  marginHorizontal?: Size;
  marginVertical?: Size;
};

type Props = {
  mTop?: Size;
  mBottom?: Size;
  mLeft?: Size;
  mRight?: Size;
  mx?: Size;
  my?: Size;
  pTop?: Size;
  pBottom?: Size;
  pLeft?: Size;
  pRight?: Size;
  px?: Size;
  py?: Size;
  children?: React.ReactNode;
};

const Space = ({
  mTop = 0,
  mBottom = 0,
  mLeft = 0,
  mRight = 0,
  mx = 0,
  my = 0,
  pTop = 0,
  pBottom = 0,
  pLeft = 0,
  pRight = 0,
  px = 0,
  py = 0,
  children = <></>,
}: Props) => {
  let DynamicStyle: SpaceProp = {
    paddingTop: pTop,
    paddingBottom: pBottom,
    paddingLeft: pLeft,
    paddingRight: pRight,
    marginTop: mTop,
    marginBottom: mBottom,
    marginLeft: mLeft,
    marginRight: mRight,
  };

  if (px > 0) {
    DynamicStyle = {
      ...DynamicStyle,
      paddingHorizontal: px,
    };
  }
  if (py > 0) {
    DynamicStyle = {
      ...DynamicStyle,
      paddingVertical: py,
    };
  }
  if (mx > 0) {
    DynamicStyle = {
      ...DynamicStyle,
      marginHorizontal: mx,
    };
  }
  if (my > 0) {
    DynamicStyle = {
      ...DynamicStyle,
      marginVertical: my,
    };
  }
  return <View style={{...DynamicStyle}}>{children}</View>;
};

export default Space;

const styles = StyleSheet.create({});
