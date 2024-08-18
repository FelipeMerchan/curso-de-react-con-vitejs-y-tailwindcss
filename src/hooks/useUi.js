import { useContext } from "react"

import { UiContext } from "../Context/ui";

export const useUi = () => {
  const ui = useContext(UiContext);

  if (ui === undefined) {
    throw new Error('useUi must be used within a UiProvider')
  }

  return ui;
};