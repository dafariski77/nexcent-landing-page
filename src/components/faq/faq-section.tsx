import { faqData } from "@/data/faq";
import { Box, Button, Card, Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import FaqCard from "./faq-card";

export default function FAQ() {
  return (
    <Box px={"144px"} py={"40px"}>
      <Stack align="center" gap={0}>
        <Title>Caring is the new marketing</Title>
        <Text
          mt={"8px"}
          w={"628px"}
          style={{
            textAlign: "center",
          }}
        >
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </Text>
      </Stack>
      <Flex justify={"space-between"} direction={"row"} mt={16}>
        {faqData.map((item, i) => (
          <FaqCard data={item} key={i} />
        ))}
      </Flex>
    </Box>
  );
}
