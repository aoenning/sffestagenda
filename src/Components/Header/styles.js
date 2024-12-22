import styled from "styled-components";
import { colors } from "../../Styles";

export const Container = styled.div`
  height: 100vh;
  padding: 10px;
  background: ${colors.yello_primary};
  color: ${colors.brack};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 01px solid rgba(230, 236, 245, 0.2);
  border-left: 01px solid rgba(230, 236, 245, 0.2);
  height: 5%;
`;

export const Box = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  /* padding: 15px; */
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.laraja_forte};
  justify-content: center;
  margin: 2px;
  /* height: 90%; */

  /* img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  } */
`;

export const Title = styled.text`
  color: ${colors.segudary};
  font-size: 10px;
  /* margin-left: 10px; */
`;

export const SubTitle = styled.text`
  color: ${colors.cinza_leve};
  font-size: 13px;
  margin-left: 10px;
  margin-top: 5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
`;

export const AreaUser = styled.div``;
