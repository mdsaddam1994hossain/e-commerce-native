import React from "react";
import { Text, View, Pressable } from "react-native";

import { ApplicationScreenProps } from "../types/navigation";

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  // const { name, content } = route.params;
  // console.log(name, "title and content", content);
  return (
    <View
      style={{ flex: 1 }}
      // className="flex-1 items-center justify-center bg-red-400"
    >
      <Text>Home SCREEN</Text>
      <Pressable
        onPress={() =>
          navigation.navigate("Profile", {
            id: 1,
            name: "Profile",
            email: "jon.420@gmail.com",
          })
        }
      >
        <Text>See Profile</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate("About", {
            id: "djfkas",
            name: "About",
            details: "This is about page of frist react native...",
          })
        }
      >
        <Text>See About</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
