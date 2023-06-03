import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("delivery")
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
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
        <Text style={{
            color: props.activeTab === props.text ? "white" : "black",
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
  
