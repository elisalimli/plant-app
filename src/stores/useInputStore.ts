import create from "zustand";
import { combine } from "zustand/middleware";

export const useInputStore = create(
  combine(
    {
      secure: true,
      iconName: "eye",
    },
    (set) => ({
      setSecure: (value: boolean) => set({ secure: value }),
      setIconName: (value: string) => set({ iconName: value }),
    })
  )
);
