import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppTabs from "../stacks/AppTabs";
import AuthStack from "../stacks/AuthStack";

const Navigation = () => {
  // @todo here will change
  const user = false;
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigation;
