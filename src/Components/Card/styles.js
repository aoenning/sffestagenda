import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
  height: 300px;
  /* justify-content: center; */
  align-items: center;
  background-color: #fff;
  margin: 10px 10px 10px 10px;
  font-family: monospace;
  display: flex;
  flex-direction: column;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  background: #000;
  display: flex;
  flex-direction: column;
`;

export const BoxSubTitle = styled.div`
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  background: #b22222;
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.text`
  font-size: 20px;
  color: #fff;
  /* margin: 10px 10px 10px 10px; */
  align-items: center;
  justify-content: center;
`;
