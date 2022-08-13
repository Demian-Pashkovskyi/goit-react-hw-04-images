import styled from '@emotion/styled';
import { font } from "../Styled/Mixins";

export const StatsList = styled.ul`
display: flex;
align-items: flex-start;
flex-direction: column;
`
export const StatisticValue = styled.li`
	${font({ fs: 16, fw: 500, lh: 18 })};
  margin: 5px 0;
  font-family: Georgia;
  text-align: center;
	color: #000;`