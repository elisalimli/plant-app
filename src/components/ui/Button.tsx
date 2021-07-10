import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { theme } from "../../../theme";
import { Style } from "../../types";

type ButtonTypes = {
  gradient?: boolean;
  shadow?: boolean;
  primary?: boolean;
};

type ButtonProps = {
  width?: string | number;
  type?: keyof ButtonTypes;
  extraStyle?: Style;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({
  type,
  width,
  extraStyle = {},
  children,
  ...props
}) => {
  const buttonStyles = [
    { width: width || "75%" },
    extraStyle,
    type === "primary" && styles.primary,
    type === "shadow" && styles.shadow,
  ];

  if (type === "gradient") {
    return (
      <TouchableOpacity style={buttonStyles} {...props}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.1, 0.9]}
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={[{ width: "100%" }, styles.general]}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[buttonStyles, styles.general]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  general: {
    paddingHorizontal: theme.spacing[2],
    paddingVertical: theme.spacing[3],
    borderRadius: theme.borderRadius[5],
    flexDirection: "row",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 0.45,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
  },
});

export default Button;
