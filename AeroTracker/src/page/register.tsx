import React, { useState } from 'react'
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
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const { width, height } = Dimensions.get("screen");
const backImg = require("../../assets/images/loging.jpg");
const google = require("../../assets/images/google-icon.png");
const facebook = require("../../assets/images/FaceBook.png");
const twitter = require("../../assets/images/twitter.png");

const Register = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

    const validate = () => {
        const newErrors: { email: string; password: string; confirmPassword: string } = {
            email: '',
            password: '',
            confirmPassword: '',
        };

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Enter a valid email address.';
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        // Confirm Password validation
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm your password.';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);

        // Return true if no errors
        return !newErrors.email && !newErrors.password && !newErrors.confirmPassword;
    };

    const handleRegister = () => {
        if (validate()) {
            // Navigate to Login on successful validation
            navigation.navigate("Login");
        }
    };
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
                    {"AeroTracker"}
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
                        {"Register"}
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 'condensed',
                        paddingTop: 2,
                        color: "#595D67"
                    }}>
                        {"Create your new account"}
                    </Text>
                    <TextInput
                        style={{
                            height: 48,
                            width: "100%",
                            marginTop: 30,
                            padding: 10,
                            borderWidth: 1,
                            borderColor: errors.email ? 'red' : '#000000',
                            borderRadius: 10,
                            fontSize: 12,
                        }}
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {errors.email ? <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text> : null}

                    {/* Password Input */}
                    <TextInput
                        style={{
                            height: 48,
                            width: "100%",
                            marginTop: 30,
                            padding: 10,
                            borderWidth: 1,
                            borderColor: errors.password ? 'red' : '#000000',
                            borderRadius: 10,
                            fontSize: 12,
                        }}
                        placeholder="Enter Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    {errors.password ? <Text style={{ color: 'red', fontSize: 12 }}>{errors.password}</Text> : null}

                    {/* Confirm Password Input */}
                    <TextInput
                        style={{
                            height: 48,
                            width: "100%",
                            marginTop: 30,
                            padding: 10,
                            borderWidth: 1,
                            borderColor: errors.confirmPassword ? 'red' : '#000000',
                            borderRadius: 10,
                            fontSize: 12,
                        }}
                        placeholder="Confirm Password"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    {errors.confirmPassword ? <Text style={{ color: 'red', fontSize: 12 }}>{errors.confirmPassword}</Text> : null}

                    <View>
                        <TouchableOpacity onPress={handleRegister}>
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
                                    {"Sign up"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
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
                            {"OR"}
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
                        justifyContent: 'space-around',
                        marginVertical: 20,
                    }}
                    >
                        <View style={{ width: 30, height: 30, borderWidth: 0.5, alignItems: 'center', padding: 5, borderRadius: '50%' }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                                source={google} />
                        </View>
                        <View style={{ width: 30, height: 30, borderWidth: 0.5, alignItems: 'center', padding: 5, borderRadius: '50%' }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                                source={facebook} />
                        </View>
                        <View style={{ width: 30, height: 30, borderWidth: 0.5, alignItems: 'center', padding: 5, borderRadius: '50%' }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                                source={twitter} />
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
                            {"Already have an account?"}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: "#324381",
                                marginHorizontal: 10
                            }}
                            >
                                {"Sign in"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </View>

    )
}

export default Register