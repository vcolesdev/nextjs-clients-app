import { WritableDraft } from "immer/src/types/types-external";
import { IAlertState } from "@/api/_interfaces";

export const showAlert = (
  state: WritableDraft<IAlertState>,
  action: { payload: any; type: string }
) => ({
  ...state,
  currentElement: action.payload,
  isOpen: true
});

export const dismissAlert = (state: WritableDraft<IAlertState>) => ({
  ...state,
  currentElement: null,
  isOpen: false
});
