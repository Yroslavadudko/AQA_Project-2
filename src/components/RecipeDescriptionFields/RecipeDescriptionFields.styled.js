import { Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledFormInsight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-bottom: 80px;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
  @media ${devices.desktop} {
    gap: 40px;
    justify-content: start;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 34px;
  border: none;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.secondBorderColor};
  background-color: transparent;
  outline: none;
  color: ${props => props.theme.textColor};
  padding-bottom: 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;
  transition: border-color 400ms ease;

  @media ${devices.tablet} {
    padding-bottom: 18px;
    height: 41px;
  }

  &:focus,
  &:active,
  &:hover,
  &::selection {
    outline: none;
    border-color: ${props => props.theme.hoverBorderColor};
  }

  &::placeholder {
    color: ${props => props.theme.secondBorderColor};
  }
`;

export const StyledError = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 11px;
  font-weight: 400;
  line-height: calc (14 / 11);
  color: ${props => props.theme.errorStateColor};
`;

export const StyledImgBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin: 0;
`;

export const StyledInputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const StyledFildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  width: 335px;

  @media ${devices.tablet} {
    gap: 40px;
    width: 352px;
  }
  @media ${devices.desktop} {
    width: 393px;
  }
`;

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const StyledImgLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  cursor: pointer;
  transition: box-shadow 400ms ease;

  @media ${devices.tablet} {
    width: 320px;
    height: 320px;
  }
  @media ${devices.desktop} {
    width: 400;
    height: 400;
  }
  &:hover,
  &:focus {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(76, 115, 146, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(76, 115, 146, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(76, 115, 146, 0.2);
  }
`;

export const StyledImageInput = styled.input`
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`;

export const StyledWrapperSelect = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 34px;
  padding-bottom: 14px;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.secondBorderColor};
  transition: border-color 400ms ease;

  @media ${devices.tablet} {
    padding-bottom: 18px;
    height: 41px;
  }
  &:focus,
  &:active,
  &:hover,
  &::selection {
    outline: none;
    border-color: ${props => props.theme.hoverBorderColor};
  }
`;

export const StyledLabelSelect = styled.label`
  color: ${props => props.theme.secondBorderColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;
`;

export const StyledSelect = styled(Select)`
  & .react-select__control {
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    gap: 8px;
    align-items: start;

    &--is-focused,
    &--menu-is-open {
      outline: none;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
    }
  }

  // стилизует инпут выпадающего списка ================
  & .react-select__single-value {
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    text-align: right;
    letter-spacing: -0.02em;
    color: black;
    color: ${props => props.theme.textColor};
    margin-top: 3px;
    padding-bottom: 3px;

    @media ${devices.tablet} {
      font-size: 16px;
    }
  }

  & .react-select__value-container {
    padding: 0;
    align-items: start;
  }

  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
    }
  }
  // стилизует выпадающий список ================
  & .react-select__menu-list {
    margin-top: 0;
    padding: 0;
    height: 193px;
    text-align: left;
    border-radius: 20px;
    color: #f3f3f3;

    margin-top: 8px;
    margin-bottom: 8px;
  }

  & .react-select__menu {
    width: 131px;
    border-radius: 20px;
    background-color: #161f37;
    color: #f3f3f3;

    @media ${devices.tablet} {
      width: 139px;
    }
    @media ${devices.desktop} {
      width: 154px;
    }
  }

  // стилизует опции внутри списка ================
  & .react-select__option {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(16 / 12);
    background-color: #161f37;

    @media ${devices.desktop} {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      color: #f3f3f3;
      background-color: #161f37;
    }
  }

  // стилизует стрелочку выпадающего списка ================
  & .react-select__indicators {
    height: 20px;
    display: flex;
    align-items: center;
  }

  & .react-select__dropdown-indicator {
    padding: 0;
    color: ${props => props.theme.textColor};
    outline: none;
    /* transition: transform 0.2s; */
    align-items: center;

    &:focus,
    &:hover,
    &::selection,
    &:active {
      padding: 0;
      /* transform: rotate(180deg); */
      color: ${props => props.theme.textColor};
      outline: none;
    }
  }
  // =========================================

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__placeholder {
    color: #f3f3f3;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(14 / 14);
  }
`;
