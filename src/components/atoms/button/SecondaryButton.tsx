import { FC, ReactNode } from "react";
import { chakra } from "@chakra-ui/react";
import { BaseButton } from "./BaseButton";

type Props = {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
};

export const SecondaryButton: FC<Props> = (props) => {
  const { children, bgColor, textColor } = props;
  return (
    <SSecondaryButton bgColor={bgColor} textColor={textColor}>
      {children}
    </SSecondaryButton>
  );
};

const SSecondaryButton = chakra(BaseButton, {
  baseStyle: {
    backgroundColor: "red",
  },
});
