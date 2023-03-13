import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONT} from '../../Theme/font';
import {COLOR} from '../../Theme/color';

type Props = {
  title?: string;
  icon?: any;
  id?: number | string;
  active: boolean;
  extraStyle: {},
  handlePress?: (id?: number | string) => void;
};

const Pills = ({title, icon, id = 1, active = true, extraStyle = {},  handlePress = () => {}}: Props) => {
    console.log('id clicked------pill', id);
  return (
    <TouchableOpacity
      style={{
        ...styles.pills,
        backgroundColor: active ? COLOR.DARK_PRIMARY : COLOR.WHITE_PRIMARY,
        borderColor: active ? COLOR.DARK_PRIMARY : COLOR.DARK_SECONDARY,
        ...extraStyle
      }}
      key={id}
      onPress={() => handlePress(id)}>
      {icon}
      <Text
        style={{
          ...styles.pillText,
          color: active ? COLOR.WHITE_PRIMARY : COLOR.DARK_PRIMARY,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(Pills);

const styles = StyleSheet.create({
  pills: {
    width: 'auto',
    height: 36,
    borderWidth: 1,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  pillText: {
    fontSize: FONT.sm,
    fontWeight: '500'
  },
});
