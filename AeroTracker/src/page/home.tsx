import React from 'react'
import {
    View,
    Dimensions,
    StatusBar,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import NavigationBar from '../component/NavigationBar';
const { width, height } = Dimensions.get("screen");
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const homeImage = require("../../assets/images/home.jpg")
const airPort = require("../../assets/images/Airport.png")
const airlines = require("../../assets/images/airlines.png")
const flight = require("../../assets/images/flight.png")
const mostTrack = require("../../assets/images/mostTrack.png")


const Home = ({route}) => {
    const {name} =  route.params;
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View style={{
            height: height,
            flexDirection: 'column',
        }}>
            <StatusBar barStyle='light-content' backgroundColor={"#000000"} />
            <ImageBackground source={homeImage}
                style={{
                    width: width,
                    height: 270
                }}
            >
                <Text style={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    paddingTop: 20
                }}
                >
                    AeroTracker
                </Text>
            </ImageBackground>
            <View style={{
                //backgroundColor:'#99958E',
                marginTop: 10,
                marginHorizontal: 20,
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: '#D9D9D9',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',


                }}>

                </View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>
                    Welcome!
                </Text>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '200',
                }}>
                   {name}
                </Text>
                <View style={{
                    borderWidth: 0.5,
                    height: 0,
                    marginTop: 10,
                    //flex: 0.4,
                    width: '100%',
                    borderColor: "#595D67"
                }}
                > </View>

            </View>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps={'never'}>
                <View style={{
                    marginVertical: 20,
                    marginHorizontal: 20,
                    //justifyContent: 'space-between',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: 900
                    //backgroundColor: '#D6E681'
                }}>
                    <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate("AirPorts")}>
                        <View style={{
                            width: "100%",
                            height: 132,
                            borderColor: '#000000',
                            borderWidth: 1,
                            //backgroundColor:'#BABF95',
                            borderRadius: 5,
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'

                        }}>
                            <Image source={airPort}
                                style={{
                                    width: 88,
                                    height: 90
                                }}>
                            </Image>
                            <View style={{
                                flexDirection: 'column',
                                width: '60%'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>
                                    Air Ports
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Explore Airports Across the Globe at Your Fingertips.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate("AirLine")}>
                        <View style={{
                            width: "100%",
                            height: 132,
                            borderColor: '#000000',
                            borderWidth: 1,
                            //backgroundColor:'#BABF95',
                            borderRadius: 5,
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'

                        }}>
                            <Image source={airlines}
                                style={{
                                    width: 88,
                                    height: 90
                                }}>
                            </Image>
                            <View style={{
                                flexDirection: 'column',
                                width: '60%'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>
                                    Air Lines
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Discover Airlines from Every Corner of the World.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate("FlightsSeach")}>
                        <View style={{
                            width: "100%",
                            height: 132,
                            borderColor: '#000000',
                            borderWidth: 1,
                            //backgroundColor:'#BABF95',
                            borderRadius: 5,
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'

                        }}>
                            <Image source={flight}
                                style={{
                                    width: 90,
                                    height: 60
                                }}>
                            </Image>
                            <View style={{
                                flexDirection: 'column',
                                width: '60%'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>
                                    Flights Search
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Find the perfect flight to your destination with ease—quick, accurate, and hassle-free.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate("MostTracked")}>
                        <View style={{
                            width: "100%",
                            height: 132,
                            borderColor: '#000000',
                            borderWidth: 1,
                            //backgroundColor:'#BABF95',
                            borderRadius: 5,
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'

                        }}>
                            <Image source={mostTrack}
                                style={{
                                    width: 88,
                                    height: 90
                                }}>
                            </Image>
                            <View style={{
                                flexDirection: 'column',
                                width: '60%'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>
                                    Most Tracked Flights
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Stay updated with the most tracked flights around the world—real-time insights at your fingertips!
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>


        </View>
    )
}

export default Home