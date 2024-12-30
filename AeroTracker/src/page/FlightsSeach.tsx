import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Dimensions,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('screen');
const backImg = require('../../assets/images/Flights.png');

interface FlightDetail {
    callsign: string;
    flight: string;
    logo: string;
    operator: string;
    operator_id: number;
}

interface FlightResult {
    detail: FlightDetail;
    id: string;
    label: string;
    match: string;
    type: string;
}

const FlightsSearch: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [flights, setFlights] = useState<FlightResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState("");
    const [error, setError] = useState('');

    const fetchFlight = async () => {
        setLoading(true);
        setError('');
        const options = {
            method: 'GET',
            url: 'https://flight-radar1.p.rapidapi.com/flights/search',
            params: {
                query: name,
                limit: 1,
            },
            headers: {
                'x-rapidapi-key': '7fd77bfa42msh39c5bb4960db75ap12cfbdjsn3b62c18e7645',
                'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            const result = response.data?.results || [];
            setFlights(result);
            console.log(result)
            // Set the first flight's logo image if available
            setImage(result[0]?.detail?.logo || []);
            console.log(image)
        } catch (err) {
            console.error(err);
            setError('Failed to fetch flight data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ flexDirection: 'column', marginHorizontal: 30 }}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Icon name="left" size={20} color="#000000" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Flights</Text>
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'column', marginBottom: 10 }}>
                <Image source={backImg} style={{ width: 300, height: 250 }} />
                <Text style={{ color: 'gray', fontWeight: 'bold', textAlign: 'center' }}>
                    Find the perfect flight to your destination with ease—quick, accurate, and
                    hassle-free.
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

            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="never"
            >
                <View style={{ marginTop: 10, flexDirection: 'column', marginHorizontal: 10, height: 850 }}>
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Flight Number:</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            style={{
                                height: 40,
                                width: '80%',
                                marginTop: 10,
                                padding: 10,
                                borderRadius: 10,
                                fontSize: 12,
                                backgroundColor: '#D9D9D9',
                            }}
                            placeholder="Enter Flight Number"
                            onChangeText={(text) => setName(text)}
                        />
                        <TouchableOpacity onPress={fetchFlight}>
                            <View
                                style={{
                                    borderRadius: 10,
                                    backgroundColor: '#A1D4DE',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 60,
                                    height: 40,
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{ color: '#000000', textAlign: 'center', fontSize: 14 }}>
                                    Search
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {loading && <Text>Loading...</Text>}

                    {error ? (
                        <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>
                    ) : (
                        flights.length > 0 && (
                            <View
                                style={{
                                    width: '100%',
                                    height: 300,
                                    borderWidth: 0.5,
                                    marginTop: 20,
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                  source={
                                    typeof image === 'string' && image.startsWith('http')
                                        ? { uri: `${image}?timestamp=${new Date().getTime()}` } // For URI-based images
                                        : image // For local images or other sources
                                            ? image
                                            : backImg // Fallback image
                                }
                                    style={{
                                        width: '90%',
                                        height: 100,
                                        resizeMode: 'contain',
                                        marginBottom: 10,
                                        marginTop: 10,
                                        borderWidth:0.7
                                    }}
                                    
                                />
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Flight: {flights[0]?.detail?.flight}
                                </Text>
                                <Text>Operator: {flights[0]?.detail?.operator}</Text>
                                <Text>Type: {flights[0]?.type}</Text>
                                <Text>Match: {flights[0]?.match}</Text>
                            </View>
                        )
                    )}
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default FlightsSearch;
