import styled from "styled-components";
import { colors } from "../../Styles";

export const Container = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 300px;
  align-items: center;
  background-color: #fff;
  margin: 10px 10px 10px 10px;
  font-family: monospace;
  display: flex;
  flex-direction: column;
  padding: 10px; */

  background: ${colors.cinza_forte};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 300px;
  height: 200px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 2px;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 50px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  justify-content: center;
  align-items: center;
  background: #b22222;
  display: flex;
  flex-direction: column;
`;

export const BoxSubTitle = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 50%;
  /* justify-content: center; */
  /* align-items: center; */
  background: ${colors.cinza_forte};
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h2`
  font-size: 20px;
  color: ${colors.white};
  margin: 0;
`;

export const SubTitulo = styled.h2`
  font-size: 15px;
  color: ${colors.white};
  margin-left: 10px;
`;
