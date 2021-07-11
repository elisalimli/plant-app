import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>I am sign up screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: theme.flex[1],
    backgroundColor: theme.colors.white,
  },
});

export default Login;
