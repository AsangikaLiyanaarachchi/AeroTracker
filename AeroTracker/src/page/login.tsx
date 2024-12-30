import React, { useState } from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get('screen');
const backImg = require('../../assets/images/loging.jpg');

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Username or Email is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Proceed to login or navigate to Home
      navigation.navigate('Home', { name: name });
    }
  };

  return (
    <View
      style={{
        height: height,
        flexDirection: 'column',
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={'#000000'} />
      <ImageBackground
        source={backImg}
        style={{
          width: width,
          height: 310,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            paddingTop: 20,
          }}
        >
          AeroTracker
        </Text>
      </ImageBackground>

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={'never'}
      >
        <View
          style={{
            width: width,
            paddingHorizontal: 35,
            flexGrow: 1,
            height: 800,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              paddingTop: 20,
            }}
          >
            {'Login\nWelcome back!'}
          </Text>

          <TextInput
            style={{
              height: 48,
              width: '100%',
              marginTop: 30,
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              fontSize: 12,
              borderColor: nameError ? 'red' : '#000000',
            }}
            placeholder="Enter Your Username / Email"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          {nameError ? (
            <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>{nameError}</Text>
          ) : null}

          <TextInput
            style={{
              height: 48,
              width: '100%',
              marginTop: 30,
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              fontSize: 12,
              borderColor: passwordError ? 'red' : '#000000',
            }}
            placeholder="Enter Your Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {passwordError ? (
            <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>{passwordError}</Text>
          ) : null}

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              paddingTop: 20,
              color: '#324381',
            }}
          >
            Forgot Password?
          </Text>

          <View>
            <TouchableOpacity onPress={handleLogin}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#324381',
                  padding: 15,
                  width: '100%',
                  height: 48,
                  marginTop: 20,
                  marginBottom: 14,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                >
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginHorizontal: 10,
              }}
            >
              Don’t have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#324381',
                  marginHorizontal: 10,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
