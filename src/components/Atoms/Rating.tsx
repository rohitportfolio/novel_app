import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StarFilled from '../Icons/StarFilled'
import StarOutline from '../Icons/StarOutline'
import StarHalfFilled from '../Icons/StarHalfFilled'

type Props = {
    rate: number
}

const Rating = ({rate}: Props) => {

  return (
    <View>
      <StarFilled />
      <StarHalfFilled />
      <StarOutline />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})