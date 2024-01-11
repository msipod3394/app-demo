import React from "react";
import { BaseButton } from "@/components/atoms/button/BaseButton";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/button/SecondaryButton";

export default function AtmicDesignDemo() {
  return (
    <>
      <BaseButton>テスト</BaseButton>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
    </>
  );
}
