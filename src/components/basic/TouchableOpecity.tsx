import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
} from "react-native";

interface ReusableTouchableOpacityProps extends TouchableOpacityProps {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const ReusableTouchableOpacity: React.FC<ReusableTouchableOpacityProps> = ({
  children,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default ReusableTouchableOpacity;
