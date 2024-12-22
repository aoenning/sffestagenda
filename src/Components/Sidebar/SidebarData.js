import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {
  MdOutlineRecycling as Estoque,
  MdOutlineBusinessCenter as Venda,
} from "react-icons/md";
import {
  MdOutlineAutoGraph as Grafico,
  MdOutlineSettings as Configuracao,
  MdAddchart as Cadastro,
  MdAttachMoney as Financeiro,
  MdOutlineImportContacts as Contabilidade,
} from "react-icons/md";

export const SidebarData = [
  {
    path: "/",
    id: 1,
    name: "Home",
    icon: <Venda />,
    item: [],
  }
];
