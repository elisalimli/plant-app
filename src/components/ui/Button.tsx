import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useMemo } from "react";
import { TouchableOpacityProps, View } from "react-native";
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
  extraContainerStyle?: Style;
  center?: boolean;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({
  type,
  width,
  extraStyle = {},
  extraContainerStyle = {},
  center = false,
  children,
  ...props
}) => {
  const buttonStyles = useMemo(
    () => [
      { width: width || "75%" },
      extraStyle,
      type === "primary" && styles.primary,
      type === "shadow" && styles.shadow,
    ],
    []
  );

  const containerStyles = useMemo(() => [center && styles.center], []);

  let main;

  if (type === "gradient") {
    main = (
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
  } else {
    main = (
      <TouchableOpacity style={[buttonStyles, styles.general]} {...props}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[containerStyles, extraContainerStyle]}>{main}</View>;
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
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Button;
