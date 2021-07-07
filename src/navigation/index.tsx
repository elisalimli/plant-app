import React from "react";
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { IndexParamList } from "../types/IndexParamList";
import {
  Browse,
  Explore,
  Login,
  Product,
  Welcome,
  Settings,
  Signup,
  Forgot,
} from "../screens";

const Stack = createStackNavigator<IndexParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {},
          // headerBackImage: <Image source={} />,
          // headerBackTitle: null,
          header: () => null,
          headerLeftContainerStyle: {},
          headerRightContainerStyle: {},
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
