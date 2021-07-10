import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { theme } from "../../../theme";
import { useStepsStore } from "../../stores/useStepsStore";
import { illustrations, width } from "./Illustrations";

const Steps = () => {
  const { scrollX } = useStepsStore();
  const stepPosition = Animated.divide(scrollX, width);

  return (
    <View style={styles.stepsContainer}>
      {illustrations.map((_, i) => {
        const opacity = stepPosition.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0.4, 1, 0.4],
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
    // position: "absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    flexDirection: "row",
  },
  step: {
    width: 5,
    height: 5,
    borderRadius: theme.borderRadius.full,
    marginHorizontal: 2.5,
  },
});

export default Steps;
