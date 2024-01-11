import { Box, Flex, Input, chakra } from "@chakra-ui/react";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { InputArea } from "../atoms/input/InputArea";

export const SearchInput = () => {
  return (
    <SFlex>
      <InputArea text="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SFlex>
  );
};

const SFlex = chakra(Flex, {
  baseStyle: {
    maxWidth: "500px",
    margin: "0 auto",
  },
});

const SButtonWrapper = chakra(Flex, {
  baseStyle: {
    paddingLeft: "8px",
  },
});
