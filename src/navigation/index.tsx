import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  Browse,
  Explore,
  Forgot,
  Login,
  Product,
  Settings,
  Signup,
  Welcome,
} from "../screens";
import { IndexParamList } from "../types/IndexParamList";

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
