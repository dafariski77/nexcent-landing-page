import { Box, Button, Stack, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function Demo() {
  return (
    <Box mt={"48px"} px={"144px"} bg={"#F5F7FA"} py={"32px"}>
      <Stack align="center">
        <Title
          order={1}
          fz={"64px"}
          w={887}
          style={{
            textAlign: "center",
          }}
        >
          Pellentesque suscipit fringilla libero eu.
        </Title>
        <Button size="lg" fw={"unset"}>
          Get a Demo
        </Button>
      </Stack>
    </Box>
  );
}
