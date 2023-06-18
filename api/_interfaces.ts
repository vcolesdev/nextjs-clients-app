import React from "react";

/* Clients API */

export interface IClient {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status: boolean;
  comments?: string;
}

export interface IClientsState {
  clients: IClient[];
}

/* Inputs */

export interface InputProps {
  inputClasses?: string;
  id?: string;
  label?: string;
  name?: string;
  onChange?: any;
  placeholder?: string;
  type: string;
  value?: string;
}

export interface CustomSwitchProps {
  checked: boolean;
  control: any;
  name: string;
  onChange?: any;
  srOnly?: boolean;
  srOnlyText?: string;
  switchClasses?: string;
}

/* Buttons */

// TODO: Refactor to consolidate props.
export interface ButtonProps {
  activeColor?: string;
  activeTextColor?: string;
  extraClasses?: string;
  color?: string;
  hasIcon?: boolean;
  href?: any;
  hoverColor?: string;
  hoverTextColor?: string;
  icon?: React.ReactNode | any;
  iconPosition?: "left" | "right";
  isLinkButton?: boolean;
  isNextLinkButton?: boolean;
  label: string;
  onClick?: any;
  paddingX?: string;
  paddingY?: string;
  spanClasses?: string;
  textColor?: string;
  textSize?: string;
  type?: "button" | "submit" | "reset";
}
