import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

function Vaga({ numero, status, ocupada, onToggle }) {
  return (
    <View style={styles.vaga}>
      <Text style={styles.numero}>{numero}</Text>
      <Text style={[styles.status, ocupada ? styles.ocupada : styles.livre]}>
        {status}
      </Text>
      <TouchableOpacity onPress={onToggle} style={styles.botao}>
        <Text style={styles.botaoTexto}>{ocupada ? "-" : "+"}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [vagas, setVagas] = useState([
    { numero: "01", status: "AAA-1111", ocupada: true },
    { numero: "02", status: "BBB-2222", ocupada: true },
    { numero: "03", status: "Livre", ocupada: false },
    { numero: "04", status: "CCC-3333", ocupada: true },
    { numero: "05", status: "Livre", ocupada: false },
    { numero: "06", status: "Livre", ocupada: false },
    { numero: "07", status: "Livre", ocupada: false },
    { numero: "08", status: "Livre", ocupada: false },
    { numero: "09", status: "Livre", ocupada: true },
    { numero: "10", status: "Livre", ocupada: true },

  ]);

  const toggleVaga = (index) => {
    const novas = [...vagas];
    novas[index].ocupada = !novas[index].ocupada;
    novas[index].status = novas[index].ocupada ? "Carro 111AAAA" : "Livre";
    setVagas(novas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>VAGAS</Text>
      <ScrollView>
        {vagas.map((vaga, i) => (
          <Vaga
            key={i}
            numero={vaga.numero}
            status={vaga.status}
            ocupada={vaga.ocupada}
            onToggle={() => toggleVaga(i)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE8FB", // rosa de fundo
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 52,
    fontWeight: "bold",
    textAlign: "center",
    // color: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  vaga: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5a6e0",
    padding: 15,
    borderRadius: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // sombra no Android
  },
  numero: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  status: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  ocupada: {
    color: "#fff",
    fontWeight: "bold",
  },
  livre: {
    color: "#fff",

  },
  botao: {
    backgroundColor: "#ffccf9",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d63384",
  },
});
