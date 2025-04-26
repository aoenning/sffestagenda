import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as s from "./styles";
import { db } from "./../../firebase.js";
import Card from "../../Components/Card";
import moment from "moment";
import { FiSearch } from "react-icons/fi";
import { MdDateRange, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { GrNext, GrFormPrevious } from "react-icons/gr";
import BottomComponet from "../../Components/BottomComponet";
import { colors } from "../../Styles";
import Modal from "../../Components/Modal";
import {
  updateHome,
  clientesResete,
  agendaAll,
  agendaDelete,
} from "../../store/modules/home/action";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function Home() {
  // const [agenda, setAgenda] = useState([]);
  // const [month, setMonth] = useState(1); // Mês desejado (1 = Janeiro)
  const [ano, setAno] = useState(""); // Ano
  const dispatch = useDispatch();
  const [agendamentos, setAgendamentos] = useState({});
  // const [selectedMonth, setSelectedMonth] = useState(0);
  // const [selectedYear, setSelectedYear] = useState(0);

  const { show, cliente, refresh, selectedYear, selectedMonth, agenda } =
    useSelector(function (state) {
      return state.home;
    });

  useEffect(() => {
    const today = new Date();
    let year = today.getFullYear();
    setYear(year);

    let month = today.getMonth();
    setMonth(month);
    // intial();
  }, []);

  useEffect(() => {
    intial();
  }, [selectedMonth, selectedYear, refresh]);

  function setShow(value) {
    dispatch(updateHome({ show: value }));
  }

  function setYear(value) {
    dispatch(updateHome({ selectedYear: value }));
  }

  function setMonth(value) {
    dispatch(updateHome({ selectedMonth: value }));
  }

  function handleLeftDateClick() {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);

    let year = mountDate.getFullYear();
    let month = mountDate.getMonth();

    setYear(year);
    setMonth(month);

    // setSelectedYear(mountDate.getFullYear());
    // setSelectedMonth(mountDate.getMonth());
  }

  function handleRightDateClick() {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);

    let year = mountDate.getFullYear();
    let month = mountDate.getMonth();

    setYear(year);
    setMonth(month);

    // setSelectedYear(mountDate.getFullYear());
    // setSelectedMonth(mountDate.getMonth());
  }

  function intial() {
    // dispatch(agendaAll());

    const date = new Date();
    const year = date.getFullYear(); //Pegar o ano atual
    const Ref = "ano/" + selectedYear + "/" + selectedMonth;
    let list = [];
    let ListArry = [];
    let agendaList = [];
    const usersRef = db.ref(`ano/${selectedYear}/mes/${selectedMonth + 1}`);

    usersRef.on("value", (snapshot) => {
      const data = snapshot.val();      
      ListArry = [];
      for (let id in data) {
        ListArry.push({ id, ...data[id] });
      }

      const sortList = () => {
        return ListArry.sort((a, b) => new Date(a.date) - new Date(b.date));
      };
      const listSort = sortList();
      ListArry = [];
      listSort.map((d, index) => {
        list = {
          id: d.id,
          nome: d.nome,
          date: moment(d.date).format("DD/MM/YYYY"),
          email: d.email,
          telefone: d.telefone,
          confirmacao: d.confirmacao,
          valor: d.valor,
          adiantamento: d.adiantamento,
          observacao: d.observacao,
        };
        ListArry = [...ListArry, list];
      });
      dispatch(updateHome({ agenda: ListArry }));
    });

    gerarDiasDoMes(selectedMonth, selectedYear);

    return () => {
      usersRef.off();
    };
  }

  const gerarDiasDoMes = (mes, ano) => {
    const dias = [];
    const ultimoDia = new Date(parseInt(ano), parseInt(mes + 1), 0).getDate();
    for (let dia = 1; dia <= ultimoDia; dia++) {
      dias.push(dia.toString().padStart(2, "0"));
    }
    return dias;
  };

  // const diasDoMes = gerarDiasDoMes(ano, mes);

  return (
    <s.Container>
      <h1>Agenda casa de festa SFFest</h1>
      <s.Box>
        <MdDateRange size={25} color="RED" />
        <s.Title>
          {months[selectedMonth]}/{selectedYear}
        </s.Title>

        <s.BoxIcon>
          <MdArrowBackIos size={20} onClick={handleLeftDateClick} />
          <MdArrowForwardIos size={20} onClick={handleRightDateClick} />
        </s.BoxIcon>
        <s.BoxIcon>
          <BottomComponet
            disabled={false}
            icon=""
            text={"Agendar"}
            backgroudColor={colors.yello_primary}
            bordercolor={colors.yello_primary}
            textColor={colors.white}
            // width={"40%"}
            // width="10%"
            onClick={() => {
              setShow("true");
            }}
            // loading={loading}
          />
          {/* <s.Button>Agendar</s.Button> */}
        </s.BoxIcon>
      </s.Box>
      {show && (
        <Modal
          show={() => {}}
          data={""}
          onClick={(item) => {}}
          // value={produto.descricao_material}
          onChange={(txt) => {}}
        />
      )}
      <s.Area>
        <s.CardContainer>
          {agenda.map((res, index) => (
            <Card
              id={res.id}
              nome={`${res.nome}`}
              date={res.date}
              email={res.email}
              telefone={res.telefone}
              confirmacao={res.confirmacao}
              valor={res.valor}
              adiantamento={res.adiantamento}
              observacao={res.observacao}
            />
          ))}
        </s.CardContainer>
      </s.Area>
    </s.Container>
  );
}

export default Home;
