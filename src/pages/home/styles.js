import styled from "styled-components";
import { colors } from "../../Styles";

export const Container = styled.body`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  padding-top: 30px;
  outline: none; 
`;

export const Area = styled.body`
  width: 100%;
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  /* margin-top: 30px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InputAno = styled.input`
  width: 100px;
  height: 20px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  margin: 10px 0px 0px 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const BoxIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 5px 5px 25px;
`;

export const Title = styled.text`
  margin: 0px 5px 0px 5px;
  color: ${colors.brack};
  font-size: 20px;
  font-weight: bold;
  opacity: 0.8;
`;

export const BoxButton = styled.div``;

export const BoxMes = styled.div``;

export const Button = styled.button`
  width: 100px;
  background-color: ${colors.brue};
  color: ${colors.white};
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  font-size: 13px;
  border-radius: 5px;
  outline: none;
  transition: 0.2s all;
  :active {
    transform: scale(0.98);
    /* box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); */
  }

  :hover {
    opacity: 0.8;
  }
`;
