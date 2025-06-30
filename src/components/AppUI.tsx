"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  SkeletonText,
  Collapse,
} from "@chakra-ui/react";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { MAPS_API_KEY } from "@/utils/mapsApiKey";
import LocationInput from "./common/LocationInput";
import RouteButtons from "./common/RouteButtons";
import RouteInfo from "./common/RouteInfo";
import { BikeRateCards, TruckRateCards, PackersMoversCards, IntercityCourierCards } from "./RateCards";

const center = { lat: 25.605028755206394, lng: 85.07451919725354 };

export default function AppUI() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [originMarker, setOriginMarker] =
    useState<google.maps.LatLngLiteral | null>(null);

  const originRef = useRef<HTMLInputElement>(null!);
  const destRef = useRef<HTMLInputElement>(null!);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsCollapsed(window.innerWidth < 733 && window.innerHeight < 617);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLoaded) return <SkeletonText />;

  async function calculateRoute() {
    if (!originRef.current?.value || !destRef.current?.value) return;
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    const leg = results.routes[0].legs[0];
    setDistance(leg.distance?.text || "");
    setDuration(leg.duration?.text || "");
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    if (originRef.current) originRef.current.value = "";
    if (destRef.current) destRef.current.value = "";
  }

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        const latlng = { lat: latitude, lng: longitude };
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === "OK" && results?.[0]) {
            if (originRef.current)
              originRef.current.value = results[0].formatted_address;
            map?.panTo(latlng);
            map?.setZoom(8);
            setTimeout(() => map?.setZoom(15), 300);
            setOriginMarker(latlng);
          } else {
            alert("No address found.");
          }
        });
      });
    } else {
      alert("Geolocation not supported.");
    }
  }

  return (
    <Box minH="100vh" bg="#fafbfc">
      {/* Header */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px={8}
        py={4}
        bg="white"
        boxShadow="sm"
      >
        <Box
          fontWeight="bold"
          fontSize="2xl"
          color="#2474ff"
          letterSpacing={1}
        >
          DELIVERY PARTNERS
        </Box>
        <Flex gap={8} fontWeight="medium" fontSize="sm">
          
          
          <Box as="a" href="#">
            Support
          </Box>
        </Flex>
      </Flex>

      {/* Hero Section with background */}
      <Box
        position="relative"
        w="100%"
        h={{ base: "320px", md: "380px" }}
        bgImage="url('https://ik.imagekit.io/vf1wtj1uk/deliverypartners/3d-rendering-buddha-statue-cave.jpg?updatedAt=1748935408872')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.45)"
        />
        <Box position="relative" zIndex={1} textAlign="center" color="white">
          <Box
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            mb={2}
          >
            Reliable Goods Transportation Services 
          </Box>
          <Box
            fontSize={{ base: "md", md: "lg" }}
            maxW="lg"
            mx="auto"
            mb={4}
          >
           
          </Box>
         
        </Box>

        {/* Floating Card */}
        <Box
          position="absolute"
          left="50%"
          bottom="-60px"
          transform="translateX(-50%)"
          bg="white"
          borderRadius="lg"
          boxShadow="xl"
          px={{ base: 2, md: 8 }}
          py={6}
          w={{ base: "95vw", md: "900px" }}
          zIndex={2}
        >
          <Flex align="center" gap={4} mb={4}>
            
          </Flex>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align="center"
          >
            <Box flex={2}>
              <LocationInput placeholder="Pickup Address *" inputRef={originRef} />
            </Box>
            <Box flex={2}>
              <LocationInput placeholder="Drop Address *" inputRef={destRef} />
            </Box>
            <Box flex={2}>
              <input
                type="text"
                placeholder="Phone Number *"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                }}
              />
            </Box>
            <Box flex={1}>
              <input
                type="text"
                placeholder="Name *"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                }}
              />
            </Box>
            <Box flex={1}>
              <select
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <option>What describes you best? *</option>
                <option>Business</option>
                <option>Individual</option>
              </select>
            </Box>
            <Button
              colorScheme="blue"
              px={8}
              py={6}
              fontWeight="bold"
              fontSize="md"
              borderRadius="md"
              rightIcon={
                <Box as="span" className="material-icons">
                  
                </Box>
              }
            >
              Get an estimate
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Main Content */}
      <Box mt={32} px={4}>
        <BikeRateCards />
        <TruckRateCards type="light" />
        <TruckRateCards type="heavy" />
        <PackersMoversCards />
        <IntercityCourierCards />
      </Box>
    </Box>
  );
}
