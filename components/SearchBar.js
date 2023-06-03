import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {
  return (
    <View style={{
        flexDirection: "row",
        marginTop: 15,}}
    >
      <GooglePlacesAutocomplete 
      placeholder="Search"
      styles={{
        textInput: {
          backgroundColor: "#eee",
          borderRadius: 20,
          fontWeight: "700",
          alignItems: 'center',
          marginTop: 7
        },
        textInputContainer: {
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
          
        }
      }}

      renderLeftButton={() => 
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24}/>
        </View>
      }

      renderRightButton={() => (
        <View style={{
          flexDirection: "row",
          marginRight: 8,
          backgroundColor: "white",
          padding: 9,
          borderRadius: 30,
          alignItems: "center",
        }}>
          <AntDesign 
          name='clockcircle' size={11}
          style={{
            marginRight: 6
          }}/>
          <Text>Search</Text>
        </View>
      )}
      />
    </View>
  )
}

//Styling tips
//align-content determines the spacing between lines
//align-items determines how the items as a whole are aligned within the container.
//When there is only one line, align-content has no effect

