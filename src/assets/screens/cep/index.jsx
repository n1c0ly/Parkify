// import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { useState } from "react";
// import axios from "axios";

// const data ={
//       "cep": "04432-030",
//   "logradouro": "Praça da Sé",
//   "complemento": "lado ímpar",
//   "unidade": "",
//   "bairro": "Sé",
//   "localidade": "São Paulo",
//   "uf": "SP",
//   "estado": "São Paulo",
//   "regiao": "Sudeste",
//   "ibge": "3550308",
//   "gia": "1004",
//   "ddd": "11",
//   "siafi": "7107"
// }


// export default function Cep() {

//     const [cep, setCep] = useState('')
//     const [data, setData] = useState()


// function buscaCep(){
// axios.get(`https://viacep.com.br/ws/${cep}/json/`)
// .then((res)=> {
// setData(res.data)
// })
// .catch((err)=>{
// console.log("Erro:", err )
// })
// }

//     return (
//         <View>
//             <TextInput
//                 placeholder="Digite seu cep"
//                 keyboardType="numeric"
//                 onChangeText={setCep}
//                 value={cep}
//             />
//                 <TouchableOpacity onPress={buscaCep}>
//                     <Text>Buscar CEP</Text>
//                 </TouchableOpacity>
//             {
//                 data && <Text>{data.logradouro}</Text>
//             }
//         </View>
//     )
// }