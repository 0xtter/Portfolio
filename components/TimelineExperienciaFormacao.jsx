import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.title};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{
					borderBottom: `8px solid ${theme.colors.branding}`,
					boxShadow: "0px 0px 0px 0px #ccc",
					backgroundColor: theme.colors.backgroundSecondary,
				}}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>National Advanced School of Engineering,Yaounde</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelMasterDegree}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}:{""}
						<span> {language.id == "ptbr" ? "Cybersecurité & Investigation Numérique" : "Master of Engineering, Cybersecurity and Digital Investigation "}</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2024</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>a dorsys GmbH & Co. KG</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span> Security Engineer</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon/>}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Port Authority of Kribi, PAK</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Cybersecurity Engineer Intern</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon/>}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2014</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>General Delegation for National Security, DGSN</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Pre-Engineer Network Security Intern</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>EC-COUNCIL</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>CSCU: Certified Secure Computer User V2</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2021</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>AEC-CTF</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Capture The Flag</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Cybersecurity Experts Olympiad </span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>


			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2024</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>EC-COUNCIL</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>CCT: Certified Cyber Security Technician</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Coursera</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Penetration Testing, Incident Response and Forensics</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Cisco Netacad</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Cisco Ethical Hacker</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Fortinet</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>NSE3: Network Security Associate 3</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
			className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "0 10px", borderRadius: "200px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>CyberWarefare Lab</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>CPTA: Certified Purple Team Analyst V2 </span>
					</BoldText>
				</TimelineContent>
				</VerticalTimelineElement>
			</VerticalTimeline>
	);
}