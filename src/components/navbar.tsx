import { Button, Flex, Group, List, ListItem, Stack } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <Flex
        direction={"row"}
        justify={"space-between"}
        align={"center"}
        py={"md"}
        px={"110px"}
        bg={"#F5F7FA"}
      >
        <Image src={"/logo/logo.svg"} alt="logo" width={154} height={24} />
        <List listStyleType="none">
          <Flex direction={"row"} gap={"xl"}>
            <ListItem>Home</ListItem>
            <ListItem>Service</ListItem>
            <ListItem>Feature</ListItem>
            <ListItem>Product</ListItem>
            <ListItem>Testimonial</ListItem>
            <ListItem>FAQ</ListItem>
          </Flex>
        </List>
        <Group gap={"md"}>
          <Button variant="transparent" fw={"normal"}>
            Login
          </Button>
          <Button radius={"6px"} fw={"normal"}>
            Sign Up
          </Button>
        </Group>
      </Flex>
    </React.Fragment>
  );
}
