import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { theme } from "../../theme";
import Input from "../components/ui/Input";
import Typography from "../components/ui/Typography";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [state, setState] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <Typography fontWeight="bold" size="h1">
        Sign in
      </Typography>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Input
        // label="Email"
        // style={styles.input}
        // defaultValue={state.email}
        // onChangeText={(text: string) => setState({ ...state, email: text })}
        />

        {/*
        <Input
          // label="Password"
          // style={styles.input}
          defaultValue={state.password}
          onChangeText={(text: string) =>
            setState({ ...state, password: text })
          }
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: theme.flex[1],
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing[3],
  },
  input: {},
});

export default Login;
