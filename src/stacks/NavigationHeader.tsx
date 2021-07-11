import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { AuthNavProps } from "../types/AuthParamList";

interface NavigationHeaderProps {}

const NavigationHeader: React.FC<AuthNavProps<"Welcome">> = ({
  navigation,
}) => {
  return navigation.canGoBack() ? (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        paddingHorizontal: theme.spacing[3],
        paddingVertical: theme.spacing[2],
        backgroundColor: theme.colors.white,
      }}
    >
      <Ionicons name="arrow-back-outline" size={24} color="black" />
    </TouchableOpacity>
  ) : null;
};
export default NavigationHeader;
