import { ApplicationScreenProps } from "../../src/types/navigation";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { Image, Pressable, StyleSheet } from "react-native";
import ProfileInfoCard from "../../src/components/Account/ProfileInfoCard";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";

const profileImg = require("../../assets/ProfilePicture.png");
const genderIcon = require("../../assets/genderIcon.png");
const dateIcon = require("../../assets/Date.png");
const emailIcon = require("../../assets/email.png");
const phoneIcon = require("../../assets/phone.png");
const passwordIcon = require("../../assets/password.png");

const ProfileScreen = ({ navigation }: ApplicationScreenProps) => {
  const editInfo = (name: string) => {
    navigation.navigate(name);
  };
  return (
    <ReStyleBox flex={1} paddingTop="l" backgroundColor="white">
      <CustomHeader title="Profile" />
      <ReStyleBox paddingHorizontal="sm" marginTop={"sm"}>
        <ReStyleBox flexDirection="row" gap="sm" alignItems="center">
          <Image
            source={profileImg}
            style={styles.proImg}
            resizeMode="contain"
          />
          <ReStyleBox>
            <Pressable onPress={() => editInfo("Name")}>
              <ReStyleBox flexDirection="row" gap="s">
                <ReStyleText variant="heading5" color="dark">
                  Maximus
                </ReStyleText>
                <ReStyleText variant="heading5" color="dark">
                  Gold
                </ReStyleText>
              </ReStyleBox>
            </Pressable>
            <ReStyleText variant="bodyTextSmall" color="grey">
              @derlaxy
            </ReStyleText>
          </ReStyleBox>
        </ReStyleBox>
        <Pressable onPress={() => editInfo("Gender")}>
          <ReStyleBox marginTop="xl">
            <ProfileInfoCard title="Gender" value="Male" icon={genderIcon} />
          </ReStyleBox>
        </Pressable>
        <ReStyleBox marginTop="lg">
          <ProfileInfoCard
            title="Birthday"
            value="12-12-2000"
            icon={dateIcon}
          />
        </ReStyleBox>
        <ReStyleBox marginTop="lg">
          <ProfileInfoCard
            title="Email"
            value="Derlaxy@yahoo.com"
            icon={emailIcon}
          />
        </ReStyleBox>
        <ReStyleBox marginTop="lg">
          <ProfileInfoCard
            title="Phone Number"
            value="(307) 555-0133"
            icon={phoneIcon}
          />
        </ReStyleBox>
        <ReStyleBox marginTop="lg">
          <ProfileInfoCard
            title="Change Password"
            value="..............."
            icon={passwordIcon}
          />
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  proImg: {
    height: 72,
    width: 72,
    borderRadius: 36,
  },
});

export default ProfileScreen;
