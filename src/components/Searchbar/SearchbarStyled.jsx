// import styled from "@emotion/styled";
// import { Form, Field } from 'formik';
// import searchIcon from '../Styled/search.svg';

// export const SearchBar = styled.header`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;

// export const SearchForm = styled(Form)`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   max-width: 600px;
//   background-color: #fff;
//   border-radius: 3px;
//   overflow: hidden;
// `;

// export const SearchFormButton = styled.button`
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   border: 0;
//   background-image: url(${searchIcon});
//   background-size: 40%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;

//   :hover {
//     opacity: 1;
//   }
// `;

// export const SearchFormButtonLabel = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;

// export const SearchFormInput = styled(Field)`
//   display: inline-block;
//   width: 100%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;

//   ::placeholder {
//     font: inherit;
//     font-size: 18px;
//   }
// `;


import styled from '@emotion/styled';
import { BiSearchAlt } from 'react-icons/bi';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 100%;
  background-color: RGBA(0, 8, 0, 0.68);
  border-bottom: 4px solid RGBA(0, 8, 0, 0.1);
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  border-bottom: 4px solid RGBA(0, 8, 0, 0.1);
`;

export const Input = styled.input`
  margin-right: 5px;
  border: 1px solid RGBA(255, 255, 0, 0.08);
  border-radius: 4px;
  height: 41px;
  width: 300px;
  padding-left: 15px;
  color: RGBA(0, 8, 0, 0.68);
  font-size: 20px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  &:foucs {
    outline: 3px solid RGBA(255, 255, 0, 0.4);
  }
`;
export const Icon = styled(BiSearchAlt)`
  width: 32px;
  height: 32px;
  fill: RGBA(0, 8, 0, 0.68);
`;
export const Button = styled.button`
  position: absolute;
  top: 24%;
  left: 85%;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  &:focus {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    outline: none;
  }
`;