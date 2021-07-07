import React from "react";
import { Text } from "react-native";
import { tailwind } from "../tailwind";

const sizeClassNames = {
  tiny: "text-tiny",
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

const fontWeightClassNames = {
  extraLight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClassNames = {
  white: "text-white",
  black: "text-black",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  tertiary: "text-tertiary",
  gray: "text-gray",
  gray2: "text-gray2",
};

interface TypographyProps {
  fontWeight?: keyof typeof fontWeightClassNames;
  size?: keyof typeof sizeClassNames;
  color?: keyof typeof colorClassNames;
  // centered?: boolean;
  // extraClassName?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size = "base",
  fontWeight = "normal",
  color = "black",
}) => {
  return (
    <Text
      style={tailwind(
        `${colorClassNames[color]} ${sizeClassNames[size]} ${fontWeightClassNames[fontWeight]}`
      )}
    >
      {children}
    </Text>
  );
};

export default Typography;
