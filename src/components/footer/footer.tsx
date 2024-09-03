import {
  Box,
  Grid,
  Group,
  Input,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

export default function Footer() {
  return (
    <Box
      px={"165px"}
      bg={"#263238"}
      style={{
        color: "white",
      }}
      py={64}
    >
      <Grid>
        <Grid.Col span={5}>
          <Image
            src={"/logo/logo-light.svg"}
            alt="logo"
            width={191}
            height={30}
          />
          <Box my={40}>
            <Text>Copyright &copy; 2020 Nexcent ltd.</Text>
            <Text>All rights reserved</Text>
          </Box>

          <Group gap={24}>
            <FaInstagram />
            <FaDribbble />
            <FaTwitter />
            <FaYoutube />
          </Group>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title order={4}>Company</Title>
          <List
            listStyleType="none"
            style={{
              color: "#F5F7FA",
              fontWeight: "lighter",
            }}
          >
            <Stack
              mt={24}
              gap={8}
              style={{
                fontSize: "14px",
              }}
            >
              <ListItem>About us</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Contact us</ListItem>
              <ListItem>Pricing</ListItem>
              <ListItem>Testimonials</ListItem>
            </Stack>
          </List>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title order={4}>Support</Title>
          <List
            listStyleType="none"
            style={{
              color: "#F5F7FA",
              fontWeight: "lighter",
            }}
          >
            <Stack
              mt={24}
              gap={8}
              style={{
                fontSize: "14px",
              }}
            >
              <ListItem>Help Center</ListItem>
              <ListItem>Terms of service</ListItem>
              <ListItem>Legal</ListItem>
              <ListItem>Privacy policy</ListItem>
              <ListItem>Status</ListItem>
            </Stack>
          </List>
        </Grid.Col>
        <Grid.Col span={3}>
          <Title order={4}>Stay Up to date</Title>
          <Input
            radius={"md"}
            mt={24}
            placeholder="Your email address"
            variant="filled"
            rightSection={<LuSend />}
            w={"90%"}
            type="email"
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
