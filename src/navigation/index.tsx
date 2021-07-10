import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppTabs from "../stacks/AppTabs";
import AuthStack from "../stacks/AuthStack";

const Navigation = () => {
  // here will change
  const user = true;
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigation;
