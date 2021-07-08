import React from "react";
import { FlatList, Image, StyleSheet, Dimensions } from "react-native";
import { View } from "react-native";
import { theme } from "../../theme";
import Button from "../components/Button";
import Typography from "../components/Typography";

// - [ ] Text Component

interface IllustrationParam {
  id: number;
  source: any;
}

interface IllustrationsProps {
  illustrations?: IllustrationParam[];
}

const { width, height } = Dimensions.get("window");

const Illustrations: React.FC<IllustrationsProps> = ({ illustrations }) => (
  <FlatList
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    data={illustrations}
    keyExtractor={(item) => `${item.id}`}
    renderItem={({ item }) => (
      <Image
        source={item.source}
        resizeMode="contain"
        style={{ width, height: height / 2 }}
      />
    )}
  />
);

Illustrations.defaultProps = {
  illustrations: [
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
