import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { MdPaid, MdCall, MdCalendarMonth } from "react-icons/md";
import BottomComponet from "../BottomComponet";
import { colors } from "../../Styles";
import { db } from "./../../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { get, ref, set, remove } from "firebase/database";
import {
  updateHome,
  clientesResete,
  agendaDelete,
} from "../../store/modules/home/action";
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
  const { show, cliente, refresh, selectedDate, selectedNome, key } =
    useSelector(function (state) {
      return state.home;
    });

  function setRefresh(value) {
    dispatch(updateHome({ refresh: value }));
  }

  function setSelectedDate(value) {
    dispatch(updateHome({ selectedDate: value }));
  }

  function setSelectedNome(value) {
    dispatch(updateHome({ selectedNome: value }));
  }

  function setSelectedKey(value) {
    dispatch(updateHome({ key: value }));
  }

  const handleDelete = async (id, selectedNome, selectedDate) => {
    setSelectedDate(selectedDate);
    setSelectedNome(selectedNome);
    setSelectedKey(id);

    dispatch(agendaDelete());
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
