import { clientsData } from "@/data/clients";
import { Box, Group, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function OurClient() {
  return (
    <Box px={"144px"} py={"40px"}>
      <Stack align="center" gap={0}>
        <Title>Our Clients</Title>
        <Text mt={"8px"}>
          We have been working with some Fortune 500+ clients
        </Text>
        <Group gap={"136px"} mt={"16px"} py={"25px"}>
          {clientsData.map((item, i) => (
            <Image
              src={item.img}
              alt={item.alt}
              key={i}
              width={48}
              height={48}
            />
          ))}
        </Group>
      </Stack>
    </Box>
  );
}
