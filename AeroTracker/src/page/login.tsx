import React from 'react'
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get("screen");
const backImg = require("../../assets/images/loging.jpg")

const Login = () => {
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
          height: 800
        }}
        >
          <Text style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            paddingTop: 20
          }}>
            {'Login\nWelcome back!'}
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
            placeholder="Enter Your Username / Email"
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
            placeholder="Enter Your Password"
          />

          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 20,
            color: "#324381"
          }}>
            Forgot Password?
          </Text>
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
                  Login
                </Text>
              </View>
            </TouchableOpacity>
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
              Don’t have an account?
            </Text>
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: "#324381",
              marginHorizontal: 10
            }}
            >
              sign up
            </Text>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </View>

  )
}

export default Login