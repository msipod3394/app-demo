import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { ChildArea } from "./components/ChildArea";

export default function CheckRendering() {
  console.log("====== CheckRendering ======");

  const [text, setText] = useState<string>("");
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const [open, setOpen] = useState<boolean>(false);
  const onClickShow = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <Box m={8}>
      <Input value={text} onChange={onChangeText} />
      <br />
      <br />
      <Button onClick={onClickShow}>表示</Button>
      <br />
      <br />
      <ChildArea open={open} onClickClose={onClickClose} />
    </Box>
  );
}
