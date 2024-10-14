// SEÇÃO 1: INTRODUÇÃO A LOGICA E ALGORITMO
//
// TERMOS TÉCNICOS:
//
//* ALGORITMO: conjuntos de regras e procedimentos lógicos que são combinados para resolver problema.
//Conjunto de instruções passo a passo para resolver um problema ou realizar uma tarefa especifica. Motores de busca, Cálculo de Rotas, Trans. Bancárias.
//Estrutura algoritmo:
//Finitude: Deve terminar após um número finito de passos;
//Definitude: Instruções claramente definidas;
//Entrada: Zero ou mais entradas;
//Saída: Pelo mens uma saída;
//Eficácia: Passos básicos e executáveis.
//Exempelo: Bubble Sorte: ordenação simples que repetidamente percorre a lista, comparando e trocando elementos lado a lado (adjacentes).
//
//*LINGUAGEM DE PROGRAMAÇÃO: meio de comunicação entre humanos e computador através de algum metodo padronizado formado por um cj. de regras semânticas
//que resulta em um código fonte, um programa de computador, site, scripts, sistemas operacionais.
//Componetes principais: 
//SINTAXE: cj. de regras que difine a estrutura de instruções na linguagem. Foca na forma.
//SEMANTICA: significado das instruções, foca no que as instruções realmente fazem.
//ESTRUTURA DE CONTROLE: elementos que controlam o fluxo do programa, como condicionais: if, else, loops: for e while e funções.
//Ciclo de desenvolvimento: 
//ESCRITA DE CÓDIGO: O programador escreve o código usando uma linguagem de programação;
//COMPILAÇÃO/INTERPRETAÇÃO: O código é traduzido para código de máquina através de um compilador ou interpretador;
//EXECUÇÃO: O computador executa o código traduzido; e
//DEPURAÇÃO: O programador corrige erros e ajusta código conforme necessário.
//
//*LOÓGICA DE PROGRAMAÇÃO: é o processo de organizar instruções e condições de maneira estruturada para que um programa de computador execute.
//pontos importantes: Boa compreensão da lógica, Precisa Resolver problemas, Eficiencia utilizar recursos de maneira
//eficaz, Manutenção código bem estruturado é mais facil de manter e depurar. Compilador: C++ / Interpretador: Node.js.

console.log("Olá, mundo.");

// BACKEND Cj. de linguagens de programação que trabalha do lado do servidor. Seria a parte invisível. 
//Chamadas, rotas, consultas no banco.
//
// FRONTEND Conjunto de linguagens de programação que trabalham do lado do cliente. Seria a parte visível.
//Exibição de Conteúdo, Interação com o usuário, Aparência e Estilo.


// SEÇÃO 2: ESTRUTURAS PARA CRIAÇÃO DE ALGORITMOS
//
//*FLUXOGRAMAS: Utilizado para documentar e planejar processos complexos por meio de diagramas claros.
//Terminal: inicio ou fim de um programa
//Seta: sentindo do fluxo de dados
//Processamento: calculo, atribuições ou manipulação de dados
//Decisão: tomada de decisão, separação de fluxo de dados
//Conector: conexão de fluxo na pagina e flexo em outra pagina
//Teclado: informação será digitada via teclado, diagrama que representa entrada de dados
//
//*CONDICIONAIS: são estruturas de controle que permitem que o programa tome decisões com base em condições especificas.
//Elas verificam se uma condição é verdadeira ou falsa e, em seguida, executam diferentes blocos de código.
//*Estrutura de Condicional: 
//IF verifica uma condição;
//ELSE executa um bloco de código se a condição no IF for falsa;
//ELSE IF verifica condições adicionais se as condições anteriores forem falsas.
// EXEMPLO:

let idade = 18;
if (idade >= 18) {console.log("Você é maior de idade.");} 
else {console.log("Você é menor de idade.");}

let z = 10;
if (z > 10) {console.log("z é maior que 10");} 
else if (z === 10) {console.log("z é igual a 10");}
else {console.log("z é menor que 10");}


let dia = 5;
switch (dia) {
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    default:
        console.log("outro dia");
}

//PSEUDOCÓDIGO: forma genérica de escrever algoritmos.


// SEÇÃO 3: ESTRUTURAS DE DADOS
//
//Números INTEIROS: Representam valores numéricos sem casas decimais. Podem ser positivos, negativos ou zero. 0, 1, 42, -7.
//Exemplos:

let a = 10;
let b = 5;

let soma = a + b;
let diferença = a - b;
let produto = a * b;
let quociente = a / b;
let resto = a % b;

//Strings: Representam sequências de caracteres para representar texto. Podem incluir letras, números, espaços e símbolos.
//Exemplo:

let nome = "Alice!";
let saudacao = "Ola, mundo!";
let frase = "O resultado é 42.";

let primeiroNome = "Renato";
let sobrenome = "Degelo";
let nomeCompleto = primeiroNome + " " + sobrenome;

let frase = "Hello, world";
let comprimento = frase.length;
let primeiraLetra = frase[0];

//Operadores Aritméticos e Matemáticos = São símbolos que realizam operações sobre valores numéricos. 
//
//Operadores de atribuição comuns:
//Atribuição Simples =
//Atribuição Soma +=
//Atribuição Subtração -=
//Atribuição Multiplicação *=
//Atribuição Divisão /=
//
//Recurso de Comparação, Cálculo e Atribuição
//Igual ==
//Estritamente igual ===
//Diferente !=
//Maior que >
//Menor que <
//Maior ou igual >=
//Menor ou igual <=
//E && Verifica se ambas as condições são verdadeiras
//OU || Verdadeiro pelo menos em uma das condições
//Não ! Inverte o valor lógico da condição
//Exemplo:

let e = 10;
let f = 20;

let igual = e == f; // false
let estritamenteIgual = e === f; // false
let diferente = e != f; // true
let maior = e > f; // false
let menor = e < f; // true

let condicao = (e > 5 && f < 25); // true
let outraCondicao = (e < 5 || f > 15); // true
let naoCondicao = !(e > 15); // true

//Operadores de incremento e decremento
//Exemplo:

let c = 10;
c++; // c agora é 11
c--; // c agora é 10 novamente

//SEÇÃO 4: FUNÇÕES BÁSICAS
//
//PROCEDIMENTOS: são blocos de códigos que realizam tarefa especifica. 
//Vantagens: Reutilização de código, Organização, Facilidade de Manutenção, Modularidade (permite dividir o programa em partes menores)
//Um procedimento geralmente possui a seguinte estrutura:
//Declaração: Nome e parâmetros (se houver); Corpo: Conjunto de instruções a serem executadas; Retorno (opcional) valor a ser retornado (em funções)
//Exemplo:

function nomeDoProcedimento(parametro1, parametro2) {
    let resultado = parametro1 + parametro2;
    return resultado; // opcional
}

//FUNÇÕES: são blocos de código reutilizaveis que executam uma tarefa especifica. As funções ajudam a organizar e modularizar o código.
//Uma função geralmente possui a seguinte estrutura:
//Declaração: Nome e parâmetros (se houver); Corpo: Conjunto de instruções a serem executadas; Retorno (opcional) valor a ser retornado (em funções)
//A função pode ser com ou sem parametro.
//Exemplo:

function nomeDaFuncao(parametro1, parametro2) {
    let resultado = parametro1 + parametro2;
    return resultado;
}

function saudacao() {
    console.log("Ola, Mundo!");
}

saudacao(); // chama função

//ESTRUTURAS DE REPETIÇÃO E CONTROLE
//Permitem a execução repetida de blocos de código enquanto uma condição é verdadeira.
//Principais Estruturas: For e While.
//Exemplo para For:

for (let i = 0; i < 5; i++) {console.log("Número: " + i);}

//Exemplo para While:

let i = 0;
while (i < 5) {console.log("Númer: " + i); i++;}

//ARRAYS E TIPOS DE DADOS EM FUNÇÕES
//Arrays são estruturas que armazenam coleções de dados.
//Tipo de Dados definem as naturezas e os comportamentos dos dados.
//Tipos de Dados: Numeros Inteiros, Numeros de Ponto Flutuante, Strings, Booleanos, Objetos, Arrays.
//
//Exemplo de Array (cada valor em um array é chamado de elemneto, e cada elemento tem um índice):

let frutas = ["maçã", "banana", "laranja"];

//acessando valores de um array

let primeiraFruta = frutas[0]; // maçã
let segundaFruta = frutas[1]; // banana

//alterando valores de um array

frutas[1] = "uva"; // substitui banana por uva

//SEÇÃO 5: VARIÁVEIS
//As variáveis são armazenadas na memória do computador em locais especificos chamados de endereço de memória.
//Armazenamento: 
//PILHA: Usada principalmente para armazenar variáveis locais e referencias de função. As variaveis nesta área são acessadas em uma ordem 
//estrita de último a entrar, primeiro a sair (LIFO);
//HEAP: usado para armazenar objetos complexos e estruturas de dados.
//Variaveis estáticas e constantes: normalmente armazenadas em um area especial da memoria que persiste durante toda a vida do programa;
//Essas variaveis geralmente são inicializadas antes da execução do programa.
//Variaveis são conteineres que armazena valores temporarios que podem ser alterados durante a execução de um programa.
//declarar uma variavel é criar um espaço na memoria para armazenar um valor. Em JavaScript,isso é feito usando palavras-chave: var, let ou const.
//TIPOS DE VARIAVEL:
//var: declara uma variavel global ou local para toda a função, sem respeitar o escopo do bloco;
//let: declara uma variavel local ao bloco, função ou expressão onde é utilizada;
//const: declara uma constante local ao bloco; função ou expressão onde é utilizada, cujo valor não pode ser alterado após a inicialização.


//SEÇÃO 6: ANALISANDO ALGORITMO DE BUSCA COMPLEXA
//
//ALGORITMO DE ORDENAÇÃO: são métodos usados para reorganizar elementos de uma lista ou array em uma sequencia ordenada, seja crescente ou
//decrescente. São fundamentais para a eficiencia em busca e manipulação de dados.
//Ordenar dados é essencial para facilitar a busca e recuperação de informação, melhorar a legibilidade e otimizar o desempenho.
//Exemplo Bubble Sort: um algoritmo simples que compara e troca elementos adjacentes repetidamente até que a lista esteja ordenada.

function bubbleSort(arr) {
    let n = arr.lenght;
    for (let i = 0; i < n; i++) {
        for let j = 0; j < n - 1 - i; i++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let numero = [5, 3, 8, 4, 2];
console.log(bubbleSort(numero));

//Exemplo Insertion Sort: constrói a lista ordenada de forma incremental, inserindo cada novo elemento na posição correta.

function insertionSort(arr) {
    let n = arr.lenght;
    for (let i = 0; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j = 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}    

let numero = [5, 3, 8, 4, 2];
console.log(bubbleSort(numero));

//Exemplo Merge Sort: Divide a lista em sublistas menores, ordena cada sublista e, em seguida, as mescla em uma lista ordenada.

function mergeSort(arr) {
    // Verifica se o array tem mais de um elemento
    if (arr.length <= 1) {
        return arr;
    }

    // Divide o array ao meio
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Chama recursivamente o mergeSort nas metades
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Comparando os elementos das duas metades e adicionando o menor ao array resultado
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; // Move o ponteiro esquerdo para a frente
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // Move o ponteiro direito para a frente
        }
    }

    // Concatena os elementos restantes, se houver
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Exemplo de uso:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // [3, 9, 10, 27, 38, 43, 82]

//ALGORITMO DE BUSCA: são metodos para encontrar elementos especificos dentro de uma estrutura de dados, como arrays, listas, ou arvores.
//Alguns exemplos:
//Busca Linear: verifica cada elemento da lista até encontrar o alvo. Simples e facil de implementar, O(n) complexidade de tempo, efic.para listas pequenas.
//Exemplo:

function buscaLinear(arr, alvo) {
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === alvo) {
            return i; //retorna o indice do elemento encontrado
        }
    }
    return -1; // elemento nao encontrado
}

let numeros = [5, 3, 8, 4, 2];
console.log(buscaLinear(numeros, 4)); // 3

//Busca Binária: Divide repetidamente a lista ordenada para encontrar o elemento alvo. O(log n) complexidade de tempo, Requer lista ordenada, eficiente pra lista grande.
//Exemplo:

function buscaBinaria(arr, alvo) {
    let inicio = 0;
    let fim = arr.lenght - 1;
    while (inicio <= fim) {
        let meio = math.floor((inicio + fim) / 2);
        if (arr[meio] === alvo) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return -1; // elemento nao encontrado
}

let numeros = [2, 3, 4, 5, 8];
console.log(buscaBinaria(numeros, 4)); // 2

//Busca em Arvores: Utiliza estruturas hierarquicas como arvores hinarias.
//Busca em Grafos: navega por grafos para encontrar o caminho ou elemento desejado.
//
//Quando utilizar: 
//tipo e tamanho dos daddos: busca binaria para listas ordenadas, BFS/DFS para garfos;
//Estruturas de dados: arvores para dados hierarquicos;
//Requisitos de desempenho: algoritmos com melhor complexidade para grandes volumes de dados.
//
//Algoritmos de dados complexos: dados complexos referem-se a conjuntos de dados que possuem estruturas intrincadas, interdependencias ou 
//grandes volumes, como grafos, dados de rede socias, grandes bancos de dados, e dados nao estruturados.
//Tipos:
//Algoritmo de Grafos: para dados estruturados em grafos (rede social):
//Grafos:
//busca em profundidade (DFS), explora todos os caminhos possiveis em um garfo;
//Busca em largura (BFS) explora todos os nós em um nivel antes de avançaar para o proximo;
//Dijkstra: encontra o caminho mais curto entre dois nos em um grafo ponderado;
//Prim: encontra a arvore geradora minima em um grafo ponderado
//Exemplo:

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Adiciona um vértice ao grafo
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Adiciona uma aresta (conexão) entre dois vértices
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Para grafo não direcionado
    }

    // Algoritmo de Busca em Largura (BFS)
    bfs(start) {
        const queue = [start]; // Inicializa a fila com o vértice inicial
        const result = []; // Array para armazenar a ordem de visitação
        const visited = {}; // Objeto para marcar os vértices visitados
        visited[start] = true;

        while (queue.length) {
            const currentVertex = queue.shift(); // Remove o primeiro vértice da fila
            result.push(currentVertex); // Armazena o vértice no resultado

            // Percorre os vizinhos do vértice atual
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true; // Marca como visitado
                    queue.push(neighbor); // Adiciona o vizinho na fila
                }
            });
        }

        return result; // Retorna a ordem de visitação dos vértices
    }
}

// Exemplo de uso:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Adiciona as arestas (conexões entre os vértices)
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// Executa a busca em largura (BFS) começando pelo vértice 'A'
const bfsResult = graph.bfs('A');
console.log(bfsResult); // ['A', 'B', 'C', 'D', 'E', 'F']

//Algoritmo de Machine Learning:
//Regressão linear: Modela a relação entre uma variavel dependente e uma ou mais variaveis indepentes.
//K-meas Clustering: agrupa dados em K cluster baseados em caracteristicas semelhantes;
//Arvore de Decisão: utilizadas para classificaçã e regressão;
//Redes Neurais: modelos complexos que simulam o funcionamento do cerebro humano para reconhecimento de padroes.
//
//Algoritmo de processamento de texto
//Algoritmo de processamento de imagens

//Pilhas e Filas são estruturas de dados fundamentais na ciencia da computação. Ambas sao utilizadas para armazenar e gerenciar elementos
//de maneira organizada, mas possuem diferenças importantes em termos de como os elementos são inseridos, acessados e removidos.
//
//PILHAS: segue o principio LIFO (last in, first out), o ultimo elemento inserido é o primeiro a ser removido.
//as operações fundamentais em uma pilha são empilhar (push) e desempilhar (pop);
//A inserção e remoção de elementos ocorrem apenas no topo da pilha;
//uma analogia comumente usada é a da de uma pilha de pratos, onde vc adiciona e remove pratos apenas do topo
//
//FILAS: segue o principio FIFO (Firt in, FIrst out), o primeiro elemento inserido é o primeiro a ser removido;
//as operações fundamentais em uma fila são enfileirar (enqueue) e desenfileirar (dequeue);
//os elementos são inseridos no final da fila e removidos do inicio da fila;
//uma analogia comum é a de uma fila em uma caixa de supermercado, onde o primeiro cliente a chegar é o primeiro a ser atendido.


//SEÇÃO 7: APLICAÇÃO DE LOGICA AVANÇADA
//
//Criando uma fila:

class Queue {
    constructor() {
        this.items = []; // Array para armazenar os elementos da fila
    }

    // Adicionar um elemento no final da fila
    enqueue(element) {
        this.items.push(element);
    }

    // Remover o primeiro elemento da fila (o mais antigo)
    dequeue() {
        if (this.isEmpty()) {
            console.log("A fila está vazia.");
            return null;
        }
        return this.items.shift(); // Remove o primeiro elemento
    }

    // Retornar o primeiro elemento da fila sem removê-lo
    front() {
        if (this.isEmpty()) {
            console.log("A fila está vazia.");
            return null;
        }
        return this.items[0];
    }

    // Verificar se a fila está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Exibir o tamanho da fila
    size() {
        return this.items.length;
    }

    // Exibir todos os elementos da fila
    printQueue() {
        console.log(this.items.join(' <- ')); // Exibe a fila de forma visual
    }
}

// Exemplo de uso:
const atendimento = new Queue();

// Adiciona clientes à fila de atendimento
atendimento.enqueue("Cliente 1");
atendimento.enqueue("Cliente 2");
atendimento.enqueue("Cliente 3");

// Exibe a fila atual
console.log("Fila de atendimento:");
atendimento.printQueue(); // Cliente 1 <- Cliente 2 <- Cliente 3

// Atender o primeiro cliente (remover da fila)
console.log("Atendendo:", atendimento.dequeue()); // Cliente 1

// Exibe a fila atual após o atendimento
console.log("Fila de atendimento após o atendimento:");
atendimento.printQueue(); // Cliente 2 <- Cliente 3

// Verificar quem é o próximo na fila sem removê-lo
console.log("Próximo na fila:", atendimento.front()); // Cliente 2

// Exibe o tamanho da fila
console.log("Tamanho da fila:", atendimento.size()); // 2

//
//Criando um programa com estrutura de busca:

// Função de Busca Binária
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Verifica se o elemento do meio é o alvo
        if (arr[mid] === target) {
            return mid; // Retorna o índice do alvo encontrado
        }

        // Se o alvo for maior, ignore a metade esquerda
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Se o alvo for menor, ignore a metade direita
        else {
            right = mid - 1;
        }
    }

    // Se o alvo não for encontrado, retorne -1
    return -1;
}

// Exemplo de uso:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

// Executa a busca binária
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Elemento ${target} encontrado no índice ${result}`);
} else {
    console.log(`Elemento ${target} não encontrado no array.`);
}
