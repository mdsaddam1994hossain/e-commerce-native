import { createBox } from "@shopify/restyle";
import React from "react";

import { Theme } from "../theme";

const Box = createBox<Theme>();

const LogoIcon = () => {
  return (
    <Box alignItems="center">
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor="blue"
        width={72}
        borderRadius={16}
        height={72}
      >
        <Box
          style={{ transform: [{ rotate: "45deg" }] }}
          backgroundColor="white"
          width={32}
          height={32}
          borderRadius={5}
          alignItems="center"
          justifyContent="center"
        >
          <Box backgroundColor="blue" width={10} height={10}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogoIcon;
