import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { theme } from "../../../theme";
import { useWelcomeScreenStore } from "../../stores/useWelcomeScreenStore";
import { illustrations, width } from "./Illustrations";

const Steps = () => {
  const { scrollX } = useWelcomeScreenStore();

  const stepPosition = Animated.divide(scrollX, width);

  return (
    <View style={styles.stepsContainer}>
      {illustrations.map((_, i) => {
        const inputRange = [i - 1, i, i + 1];
        const outputRange = [0.4, 1, 0.4];

        const opacity = stepPosition.interpolate({
          // i = 3;
          // inputRange:  [2, 3,4],
          // outputRange: [0.4, 1, 0.4],

          inputRange,
          outputRange,
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`step-${i}`}
            style={[
              styles.step,
              { backgroundColor: theme.colors.gray, opacity },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stepsContainer: {
    flexDirection: "row",
    marginTop: theme.spacing["0.5"],
  },
  step: {
    width: 5,
    height: 5,
    borderRadius: theme.borderRadius.full,
    marginHorizontal: 2.5,
  },
});

export default Steps;
