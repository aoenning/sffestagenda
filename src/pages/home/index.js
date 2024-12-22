import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { db } from "./../../firebase.js";
import Card from "../../Components/Card";
import moment from "moment";

function Home() {
  const [agenda, setAgenda] = useState([]);
  const [month, setMonth] = useState(1); // Mês desejado (1 = Janeiro)
  const [ano, setAno] = useState(""); // Ano

  useEffect(() => {
    // Referência ao nó "users" no Realtime Database

    const date = new Date();
    const year = date.getFullYear(); //Pegar o ano atual
    const Ref = "ano/" + year;

    if (ano > year) {
      year = ano;
      Ref = "ano/" + year;
    }

    const usersRef = db.ref(Ref);
    let ListArry = [];
    // Ouvir mudanças nos dados
    usersRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const agendaList = [];
      for (let id in data) {
        agendaList.push({ id, ...data[id] });
      }

      agendaList.map((d, index) => {
        d.date.map((resul, index) => {
          let list = {
            id: d.id,
            nome: resul.nome,
            date: resul.date, //moment(resul.date).format("DD/MM/YYYY"),
            email: resul.email,
            telefone: resul.telefone,
            confirmacao: resul.confirmacao,
            valor: resul.valor,
            adiantamento: resul.adiantamento,
            observacao: resul.observacao,
          };

          ListArry = [...ListArry, list];
        });
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
  }, [ano]);

  return (
    <s.Container>
      <h1>Agenda casa de festa SFFest</h1>
      {/* <h1>
        Informe o ano
        <s.InputAno
          type="text"
          value={ano}
          onChange={(txt) => {
            setAno(txt.target.value);
          }}
        />
      </h1> */}
      <s.Area>
        <s.CardContainer>
          {agenda.map(
            (res, index) => (
              // data.date.map((res, index) => (
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
            )
            // ))
          )}
        </s.CardContainer>
      </s.Area>
    </s.Container>
  );
}

export default Home;
