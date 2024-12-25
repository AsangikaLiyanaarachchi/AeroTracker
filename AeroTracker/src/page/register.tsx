import React from 'react'
import {
    Text,
    View,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get("screen");
const backImg = require("../../assets/images/loging.jpg");
const google = require("../../assets/images/google-icon.png");
const facebook = require("../../assets/images/FaceBook.png");
const twitter = require("../../assets/images/twitter.png");

const Register = () => {
    return (
        <View style={{
            height: height,
            flexDirection: 'column'
        }}
        >
            <StatusBar barStyle='light-content' backgroundColor={"#000000"} />
            <ImageBackground source={backImg}
                style={{
                    width: width,
                    height: 310
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

            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps={'never'}>

                <View style={{
                    //backgroundColor:'#726E6c',
                    width: width,
                    paddingHorizontal: 35,
                    flexGrow: 1,
                    height: 1000
                }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                        paddingTop: 20
                    }}>
                        Register
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 'condensed',
                        paddingTop: 2,
                        color: "#595D67"
                    }}>
                        Create your new account
                    </Text>
                    <TextInput
                        style={{
                            height: 48,
                            width: "100%",
                            marginTop: 30,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 12,
                        }}
                        placeholder="Enter Email/PhoneNumber"
                    />

                    <TextInput
                        style={{
                            height: 48,
                            width: "100%",
                            marginTop: 30,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 12,
                        }}
                        placeholder="Enter Password"
                    />

                    <TextInput
                        style={{
                            height: 48,
                            width: "100%",
                            marginTop: 30,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 12,
                        }}
                        placeholder="Confirm Password"
                    />

                    <View>
                        <TouchableOpacity>
                            <View style={{
                                borderRadius: 5,
                                backgroundColor: "#324381",
                                padding: 15,
                                width: "100%",
                                height: 48,
                                marginTop: 20,
                                marginBottom: 14,
                            }}>
                                <Text style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                }}>
                                    Sign up
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }}
                    >
                        <View style={{
                            borderWidth: 0.5,
                            height: 0,
                            marginTop: 10,
                            //flex: 0.4,
                            width: '40%',
                            borderColor: "#595D67"
                        }}
                        > </View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginHorizontal: 10,
                            //color:'#726E6C' 
                        }}
                        >
                           OR
                        </Text>
                        <View style={{
                            borderWidth: 0.5,
                            height: 0,
                            marginTop: 10,
                            //flex: 0.4,
                            width: '40%',
                            borderColor: "#595D67"
                        }}
                        > </View>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent:'space-around',
                        marginVertical:20,
                    }}
                    >
                        <View style={{width:30, height:30, borderWidth:0.5, alignItems:'center',padding:5, borderRadius:'50%'}}>
                            <Image 
                            style={{
                                width:20,
                                height:20
                            }}
                            source={google}/>
                        </View>
                        <View style={{width:30, height:30, borderWidth:0.5, alignItems:'center',padding:5, borderRadius:'50%'}}>
                            <Image 
                            style={{
                                width:20,
                                height:20
                            }}
                            source={facebook}/>
                        </View>
                        <View style={{width:30, height:30, borderWidth:0.5, alignItems:'center',padding:5, borderRadius:'50%'}}>
                            <Image 
                            style={{
                                width:20,
                                height:20
                            }}
                            source={twitter}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                    >
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginHorizontal: 10,
                            //color:'#726E6C' 
                        }}
                        >
                            Already have an account?
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: "#324381",
                            marginHorizontal: 10
                        }}
                        >
                            Sign in
                        </Text>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </View>

    )
}

export default Register