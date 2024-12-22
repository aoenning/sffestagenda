import React, { useEffect, useState, useContext } from "react";
import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { agendaAll } from "./action";

import { agendaAll as getAgenda } from "./../../modules/home/action";
import types from "./types";
import { useDispatch, useSelector } from "react-redux";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export function* requestAgenda() {}

export default all([takeLatest(types.REQUEST_AGENDA, requestAgenda)]);
