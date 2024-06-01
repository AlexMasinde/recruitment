import { Input } from "@nextui-org/react";

export default function EmailInput() {
  return (
    <Input
      type="text"
      label="Email"
      variant="bordered"
      isRequired
      radius="sm"
      labelPlacement="outside"
      placeholder="johndoe@gmail.com"
    />
  );
}
