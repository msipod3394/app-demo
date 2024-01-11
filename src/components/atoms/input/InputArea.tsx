import { FC } from "react";
import { Input, chakra } from "@chakra-ui/react";

type Props = {
  text?: string;
};

export const InputArea: FC<Props> = (props) => {
  const { text } = props;
  return <SInput type="text" placeholder={text} />;
};

const SInput = chakra(Input, {
  baseStyle: {
    padding: "8px 16px",
    border: "solid #ddd 1px",
    borderRadius: "999px",
    outline: "none",
  },
});
