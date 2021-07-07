import React from "react";
import { View } from "react-native";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { tailwind } from "../tailwind";

// - [ ] Text Component

const Welcome: React.FC = ({}) => {
  return (
    <View>
      <Typography size="6xl" color="accent" fontWeight="bold">
        hahah
      </Typography>
      <View style={tailwind("flex-row justify-center")}>
        <Button gradient>
          <Typography color="white">Login</Typography>
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
