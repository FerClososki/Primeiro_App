/**
 * Segundatela.tsx
 * Esta é a nossa segunda tela didática.
 * Ela recebe dados da primeira tela usando props.
 */

// Importamos usaState para ontrolar se a mensagem extra será exibida ou não.
import { useState } from "react";

// Importamos componentes vizuais básicos do React Native.

import {
    Button,
    StyleSheet,
    Text, 
    View,
} from 'react-native';

//Aqui definimos o "formato" das props que esta tela espera receber.
// Props são dados passado de um componente pai para um componente filho.

type SegundaTelaProps = {
    // "nome" vem da tela inicial (App.tsx)
    nome: string;
    // "AoVoltar" é uma função que a segunda tela pode chamar de volta.
    aoVoltar: () => void;
};

// Componente funcional da segunda tela.
// Repare que recebemos as propps direto nos parâmetros da função.
function Segundatela({nome, aoVoltar }: SegundaTelaProps) {
    // useState para controlar se a mensagems escondida deve aparecer.
    // Começa como false: inicialmente a mensagem não é recebida.
    const [mostrarMensagem, setMostrarMensagem] = useState<boolean>(false);

    // Esta função será chamada quando o usuário tocar no botão.
    const aoPressionarMostrarMensagem = () => {
        //Atualizamos o estado para true e o React re-rendezira a tela.
        setMostrarMensagem(true);
    }
}