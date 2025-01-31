import produce from "immer";
import types from "./types";

const INITIAL_STATE = {
  dialog: {
    show: false,
  },
};

function agenda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_AGENDA: {
      return produce(state, (draft) => {
        draft = { ...draft, ...action.payload };
        return draft;
      });
    }

    // case types.RESETE_CLIENTE: {
    //     return produce(state, (draft) => {
    //         draft.cliente = INITIAL_STATE.cliente;
    //         return draft;
    //     });
    // }
    // default: return state;
  }
}

export default agenda;
