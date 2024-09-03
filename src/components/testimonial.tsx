import { clientsData } from "@/data/clients";
import { Box, Button, Flex, Group, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <Box my={"48px"} px={"144px"} bg={"#F5F7FA"} py={"32px"}>
      <Flex direction={"row"} align={"start"} gap={"78px"}>
        <Image
          src={"/images/testimonial.png"}
          alt="testimonial"
          width={326}
          height={326}
        />
        <Stack>
          <Text>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </Text>
          <Title order={3} c={"green"}>
            Tim Smith
          </Title>
          <Text c={"#89939E"}>British Dragon Boat Racing Association</Text>
          <Group justify="space-between">
            {clientsData.map((item, i) => (
              <Image src={item.img} alt={item.alt} width={48} height={48} />
            ))}

            <Button
              variant="transparent"
              fz={"20px"}
              rightSection={
                <Image
                  src={"/icons/right-arrow.svg"}
                  alt="arrow"
                  width={20}
                  height={16}
                />
              }
            >
              Meet all customers
            </Button>
          </Group>
        </Stack>
      </Flex>
    </Box>
  );
}
