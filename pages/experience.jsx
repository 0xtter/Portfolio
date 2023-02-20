import React, { useContext } from "react";
import styled from "styled-components";

//Custom components
import TimelineExperienciaFormacao from "@/components/TimelineExperienciaFormacao";
import { useTheme } from "styled-components";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

const SectionExperiencia = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
`;

export default function Experiencia() {
	const { language } = useContext(SettingsContext);

	const theme = useTheme();
	return (
		<SectionExperiencia id="section-experiencia">
			<ContainerTitleSection>
				<TitleSection>{language.experiencePage.title}</TitleSection>
			</ContainerTitleSection>
			<h2 style={{ color: `${theme.colors.branding}` }}>Coming Soon...</h2>
			{/* <TimelineExperienciaFormacao /> */}
		</SectionExperiencia >
	);
}
