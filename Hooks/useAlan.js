import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const useAlan = () => {
  function openCart() {
    alanInstance.playText("going to tests");
  }

  useEffect(() => {
    alanBtn({
      key: "3593da038e3cc37cebb78cc464bf7a352e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === COMMANDS.OPEN_CART) {
          openCart();
        }
      },
    });
  }, []);

  return null;
};

export default useAlan;
