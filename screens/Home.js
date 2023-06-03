import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeViewAndroid from '../components/SafeViewAndroid'

export default function Home() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <HeaderTabs />
    </SafeAreaView>
  )
}