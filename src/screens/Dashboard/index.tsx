import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import HeartFilled from '../../components/Icons/Heart';
import NovelGallery from '../../components/Organism/NovelGallery';
import {HOME_FEATURED, NOVEL_DATA} from './config';
import HorizontalNovel from '../../components/Organism/HorizontalNovel';
import ViewAllSection from '../../components/Molecules/ViewAllSection';
import VerticalFlashList from '../../components/Organism/VerticalFlashList';

const NovelCategory = [
  {
    id: 1,
    title: 'Fantasy',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 2,
    title: 'Romance',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 3,
    title: 'Mystery & Drama',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 4,
    title: 'Adventure',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 5,
    title: 'Horror',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 6,
    title: 'Documentry',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 7,
    title: 'Documentry',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 8,
    title: 'Documentry',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 9,
    title: 'Documentry',
    icon: <HeartFilled size={16} />,
  },
  {
    id: 10,
    title: 'Documentry',
    icon: <HeartFilled size={16} />,
  },
];
type Props = {};

const Dashboard = (props: Props) => {
  const renderItem = ({item}: any) => {
    let childElement = <></>,
      data = [],
      count = 0,
      row = 3,
      col = 3;
    switch (item?.type) {
      case "Reader's Choice":
        data = item?.content?.['horizontal-scroll-view']?.data;
        count = item?.content?.['horizontal-scroll-view']?.count;
        childElement = <HorizontalNovel data={data} count={count} />;
        break;
      case 'Daily trending':
        data = item?.content?.['gallery-view']?.data;
        col = item?.content?.['gallery-view']?.col;
        row = item?.content?.['gallery-view']?.row;
        childElement = <NovelGallery items={data} row={row} col={col} />;
        break;
      case 'Popular Romance':
        data = item?.content?.['horizontal-scroll-view']?.data;
        count = item?.content?.['horizontal-scroll-view']?.count;
        childElement = <HorizontalNovel data={data} count={count} />;
        break;
      case 'Rasing Werewolf':
        data = item?.content?.['horizontal-scroll-view']?.data;
        count = item?.content?.['horizontal-scroll-view']?.count;
        childElement = <HorizontalNovel data={data} count={count} />;
        break;
      case "Chief Editor's Pick":
        data = item?.content?.['gallery-view']?.data;
        col = item?.content?.['gallery-view']?.col;
        row = item?.content?.['gallery-view']?.row;
        childElement = <NovelGallery items={data} row={row} col={col} />;
        break;
      case 'Must-Read Werewolf':
        data = item?.content?.['gallery-view']?.data;
        col = item?.content?.['gallery-view']?.col;
        row = item?.content?.['gallery-view']?.row;
        childElement = <NovelGallery items={data} row={row} col={col} />;
        break;
      case 'Must-Read Romance':
        data = item?.content?.['gallery-view']?.data;
        col = item?.content?.['gallery-view']?.col;
        row = item?.content?.['gallery-view']?.row;
        childElement = <NovelGallery items={data} row={row} col={col} />;
        break;
      case "Lady's Choice":
        data = item?.content?.['gallery-view']?.data;
        col = item?.content?.['gallery-view']?.col;
        row = item?.content?.['gallery-view']?.row;
        childElement = <NovelGallery items={data} row={row} col={col} />;
        break;
      case "Men's Choice":
        data = item?.content?.['gallery-view']?.data;
        col = item?.content?.['gallery-view']?.col;
        row = item?.content?.['gallery-view']?.row;
        childElement = <NovelGallery items={data} row={row} col={col} />;
        break;
      case "Editor's Like":
        data = item?.content?.['gallery-view']?.data;
        col = item?.content?.['gallery-view']?.col;
        row = item?.content?.['gallery-view']?.row;
        childElement = <NovelGallery items={data} row={row} col={col} />;
        break;
      case 'Classic':
        // data = item?.content?.['horizontal-scroll-view']?.data;
        // count = item?.content?.['horizontal-scroll-view']?.count;
        // childElement = <HorizontalNovel data={data} count={count} />;
        break;
      case 'Top Fantasy':
        data = item?.content?.['horizontal-scroll-view']?.data;
        count = item?.content?.['horizontal-scroll-view']?.count;
        childElement = <HorizontalNovel data={data} count={count} />;
        break;
      default:
        break;
    }
    return (
      <ViewAllSection key={item?.id} title={item?.type}>
        {childElement}
      </ViewAllSection>
    );
  };

  return (
    <View style={{flex: 1}}>
      <VerticalFlashList data={HOME_FEATURED} renderItem={renderItem} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
