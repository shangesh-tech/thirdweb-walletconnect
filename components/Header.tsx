"use client";
import { useActiveAccount } from "thirdweb/react";
import CustomConnect from "./CustomConnect";

export default function Header() {
    const account = useActiveAccount();

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-900">
                            My Web3 App
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-700 hover:text-gray-900">
                            Home
                        </a>
                        <a href="/dashboard" className="text-gray-700 hover:text-gray-900">
                            Dashboard
                        </a>
                        <a href="/nfts" className="text-gray-700 hover:text-gray-900">
                            NFTs
                        </a>
                    </nav>

                    {/* Connect Button */}
                    <div className="flex items-center gap-4">

                        {/* <Web3Connect /> */}
                        <CustomConnect />
                    </div>
                </div>
            </div>
        </header>
    );
}

