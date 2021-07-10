import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { theme } from "../../../theme";

type FontWeightProps = keyof typeof theme.fontWeight;

interface TypographyProps {
  fontWeight?: FontWeightProps;
  size?: keyof typeof theme.fontSize;
  color?: keyof typeof theme.colors;
  // centered?: boolean;
  extraStyle?: StyleProp<TextStyle>;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size = "base",
  fontWeight = "normal",
  color = "black",
  extraStyle = {},
}) => {
  // `${colorClassNames[color]} ${sizeClassNames[size]} ${fontWeightClassNames[fontWeight]} ${extraStyle}`
  return (
    <Text
      style={[
        {
          color: theme.colors[color],
          fontSize: theme.fontSize[size],
          fontWeight: theme.fontWeight[fontWeight] as any,
        },
        extraStyle,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;
