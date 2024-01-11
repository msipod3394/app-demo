import { FC, ReactNode } from "react";
import {  chakra } from "@chakra-ui/react";
import { BaseButton } from "./BaseButton";

type Props = {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, bgColor, textColor } = props;
  return (
    <SPrimaryButton bgColor={bgColor} textColor={textColor}>
      {children}
    </SPrimaryButton>
  );
};

const SPrimaryButton = chakra(BaseButton, {
  baseStyle: {
    backgroundColor: "red",
  },
});
