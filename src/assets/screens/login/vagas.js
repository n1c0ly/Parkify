import React, { useState } from "react";
import {ScrollView,Modal,TextInput,TouchableOpacity,Text,} from "react-native";

import styled from "styled-components/native";

function Vaga({ numero, status, ocupada, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <VagaBox>
        <Numero>{numero}</Numero>
        <Status ocupada={ocupada}>{status}</Status>
        <Botao>
          <BotaoTexto>{ocupada ? "-" : "+"}</BotaoTexto>
        </Botao>
      </VagaBox>
    </TouchableOpacity>
  );
}



export default function App() {
  const [vagas, setVagas] = useState([
    { numero: "01", status: "AAA1111", ocupada: true },
    { numero: "02", status: "BBB-2222", ocupada: true },
    { numero: "03", status: "Livre", ocupada: false },
    { numero: "04", status: "CCC-3333", ocupada: true },
    { numero: "05", status: "Livre", ocupada: false },
    { numero: "06", status: "Jaj757", ocupada: true },
    { numero: "07", status: "BBB-2222", ocupada: true },
    { numero: "08", status: "Livre", ocupada: false },
    { numero: "09", status: "CCC-3333", ocupada: true },
    { numero: "10", status: "Livre", ocupada: false },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);
  const [placaInput, setPlacaInput] = useState("");

  const abrirModal = (vaga) => {
    setVagaSelecionada(vaga);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setPlacaInput("");
  };

  const adicionarCarro = () => {
    const novas = vagas.map((v) =>
      v.numero === vagaSelecionada.numero
        ? { ...v, ocupada: true, status: placaInput || "SEM-PLACA" }
        : v
    );
    setVagas(novas);
    fecharModal();
  };

  const retirarCarro = () => {
    const novas = vagas.map((v) =>
      v.numero === vagaSelecionada.numero
        ? { ...v, ocupada: false, status: "Livre" }
        : v
    );
    setVagas(novas);
    fecharModal();
  };

  return (
    <Container>
      <Titulo>VAGAS</Titulo>
      <ScrollView>
        {vagas.map((vaga, i) => (
          <Vaga
            key={i}
            numero={vaga.numero}
            status={vaga.status}
            ocupada={vaga.ocupada}
            onPress={() => abrirModal(vaga)}
          />
        ))}
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade">
        <ModalFundo>
          <ModalCard>
            {vagaSelecionada && (
              <>
                <ModalTitulo>Vaga {vagaSelecionada.numero}</ModalTitulo>

                {vagaSelecionada.ocupada ? (
                  <>
                    <SubTexto>Placa do veículo</SubTexto>
                    <Placa>{vagaSelecionada.status}</Placa>
                    <BotaoAcao cor="red" onPress={retirarCarro}>
                      <TextoBotao>Retirar</TextoBotao>
                    </BotaoAcao>
                  </>
                ) : (
                  <>
                    <SubTexto>Nenhum veículo registrado.</SubTexto>
                    <Input
                      placeholder="Digite a placa"
                      value={placaInput}
                      onChangeText={setPlacaInput}
                    />
                    <BotaoAcao cor="green" onPress={adicionarCarro}>
                      <TextoBotao>Adicionar</TextoBotao>
                    </BotaoAcao>
                  </>
                )}

                <Cancelar onPress={fecharModal}>Cancelar</Cancelar>
              </>
            )}
          </ModalCard>
        </ModalFundo>
      </Modal>
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  background-color: #ffe8fb;
  padding: 20px;
  padding-top: 50px;
`;

const Titulo = styled.Text`
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 10px #fff;
`;

const VagaBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f5a6e0;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 12px;
  elevation: 5;
`;

const Numero = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

const Status = styled.Text`
  font-size: 18px;
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

const Botao = styled.View`
  background-color: #ffccf9;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const BotaoTexto = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #d63384;
`;

const ModalFundo = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.View`
  width: 90%;
  height: 60%;
  background-color: #ffe6f9;
  border-radius: 20px;
  padding: 100px;
  align-items: center;
  margin-top: auto;
`;

const ModalTitulo = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #c24be0;
  margin-bottom: 50px;
`;

const SubTexto = styled.Text`
  font-size: 18px;
  color: #444;
  margin-bottom: 10px;
  width: 400px;
  text-align: center;
`;

const Placa = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #a600a6;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #aaa;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  width: 200px;
  text-align: center;
`;

const BotaoAcao = styled.TouchableOpacity`
  height: 52px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 50px;
  background-color: ${(props) => props.cor || "gray"};
`;

const TextoBotao = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Cancelar = styled.Text`
  color: #c24be0;
  font-size: 16px;
  margin-top: 5px;
`;
