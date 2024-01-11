import { Button, Center } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  open: boolean;
  onClickClose: () => void;
};

export const ChildArea: FC<Props> = memo(({ open, onClickClose }) => {
  console.log("ChildAreaがレンダリンされた！");

  const data = [...Array(200).keys()];

  data.forEach(() => {
    console.log("test");
  });

  return (
    <Center border="1px" height="100px">
      {open && <p>子コンポーネント</p>}
      <br />
      <Button onClick={onClickClose}>非表示</Button>
    </Center>
  );
});
