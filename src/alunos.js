const { LinkedList } = require("./linkedList");

// Criar uma lista de Alunos com as seguintes operações:
let aluno = new LinkedList();

// Adicionar o aluno "Ronaldo";
aluno.push("Ronaldo"); //[Ronaldo]

// Adicionar no fim da lista a aluna "Carol";
aluno.push("Carol"); // [Ronaldo, Carol]

// Adicionar na posição 2 a aluna “Betty”;
aluno.insert("Betty", 2); // [Ronaldo, Carol, Betty]

// Adicionar no início da lista a aluna "Marina";
aluno.insert("Marina", 0); // [Marina, Ronaldo, Carol, Betty]

// Imprimir a lista
console.log("Lista:", aluno.toString()); // [Marina, Ronaldo, Carol, Betty]

// Imprimir a quantidade de elementos
console.log("Tamanho: ", aluno.size()); // 4

// Remover a posição 2
aluno.removeAt(2); // [Marina, Ronaldo, Betty]

// Imprimir a lista
console.log("Lista:", aluno.toString()); // [Marina, Ronaldo, Betty]

// Remover elemento do início da lista
aluno.removeAt(0); // [Ronaldo, Betty]

// Imprimir o primeiro elemento da lista
console.log("Elemento:", aluno.getElementAt(0)); // Ronaldo

// Remover elemento do final da lista
aluno.removeAt(aluno.size() - 1); // [Ronaldo]

// Verificar se a aluna Betty existe na lista
console.log(aluno.indexOf("Betty")); // False

// Imprimir a lista
console.log("Lista:", aluno.toString()); // [Ronaldo]
