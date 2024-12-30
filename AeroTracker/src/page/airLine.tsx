import React, { useEffect, useState }  from 'react'
import { Text, View, Dimensions, StatusBar, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get("screen");
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
const backImg = require("../../assets/images/Air_Line.png")

const AirLine = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [airLine, setAirLine] = useState<any[]>([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state
  
    const fetchAirLine = async () => {
      const options = {
        method: 'GET',
        url: 'https://flight-radar1.p.rapidapi.com/airlines/list',
        headers: {
          'x-rapidapi-key': '7fd77bfa42msh39c5bb4960db75ap12cfbdjsn3b62c18e7645',
          'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
        },
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data); // Inspect the response
        setAirLine(response.data?.rows || []); // Safeguard against missing data
      } catch (err) {
        console.error(err);
        //setError("Failed to fetch airports. Please try again later.");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };
  
    useEffect(() => {
      fetchAirLine();
    }, []);
  
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading Air Lines...</Text>
        </View>
      );
    }
  
    if (error) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{error}</Text>
        </View>
      );
    }
  
      return (
          <View style={{
              flexDirection: 'column',
              marginHorizontal: 30,
              //backgroundColor: '#D6E681'
          }}
          >
              <StatusBar barStyle='light-content' backgroundColor={"#000000"} />
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20
              }}>
                  <View>
                      <Icon name="left" size={20} color={"#000000"} onPress={() => navigation.goBack()}/>
                  </View>
                  <Text style={{
                      fontSize: 20,
                      fontWeight: 'bold'
                  }}>
                      Air Lines
                  </Text>
              </View>
              <View style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginBottom:20
              }}>
                  <Image source={backImg}
                      style={{
                          width: 200,
                          height: 250
                      }}>
                  </Image>
                  <Text style={{color:'gray', fontWeight:'bold'}}>
                      {" Discover Airlines from Every Corner of the World."}
                  </Text>
                  <View style={{
                      borderWidth: 0.6,
                      height: 0,
                      marginTop: 10,
                      //flex: 0.4,
                      width: '100%',
                      borderColor: "#000000"
                  }}
                  > </View>
              </View>
              <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}
                  keyboardShouldPersistTaps='always'>
                  <View style={{
                      //height: height,
                      justifyContent:'flex-start',
                      flexDirection: 'column',
                      marginTop: 20,
                  }}>
                     {airLine.map((airLine, index) => (
                          <View key={index} style={{
                              flexDirection: 'column',
                              marginBottom: 15,
                              justifyContent:'center',
                              paddingVertical:10,
                              paddingLeft:20,
                              borderWidth:0.6
                          }}>
                             
                              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{airLine.Name|| "Unknown AirLine"}</Text>
                                                  <Text style={{ fontSize: 16 }}>AirLine Code: {airLine.Code || "...."}</Text>
                                                  <Text style={{ fontSize: 16 }}>ICAO: {airLine.ICAO || "..."}</Text>
                             
                          </View>
                      ))}
  
                  </View>
  
              </KeyboardAwareScrollView>
          </View>
      )
}

export default AirLine