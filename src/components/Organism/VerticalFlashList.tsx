import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

type Props = {
  data?: {[key: string]: any}[];
  renderItem?: any;
};

const VerticalFlashList = ({data = [], renderItem = () => {}}: Props) => {
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={50}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
    />
  );
};

export default VerticalFlashList;

const styles = StyleSheet.create({});
