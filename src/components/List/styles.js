import styled from "styled-components";

export const Container = styled.ul`
  padding: 0;
  margin: 0;

  &.hide {
    display: none;
  }
`;

export const List = styled.li`
  list-style: none;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${({ paddingLeft }) =>
    paddingLeft
      ? `padding:15px  26px 15px ${26 + paddingLeft * 20}px`
      : "padding: 15px 26px;"};

  &:hover {
    background: #d8d8d8;
  }

  & > input[type="checkbox"] {
    display: inline-block;
    margin-right: 15px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  & > label {
    width: 100%;
    cursor: pointer;
  }
`;

export const ArrowButton = styled.button`
  display: block;
  width: 10px;
  height: 10px;
  padding: 0;
  margin: 0;
  transform: rotate(46deg);
  border-top: none;
  border-left: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  transition: transform 0.2s ease-in;

  &.active {
    transform: rotate(226deg);
    border-right: 2px solid #01aeef;
    border-bottom: 2px solid #01aeef;
  }
`;
