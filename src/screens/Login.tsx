import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { theme } from "../../theme";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Typography from "../components/ui/Typography";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [state, setState] = useState<{ email: string; password: string }>({
    email: "alisalim@gmail.com",
    password: "12412",
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Typography fontWeight="bold" size="4xl">
          Sign in
        </Typography>
      </View>
      <View
        style={{
          flex: 4,
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Input
          label="Email"
          // style={styles.input}
          defaultValue={state.email}
          onChangeText={(text: string) => setState({ ...state, email: text })}
          containerProps={{
            style: {
              marginBottom: 20,
            },
          }}
        />

        <Input
          label="Password"
          password
          // style={styles.input}
          defaultValue={state.password}
          onChangeText={(text: string) =>
            setState({ ...state, password: text })
          }
        />
        <Button
          center
          width="50%"
          type="gradient"
          extraContainerStyle={styles.button}
        >
          <Typography fontWeight="bold" color="white">
            Sign in
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
    paddingHorizontal: theme.spacing[3],
  },
  button: {
    marginTop: theme.spacing[4],
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing[6],
  },
});

export default React.memo(Login);
