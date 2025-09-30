import React, { useState } from "react";
import {
  ScrollView,
  Modal,
  Alert,
} from "react-native";
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
    { numero: "01", status: "Jaj757", ocupada: true, dataHora: new Date().toLocaleString(), modelo: "Sedan", cor: "Preto" },
    { numero: "02", status: "BBB-2222", ocupada: true, dataHora: new Date().toLocaleString(), modelo: "SUV", cor: "Branco" },
    { numero: "03", status: "Livre", ocupada: false },
    { numero: "04", status: "CCC-3333", ocupada: true, dataHora: new Date().toLocaleString(), modelo: "Hatch", cor: "Prata" },
    { numero: "05", status: "Livre", ocupada: false },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);
  const [placaInput, setPlacaInput] = useState("");
  const [modeloInput, setModeloInput] = useState("");
  const [corInput, setCorInput] = useState("");

  const abrirModal = (vaga) => {
    setVagaSelecionada(vaga);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setPlacaInput("");
    setModeloInput("");
    setCorInput("");
  };

  const adicionarCarro = () => {
    const novas = vagas.map((v) =>
      v.numero === vagaSelecionada.numero
        ? {
            ...v,
            ocupada: true,
            status: placaInput || "SEM-PLACA",
            modelo: modeloInput || "Não informado",
            cor: corInput || "Não informado",
            dataHora: new Date().toLocaleString(),
          }
        : v
    );
    setVagas(novas);
    fecharModal();
  };

  const confirmarRetirada = () => {
    Alert.alert(
      "Confirmar retirada",
      "Tem certeza que deseja retirar este veículo?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sim", onPress: retirarCarro },
      ]
    );
  };

  const retirarCarro = () => {
    const novas = vagas.map((v) =>
      v.numero === vagaSelecionada.numero
        ? { ...v, ocupada: false, status: "Livre", dataHora: null, modelo: null, cor: null }
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
                    <SubTexto>Placa: {vagaSelecionada.status}</SubTexto>
                    <SubTexto>Modelo: {vagaSelecionada.modelo}</SubTexto>
                    <SubTexto>Cor: {vagaSelecionada.cor}</SubTexto>
                    <SubTexto>Registrado em:</SubTexto>
                    <Placa>{vagaSelecionada.dataHora}</Placa>

                    <BotaoAcao cor="red" onPress={confirmarRetirada}>
                      <TextoBotao>Retirar</TextoBotao>
                    </BotaoAcao>
                  </>
                ) : (
                  <>
                    <SubTexto>Registrar veículo</SubTexto>
                    <Input
                      placeholder="Digite a placa"
                      value={placaInput}
                      onChangeText={setPlacaInput}
                    />
                    <Input
                      placeholder="Modelo"
                      value={modeloInput}
                      onChangeText={setModeloInput}
                    />
                    <Input
                      placeholder="Cor"
                      value={corInput}
                      onChangeText={setCorInput}
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


/* ESTILOS */
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
  elevation: 3;
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
  background-color: #ffe6f9;
  border-radius: 20px;
  padding: 30px;
  align-items: center;
`;

const ModalTitulo = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #c24be0;
  margin-bottom: 20px;
`;

const SubTexto = styled.Text`
  font-size: 18px;
  color: #444;
  margin-bottom: 10px;
  text-align: center;
`;

const Placa = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #a600a6;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #aaa;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  width: 250px;
  text-align: center;
`;

const BotaoAcao = styled.TouchableOpacity`
  height: 52px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 20px;
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
