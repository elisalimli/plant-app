import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Navigation from "./src/navigation";
import { SafeAreaView } from "react-native-safe-area-context";

// import all used images
// const images = [
//   require("./assets/icons/back.png"),
//   require("./assets/icons/plants.png"),
//   require("./assets/icons/seeds.png"),
//   require("./assets/icons/flowers.png"),
//   require("./assets/icons/sprayers.png"),
//   require("./assets/icons/pots.png"),
//   require("./assets/icons/fertilizers.png"),
//   require("./assets/images/plants_1.png"),
//   require("./assets/images/plants_2.png"),
//   require("./assets/images/plants_3.png"),
//   require("./assets/images/explore_1.png"),
//   require("./assets/images/explore_2.png"),
//   require("./assets/images/explore_3.png"),
//   require("./assets/images/explore_4.png"),
//   require("./assets/images/explore_5.png"),
//   require("./assets/images/explore_6.png"),
//   require("./assets/images/illustration_1.png"),
//   require("./assets/images/illustration_2.png"),
//   require("./assets/images/illustration_3.png"),
//   require("./assets/images/avatar.png"),
// ];

const App = () => {
  // const [loading, setLoading] = useState(true);

  // const handleResourcesAsync = async () => {
  //   // caching all images for better performance
  //   const cacheImages = images.map((img) => {
  //     return Asset.fromMetadata(img).downloadAsync();
  //   });

  //   return Promise.all(cacheImages);
  // };

  // if (loading) {
  //   return (
  //     <AppLoading
  //       startAsync={handleResourcesAsync}
  //       // onError={(e) => console.warn(  e)}
  //       onFinish={() => {
  //         console.log("end");
  //         setLoading(false);
  //       }}
  //     />
  //   );
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Navigation />
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
