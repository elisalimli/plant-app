import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { getColor, tailwind } from "../tailwind";

interface ButtonProps {
  width?: string | number;
  gradient?: boolean;
}

const Button: React.FC<ButtonProps> = ({ gradient, width, children }) => {
  const classNames = {
    width: { width: width || "75%" },
    general: "p-2 rounded-5 flex-row justify-center",
  };

  if (gradient) {
    return (
      <TouchableOpacity style={classNames.width}>
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
      style={[classNames.width, tailwind(`bg-primary ${classNames.general}`)]}
    >
      {children}
    </TouchableOpacity>
  );
};
export default Button;
