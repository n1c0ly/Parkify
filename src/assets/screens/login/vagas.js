import React, { useState } from "react";
import { ScrollView, Modal, Alert, TouchableOpacity, Text, View, TextInput } from "react-native";

export default function App() {
  const [vagas, setVagas] = useState([
    { num: "01", placa: "JJK-0001", ocupada: true, hora: "08:30", modelo: "Sedan", cor: "Preto" },
    { num: "02", placa: "BBB-2222", ocupada: true, hora: "09:10", modelo: "SUV", cor: "Branco" },
    { num: "03", placa: "Livre", ocupada: false },
    { num: "04", placa: "CCC-3333", ocupada: true, hora: "07:55", modelo: "Hatch", cor: "Prata" },
    { num: "05", placa: "Livre", ocupada: false },
    { num: "06", placa: "Livre", ocupada: false },
    { num: "07", placa: "DDD-7777", ocupada: true, hora: "10:15", modelo: "Pickup", cor: "Azul" },
    { num: "08", placa: "EEE-8888", ocupada: true, hora: "11:05", modelo: "SUV", cor: "Cinza" },
    { num: "09", placa: "Livre", ocupada: false },
    { num: "10", placa: "Livre", ocupada: false },
  ]);

  const [mostrar, setMostrar] = useState(false);
  const [vagaAtiva, setVagaAtiva] = useState(null);
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [hora, setHora] = useState("");

  function abrir(v) {
    setVagaAtiva(v);
    setMostrar(true);
  }

  function fechar() {
    setMostrar(false);
    setPlaca("");
    setModelo("");
    setCor("");
    setHora("");
  }

  function adicionar() {
    if (!placa || !hora) {
      Alert.alert("Erro", "Preencha a placa e o horário de entrada.");
      return;
    }

    const novas = vagas.map((v) => {
      if (v.num === vagaAtiva.num) {
        return {
          ...v,
          ocupada: true,
          placa: placa,
          modelo: modelo || "Não informado",
          cor: cor || "Não informado",
          hora: hora,
        };
      }
      return v;
    });
    setVagas(novas);
    fechar();
  }

  function confirmarSaida() {
    Alert.alert("Sair", "Deseja mesmo retirar o carro?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sim", onPress: sair },
    ]);
  }

  function sair() {
    const novas = vagas.map((v) =>
      v.num === vagaAtiva.num
        ? { ...v, ocupada: false, placa: "Livre", hora: null, modelo: null, cor: null }
        : v
    );
    setVagas(novas);
    fechar();
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff0fb", padding: 20, paddingTop: 40 }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: "center",
          fontWeight: "bold",
          color: "#ff94dfff",
          marginBottom: 25,
        }}
      >
        Vagas
      </Text>

      <ScrollView>
        {vagas.map((v, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => abrir(v)}
            style={{
              backgroundColor: v.ocupada ? "#f5a6e0" : "#f382d5ff",
              borderRadius: 15,
              padding: 15,
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.1,
             
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#fff",
                fontWeight: "bold",
                textShadowColor: "#0002",
                textShadowRadius: 2,
              }}
            >
              {v.num}
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                color: v.ocupada ? "#fff" : "#ffffffff",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {v.placa}
            </Text>
            <View
              style={{
                backgroundColor: v.ocupada ? "#fde2faff" : "#e1f8deff",
                borderRadius: 50,
                width: 38,
                height: 38,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: v.ocupada ? "#d63384" : "#2e8b57",
                  fontWeight: "bold",
                }}
              >
                {v.ocupada ? "-" : "+"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    
      <Modal visible={mostrar} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#ffe6f9",
              borderRadius: 20,
              padding: 25,
              alignItems: "center",
            }}
          >
            {vagaAtiva && (
              <>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    color: "#c24be0",
                    marginBottom: 10,
                  }}
                >
                  Vaga {vagaAtiva.num}
                </Text>

                {vagaAtiva.ocupada ? (
                  <>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Placa: {vagaAtiva.placa}</Text>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Modelo: {vagaAtiva.modelo}</Text>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Cor: {vagaAtiva.cor}</Text>
                    <Text style={{ fontSize: 16, marginBottom: 15 }}>
                      Entrada: {vagaAtiva.hora}
                    </Text>

                    <TouchableOpacity
                      style={{
                        backgroundColor: "red",
                        paddingVertical: 10,
                        borderRadius: 8,
                        width: 180,
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                      onPress={confirmarSaida}
                    >
                      <Text style={{ color: "#fff", fontWeight: "bold" }}>Retirar</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>Registrar carro</Text>
                    <TextInput
                      placeholder="Placa"
                      style={estilos.input}
                      value={placa}
                      onChangeText={setPlaca}
                    />
                    <TextInput
                      placeholder="Modelo"
                      style={estilos.input}
                      value={modelo}
                      onChangeText={setModelo}
                    />
                    <TextInput
                      placeholder="Cor"
                      style={estilos.input}
                      value={cor}
                      onChangeText={setCor}
                    />
                    <TextInput
                      placeholder="Horário (ex: 14:30)"
                      style={estilos.input}
                      value={hora}
                      onChangeText={setHora}
                    />

                    <TouchableOpacity
                      style={{
                        backgroundColor: "green",
                        paddingVertical: 10,
                        borderRadius: 8,
                        width: 180,
                        alignItems: "center",
                      }}
                      onPress={adicionar}
                    >
                      <Text style={{ color: "#fff", fontWeight: "bold" }}>Adicionar</Text>
                    </TouchableOpacity>
                  </>
                )}

                <TouchableOpacity onPress={fechar}>
                  <Text style={{ color: "#c24be0", marginTop: 15, fontSize: 16 }}>Cancelar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilos = {
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 220,
    textAlign: "center",
    backgroundColor: "#fff",
  },
};
