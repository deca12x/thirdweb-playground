"use client";

import {
  ConnectWallet,
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  en,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export default function ThirdwebWallet() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="48376d20eb92cb4220f1d7e403430ee0"
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        embeddedWallet({
          auth: {
            options: ["email", "google", "apple", "facebook"],
          },
        }),
      ]}
    >
      <ConnectWallet theme={"dark"} modalSize={"compact"} />
    </ThirdwebProvider>
  );
}
