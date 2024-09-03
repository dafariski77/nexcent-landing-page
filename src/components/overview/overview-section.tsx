import { Box, Flex, Grid, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import OverviewStat from "./overview-stat";
import { statsData } from "@/data/stats";

export default function Overview() {
  return (
    <Box my={"48px"} px={"144px"} bg={"#F5F7FA"} py={"64px"}>
      <Flex direction={"row"} gap={"xl"} align={"center"}>
        <Stack gap={0}>
          <Title component="h2" fw={"bold"} fz={"36px"}>
            Helping a local{" "}
            <Text span c={"green"} inherit>
              bussiness reinvent itself
            </Text>
          </Title>
          <Text>We reached here with our hard work and dedication</Text>
        </Stack>
        <Grid ml={"lg"}>
          {statsData.map((item, i) => (
            <Grid.Col span={5}>
              <OverviewStat data={item} key={i} />
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
