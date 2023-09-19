import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, TextInput } from "react-native";
import { palette } from "../../src/theme/palette";

import Cart from "../../src/components/ProductCard/Cart";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import PaymentDetails from "../../src/components/common/PaymentDetails";

const { light, blue, white } = palette;

const CartScreen = ({ navigation }: ApplicationScreenProps) => {
  const [copponFocused, setCopponFocused] = useState(false);
  const copponApply = () => {
    console.log("apply coppon");
  };
  const checkout = () => {
    console.log("checkout clicked");
  };

  const handleFocusCoppon = () => {
    setCopponFocused(true);
  };

  const handleBlurCoppon = () => {
    setCopponFocused(false);
  };
  return (
    <ReStyleBox style={styles.container}>
      <ScrollView>
        <ReStyleBox
          backgroundColor={"white"}
          paddingTop="sm"
          paddingHorizontal="sm"
        >
          {[1, 2].map((item, index) => {
            return (
              <ReStyleBox key={index}>
                <Cart product={"fg"} isCalculate={true} />
              </ReStyleBox>
            );
          })}

          <ReStyleBox flexDirection="row" marginTop="l">
            <TextInput
              onFocus={handleFocusCoppon}
              onBlur={handleBlurCoppon}
              style={[styles.input, copponFocused ? styles.focused : null]}
              placeholder="Enter Cupon code"
            />
            <Pressable style={styles.button} onPress={copponApply}>
              <ReStyleText variant={"bodyTextSmallBold"}>Apply</ReStyleText>
            </Pressable>
          </ReStyleBox>

          <ReStyleBox marginVertical="sm">
            <PaymentDetails item={null} />
          </ReStyleBox>
          <ReStyleBox paddingVertical="xs" paddingBottom={"xxl"}>
            <PrimaryButton
              text={"Check Out"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={checkout}
            />
          </ReStyleBox>
        </ReStyleBox>
      </ScrollView>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  input: {
    borderWidth: 1,
    borderColor: light,
    width: "75%",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingHorizontal: 12,
    fontFamily: "Poppins-Regular",
    height: 56,
  },
  focused: {
    borderColor: blue,
  },
  button: {
    backgroundColor: blue,
    height: 56,
    width: "25%",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dottedLine: {
    marginVertical: 12,
    width: "100%",
    height: 1,
  },
});

export default CartScreen;
