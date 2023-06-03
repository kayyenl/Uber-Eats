import { View, Text, Image } from 'react-native'
import React from 'react'

export default function RestaurantItem() {
  return (
    <View>
        <RestaurantImage />
    </View>
  )
}

const RestaurantImage = () => {
    <Image source={{
        uri: "https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"}} style={{width: "100%", height: 180}} />
}