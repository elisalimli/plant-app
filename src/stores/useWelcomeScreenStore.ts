import { Animated, Dimensions } from "react-native";
import create from "zustand";
import { combine } from "zustand/middleware";

export const useWelcomeScreenStore = create(
  combine(
    {
      scrollX: new Animated.Value(0),
      showTermsService: false,
    },
    (set) => ({
      setShowTermsService: (value: boolean) => set({ showTermsService: value }),
    })
  )
);
