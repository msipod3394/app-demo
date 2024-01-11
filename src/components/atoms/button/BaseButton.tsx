import { FC, ReactNode } from "react";
import { Button, chakra } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
};

export const BaseButton: FC<Props> = (props) => {
  const { children, bgColor, textColor } = props;
  return (
    <SButton bgColor={bgColor} textColor={textColor}>
      {children}
    </SButton>
  );
};

const SButton = chakra(Button, {
  baseStyle: {
    backgroundColor: "#ccc",
    color: "#222",
    borderRadius: "20px",

    _hover: {
      backgroundColor: "blue.300",
      color: "#FFF",
    },
  },
});
