import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const DemoButton: FC<Props> = ({ children }) => {
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  position: relative;
  background-color: #ccc;
  color: #222;
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px 8px 32px;

  &::before {
    content: "★";
    position: absolute;
    left: 16px;
  }

  &:hover {
    background-color: blue.300;
    color: #fff;
  }
`;
