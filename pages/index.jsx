import React from "react";

//Pages
import AProposDeMoiPage from "../pages/a-propos";
import PortfolioPage from "../pages/portfolio";
import ExperiencePage from "../pages/experience";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";

export default function Index() {
	return (
		<>
			<HomePage />
			<ServicesOffer />
			<AProposDeMoiPage />
			<PortfolioPage />
			{/* <ExperiencePage /> */}
			<FooterPage />
		</>
	);
}
