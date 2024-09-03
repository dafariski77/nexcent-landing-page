import { Box, Button, Flex, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import FeatureCard from "./feature-card";
import { features, heroTwo } from "@/data/features";
import Image from "next/image";

export default function Features() {
  return (
    <Box px={"144px"} py={"40px"}>
      <Stack align="center" gap={0}>
        <Title
          w={"542px"}
          style={{
            textAlign: "center",
          }}
        >
          Manage your entire community in a single system
        </Title>
        <Text mt={"8px"}>Who is Nexcent suitable for?</Text>
      </Stack>
      <Flex direction={"row"} justify="space-between">
        {features.map((item, i) => (
          <FeatureCard data={item} key={i} />
        ))}
      </Flex>
    </Box>
  );
}
