import React from "react";
import { Text, View, Button } from "react-native";

import { ApplicationScreenProps } from "../types/navigation";

const AboutScreen = ({ route, navigation }: ApplicationScreenProps) => {
  const { id, name, details } = route.params;

  console.log(id, name, details);

  return (
    <View style={{ flex: 1 }}>
      <Text>ABOUT SCREEN</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default AboutScreen;
