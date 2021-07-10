import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Settings, Product } from "../screens";
import { HomeParamList } from "../types";

const Stack = createStackNavigator<HomeParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
export default HomeStack;
