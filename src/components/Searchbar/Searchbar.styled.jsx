import styled from '@emotion/styled';

export const SearchForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 20px 0;
  background-color: #3f51b5;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  z-index: 999;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px 5px 5px 15px;
  font-size: 18px;
  outline: none;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font: inherit;
    color: #000;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.726);

  &:hover,
  &:focus {
    background-color: rgba(38, 252, 5, 0.682);
    color: #fff;
  }
`;
