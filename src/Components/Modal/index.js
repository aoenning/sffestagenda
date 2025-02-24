import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { colors } from "../../Styles";
import InputComponent from "../../Components/Input";
import BottomComponet from "../../Components/BottomComponet";
import { useDispatch, useSelector } from "react-redux";
import { get, ref, set, push } from "firebase/database";
import { db } from "./../../firebase.js";
import {
  MdOutlineClose as IconClosed,
  //   RxDoubleArrowRight as ArrowRight,
} from "react-icons/md";

import { updateHome, clientesResete } from "../../store/modules/home/action";

function Modal({ exibir, data, onClick, value, onChange }) {
  const dispatch = useDispatch();
  const { show, cliente } = useSelector(function (state) {
    return state.home;
  });

  useEffect(() => {
    const mes = "";
    const dia = "";
    const date = new Date();
    const year = date.getFullYear(); //Pegar o ano atual
    const month = date.getUTCMonth() + 1; //Pegar mes atual
    const day = date.getUTCDate(); //Pegar dia atual

    const monthFormatado = String(month).padStart(2, "0");
    const dayFormatado = String(day).padStart(2, "0");
    const dateAtual = year + "-" + monthFormatado + "-" + dayFormatado;

    setCliente("date", dateAtual);
  }, []);

  function setCliente(key, value) {
    dispatch(
      updateHome({
        cliente: { ...cliente, [key]: value },
      })
    );
  }

  function setShow(value) {
    dispatch(updateHome({ show: value }));
  }

  function save() {
    let dataSelecionada = new Date(cliente.date);
    let month = dataSelecionada.getMonth() + 1;
    let year = dataSelecionada.getFullYear();

    const refAno = ref(db, `ano/${year}/mes/${month}`);

    // Criando um ID único automaticamente
    const novoDadosRef = push(refAno);

    // Salvando os dados
    set(novoDadosRef, cliente)
      .then(() => {
        dispatch(clientesResete());
        setShow("");
      })
      .catch((error) => {
        console.error("Erro ao salvar os dados:", error);
      });
  }

  return (
    <s.Container>
      <s.Modal>
        <s.Title>Informe os dados para agendamento</s.Title>
        <s.Area>
          <s.AreaInput width="90%">
            <s.TitleInput>Selecione a data</s.TitleInput>
            <InputComponent
              type="Date"
              value={cliente.date}
              onChange={(txt) => {
                setCliente("date", txt.target.value);
              }}
            />
          </s.AreaInput>
          <s.AreaInput width="90%">
            <s.TitleInput>Nome do cliente *</s.TitleInput>
            <InputComponent
              type="text"
              value={cliente.nome}
              onChange={(txt) => {
                setCliente("nome", txt.target.value);
              }}
            />
          </s.AreaInput>
          <s.AreaInput width="90%">
            <s.TitleInput>Telefone *</s.TitleInput>
            <InputComponent
              type="text"
              value={cliente.telefone}
              onChange={(txt) => {
                setCliente("telefone", txt.target.value);
              }}
            />
          </s.AreaInput>
          <s.AreaInput width="90%">
            <s.TitleInput>E-mail *</s.TitleInput>
            <InputComponent
              type="text"
              value={cliente.email}
              onChange={(txt) => {
                setCliente("email", txt.target.value);
              }}
            />
          </s.AreaInput>
          <s.AreaInput width="90%">
            <s.TitleInput>Informar adiantamento *</s.TitleInput>
            <InputComponent
              type="Text"
              value={cliente.adiantamento}
              onChange={(txt) => {
                setCliente("adiantamento", txt.target.value);
              }}
            />
          </s.AreaInput>
          <s.AreaBotton>
            <BottomComponet
              disabled={false}
              icon=""
              text={"Cancelar"}
              backgroudColor={colors.red}
              bordercolor={colors.yello_primary}
              textColor={colors.white}
              width={"40%"}
              onClick={() => setShow("")}
            />
            <BottomComponet
              disabled={false}
              icon=""
              text={"Salvar"}
              backgroudColor={colors.green}
              bordercolor={colors.yello_primary}
              textColor={colors.white}
              width={"40%"}
              // width="10%"
              onClick={() => {
                save();
              }}
              // loading={loading}
            />
          </s.AreaBotton>
        </s.Area>
      </s.Modal>
    </s.Container>
  );
}

export default Modal;
