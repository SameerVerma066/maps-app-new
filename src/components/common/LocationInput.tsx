import { Autocomplete } from "@react-google-maps/api";
import { Input, Box } from "@chakra-ui/react";
import React, { RefObject } from "react";

interface LocationInputProps {
  placeholder: string;
  inputRef: RefObject<HTMLInputElement>;
}

export default function LocationInput({ placeholder, inputRef }: LocationInputProps) {
  return (
    <Box flexGrow={1}>
      <Autocomplete>
        <Input
          type="text"
          placeholder={placeholder}
          ref={inputRef}
          size="xs"
        />
      </Autocomplete>
    </Box>
  );
}
