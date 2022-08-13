import styled from '@emotion/styled';
import { font, widthHeight } from "../Styled/Mixins";

export const BtnList = styled.ul`
	display: flex;
	padding: 0;
	gap:10px;
`
export const BtnItem = styled.li`
display: flex;
`
export const Btn = styled.button`
	${font({ fs: 14, fw: 500, lh: 18 })};
	${widthHeight(80, 30)};
	font-family: 'Georgia', sans-serif;
  letter-spacing: 0.2em;
  color: #000;
  background-color: transparent;
  border:2px solid gainsboro;
  border-radius: 8px;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
	:hover {
    background-color:gainsboro;
}
`