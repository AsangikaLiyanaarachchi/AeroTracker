import React, { createContext, useContext, useState, useEffect } from 'react';
import { Text, View, Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Create ClickCount Context
const ClickCountContext = createContext<any>(null);

export const useClickCount = () => useContext(ClickCountContext);

export const ClickCountProvider = ({ children }: any) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => setClickCount(prev => prev + 1);

  return (
    <ClickCountContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};

const { width, height } = Dimensions.get('screen');
const backImg = require('../../assets/images/Air_Port.png');

const Ports = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { clickCount, incrementClickCount } = useClickCount(); // Use the click count from context
  const [airports, setAirports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      console.log(response.data);
      setAirports(response.data?.rows || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
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
    <View style={{ flexDirection: 'column', marginHorizontal: 30 }}>
      <StatusBar barStyle="light-content" backgroundColor={'#000000'} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <Icon name="left" size={20} color={'#000000'} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Air Ports</Text>
      </View>

      {/* Display Click Count at the Top of the List */}


      <View style={{ alignItems: 'center', flexDirection: 'column', marginBottom: 20 }}>
        <Image source={backImg} style={{ width: 400, height: 150 }} />
        <Text style={{ color: 'gray', fontWeight: 'bold' }}>
          {'Explore Airports Across the Globe at Your Fingertips.'}
        </Text>
        <View
          style={{
            borderWidth: 0.6,
            height: 0,
            marginTop: 10,
            width: '100%',
            borderColor: '#000000',
          }}
        />
      </View>
      <View style={{
        marginTop: 10, marginBottom: 10, backgroundColor: '#324381',
        width: 200, height: 40, alignItems: 'center', justifyContent: 'center'
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>
          Clicked Airports: {clickCount}
        </Text>
      </View>

      {/* Airport List */}
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="always">
        <View style={{ justifyContent: 'flex-start', flexDirection: 'column', marginTop: 20 }}>
          {airports.map((airport, index) => (
            <View key={index} style={{
              flexDirection: 'row', justifyContent: 'space-between',
              marginBottom: 15, borderWidth: 0.6, height: 40, alignItems: 'center',
            }}>
              <Text style={{ paddingLeft: 15 }}>{airport.name || 'Unknown Airport'}</Text>
              <View style={{ paddingRight: 10 }}>
                <TouchableOpacity
                  style={{ paddingRight: 10 }}
                  onPress={() => {
                    incrementClickCount(); // Increment the count when an airport is clicked
                    navigation.navigate('AirPortsDetails', {
                      airportname: airport.name,
                      country: airport.country,
                      city: airport.city,
                      IATA: airport.iata,
                      Icao: airport.icao,
                      countryId: airport.countryId,
                    });
                  }}
                >
                  <Icon name="right" size={20} color={'#000000'} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </KeyboardAwareScrollView>

     
    </View>
  );
};




const AirPorts = () => {
  return (
    <ClickCountProvider>
      <Ports />
    </ClickCountProvider>
  );
};

export default AirPorts;
