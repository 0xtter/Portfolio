import styled from "styled-components";

import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/bootstrap/Github";
import { LogoWhatsapp } from "@styled-icons/ionicons-solid/LogoWhatsapp";

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: 600px) {
		width: 100%;
		//justify-content: space-between;
		margin-bottom: 20px;
	}
`;

const ButtonSocialMediaIcon = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 32px;
	height: 32px;
	transition: all 0.3s ease;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}

	&:active {
		opacity: 0.5;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;
		transition: all 0.3s ease;

		&:hover {
			color: ${(props) => props.theme.colors.branding};
		}
	}

	@media (max-width: 600px) {
		margin-left: 3px;
		margin-right: 3px;
	}

	/* :hover {
		transform: translateY(-7px);
	} */
`;

export default function SocialNetworkRowStack() {
	return (
		<SocialMediaContainer>

			<ButtonSocialMediaIcon href="https://github.com/bengo237" target="_blank">
				<Github />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="mailto:chaneldylanebengono@gmail.com" target="_blank">
				<MailSend />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://wa.me/message/P4C3X3IRXVG7C1" target="_blank">
				<LogoWhatsapp />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://www.linkedin.com/in/chanel-dylane-b-91b850194" target="_blank" data-splitbee-event="linkedin-access">
				<LinkedinSquare />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://x.com/chaneldylaneben" target="_blank">
				<Twitter />
			</ButtonSocialMediaIcon>

		</SocialMediaContainer>
	);
}

/*

Container com as cores das techs

<SocialMediaContainer>
			<ButtonSocialMediaIcon onClick={redirectToFacebook}>
				<Facebook style={{ color: "#3C5A99" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToGithub}>
				<Github style={{ color: "#818181" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToEmail}>
				<MailSend style={{ color: "#DB4437" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToWhatsapp}>
				<LogoWhatsapp style={{ color: "#25d366" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToTelegram}>
				<Telegram style={{ color: "#0088cc" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToInstagram}>
				<Instagram style={{ color: "#c13584" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToLinkedin}>
				<LinkedinSquare style={{ color: "#0077b5" }} />
			</ButtonSocialMediaIcon>
		</SocialMediaContainer>
*/
