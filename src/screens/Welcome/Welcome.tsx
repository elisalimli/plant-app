import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../../theme";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Illustrations from "./Illustrations";
import Steps from "./Steps";

const Welcome: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Typography size="3xl" fontWeight="bold">
          Your Home.
          <Typography size="3xl" fontWeight="bold" color="primary">
            {" "}
            Greener
          </Typography>
        </Typography>
        <Typography color="gray2">Enjoy the experience.</Typography>
      </View>
      <View style={styles.section2}>
        <Illustrations />
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
    backgroundColor: theme.colors.white,
  },
  section1: {
    flex: theme.flex[1],
    justifyContent: "flex-end",
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
