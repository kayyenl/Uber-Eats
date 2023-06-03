import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeViewAndroid from '../components/SafeViewAndroid'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <SafeAreaView style={SafeAreaStyle}>
        <View style={{
            backgroundColor: "white",
            padding: 12,
            marginTop: 8,
        }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <Categories />
    </SafeAreaView>
  )
}

const SafeAreaStyle = {
    ...SafeViewAndroid.AndroidSafeArea, 
    backgroundColor: "#eee",
    flex: 1,
}