import { Stack, Text, IconButton } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import React from "react";

interface RouteInfoProps {
  distance: string;
  duration: string;
  onRecenter: () => void;
}

export default function RouteInfo({ distance, duration, onRecenter }: RouteInfoProps) {
  return (
    <Stack
      spacing={2}
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "flex-start", md: "center" }}
      mt={4}
    >
      <Text fontSize="sm">Distance: {distance}</Text>
      <Text fontSize="sm">Duration: {duration}</Text>
      <IconButton
        aria-label="Recenter"
        icon={<FaLocationArrow />}
        isRound
        onClick={onRecenter}
        size="sm"
      />
    </Stack>
  );
}
