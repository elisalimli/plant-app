import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../../../theme";
import { useWelcomeScreenStore } from "../../stores/useWelcomeScreenStore";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

const TermsService = () => {
  const { showTermsService, setShowTermsService } = useWelcomeScreenStore();

  return (
    <>
      <Modal animationType="slide" visible={showTermsService}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Typography
              extraStyle={{ fontFamily: theme.fontFamily.light }}
              size="2xl"
              fontWeight="light"
            >
              Terms of Service
            </Typography>
          </View>
          <ScrollView>
            <View style={styles.main}>
              {Array.from({ length: 3 }).map((_, i) => (
                <Typography
                  key={`text-${i}`}
                  size="sm"
                  color="gray"
                  extraStyle={{
                    lineHeight: theme.leading["leading-1"],
                    marginBottom: theme.spacing[3],
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Typography>
              ))}
            </View>
          </ScrollView>

          <View style={styles.button}>
            <Button type="gradient" onPress={() => setShowTermsService(false)}>
              <Typography color="white" fontWeight="bold">
                I understand
              </Typography>
            </Button>
          </View>
        </View>
      </Modal>

      <Button onPress={() => setShowTermsService(true)}>
        <Typography size="sm" color="gray">
          Terms of service
        </Typography>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: theme.flex[1],
  },
  header: {
    padding: theme.spacing[4],
  },
  main: {
    paddingVertical: theme.spacing[2],
    paddingHorizontal: theme.spacing[3],
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing[3],
    paddingBottom: theme.spacing[6],
    paddingTop: theme.spacing[1],
  },
});

export default TermsService;
