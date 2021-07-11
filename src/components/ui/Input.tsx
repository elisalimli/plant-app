import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../theme";
import { useInputStore } from "../../stores/useInputStore";
import { Ionicons } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  password?: boolean;
}

const Input: React.FC<InputProps> = ({ password, ...props }) => {
  const { iconName, secure, setSecure, setIconName } = useInputStore();

  const changeIconName = () => {
    if (iconName === "eye") {
      setSecure(false);
      return setIconName("eye-off");
    }
    setSecure(true);
    setIconName("eye");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ flex: 5.5 }}
        secureTextEntry={password ? secure : false}
        {...props}
      />
      {password ? (
        <TouchableOpacity
          onPress={changeIconName}
          style={{
            flex: 0.5,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Ionicons name={iconName as any} size={24} color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
  },
});

export default Input;
