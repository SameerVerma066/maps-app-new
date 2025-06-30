import { Button, IconButton, ButtonGroup } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import React from "react";

interface RouteButtonsProps {
  onStart: () => void;
  onClear: () => void;
  onUseLocation: () => void;
}

export default function RouteButtons({
  onStart,
  onClear,
  onUseLocation,
}: RouteButtonsProps) {
  return (
    <ButtonGroup
      flexWrap="wrap"
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Button onClick={onUseLocation} colorScheme="blue" size="xs">
        Use My Location
      </Button>
      <Button colorScheme="pink" onClick={onStart} size="xs">
        Start
      </Button>
      <IconButton
        aria-label="Clear"
        icon={<FaTimes />}
        onClick={onClear}
        size="xs"
      />
    </ButtonGroup>
  );
}
