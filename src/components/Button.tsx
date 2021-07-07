import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { getColor, tailwind } from "../tailwind";
import { Style } from "../types";

interface ButtonProps {
  width?: string | number;
  gradient?: boolean;
  extraStyle: Style;
}

const Button: React.FC<ButtonProps> = ({
  gradient,
  width,
  extraStyle,
  children,
}) => {
  const classNames = {
    width: { width: width || "75%" },
    general: "p-2 rounded-5 flex-row justify-center",
  };

  if (gradient) {
    return (
      <TouchableOpacity style={[classNames.width, extraStyle]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.1, 0.9]}
          colors={[getColor("primary"), getColor("secondary")]}
          style={[{ width: "100%" }, tailwind(classNames.general)]}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[
        classNames.width,
        tailwind(`bg-primary ${classNames.general}`),
        extraStyle,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};
export default Button;
