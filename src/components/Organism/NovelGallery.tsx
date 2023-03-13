import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {SimpleGrid} from 'react-native-super-grid';
import NovelCard from '../Molecules/NovelCard';

const {width} = Dimensions.get('window');

type Props = {
  items?: {[key: string]: any}[];
  row?: number;
  col?: number;
};

const NovelGallery = ({items = [], row = 3, col = 3}: Props) => {
  const handlePress = (id: any) => {
    console.log('idData', id);
  };

  const renderItem = ({item}: any) => (
    <NovelCard
      id={item?.id}
      title={item?.title}
      imgSrc={item?.imgSrc}
      onPress={handlePress}
      extraStyle={{height: 190}}
    />
  );

  return (
    <View style={styles.listWrapper}>
      <SimpleGrid
        itemDimension={width / col - 20}
        data={items?.length > row * col ? items?.slice(0, row * col) : items}
        style={styles.gridView}
        spacing={8}
        renderItem={renderItem}
        listKey={'123'}
      />
    </View>
  );
};

export default NovelGallery;

const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
  },
  listWrapper: {
    height: 'auto'
  },
});
