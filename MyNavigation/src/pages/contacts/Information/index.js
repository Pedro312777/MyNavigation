import React from "react"
import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";

export default function Information({route}){
return(
    <View style={{marginTop:60,  marginLeft: 20}}>
        <ThemedText>Nome: {route.params?.nome}</ThemedText>
        <ThemedText>Telefone: {route.params?.telefone}</ThemedText>
        <ThemedText>Endereço: {route.params?.endereço}</ThemedText>
        <ThemedText>N: {route.params?.numero}</ThemedText>
        <ThemedText>Profissão: {route.params?.profissao}</ThemedText>
        <ThemedText>email: {route.params?.email}</ThemedText>
    </View>
)
}