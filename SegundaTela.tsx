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
function Segundatela({ nome, aoVoltar }: SegundaTelaProps) {
    // useState para controlar se a mensagems escondida deve aparecer.
    // Começa como false: inicialmente a mensagem não é recebida.
    const [mostrarMensagem, setMostrarMensagem] = useState<boolean>(false);

    // Esta função será chamada quando o usuário tocar no botão.
    const aoPressionarMostrarMensagem = () => {
        //Atualizamos o estado para true e o React re-rendezira a tela.
        setMostrarMensagem(true);
    };

    // JSX/TSX da segunda tela 
    return (
        // View principal ocupando a tela inteira centralizando os elementos.
        <View style={styles.container}>
            {/* Titulo para orientar o usuário*/}
            <Text style={styles.titulo}>Segunda tela </Text>

            {/* Texto que usa props: o nome veio da primeira tela*/}
            <Text style={styles.boasVindas}>Bem vindo, {nome}</Text>
            <View style={styles.espacoBotao}>
                <Button
                    title="Mostrar mensagem"
                    color="#2563eb"
                    onPress={aoPressionarMostrarMensagem}
                />
            </View>
            {/* Renderização condicional: 
        Só mostramos esta texto quando mostrarMensagem for true.*/}
            {mostrarMensagem && (
                <Text style={styles.mensagem}>Olá, {nome}</Text>
            )}
            <View style={styles.espacoBotao}>
                <Button
                    title="Voltar"
                    color="#6b7280"
                    onPress={aoVoltar}
                />
            </View>
        </View>
    );
}
// Estilo da segunda tela 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#f5f5f500',
    },
    // titulo da tela
    titulo: {
        fontSize: 28,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 20,
        textAlign: 'center',
    },
    // Texto de boas-vindas que mostra o nome recebido por props.
    boasVindas: {
        fontSize: 22,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 20,
        textAlign: 'center',
    },
    // espaço para separar botões dos outros elementos 
    espacoBotao: {
        width: '100%',
        maxWidth: 320, 
        marginBottom: 14,
    },
    mensagem: {
        fontSize: 18,
        color: '#0f172a',
        marginBottom: 18,
        textAlign: 'center',
    },

})

export default Segundatela;