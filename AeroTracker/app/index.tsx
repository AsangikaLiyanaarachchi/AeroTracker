import { Text, View, StatusBar } from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Login from "@/src/page/login";
import Register from "@/src/page/register";
import Home from "@/src/page/home";
import AirPorts from "@/src/page/airPorts";
import AirLine from "@/src/page/airLine";
import MostTracked from "@/src/page/MostTracked";
import FlightsSeach from "@/src/page/FlightsSeach";
import AirPortsDetails from "@/src/page/airPortsDetails";

const Stack = createStackNavigator();

export default function Index() {
  return (
    
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
        <Stack.Screen name="Register" component={Register} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
        <Stack.Screen name="Home" component={Home} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
        <Stack.Screen name="AirPorts" component={AirPorts} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
         <Stack.Screen name="AirLine" component={AirLine} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
         <Stack.Screen name="MostTracked" component={MostTracked} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
         <Stack.Screen name="FlightsSeach" component={FlightsSeach} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
        <Stack.Screen name="AirPortsDetails" component={AirPortsDetails} options={
          {
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }
        } />
      </Stack.Navigator>
    

  );
}