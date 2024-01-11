import styled from "styled-components";
import { Container, VStack } from "@chakra-ui/react";
import Image from "next/image";

const SDl = styled.dl``;

const SDt = styled.dt`
  font-weight: bold;
  &::after {
    content: ":";
    margin-right: 2px;
  }
`;

const SDd = styled.dd`
  padding-left: 8px;
  padding-bottom: 16px;
`;

export const UserCard = () => {
  return (
    <Container maxW="500px">
      <VStack align="left">
        <Image
          src="https://source.unsplash.com/NE0XGVKTmcA"
          alt="名前"
          width={250}
          height={250}
        />
        <SDl>
          <SDt>名前</SDt>
          <SDd>Meguro</SDd>
          <SDt>メールアドレス</SDt>
          <SDd>1234@test.com</SDd>
          <SDt>電話番号</SDt>
          <SDd>1234-5678-910</SDd>
        </SDl>
      </VStack>
    </Container>
  );
};
