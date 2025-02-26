import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { MdPaid, MdCall, MdCalendarMonth } from "react-icons/md";
import BottomComponet from "../BottomComponet";
import { colors } from "../../Styles";
import { db } from "./../../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { get, ref, set, remove } from "firebase/database";
import { updateHome, clientesResete } from "../../store/modules/home/action";
import moment from "moment";

function Card({
  id,
  nome,
  date,
  email,
  telefone,
  confirmacao,
  valor,
  adiantamento,
  observacao,
}) {
  const dispatch = useDispatch();
  const { show, cliente, refresh } = useSelector(function (state) {
    return state.home;
  });

  function setRefresh(value) {
    dispatch(updateHome({ refresh: value }));
  }

  const handleDelete = async (id, nome, date) => {
    const dataOriginal = date; // Data no formato "DD/MM/YYYY"
    const dataFormatada = moment(dataOriginal, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );
    const dataSelecionada = new Date(dataFormatada);
    let month = dataSelecionada.getMonth() + 1;
    let year = dataSelecionada.getFullYear();

    const refDados = ref(db, `ano/${year}/mes/${month}/${id}`);

    try {
      await remove(refDados);
      setRefresh("true");
    } catch (error) {
      console.error("Erro ao deletar:", error);
    }
  };

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
      <s.AreaRodape>
        <BottomComponet
          disabled={false}
          icon=""
          text={"Excluir"}
          backgroudColor={colors.cinza_forte}
          bordercolor={colors.white}
          textColor={colors.white}
          width={"90%"}
          // width="10%"
          onClick={() => {
            handleDelete(id, nome, date);
          }}
        />
      </s.AreaRodape>
    </s.Container>
  );
}

export default Card;
