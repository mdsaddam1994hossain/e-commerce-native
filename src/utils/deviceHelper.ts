import { Dimensions, Platform } from "react-native";

class DeviceHelper {
  private dimensions = Dimensions.get("window");

  isIos(): boolean {
    return Platform.OS === "ios";
  }

  isAndroid(): boolean {
    return !this.isIos();
  }

  calculateWidthRatio(size: number): number {
    const widthInDesign = 414;
    return (size * this.dimensions.width) / widthInDesign;
  }

  calculateHeightRatio(size: number): number {
    const heightInDesign = 1069;
    return (size * this.dimensions.height) / heightInDesign;
  }

  width(): number {
    return this.dimensions.width;
  }

  height(): number {
    return this.dimensions.height;
  }
}

export default new DeviceHelper();
