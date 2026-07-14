import React from "react"
import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";



export default function Contacts({ navigation }) {
return(
    <View style={{marginTop:60, marginLeft: 20}}>

        <View>
        <ThemedText>Nome: João Silva</ThemedText>
        <ThemedText>Telefone: (11) 96589-6658</ThemedText>
        <ThemedText 
         onPress={()=> navigation.navigate("Information", {
            nome:"João Silva",
            telefone:"(11) 96589-6658",
            endereço:"rua das flores",
            numero:"765",
            profissao:"Carpinteiro",
            email:"joaosilva@carpintaria.com.br",
        }
        )}>Information...
        </ThemedText>
        </View>   

    <View style={{marginTop:20}}>

        <ThemedText>Nome: Amanda Silva</ThemedText>
        <ThemedText>Telefone: (11) 98976-8765</ThemedText>
        <ThemedText 
        onPress={()=> navigation.navigate("Information", {
            nome:"Amanda Silva",
            telefone:"(11) 98976-8765",
            endereço:"Av. Estrela Nova",
            numero:"3658",
            profissao:"Desenvolvedora de software",
            email:"amanda.dev.code@amandadev.com.br",
        }
        )}>Information...
        </ThemedText>
        </View> 

    </View>
)
}