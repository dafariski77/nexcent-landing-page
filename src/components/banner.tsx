import { HeroTwo } from "@/types";
import { Box, Button, Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function Banner({ data }: { data: HeroTwo }) {
  return (
    <Box px={"144px"}>
      <Flex gap={"49px"} align={"center"}>
        <Image src={data.img} alt={data.alt} width={441} height={433} />
        <Stack w={"601px"}>
          <Title order={1} fz={"36px"}>
            {data.title}
          </Title>
          <Text fz={"14px"}>{data.description}</Text>
          <Box mt={"md"}>
            <Button fw={"unset"} size="lg">
              Learn More
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
