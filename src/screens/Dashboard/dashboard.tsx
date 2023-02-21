import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const dashboard = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default dashboard

const styles = StyleSheet.create({})