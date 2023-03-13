import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import NovelCard from '../Molecules/NovelCard';

type Props = {
  data?: {[key: string]: any}[];
  count?: number;
};

const HorizontalNovel = ({data = [], count = 8}: Props) => {
  const handlePress = (id: any) => {
    console.log('idData', id);
  };

  const renderItem = ({item}: any) => (
    <NovelCard
      id={item?.id}
      title={item?.title}
      imgSrc={item?.imgSrc}
      onPress={handlePress}
      extraStyle={{marginHorizontal: 12, flex: 0, width: 130}}
      extraImageViewStyle={{width: 130,
        height: 164,}}
    />
    // <BookCard />
  );
  return (
    <View style={styles.listWrapper}>
      <FlashList
        data={data?.slice(0, count)}
        renderItem={renderItem}
        estimatedItemSize={30}
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
      />
    </View>
  );
};

export default HorizontalNovel;

const styles = StyleSheet.create({
  listWrapper: {
    height: 'auto',
  }
});
