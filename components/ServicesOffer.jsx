import React, { useContext } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

//Styled icons
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { WindowWrench } from "@styled-icons/fluentui-system-filled/WindowWrench";
import { ShieldKeyhole } from "@styled-icons/fluentui-system-filled/ShieldKeyhole";
import { Homeassistant } from "@styled-icons/simple-icons/Homeassistant";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const CardService = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 275px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 3px solid transparent;

	//Espelhar elemento
	//-webkit-box-reflect: below px linear-gradient(transparent, transparent, #0004);

	/* 
	transform-origin: center;
	transform: perspective(800px) rotateY(25deg);
	transition: 0.5s;

	&:hover img {
		opacity: 0.3;
	}
	&:hover {
		transform: perspective(800px) rotateY(0deg);
		opacity: 1;
	} */

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}

	h3 {
		color: ${(props) => props.theme.colors.branding};
		font-size: 20px;
		font-weight: 900;
		margin-top: 5px;
		margin-bottom: 20px;

		@media (max-width: 900px) {
			font-size: 18px;
		}
	}

	p {
		font-size: 16px;
		color: ${(props) => props.theme.colors.body};
		font-weight: 400;
		text-align: center;
		word-wrap: break-word;

		@media (max-width: 900px) {
			font-size: 14px;
		}
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
	justify-items: center;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		width: 85%;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		//margin-top: 60px;
		width: 100%;
	}
`;

const SectionServices = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-top: 60px;
`;

export default function _ServicesOffer() {
	const { language } = useContext(SettingsContext);

	return (
		<SectionServices id="section-services">
			<ContainerGrid>
				<Fade triggerOnce delay={200}>
					<CardService>
						<MagnifyingGlass />
						<h3>{language.servicesOffer.cards.forensique.title}</h3>
						<p>{language.servicesOffer.cards.forensique.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={400}>
					<CardService>
						<WindowWrench />
						<h3>{language.servicesOffer.cards.reverse.title}</h3>
						<p>{language.servicesOffer.cards.reverse.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={600}>
					<CardService>
						<ShieldKeyhole />
						<h3>{language.servicesOffer.cards.devsecops.title}</h3>
						<p>{language.servicesOffer.cards.devsecops.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={800}>
					<CardService>
						<Homeassistant />
						<h3>{language.servicesOffer.cards.domotique.title}</h3>
						<p>{language.servicesOffer.cards.domotique.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={1000}>
					<CardService>
						<CodeBlock />
						<h3>{language.servicesOffer.cards.developpement.title}</h3>
						<p>{language.servicesOffer.cards.developpement.contentText}</p>
					</CardService>
				</Fade>
			</ContainerGrid>
		</SectionServices>
	);
}
