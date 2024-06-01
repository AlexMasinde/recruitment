import { counties } from "../utils/counties";
import { County } from "../utils/types";
import EmailInput from "./emailInput";
import TextInput from "./textInput";

import { Select, SelectItem } from "@nextui-org/react";

export default function RegistrationPage() {
  return (
    <div>
      <RegistrationIllustration />
      <RegistrationForm />
    </div>
  );
}

function RegistrationForm() {
  return (
    <div>
      <TextInput placeholder="John Doe" isRequired={true} label="Full Names" />
      <TextInput
        placeholder="29761715"
        isRequired={true}
        label="ID/Passport Number"
      />
      <EmailInput />
      <Select
        label="County"
        placeholder="Select County"
        isRequired
        labelPlacement="outside"
        variant="bordered"
        // className="max-w-xs"
      >
        {counties.map((county: County) => {
          return (
            <SelectItem key={county.county_code} value={county.county_name}>
              {county.county_name}
            </SelectItem>
          );
        })}
      </Select>
    </div>
  );
}

function RegistrationIllustration() {
  return (
    <div>
      <p>Registration page illustration</p>
    </div>
  );
}
