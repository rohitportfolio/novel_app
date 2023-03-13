import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../Theme/color';
import { FONT } from '../../Theme/font';
import ArrowRight from '../Icons/ArrowRight';

type Props = {
    title?: string;
    children: React.ReactNode;
    handleViewAll?: () => void;
}

const ViewAllSection = ({title = '', children, handleViewAll = () => {}}: Props) => {
  return (
    <View style={styles.SectionWrapper}>
        <View style={styles.Header}>
            <Text style={styles.Title}>{title}</Text>
            <Pressable style={styles.PressableAction} onPress={handleViewAll}>
                <Text style={styles.Action}>View All</Text>
                <ArrowRight color={COLOR.DARK_SECONDARY} size={14} />
            </Pressable>
        </View>
      {children}
    </View>
  )
}

export default ViewAllSection

const styles = StyleSheet.create({
    SectionWrapper: {
        backgroundColor: COLOR.WHITE_PRIMARY,
        display: 'flex',
        paddingVertical: 12,
        marginBottom: 12
    },
    Header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginBottom: 12
    },
    Title: {
        fontSize: FONT.lg,
        fontWeight: '700',
        color: COLOR.DARK_PRIMARY,
        borderLeftWidth: 5,
        borderLeftColor: COLOR.YELLOW_PRIMARY,
        paddingHorizontal: 12
    },
    Action: {
        fontSize: FONT.sm,
        fontWeight: '500',
    },
    PressableAction: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
})