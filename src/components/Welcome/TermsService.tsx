import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useWelcomeScreenStore } from "../../stores/useWelcomeScreenStore";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

const TermsService = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { showTermsService, setShowTermsService } = useWelcomeScreenStore();

  return (
    <>
      <Modal animationType="slide" visible={showTermsService}>
        <Typography
          extraStyle={{ fontFamily: "RobotoLight" }}
          size="2xl"
          fontWeight="light"
        >
          Terms of Service
        </Typography>
        <View>
          <Button type="gradient">
            <Typography color="white" fontWeight="bold">
              I understand
            </Typography>
          </Button>
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
  header: {},
});

export default TermsService;
