import React from "react";
import { AdditionalDetails } from "../Components/AdditionalDetails";
import { HeroSection } from "../Components/HeroSection";
import Navigator from "../Components/Navigator";

export const Home = () => {
    return (
        <div>
            <HeroSection />
            <AdditionalDetails />
            <Navigator />
        </div>
    )
}