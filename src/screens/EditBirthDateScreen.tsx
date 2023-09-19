import { useState } from "react";
import {
  Image,
  Keyboard,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Calendar } from "react-native-calendars";
import MyTextInput from "../../src/components/Input/MyInput";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { space } from "../../src/theme/spacing";
import { palette } from "../../src/theme/palette";

const emailLogo = require("../../assets/Date.png");

const { s, sm } = space;
const { light, blue } = palette;

const EditBirthDateScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalender, setShowCalender] = useState(false);

  const changeBirthday = () => {
    console.log("change birthday");
  };
  const displayCalender = () => {
    setShowCalender(!showCalender);
    Keyboard.dismiss();
  };

  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title="Birthday" />
      <ScrollView>
        <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
          <ReStyleText variant={"heading5"} color="dark">
            Your Birhday
          </ReStyleText>
          <Pressable onPress={displayCalender}>
            <ReStyleBox
              borderWidth={1}
              height={48}
              borderColor={showCalender ? "blue" : "light"}
              borderRadius={5}
              justifyContent="space-between"
              alignItems={"center"}
              flexDirection="row"
              paddingHorizontal={"sm"}
              marginTop="sm"
            >
              {/* <TextInput style={styles.input} value={selectedDate} /> */}
              <ReStyleText>{selectedDate}</ReStyleText>
              <Image style={[styles.eSize]} source={emailLogo} />
            </ReStyleBox>
          </Pressable>

          {showCalender && (
            <ReStyleBox marginTop={"lg"}>
              <Calendar
                onDayPress={(day) => {
                  setSelectedDate(day.dateString);
                }}
                markedDates={{
                  [selectedDate]: { selected: true, disableTouchEvent: true },
                }}
                style={{
                  borderWidth: 1,
                  borderColor: "#EBF0FF",
                  height: 350,
                  borderRadius: 5,
                }}
                theme={{
                  backgroundColor: "#ffffff",
                  calendarBackground: "#ffffff",
                  textSectionTitleColor: "#b6c1cd",
                  selectedDayBackgroundColor: "#00adf5",

                  selectedDayTextColor: "#ffffff",
                  todayTextColor: "#00adf5",
                  dayTextColor: "#2d4150",
                  textDisabledColor: "#d9e",
                }}
              />
            </ReStyleBox>
          )}
        </ReStyleBox>
      </ScrollView>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Save"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={changeBirthday}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 57,
    position: "absolute",
    bottom: 30,
    left: sm,
    right: sm,
  },
  logoPosition: {
    position: "absolute",
    right: sm,
    top: 20,
  },
  eSize: {
    height: 22,
    width: 22,
  },
  input: {
    fontSize: 12,
    height: 48,
    borderWidth: 1,
    borderColor: light,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: s,
    fontFamily: "Poppins-Regular",
  },
  focusedInput: {
    borderColor: blue, // Border color when focused
  },
});

export default EditBirthDateScreen;
