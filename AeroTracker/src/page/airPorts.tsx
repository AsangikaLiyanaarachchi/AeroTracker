import React, { useEffect, useState }  from 'react'
import { Text, View, Dimensions, StatusBar, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get("screen");
const backImg = require("../../assets/images/Air_Port.png")


const AirPorts = () => {

    const [airports, setAirports] = useState<any[]>([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const fetchAirPorts = async () => {
    const options = {
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/airports/list',
      headers: {
        'x-rapidapi-key': '7fd77bfa42msh39c5bb4960db75ap12cfbdjsn3b62c18e7645',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data); // Inspect the response
      setAirports(response.data?.rows || []); // Safeguard against missing data
    } catch (err) {
      console.error(err);
      //setError("Failed to fetch airports. Please try again later.");
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  useEffect(() => {
    fetchAirPorts();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading airports...</Text>
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
                    <Icon name="left" size={20} color={"#000000"} />
                </View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    Air Ports
                </Text>
            </View>
            <View style={{
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom:20
            }}>
                <Image source={backImg}
                    style={{
                        width: 400,
                        height: 150
                    }}>
                </Image>
                <Text style={{color:'gray', fontWeight:'bold'}}>
                    {"Explore Airports Across the Globe at Your Fingertips."}
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
                    marginLeft:15
                }}>
                   {airports.map((airport, index) => (
                        <View key={index} style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 15
                        }}>
                            <Text>{airport.name || "Unknown Airport"}</Text>
                            <View>
                                <Icon name="right" size={20} color={"#000000"} />
                            </View>
                        </View>
                    ))}

                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default AirPorts