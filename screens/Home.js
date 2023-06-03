import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeViewAndroid from '../components/SafeViewAndroid'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem from '../components/RestaurantItem'

export default function Home() {
  return (
    <SafeAreaView style={SafeAreaStyle}>
        <View style={{ backgroundColor: "white", padding: 12, marginTop: 8,}}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItem />
        </ScrollView>
    </SafeAreaView>
  )
}

const SafeAreaStyle = {
    ...SafeViewAndroid.AndroidSafeArea, 
    backgroundColor: "#eee",
    flex: 1,
}