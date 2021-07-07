import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { tailwind } from "../tailwind";

const Welcome: React.FC = ({}) => {
  return (
    <View>
      <Text style={tailwind("text-2xl")}>hahah</Text>
      <View style={tailwind("flex-row justify-center")}>
        <Button gradient>
          <Text style={tailwind("text-white text-lg font-bold")}>Login</Text>
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
