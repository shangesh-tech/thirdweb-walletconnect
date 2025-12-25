import { createWallet, inAppWallet } from "thirdweb/wallets";

export const wallets = [
    inAppWallet({
        auth: {
            options: [
                "email",
                "google",
                "phone",
            ],
        },
    }),

    createWallet("io.metamask"),
    createWallet("com.brave.wallet"),
    createWallet("app.phantom"),
    createWallet("com.coinbase.wallet"),

];
