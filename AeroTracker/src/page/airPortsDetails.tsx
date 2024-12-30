import React, { useEffect, useState } from 'react'
import { Text, View, Dimensions, StatusBar, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get("screen");
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
const backImg = require("../../assets/images/details.png")


const AirPortsDetails = ({ route }) => {
    const { airportname, country, city, IATA, Icao, countryId } = route.params;
    const navigation = useNavigation<StackNavigationProp<any>>();


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
                    <Icon name="left" size={20} color={"#000000"} onPress={() => navigation.goBack()} />
                </View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    {airportname}
                </Text>
            </View>
            <View style={{
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: 20,
                marginTop: 40
            }}>
                <Image source={backImg}
                    style={{
                        width: 300,
                        height: 150
                    }}>
                </Image>
                <View style={{
                justifyContent: 'center', // Centers the content vertically
                alignItems: 'center',     // Centers the content horizontally
                marginTop:30,
            }}>
                <View style={{
                    width: '90%',
                    height: 300,
                    borderWidth: 1,
                    borderColor: "#000000",
                    justifyContent: 'center', // Centers the content vertically
                    alignItems: 'center',     // Centers the content horizontally
                    padding: 20               // Adds some padding inside the view
                }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Airport Details</Text>
                    <Text style={{ fontSize: 16 }}>Airport Name: {airportname}</Text>
                    <Text style={{ fontSize: 16 }}>City: {city}</Text>
                    <Text style={{ fontSize: 16 }}>Country: {country}</Text>
                    <Text style={{ fontSize: 16 }}>IATA: {IATA}</Text>
                    <Text style={{ fontSize: 16 }}>ICAO: {Icao}</Text>
                </View>
            </View>
            </View>

           



        </View>
    )
}

export default AirPortsDetails