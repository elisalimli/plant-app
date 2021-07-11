import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { theme } from "../../../theme";
import { useInputStore } from "../../stores/useInputStore";
import { Ionicons } from "@expo/vector-icons";
import Typography from "./Typography";

interface InputProps extends TextInputProps {
  password?: boolean;
  label: string;
  containerProps?: ViewProps;
}

const Input: React.FC<InputProps> = ({
  password,
  label,
  containerProps = {},
  ...props
}) => {
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View {...containerProps}>
        <Typography size="h5" color="gray">
          {label}
        </Typography>
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
              <Ionicons
                name={iconName as any}
                size={24}
                color={theme.colors.gray}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: 1,
  },
});

export default Input;
