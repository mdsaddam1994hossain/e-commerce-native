import React from "react";
import { Text, View, Button } from "react-native";

import { ApplicationScreenProps } from "../types/navigation";

const LoginScreen = ({ route, navigation }: ApplicationScreenProps) => {
  const { id, name, email } = route.params;
  console.log(id, name, email);
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default LoginScreen;
