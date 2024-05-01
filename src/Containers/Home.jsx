import React from "react";
import { HeroSection } from "../Components/HeroSection";
import { AdditionalDetails } from "../Components/AdditionalDetails";
import Navigator from "../Components/Navigator";
import { Footer } from "../Components/Footer";

export const Home = () => {
    return (
        <div>
            <HeroSection />
            <AdditionalDetails />
            <Navigator />
        </div>
    )
}