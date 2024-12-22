import styled from "styled-components";
import { colors } from "../../Styles";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  background: ${colors.green};
  width: ${(props) => (props.toggle ? "12%" : "2.5%")};
  box-shadow: 0 1px 1px 0px rgba(192, 208, 230, 0.8);
  /* box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); */
  /* position: fixed; */
  height: 100vh;
  main {
    width: 100%;
    padding: 20px;
  }
`;

export const Box = styled.div`
  margin-top: 25px;
  align-items: center;
  color: ${colors.white};
  /* height: 100%; */
  padding: 5px;
  /* justify-content: center; */
  .link {
    display: flex;
    color: white;
    padding-top: ${(props) => (props.toggle ? "5%" : "5%")};
    padding-left: ${(props) => (props.toggle ? "5%" : "5%")};
    /* gap: 15px; */
    transition: all 0.5s;
    background-color: ${colors.green};
    text-decoration: none;
    /* justify-content: center; */
    /* align-items: center; */
  }

  .link:hover {
    color: ${colors.white};
    transition: all 0.5s;
    background-color: ${colors.green_claro};
    opacity: 0.8;
    text-decoration: none; //underline;
  }

  .active {
    background-color: ${colors.green_claro};
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  color: ${colors.white};
  font-size: 25px;
  opacity: 0.9;
`;

export const Area = styled.div`
  padding: 5px;
  margin-left: 10px;
  /* align-items: center; */
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const AreaMenu = styled.div`
  padding: 5px;
  /* align-items: center; */
  /* justify-content: center; */
  display: flex;
  flex-direction: row;
  /* border: solid 1px; */
  /* width: 90%; */
`;

export const AreaSubMenu = styled.div`
  /* width: 90%; */
  /* height: 90%; */
  padding: 5px;
  display: flex;
  flex-direction: row;
  /* position: absolute; */
  flex-direction: column;
  background: ${colors.cinza};
  justify-content: center;
  border: solid 1px;
  border-color: ${colors.cinza};
  display: none;

  :hover {
    display: block;
  }
`;

export const Title = styled.text`
  color: ${colors.white};
  font-size: 17px;

  /* :hover {
    color: ${colors.white};
    font-size: 25px;
    background: ${colors.header};
  } */
`;

export const TitleSidebar = styled.text`
  color: ${colors.white};
  font-size: 20px;

  /* :hover {
    color: ${colors.white};
    font-size: 25px;
    background: ${colors.header};
  } */
`;

export const TitleMenu = styled.text`
  color: ${colors.laraja};
  font-size: 12px;

  /* :hover {
    color: ${colors.white};
    font-size: 25px;
    background: ${colors.header};
  } */
`;

export const AreUser = styled.div`
  margin: 25px 0 10px 0;
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  align-items: center;
  padding: 5px;
  height: ${(props) => (props.toggle ? "15%" : "3%")};

  img {
    width: 140px;
    height: 140px;
    border-radius: 70px;
    margin: 0 0 10px 0;
    border: 2px solid;
    border-color: ${colors.yello};
  }
`;

export const AreaRodape = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid; */
  height: 6%;
  background-color: ${colors.green};
  bottom: 0px;
  position: absolute;
  width: ${(props) => (props.toggle ? "10.5%" : "2.5%")};
  /* border-top: 1px ${colors.cinza_leve}; */
  /* box-shadow: 0px 0px 0px 1px rgba(192, 192, 192, 0.4); */
  /* opacity: 0.3; */

  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  :active {
    transform: scale(0.98);
    box-shadow: 2px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;
