import { OverviewStatProps } from "@/types";
import { Group, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function OverviewStat({ data }: { data: OverviewStatProps }) {
  return (
    <Group>
      <Image src={data.icon} alt={data.alt} width={48} height={48} />
      <Stack gap={0}>
        <Title fz={"28px"}>{data.count}</Title>
        <Text fz={"16px"}>{data.type}</Text>
      </Stack>
    </Group>
  );
}
