import React, { useState } from "react";
import styled from "styled-components";

//Ícones
import { Home } from "@styled-icons/heroicons-solid/Home";
import { Code } from "@styled-icons/fluentui-system-regular/Code";
import { Timeline } from "@styled-icons/fluentui-system-regular/Timeline";
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";
import { Badge } from "@styled-icons/material-outlined/Badge";
import { scrollToSection } from "./SmoothScroll";

const NavigationBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;
	width: 400px;
	height: 60px;
	border-radius: 100px;
	position: fixed;
	z-index: 10;
	bottom: 30px;
	//border: 1px solid ${(props) => props.theme.colors.branding};
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	background-color: #00000040;

	@media (min-width: 601px) {
		display: none;
		width: 100%;
	}

	@media (max-width: 601px) {
		width: 80%;
	}

	@media (max-width: 425px) {
		width: 95%;
	}
`;

const NavOption = styled.div`
	transition: all 0.5s ease;
	padding: 5px;
	border-radius: 50%;
	border: 1px solid ${(props) => (props.isActive ? props.theme.colors.branding : "transparent")};

	&:hover {
		cursor: pointer;
	}
	svg {
		width: 26px;
		height: 26px;
		color: ${(props) => (props.isActive ? props.theme.colors.branding : "#ccc")};
	}
`;

export default function FloatNavigationBar(props) {
	const [active, setActive] = useState("#section-home");

	return (
		<NavigationBar>
			<a style={{ textDecoration: "none" }} href="#section-home" onClick={scrollToSection}>
				<NavOption
					className="button"
					isActive={active == "#section-home" ? true : false}
					onClick={() => {
						setActive("#section-home");
					}}>
					<Home style={{ pointerEvents: "none" }} />
				</NavOption>
			</a>
			<a style={{ textDecoration: "none" }} href="#section-services" onClick={scrollToSection}>
				<NavOption
					className="button"
					isActive={active == "#section-services" ? true : false}
					onClick={() => {
						setActive("#section-services");
					}}>
					<Code style={{ pointerEvents: "none" }} />
				</NavOption>
			</a>
			<a style={{ textDecoration: "none" }} href="#section-a-propos" onClick={scrollToSection}>
				<NavOption
					className="button"
					isActive={active == "#section-a-propos" ? true : false}
					onClick={() => {
						setActive("#section-a-propos");
					}}>
					<Timeline style={{ pointerEvents: "none" }} />
				</NavOption>
			</a>
			<a style={{ textDecoration: "none" }} href="#section-portifolio" onClick={scrollToSection}>
				<NavOption
					className="button"
					isActive={active == "#section-portifolio" ? true : false}
					onClick={() => {
						setActive("#section-portifolio");
					}}>
					<FolderBriefcase style={{ pointerEvents: "none" }} />
				</NavOption>
			</a>

			<a style={{ textDecoration: "none" }} href="#section-experiencia" onClick={scrollToSection}>
				<NavOption
					className="button"
					isActive={active == "#section-experiencia" ? true : false}
					onClick={() => {
						setActive("#section-experiencia");
					}}>
					<Badge style={{ pointerEvents: "none" }} />
				</NavOption>
			</a>
		</NavigationBar>
	);
}
