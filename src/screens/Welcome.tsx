import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { theme } from "../../theme";
import Button from "../components/Button";
import Typography from "../components/Typography";

// - [ ] Text Component

interface IllusturationParam {
  id: number;
  source: any;
}

interface IllusturationsProps {
  illusturations: IllusturationParam[];
}

const Illusturations: React.FC<IllusturationsProps> = ({illusturations}) => (
  


);

Illusturations.defaultProps = {
  illusturations: [
    {
      id: 1,
      source: require("../../assets/images/illustration_1.png"),
    },

    {
      id: 2,
      source: require("../../assets/images/illustration_2.png"),
    },
    {
      id: 3,
      source: require("../../assets/images/illustration_3.png"),
    },
  ],
};

const Steps = () => (
  <View>
    <Typography>* * *</Typography>
  </View>
);

const Welcome: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Typography size="2xl" fontWeight="bold">
          Your Home.
          <Typography size="2xl" fontWeight="bold" color="primary">
            Greener
          </Typography>
        </Typography>
        <Typography color="gray2">Enjoy the experience.</Typography>
      </View>
      <View style={styles.section2}>
        <Illusturations />
        <Steps />
      </View>
      <View style={styles.section3}>
        <Button extraStyle={{ marginBottom: theme.spacing[3] }} type="gradient">
          <Typography color="white" fontWeight="bold">
            Login
          </Typography>
        </Button>
        <Button type="shadow" extraStyle={{ marginBottom: theme.spacing[2] }}>
          <Typography color="black">Sign up</Typography>
        </Button>
        <Button>
          <Typography size="sm" color="gray">
            Terms of service
          </Typography>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: theme.flex[1],
  },
  section1: {
    flex: theme.flex[2],
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    flex: theme.flex[3],
    justifyContent: "center",
    alignItems: "center",
  },
  section3: {
    flex: theme.flex[2],
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
