import React from "react";
import { Animated, Dimensions, FlatList, Image } from "react-native";
import { useStepsStore } from "../../stores/useStepsStore";

interface IllustrationParam {
  id: number;
  source: any;
}

interface IllustrationsProps {
  illustrations?: IllustrationParam[];
}

export const { width, height } = Dimensions.get("window");

const Illustrations: React.FC<IllustrationsProps> = ({ illustrations }) => {
  const { scrollX } = useStepsStore();

  return (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={illustrations}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <Image
          source={item.source}
          resizeMode="contain"
          style={{ width, height: height / 2 }}
        />
      )}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        { useNativeDriver: false }
      )}
    />
  );
};

export const illustrations = [
  {
    id: 1,
    source: require("../../../assets/images/illustration_1.png"),
  },

  {
    id: 2,
    source: require("../../../assets/images/illustration_2.png"),
  },
  {
    id: 3,
    source: require("../../../assets/images/illustration_3.png"),
  },
];

Illustrations.defaultProps = {
  illustrations,
};

export default Illustrations;
