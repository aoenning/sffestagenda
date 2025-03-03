import React, { useEffect, useState, useContext } from "react";
import createSagaMiddleware from "redux-saga";
import { takeLatest, all, call, put, select } from "redux-saga/effects";

import {
  agendaGET,
  agendaAll,
  updateHome,
  deleteAgenda,
  clientesResete,
  saveAll,
} from "./../../modules/home/action";
import types from "./types";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { db } from "./../../../firebase.js";
import { get, ref, set, remove, push } from "firebase/database";

let list = {
  id: "01",
  nome: "Anderson",
  date: "2025-03-01",
  email: "and.oenning@gmail.com",
  telefone: "65996702029",
  confirmacao: "X",
  valor: "450,00",
  adiantamento: "100",
  observacao: "Teste",
};

export function* getDadosAgenda() {
  const { selectedYear, selectedMonth, agenda } = yield select(
    (state) => state.home
  );

  const date = new Date();
  const year = date.getFullYear(); //Pegar o ano atual
  const month = selectedMonth + 1; //Pegar o ano atual
  // const Ref = "ano/" + selectedYear + "/" + selectedMonth;
  // let list = [];
  let ListArry = [];
  let agendaList = [];
  let caminho = `ano/${selectedYear}/mes/${month}`;

  // try {
  //   let usersRef = yield ref(db, caminho); // Caminho no Realtime Database
  //   const snapshot = yield get(usersRef);

  //   if (snapshot.exists()) {
  //     // ListArry.push.toString(Object.values(snapshot.val()));
  //     ListArry = Object.values(snapshot.val());

  //     // snapshot.forEach((childSnapshot) => {
  //     //   childSnapshot.val().map((item) => {
  //     //     // ids.push(childSnapshot.key); // Pegando os IDs dentro de "03"
  //     //     ListArry = item;
  //     //   });
  //     // });

  //     const sortList = () => {
  //       return ListArry.sort((a, b) => new Date(a.date) - new Date(b.date));
  //     };
  //     const listSort = sortList();

  //     ListArry = [];
  //     listSort.map((item) => {
  //       if (item?.id) {
  //       }

  //       list = {};

  //       list = {
  //         adiantamento: item?.adiantamento,
  //         confirmacao: item?.confirmacao,
  //         date: moment(item.date).format("DD/MM/YYYY"),

  //         email: item.email,
  //         telefone: item.telefone,
  //         valor: item.valor,
  //         observacao: item.observacao,
  //         id: item.id,
  //         nome: item.nome,
  //       };
  //       ListArry = [...ListArry, list];
  //     });

  //     put(updateHome({ agenda: ListArry }));
  //   } else {
  //     console.log("Nenhum dado encontrado.");
  //   }
  // } catch (error) {
  //   console.error("Erro ao buscar os dados:", error);
  // } finally {
  // }

  let dadosRef = db.ref(`ano/${selectedYear}/mes/${selectedMonth + 1}`);

  dadosRef.on("value", (snapshot) => {
    const data = snapshot.val();
    // agendaList = [];
    for (let id in snapshot.id) {
      id = snapshot.id;
      agendaList.push({ agendaList, ...data });
    }

    const sortList = () => {
      return ListArry.sort((a, b) => new Date(a.date) - new Date(b.date));
    };
    //   const listSort = sortList();
    //   ListArry = [];
  });
  return () => {
    dadosRef.off();
  };
}

export function* handleDelete() {
  const { selectedDate, selectedNome, key } = yield select(
    (state) => state.home
  );

  const dataOriginal = selectedDate; // Data no formato "DD/MM/YYYY"
  const dataFormatada = moment(dataOriginal, "DD/MM/YYYY").format("YYYY-MM-DD");
  const dataSelecionada = new Date(dataFormatada);
  let month = dataSelecionada.getMonth() + 1;
  let year = dataSelecionada.getFullYear();

  const refDados = ref(db, `ano/${year}/mes/${month}/${key}`);

  try {
    yield remove(refDados);
    yield put(updateHome({ refresh: "true" }));
  } catch (error) {
    console.error("Erro ao deletar:", error);
  }
}

export function* handleSave() {
  const { selectedYear, selectedMonth, agenda, cliente } = yield select(
    (state) => state.home
  );
  let dataSelecionada = new Date(cliente.date);
  let month = dataSelecionada.getMonth();
  let year = dataSelecionada.getFullYear();

  const refAno = ref(db, `ano/${year}/mes/${month + 1}`);

  // Criando um ID único automaticamente
  const novoDadosRef = push(refAno);

  // Salvando os dados
  try {
    yield set(novoDadosRef, cliente);

    yield put(updateHome({ selectedYear: year }));
    yield put(updateHome({ selectedMonth: month }));
    // yield put(updateHome({ refresh: "true" }));
    yield put(updateHome({ show: "" }));

    // yield put(agendaAll());
    // yield clientesResete();
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
  }
}

export default all([
  takeLatest(types.REQUEST_AGENDA, getDadosAgenda),
  takeLatest(types.DELETE_AGENDA, handleDelete),
  takeLatest(types.SAVE_AGENDA, handleSave),
]);
