import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    green: [
      "#ebfbeb",
      "#dbf2dc",
      "#b9e1ba",
      "#93d095",
      "#74c276",
      "#5fb962",
      "#54b557",
      "#449e46",
      "#398d3c",
      "#2b7a31",
    ],
  },
  primaryColor: "green",
  shadows: {
    sm: "0 2px 4px rgba(171, 190, 209, 0.2)",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
