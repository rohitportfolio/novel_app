import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {trimText} from '../../lib/utils';
import FastImage from 'react-native-fast-image';
import StarFilled from '../Icons/StarFilled';
import {COLOR} from '../../Theme/color';
import {FONT} from '../../Theme/font';

type Props = {
  id?: number | string;
  title?: string;
  authorName?: string;
  imgSrc?: string;
  rating?: string;
  extraStyle?: {};
  extraImageViewStyle?: {};
  onPress?: (book_id: number) => void | undefined;
};

const NovelCard = ({
  id = 0,
  title = 'Ther Milean Discord Of Fantasy World',
  imgSrc = 'https://plus.unsplash.com/premium_photo-1661512410404-d7303511cf22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  extraStyle = {},
  extraImageViewStyle = {},
  onPress,
}: Props) => {
  
  const handlePress = (book_id: number | string) => {
    if (typeof onPress === 'function') {
      onPress(typeof book_id === 'string' ? Number(book_id) : book_id);
    }
    return;
  };

  return (
    <TouchableOpacity style={{...styles.NovelCard, ...extraStyle}} onPress={() => handlePress(id)}>
      <View style={{...styles.imageOverlay, ...extraImageViewStyle}}>
        <FastImage
          style={{...styles.Image}}
          source={{
            uri: imgSrc,
            // headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(NovelCard);

const styles = StyleSheet.create({
  NovelCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    flex: 1
  },
  imageOverlay: {
    width: '100%',
    height: 150,
    backgroundColor: COLOR.WHITE_SECONDARY,
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  title: {
    fontSize: FONT.sm,
    fontWeight: '700',
    color: COLOR.DARK_PRIMARY,
    marginTop: 2,
    lineHeight: 18
  }
});
