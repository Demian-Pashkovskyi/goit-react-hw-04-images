import { Container, Title } from "./SectionStyled";
import propTypes from "prop-types";

export const Section = ({ title, children }) => {
	return (
		<Container>
			<Title>{title}</Title>
			{children}
		</Container>
	);
};

Section.propTypes = {
	title: propTypes.string,
	children: propTypes.node,
};