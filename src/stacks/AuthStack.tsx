import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Forgot, Login, Signup, Welcome } from "../screens";
import { AuthParamList } from "../types/AuthParamList";
import NavigationHeader from "./NavigationHeader";

const Stack = createStackNavigator<AuthParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: NavigationHeader as any,
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
