import React from "react";
import { Text, View, Button } from "react-native";

import { ApplicationScreenProps } from "../types/navigation";

const ProfileScreen = ({ route, navigation }: ApplicationScreenProps) => {
  const { id, name, email } = route.params;
  console.log("id=", id, ",name=", name, ",email=", email);
  return (
    <View>
      <Text>Profile SCREEN</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;
