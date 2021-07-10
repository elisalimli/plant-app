import { Animated, Dimensions } from "react-native";
import create from "zustand";
import { combine } from "zustand/middleware";

export const useStepsStore = create(
  combine(
    {
      scrollX: new Animated.Value(0),
    },
    (set) => ({})
  )
);
