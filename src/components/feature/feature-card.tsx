import { FeatureCardProps } from "@/types";
import { Card, Center, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function FeatureCard({ data }: { data: FeatureCardProps }) {
  return (
    <Card shadow="sm" w={"299px"} padding={"24px"} radius={"8px"}>
      <Stack align="center">
        <Image src={data.img} alt={data.alt} width={65} height={56} />
        <Title
          fz={"28px"}
          style={{
            textAlign: "center",
          }}
        >
          {data.title}
        </Title>
        <Text
          fz={"14px"}
          style={{
            textAlign: "center",
          }}
        >
          {data.description}
        </Text>
      </Stack>
    </Card>
  );
}
