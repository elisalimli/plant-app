import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Forgot, Login, Signup, Welcome } from "../screens";
import { AuthParamList } from "../types/AuthParamList";

const Stack = createStackNavigator<AuthParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        // headerBackImage: <Image source={} />,
        // headerBackTitle: null,
        header: () => null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
};
export default AuthStack;
