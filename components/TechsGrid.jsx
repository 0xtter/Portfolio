import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

//Contexto

//Ícones
import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Java } from "@styled-icons/fa-brands/Java";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Oracle } from "@styled-icons/simple-icons/Oracle";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Android } from "@styled-icons/boxicons-logos/Android";
import { Ios } from "@styled-icons/simple-icons/Ios";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Docker } from "@styled-icons/boxicons-logos/Docker";
import { Wordpress } from "@styled-icons/boxicons-logos/Wordpress"
import { Kalilinux } from "@styled-icons/simple-icons/Kalilinux"
import { Nextcloud } from "@styled-icons/simple-icons/Nextcloud"
import { Nginx } from "@styled-icons/simple-icons/Nginx"

const TechGrid = styled.footer`
	padding-top: 30px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	grid-column-gap: 5px;
	grid-row-gap: 15px;
	transition: all 0.3s ease;
	width: 100%;
	text-align: center;
	margin: auto;
`;

const Tech = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-width: 100px;
	height: 44px;
	//background-color: ${(props) => props.theme.colors.backgroundSecondary};
	padding: 15px;
	border-radius: 4px;

	svg {
		width: 34px;
		height: 34px;
		color: ${(props) => props.theme.colors.backgroundSecondary};
		transition: all 0.3s ease;
	}

	svg:hover {
		color: ${(props) => props.theme.colors.branding};
	}
`;

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	padding-top: 30px;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

export default function TechsGrid(props) {
	return (
		<TechGrid>
			<Fade triggerOnce>
				<Tech>
					<Docker />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Wordpress />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Kalilinux />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Nextcloud />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Nginx />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Amazonaws />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Visualstudiocode />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Mongodb />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Postgresql />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Sqlite />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Javascript />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Java />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Python />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Nodejs />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Html5 />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Git />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Oracle />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Mysql />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Linux />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Windows />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Android />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Ios />
				</Tech>
			</Fade>
			<Fade triggerOnce>
				<Tech>
					<Figma />
				</Tech>
			</Fade>

			<Fade triggerOnce>
				<Tech>
					<Adobephotoshop />
				</Tech>
			</Fade>
		</TechGrid>
	);
}
