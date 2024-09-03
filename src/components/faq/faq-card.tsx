import { FAQCardProps } from "@/types";
import { Button, Card, Stack, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function FaqCard({ data }: { data: FAQCardProps }) {
  return (
    <Stack justify="center" align="center">
      <Image src={data.img} alt={data.alt} width={368} height={286} />
      <Card
        padding={"16px"}
        bg={"#F5F7FA"}
        radius={"lg"}
        w={"317px"}
        style={{
          textAlign: "center",
        }}
        pos={"relative"}
        top={"-100px"}
        shadow="lg"
      >
        <Title order={4} c={"#717171"}>
          {data.title}
        </Title>
        <Button
          mt={16}
          variant="transparent"
          fz={"lg"}
          fw={""}
          rightSection={
            <Image
              src={"/icons/right-arrow.svg"}
              alt="arrow"
              width={20}
              height={16}
            />
          }
        >
          Readmore
        </Button>
      </Card>
    </Stack>
  );
}
