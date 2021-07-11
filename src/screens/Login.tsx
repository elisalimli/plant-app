import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";
import Typography from "../components/ui/Typography";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Typography fontWeight="bold" size="h1">
        Sign in
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: theme.flex[1],
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing[3],
  },
});

export default Login;
