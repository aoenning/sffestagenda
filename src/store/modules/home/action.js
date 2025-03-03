import React from "react";
import types from "./types";

export function agendaGET(payload) {
  return { type: types.GET_AGENDA, payload };
}

export function agendaAll(payload) {
  return { type: types.REQUEST_AGENDA, payload };
}

export function saveAll(payload) {
  return { type: types.SAVE_AGENDA, payload };
}

export function agendaDelete(payload) {
  return { type: types.DELETE_AGENDA, payload };
}

export function updateHome(payload) {
  return { type: types.UPDATE_HOME, payload };
}

export function clientesResete(payload) {
  return { type: types.RESETE_CLIENTE, payload };
}
