import React from 'react'
import { StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function App() {
  return (
    <View style={styles.container}>
	  <MaterialCommunityIcons name="account" size={64} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 48,
  },
})
