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
import { updateHome } from "../../store/modules/home/action";

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
  const [agenda, setAgenda] = useState([]);
  const [month, setMonth] = useState(1); // Mês desejado (1 = Janeiro)
  const [ano, setAno] = useState(""); // Ano
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  const { show, cliente } = useSelector(function (state) {
    return state.home;
  });

  useEffect(() => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
  }, []);

  useEffect(() => {
    // Referência ao nó "users" no Realtime Database

    const date = new Date();
    const year = date.getFullYear(); //Pegar o ano atual
    const Ref = "ano/" + selectedYear + "/" + selectedMonth;
    // ref(db, `ano/${anoAtual}/mes/janeiro`);

    // const usersRef = db.ref(Ref);
    const usersRef = db.ref(`ano/${selectedYear}/mes/${selectedMonth + 1}`);
    let ListArry = [];
    // Ouvir mudanças nos dados
    usersRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const agendaList = [];
      for (let id in data) {
        agendaList.push({ id, ...data[id] });
      }

      agendaList.map((d, index) => {
        // d.date.map((resul, index) => {
        let list = {
          id: d.id,
          nome: d.nome,
          date: d.date, //moment(resul.date).format("DD/MM/YYYY"),
          email: d.email,
          telefone: d.telefone,
          confirmacao: d.confirmacao,
          valor: d.valor,
          adiantamento: d.adiantamento,
          observacao: d.observacao,
        };

        ListArry = [...ListArry, list];
        // });
      });

      const sortList = () => {
        return ListArry.sort((a, b) => new Date(a.date) - new Date(b.date)); // decrescentenew Date(b.date)
      };

      const listSort = sortList();

      ListArry = [];
      listSort.map((resul, index) => {
        let list = {
          id: resul.id,
          nome: resul.nome,
          date: moment(resul.date).format("DD/MM/YYYY"),
          email: resul.email,
          telefone: resul.telefone,
          confirmacao: resul.confirmacao,
          valor: resul.valor,
          adiantamento: resul.adiantamento,
          observacao: resul.observacao,
        };

        ListArry = [...ListArry, list];
      });

      setAgenda(ListArry);
      console.log(agendaList);
    });

    // Cleanup listener quando o componente é desmontado
    return () => {
      usersRef.off();
    };
  }, [selectedMonth, selectedYear]);

  function setShow(value) {
    dispatch(updateHome({ show: value }));
  }

  function handleLeftDateClick() {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
  }

  function handleRightDateClick() {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
  }

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
            width={"40%"}
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
              key={index}
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
