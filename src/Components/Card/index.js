import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { MdPaid, MdCall, MdCalendarMonth } from "react-icons/md";

function Card({
  key,
  nome,
  date,
  email,
  telefone,
  confirmacao,
  valor,
  adiantamento,
  observacao,
}) {
  return (
    <s.Container>
      <s.BoxTitle>
        <s.Titulo>{nome}</s.Titulo>
      </s.BoxTitle>
      <s.BoxSubTitle>
        <s.Area>
          <MdCalendarMonth color="WHITE" />
          <s.SubTitulo>{date}</s.SubTitulo>
        </s.Area>
        <s.Area>
          <MdCall color="WHITE" />
          <s.SubTitulo>{telefone}</s.SubTitulo>
        </s.Area>
        <s.Area>
          <MdPaid color="WHITE" />
          <s.SubTitulo>{adiantamento}</s.SubTitulo>
        </s.Area>
        <s.Area>
          <s.SubTitulo>{confirmacao}</s.SubTitulo>
        </s.Area>
        <s.Area>
          <s.SubTitulo>{valor}</s.SubTitulo>
        </s.Area>
        <s.Area>
          <s.SubTitulo>{observacao}</s.SubTitulo>
        </s.Area>
      </s.BoxSubTitle>
    </s.Container>
  );
}

export default Card;
