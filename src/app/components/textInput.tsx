import { Input } from "@nextui-org/react";

interface TextInputProps {
  placeholder: string;
  label: string;
  isRequired: boolean;
}

export default function TextInput({
  placeholder,
  label,
  isRequired,
}: TextInputProps) {
  return (
    <Input
      type="text"
      label={label}
      variant="bordered"
      isRequired={isRequired}
      radius="sm"
      labelPlacement="outside"
      placeholder={placeholder}
    />
  );
}
