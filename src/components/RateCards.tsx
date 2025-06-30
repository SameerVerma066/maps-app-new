import React from "react";
import { Box, Flex, Text, Badge, Button } from "@chakra-ui/react";

interface RateCardProps {
  vehicle: string;
  image: string;
  weight: string;
  size?: string;
  price: string;
  description: string;
  knowMoreLink?: string;
}

export function RateCard({
  vehicle,
  image,
  weight,
  size,
  price,
  description,
  knowMoreLink,
}: RateCardProps) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={8}
      w={{ base: "100%", md: "350px" }}
      textAlign="center"
      border="1px solid #e2e8f0"
      m={2}
    >
      <Box mb={4}>
        <img src={image} alt={vehicle} style={{ height: 120, margin: "0 auto" }} />
      </Box>
      {size && (
        <Text fontSize="sm" color="gray.500" mb={1}>
          {size}
        </Text>
      )}
      <Badge colorScheme="blue" fontSize="md" mb={2}>
        {weight}
      </Badge>
      <Text fontWeight="bold" fontSize="xl" mb={1}>
        {vehicle}
      </Text>
      <Text fontSize="md" mb={2}>
        Starting from <b>{price}</b>
      </Text>
      <Text fontSize="sm" color="gray.600" mb={2}>
        {description}
      </Text>
      {knowMoreLink && (
        <Button as="a" href={knowMoreLink} colorScheme="blue" variant="link" fontWeight="bold">
          Know more
        </Button>
      )}
    </Box>
  );
}

// Specialized rate card groups for each service

export function BikeRateCards() {
  return (
    <Box>
      <Text textAlign="center" fontWeight="bold" fontSize="2xl" mb={8}>
        Two-Wheelers from Porter
      </Text>
      <Flex justify="center" flexWrap="wrap">
        <RateCard
          vehicle="2 Wheeler"
          image="/2wheeler.svg"
          weight="20 kg"
          size="40cm x 40cm"
          price="₹32.5"
          description="Base fare is inclusive of 1.0 km distance & 25 minutes of order time. Pricing may vary basis locality. Please note, road tax, parking fee, etc, will be applicable over and above ride fare."
          knowMoreLink="#"
        />
      </Flex>
    </Box>
  );
}

export function TruckRateCards({ type }: { type: "light" | "heavy" }) {
  return (
    <Box>
      <Text textAlign="center" fontWeight="bold" fontSize="2xl" mb={2}>
        Book Mini Trucks in Ahmedabad
      </Text>
      <Flex justify="center" mb={6}>
        <Text
          fontWeight={type === "light" ? "bold" : "normal"}
          borderBottom={type === "light" ? "2px solid #222" : "none"}
          mr={4}
          fontSize="lg"
        >
          Light (below 750kg)
        </Text>
        <Text
          fontWeight={type === "heavy" ? "bold" : "normal"}
          borderBottom={type === "heavy" ? "2px solid #222" : "none"}
          fontSize="lg"
        >
          Heavy (above 750kg)
        </Text>
      </Flex>
      <Flex justify="center" flexWrap="wrap">
        {type === "light" ? (
          <>
            <RateCard
              vehicle="3 Wheeler"
              image="/3wheeler.svg"
              weight="500 kg"
              size="5ft x 6ft"
              price="₹160"
              description="Ideal for small loads and quick city deliveries."
              knowMoreLink="#"
            />
            <RateCard
              vehicle="Tata Ace"
              image="/tataace.svg"
              weight="750 kg"
              size="6ft x 7ft"
              price="₹205"
              description="Perfect for slightly larger loads and city moves."
              knowMoreLink="#"
            />
          </>
        ) : (
          <>
            <RateCard
              vehicle="Pickup 8ft"
              image="/pickup8ft.svg"
              weight="1250kg"
              size="5.5ft x 8ft"
              price="₹300"
              description="For medium loads and intercity moves."
              knowMoreLink="#"
            />
            <RateCard
              vehicle="Canter 14ft"
              image="/canter14ft.svg"
              weight="3500kg"
              size="5.5ft x 14ft"
              price="₹1050"
              description="For large loads and long distance moves."
              knowMoreLink="#"
            />
            <RateCard
              vehicle="1.7 ton"
              image="/1.7ton.svg"
              weight="1700 kg"
              size="6.1ft x 9ft"
              price="₹380"
              description="For heavy loads and bulk transport."
              knowMoreLink="#"
            />
          </>
        )}
      </Flex>
    </Box>
  );
}

export function PackersMoversCards() {
  return (
    <Box my={16}>
      <Text textAlign="center" fontWeight="bold" fontSize="2xl" mb={8}>
        House Shifting Services with Best Packers and Movers in Ahmedabad
      </Text>
      <Flex justify="center" flexWrap="wrap" gap={12}>
        <Box textAlign="center">
          <Box mb={4}><img src="/handshake.svg" alt="Damage-Free Shifting" style={{ height: 64 }} /></Box>
          <Text fontWeight="bold">100% Damage-Free Shifting</Text>
          <Text color="gray.600">Packers and movers services with safety at every step.</Text>
        </Box>
        <Box textAlign="center">
          <Box mb={4}><img src="/rupee.svg" alt="Affordable & Assured" style={{ height: 64 }} /></Box>
          <Text fontWeight="bold">Affordable & Assured</Text>
          <Text color="gray.600">Reliable packers and movers services at economical prices.</Text>
        </Box>
        <Box textAlign="center">
          <Box mb={4}><img src="/expert.svg" alt="Expert Handling" style={{ height: 64 }} /></Box>
          <Text fontWeight="bold">Expert Handling</Text>
          <Text color="gray.600">Professionally trained experts for damage-free shifting</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export function IntercityCourierCards() {
  return (
    <Box my={16}>
      <Text textAlign="center" fontWeight="bold" fontSize="2xl" mb={8}>
        Why is Porter your go-to for Intercity Courier Services?
      </Text>
      <Text textAlign="center" color="gray.600" mb={8}>
        Your reliable intercity courier partner to ship all your parcels to 19000+ Indian pincodes. Hassle-free & easy to send couriers for all individuals and businesses.
      </Text>
      <Flex justify="center" flexWrap="wrap" gap={12}>
        <Box textAlign="center">
          <Box mb={4}><img src="/door.svg" alt="Door-to-Door Delivery" style={{ height: 64 }} /></Box>
          <Text fontWeight="bold">Door-to-Door Delivery</Text>
          <Text color="gray.600">Enjoy doorstep pick-up & delivery with Porter Intercity Courier Services</Text>
        </Box>
        <Box textAlign="center">
          <Box mb={4}><img src="/clock.svg" alt="Timely Deliveries" style={{ height: 64 }} /></Box>
          <Text fontWeight="bold">Timely Deliveries</Text>
          <Text color="gray.600">Choose the mode of intercity courier delivery, via air or surface, for reliable and on-time parcel deliveries</Text>
        </Box>
        <Box textAlign="center">
          <Box mb={4}><img src="/label.svg" alt="Shipping Label Printing On Us" style={{ height: 64 }} /></Box>
          <Text fontWeight="bold">Shipping Label Printing On Us</Text>
          <Text color="gray.600">Just mention your CR number and we take care of printing shipping labels for you</Text>
        </Box>
      </Flex>
    </Box>
  );
}
