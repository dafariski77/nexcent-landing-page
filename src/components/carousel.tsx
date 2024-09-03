import { Box, Button, Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <Box bg={"#F5F7FA"} px={"144px"} py={"96px"}>
      <Flex align={"center"} justify={"space-between"} gap={"104px"}>
        <Stack gap={"lg"}>
          <Title order={1} size={"64px"} fw={"bold"}>
            Lessons and insights{"  "}
            <Text span c={"green"} inherit>
              from 8 years
            </Text>
          </Title>
          <Text>
            Where to grow your business as a photographer: site or social media?
          </Text>
          <Box>
            <Button size="lg" fw={"normal"}>
              Register
            </Button>
          </Box>
        </Stack>
        <Image src={"/images/hero.png"} alt="hero" width={391} height={407} />
      </Flex>
    </Box>
  );
}
