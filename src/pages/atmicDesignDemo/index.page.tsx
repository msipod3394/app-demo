import React from "react";
import { BaseButton } from "@/components/atoms/button/BaseButton";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/button/SecondaryButton";
import { SearchInput } from "@/components/molecules/SearchInput";
import { UserCard } from "@/components/organisms/layout/user/UserCard";
import { DemoButton } from "@/components/atoms/button/DemoButton";

export default function AtmicDesignDemo() {
  return (
    <>
      <DemoButton>テスト</DemoButton>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </>
  );
}
