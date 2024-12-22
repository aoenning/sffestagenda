import React, { useEffect, useState } from "react";
import * as s from "./styles";

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
        <h1>{date}</h1>
        <h1>{email}</h1>
        <h1>{telefone}</h1>
        <h1>{confirmacao}</h1>
        <h1>{valor}</h1>
        <h1>{adiantamento}</h1>
        <h1>{observacao}</h1>
      </s.BoxSubTitle>
    </s.Container>
  );
}

export default Card;
