import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
  return ( 
    <View style={styles.buttonContainer}> 
      <HeaderButton 
      text="delivery" 
      btnColor="black" 
      textColor="white" 
      activeTab={activeTab}
      setActiveTab={setActiveTab} />
      <HeaderButton 
      text="pick-up" 
      btnColor="white" 
      textColor="black" 
      activeTab={activeTab}
      setActiveTab={setActiveTab} />
    </View>
  )
}

const HeaderButton = (props) => (
    // Touchable opacity also allows us to call an OnPress, besides aesthetics.
    <TouchableOpacity style={{
        backgroundColor: props.btnColor,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
    }}>
        <Text style={{
            color: props.textColor,
            fontSize: 15,
            fontWeight: 900,
        }}>
            {props.text}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    buttonContainer: {  
      flexDirection: "row",
      alignSelf: "center",
    },
  });
  
