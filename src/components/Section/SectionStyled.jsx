import styled from "@emotion/styled";
import { centerBlock, font } from "../Styled/Mixins";

export const Container = styled.div`
	${centerBlock};
	padding: 30px 0;
	width: 380px;
`;
export const Title = styled.h2`
	${font({ fs: 24, fw: 600, lh: 28 })};
  margin-bottom: 16px;
	color: #008b8b;
	font-family: Menlo;
`;
