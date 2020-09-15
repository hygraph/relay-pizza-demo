import { ChakraProvider } from "@chakra-ui/core";
import { RelayEnvironmentProvider } from "relay-hooks";

import { createEnvironment } from "../lib/createEnvironment";

export default function App({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider
      environment={createEnvironment(pageProps.relayData)}
    >
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  );
}
