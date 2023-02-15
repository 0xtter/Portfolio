import React, { useState, useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Context
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection, TitleH3, BodyText } from "@/styles/ui";

//Ícones
import { Robot } from "@styled-icons/fa-solid/Robot";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Java } from "@styled-icons/fa-brands/Java";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Live } from "@styled-icons/fluentui-system-filled/Live";
import { CPlusPlus } from "@styled-icons/boxicons-logos";
import { FileBinary } from "@styled-icons/bootstrap";
import { Vuejs } from "@styled-icons/boxicons-logos";
import { Markdown } from "@styled-icons/boxicons-logos";
import { BookmarkFill } from "@styled-icons/bootstrap";
import { Github } from "@styled-icons/boxicons-logos";
import { MathFormatLinear } from "@styled-icons/fluentui-system-filled";
import { DrawShape } from "@styled-icons/fluentui-system-filled";
import { Gamepad } from "styled-icons/fa-solid";
import { Password } from "@styled-icons/fluentui-system-filled/Password";
import { ShieldLockFill } from "@styled-icons/bootstrap";
import { TrophyFill } from "@styled-icons/bootstrap";
import { C } from "@styled-icons/simple-icons";
import { Box } from "@styled-icons/bootstrap";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled";
import { JournalBookmark } from "@styled-icons/bootstrap";
import { Arduino } from "@styled-icons/simple-icons";

//Custom components
import Tooltip from "@/components/Tooltip";
import FetchData from "@/components/RepositoryList";
import { D } from "styled-icons/crypto";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const WrapperProjectCard = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	min-height: 270px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 1px solid ${(props) => props.theme.colors.backgroundPage};

	.created_at {
		color: ${(props) => props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		border: 1px solid ${(props) => props.theme.colors.branding};
		transform: scale(1.01);
		box-shadow: 0px 0px 20px 0px ${(props) => props.theme.colors.branding}5E;
		// -webkit-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		// -moz-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
	}

	.title-body {
		margin-top: 50px;

		.divider {
			margin-bottom: 20px;
		}
	}
`;

const WrapperTechStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 34px;
	width: 100%;
	margin-bottom: 10px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: ${(props) => props.theme.colors.inactiveTitle};
		transition: all 0.3s ease;
	}

	a {
		svg {
			&:hover {
				cursor: pointer;
				color: ${(props) => props.theme.colors.branding};
			}
		}
	}
`;

const WrapperTextChip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	right: 10px;

	div {
		span {
			//border: 1px solid ${(props) => props.theme.colors.branding};
			color: ${(props) => props.theme.colors.inactiveTitle};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}

		@media (max-width: 601px) {
			margin-bottom: 10px;
			font-size: 10px;
		}
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const ChipTechOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	//background-color: #ccc;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;


const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	right: 10px;
	bottom: 10px;
	transition: all 0.3s ease;
	a {
		//background-color: ${(props) => props.theme.colors.branding};
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 5px;
		color: ${(props) => props.theme.colors.branding};
		//border: solid 1px ${(props) => props.theme.colors.branding};
		border-radius: 4px;
		//margin-left: 3px;
	}
`;

function formatDate(dateString) {
	const originalDate = new Date(dateString);
	const day = String(originalDate.getDate()).padStart(2, '0');
	const month = String(originalDate.getMonth() + 1).padStart(2, '0');
	const year = originalDate.getFullYear();
	const formattedDate = `${day}/${month}/${year}`;
	return formattedDate;
}


const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 4px;
	font-weight: 700;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 4px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;


export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [view, setView] = useState("grid");
	const [stack, setStack] = useState("TODOS");

	// Fetch data from my personnal GitHub account to list repositories
	const [url, setURL] = useState('https://api.github.com/users/0xtter/repos');
	const data = FetchData(url);

	const topicsIcons = {
		"Robot": {
			"iconName": "Robot",
			"icon": <Robot />
		},
		"java": {
			"iconName": "Java",
			"icon": <Java />
		},
		"mongodb": {
			"iconName": "Mongodb",
			"icon": <Mongodb />
		},
		"Sqlite": {
			"iconName": "Sqlite",
			"icon": <Sqlite />
		},
		"javascript": {
			"iconName": "Javascript",
			"icon": <Javascript />
		},
		"reactjs": {
			"iconName": "Reactjs",
			"icon": <ReactLogo />
		},
		"Nextdotjs": {
			"iconName": "Nextdotjs",
			"icon": <Nextdotjs />
		},
		"python3": {
			"iconName": "Python",
			"icon": <Python />
		},
		"nodejs": {
			"iconName": "Nodejs",
			"icon": <Nodejs />
		},
		"css": {
			"iconName": "CSS",
			"icon": <Css3 />
		},
		"html5": {
			"iconName": "HTML5",
			"icon": <Html5 />
		},
		"Live": {
			"iconName": "Live",
			"icon": <Live />
		},
		"cpp": {
			"iconName": "C++",
			"icon": <CPlusPlus />
		},
		"c": {
			"iconName": "C",
			"icon": <C />
		},
		"reverse-engineering": {
			"iconName": "Reverse Engineering",
			"icon": <FileBinary />
		},
		"vuejs": {
			"iconName": "Vuejs",
			"icon": <Vuejs />
		},
		"markdown": {
			"iconName": "Markdown",
			"icon": <Markdown />
		},
		"Default": {
			"iconName": "BookmarkFill",
			"icon": <JournalBookmark />
		},
		"github": {
			"iconName": "Github",
			"icon": <Github />
		},
		"github-profile": {
			"iconName": "Github Profile",
			"icon": <Github />
		},
		"desmos-api": {
			"iconName": "Desmos API",
			"icon": <MathFormatLinear />
		},
		"drawing-app": {
			"iconName": "Drawing App",
			"icon": <DrawShape />
		},
		"pillow": {
			"iconName": "Pillow",
			"icon": <DrawShape />
		},
		"game": {
			"iconName": "Game",
			"icon": <Gamepad />
		},
		"pentesting": {
			"iconName": "Pentesting",
			"icon": <Password />
		},
		"security": {
			"iconName": "Security",
			"icon": <ShieldLockFill />
		},
		"challenge": {
			"iconName": "Challenge",
			"icon": <TrophyFill />
		},
		"3d-printing": {
			"iconName": "3D printing",
			"icon": <Box />
		},
		"solidworks": {
			"iconName": "Solidworks",
			"icon": <DesignIdeas />
		},
		"arduino": {
			"iconName": "Arduino",
			"icon": <Arduino />
		}
	}

	function handleFilter(id) {
		setStack(id);
	}

	function handleView(event) {
		setView(event.target.id);
	}

	const array_projects = stack == "TODOS";

	return (
		<SectionPortifolio id="section-portifolio">

			{/* <ChipTechOptions>
				<Filter className="svg" />
				<Chip
					id="TODOS"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("TODOS") ? true : false}>
					{language.portifolioPage.labelFilter}
				</Chip>

				<Chip
					id="BACKEND"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("BACKEND") ? true : false}>
					BACKEND
				</Chip>
				<Chip
					id="WEB"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("WEB") ? true : false}>
					WEB
				</Chip>
				<Chip
					id="MOBILE"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("MOBILE") ? true : false}>
					MOBILE
				</Chip>
			</ChipTechOptions> */}

			<ContainerTitleSection>
				<TitleSection>{language.portifolioPage.title}</TitleSection>
			</ContainerTitleSection>
			<ContainerGrid view={view}>
				{data ? (
					data.map((project, index) => (
						<ScrollAnimation animateIn="fadeIn" animateOnce key={index}>
							<WrapperProjectCard>
								<WrapperTextChip>

									<div key={index}>
										<span>{project.language}</span>
									</div>

								</WrapperTextChip>
								<TitleSpan>{project.name}</TitleSpan>

								<div className="title-body">
									<BodyText>{project.description}</BodyText>
								</div>

								<WrapperTechStack>
									<div>
										{project.topics ? (project.topics.map((topic, index) => (
											topicsIcons[topic] ? (
												<div key={index}>
													<Tooltip toolTipText={topicsIcons[topic].iconName}>

														{topicsIcons[topic].icon}
													</Tooltip>
												</div>
											) : (
												<div key={index}>
													<Tooltip toolTipText={topic}>
														{topicsIcons["Default"].icon}
													</Tooltip>
												</div>
											)

										))) : (
											""
										)}
									</div>
									<WrapperButtons>
										{project.homepage != null && project.homepage != "" && (
											<a href={project.homepage} target="_blank" rel="noreferrer">
												<Live />
											</a>
										)}
										<a href={project.svn_url} target="_blank" rel="noreferrer">
											<GithubOutline />
										</a>
									</WrapperButtons>
								</WrapperTechStack>

								<span className="created_at">
									{language.portifolioPage.createdLabel}: {formatDate(project.created_at)}
								</span>
							</WrapperProjectCard>
						</ScrollAnimation>
					))) : (
					<p>Loading...</p>
				)}
			</ContainerGrid>
		</SectionPortifolio>
	);
}
