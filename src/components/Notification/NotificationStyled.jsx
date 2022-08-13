import styled from "@emotion/styled";
import { font } from "../Styled/Mixins";

export const Message = styled.p`
  font-size: 28px;
	${font({ fs: 16, fw: 500, lh: 18 })};
	color: #2a2a2a;
	font-family: Georgia;
`;