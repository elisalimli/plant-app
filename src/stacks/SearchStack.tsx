import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Browse, Explore } from "../screens";
import { SearchParamList } from "../types";

const Stack = createStackNavigator<SearchParamList>();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};
export default SearchStack;
