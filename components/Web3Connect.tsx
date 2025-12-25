"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";
import { wallets } from "@/lib/wallets";
import { supportedChains, defaultChain } from "@/lib/chains";

export default function Web3Connect() {
    return (
        <ConnectButton
            client={client}
            wallets={wallets}
            chains={supportedChains}
            chain={defaultChain}
            autoConnect={true}
            theme="light"

            connectModal={{
                size: "wide",
                title: "Connect to Wallet",
                titleIcon: "https://myapp.com/icon.png",
                showThirdwebBranding: false,
                termsOfServiceUrl: "https://myapp.com/terms",
                privacyPolicyUrl: "https://myapp.com/privacy",
            }}

            connectButton={{
                label: "Connect Wallet",
                className: "!bg-blue-600 hover:!bg-blue-700 !px-6 !py-3 !rounded-lg !font-semibold",
            }}
        />
    );
}
