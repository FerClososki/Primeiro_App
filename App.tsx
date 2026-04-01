/**
 * App.tsx - arquivo principal em React Native com TypeScript.
 * 
 * TSX - significa TypeScript + JSX: escrevemos marcação com HTML dentro 
 * do JavaScript/TypeScript. O JSX é transformado em chamadas de funções que 
 * criam elementos de interfaces (componentes). *
 * 
 * @format
 */

//Importamos o hook useState do React. Hook são funções que conectam
// componentes funcionais a recursos do React (como estado). 

import { useState } from "react";

// Importamos componentes prontos do pacoe react-native.
// Cada um representa um tipo de elemento na tela (caixas, texto, entrada, etc..)

import {
  Button,
  StatusBar, // Barra de status do sistema (hora, bateria, internet); podendo ajustar o estilo 
  StyleSheet, // API para criar estilo de forma otimizada e tipada
  Text, // Texto 
  TextInput, // Caixa de texto, campo onde o usuario digita
  TouchableOpacity, // Area tocavel com feedback visual (opacidade ao tocar)
  View // Container generico - equivalente a <div> na web, agrupa o layout 
} from 'react-native';

//Importamos a segunda tela criada em arquivo separado
import SegundaTela from './SegundaTela';

/**
 * Componente funcional App: é uma função que retorna o que deve aparecer na tela.
 * Em React Native, a árvore de componentes começa normalmente nesse arquivo.
 */

function App() {
  // useState cria um estado - um valor que pode mudar com o tempo.
  // Quando mudamos o estado do setNome, o React redesenha (re-renderiza) a tela.
  // useState ('') começa com string vazia: ainda nao há nome digitado.
  const [nome, setNome] = useState<string>('');

  // Função chamada sempre que o usuário altera o texto no TextInput.
  // o parámetro "texto" é conteúdo atual do campo apos a digitação.

  // Estado que representa qual tela está ativa.
  // "home" = primeira tela (esta conteúdo).
  // "segunda" = componente SegundaTela 
  const [telaAtual, setTelaAtual] = useState<'home' | 'segunda'>('home');

  const aoDigitarNome = (texto: string) => {
    // Atualiza o estado; a interface mostrará "Olá, ..." com um novo valor.
    setNome(texto);
  };

  // Função do botão extra: zera o nome e o campo volta a ser vazio (string vazia)
  const limparNome = () => {
    setNome('');
  };
  // Função que 'navega' para a segunda tela.
  //Aqui, navegar significa apenas mudar o valor do estado telaAtual.
  const irParaSegundaTela = () => {
    setTelaAtual('segunda');
  };

  //Função que volta para a tela inicial.
  const voltarParaHome = () => {
    setTelaAtual('home');
  }

  // Navegação sem biblioteca. 
  // Se telaAtual for "segunda", renderizamos o componente segundaTela.
  // Note a passagem de props (propiedade).
  // - nome{nome} envia o nome digitado.
  // aoVoltar={voltarParaHome} envie a função de voltar.
  
  if (telaAtual === 'segunda') {
    return <SegundaTela nome={nome} aoVoltar= {voltarParaHome} />;
  }

  // return com JSX/TSX: Descreve a hierarquia visual da tela.
  return (
    // View é container principal: ocupa a tela e centraliza o conteúdo (via estilos)
    <View style={styles.container}>
      {/*{StatusBar com conteúdo escuro combina com  fundo claro}*/}
      <StatusBar barStyle="dark-content" />
      {/*{Título em destaque}*/}
      <Text style={styles.titulo}>Meu primeiro App</Text>

      {/* {Texto explicado para iniciante} */}
      <Text style={styles.texto}>Digite seu nome abaixo</Text>
      {/* {TextInput é um campo de entrada. "value" liga o input ao estado {componente controlado}. 
       Sempre que o nome muda, o campo mostra esse valor inChangeText dispara cada tecla: passamos o 
       texto setNome vai aoDigitarNome}*/}
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={aoDigitarNome} // onde digitamos
        placeholder="Seu nome" // exemplo do que digitar
        placeholderTextColor={"#888888"} // cor do texto
        // Teclado com primeira letra maiscula (mais natural para nomes)
        autoCapitalize="words"
      />
      {/* {
      Button: Componente de botão nativo. Ao pressionar, abrimos um Alert
      para mostrar que o toque funcionou (opcional no fluxo - a saudação na tela 
      já atualiza ao digitar)
      } */}
      <View style={styles.espacoBotao}>
        <Button title= "Ir para proxima tela"
        color= "#2563eb" onPress={irParaSegundaTela}
        />
      </View>
      <Text style={styles.saudacao}>Olá, {nome}</Text>
      {/* Botão extra: TouchableOpacity envolve o text para estilo customizado. */}
      <TouchableOpacity
        style={styles.botaoLimpar}
        onPress={limparNome}
        activeOpacity={0.7}
      >
        <Text style={styles.botaoLimparTexto}>Limpar Nome</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  // container: preenche a tela (flex: 1) e centraliza os filhos no ixo cruzado principal
  container: {
    flex: 1,
    justifyContent: 'center', // deixa o texto no eixo X, meio da tela
    alignItems: 'center', // deixa no eixo Y 
    paddingHorizontal: 24, // espaço nas laterais, para nao ficar colado nas bordas
    backgroundColor: '#f5f5f5' // fundo claro
  },
  titulo: {
    fontSize: 25,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 16,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 320,
    borderWidth: 1, // tamanho da borda 
    borderColor: '#cccccc', // cor da borda 
    borderRadius: 8, // Borda arredondada
    paddingHorizontal: 12, // distancia da borda
    paddingVertical: 10,
    fontSize: 16,
    color: '#1a1a1a', //texto digitado escuro
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  espacoBotao: {
    marginBottom: 20,
    width: '100%',
    maxWidth: 320.
  },
  saudacao: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 24,
    textAlign: 'center',
  },
  botaoLimpar: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db'
  },
  botaoLimparTexto: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  }
})
export default App;
