import React, { useState } from 'react';

// 1. Arrow function com template string
const boasVindas = (nome) => `Bem-vindo(a), ${nome}!`;

// 2. Arrow function com operador ternário
const parOuImpar = (numero) => numero % 2 === 0 ? 'Par' : 'Ímpar';

// 3. map para formatar preços
const precos = [10, 25, 40];
const precosFormatados = precos.map((preco) => `R$ ${preco}`);

// 4. filter para palavras com mais de 4 letras
const palavras = ['sol', 'janela', 'mar', 'cadeira', 'luz'];
const palavrasLongas = palavras.filter((palavra) => palavra.length > 4);

// 5. filter e map para nomes de produtos em estoque
const produtos = [
  { id: 1, nome: 'Teclado', estoque: true },
  { id: 2, nome: 'Mouse', estoque: false },
  { id: 3, nome: 'Monitor', estoque: true },
];
const produtosEmEstoque = produtos
  .filter((produto) => produto.estoque)
  .map((produto) => produto.nome);

// 6. Componente que recebe título e descrição por props
function Cartao({ titulo, descricao }) {
  return (
    <article className="cartao">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  );
}

// 7. Renderização condicional com ternário
function Aviso({ urgente }) {
  return <p>{urgente ? 'ATENÇÃO: leia agora!' : 'Aviso comum'}</p>;
}

// 8. useState para controlar curtidas
function Curtidas() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <section className="exemplo">
      <h3>Curtidas</h3>
      <p>{curtidas} curtidas</p>
      <button onClick={() => setCurtidas((atual) => atual + 1)}>
        Curtir
      </button>
      {curtidas > 10 && <p>Post popular!</p>}
    </section>
  );
}

// 9. useState para mostrar ou esconder a senha
function MostrarSenha() {
  const [visivel, setVisivel] = useState(false);

  return (
    <section className="exemplo">
      <h3>Mostrar senha</h3>
      <button onClick={() => setVisivel((atual) => !atual)}>
        {visivel ? 'Esconder' : 'Mostrar'}
      </button>
      {visivel && <p>Senha: 1234</p>}
    </section>
  );
}

// 10: filtrar tarefas pendentes e permitir concluí-las
function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', feita: false },
    { id: 2, texto: 'Lavar a louça', feita: true },
    { id: 3, texto: 'Fazer a atividade', feita: false },
  ]);

  const marcarComoFeita = (id) => {
    setTarefas((atuais) =>
      atuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, feita: true } : tarefa
      )
    );
  };

  return (
    <section className="exemplo">
      <h3>Lista de tarefas</h3>
      <ul>
        {tarefas
          .filter((tarefa) => !tarefa.feita)
          .map((tarefa) => (
            <li key={tarefa.id}>
              <span>{tarefa.texto}</span>
              <button onClick={() => marcarComoFeita(tarefa.id)}>
                Marcar como feita
              </button>
            </li>
          ))}
      </ul>
      {tarefas.every((tarefa) => tarefa.feita) && <p>Todas as tarefas concluídas!</p>}
    </section>
  );
}

function App() {
  return (
    <main className="container">
      <h1>Atividades de JavaScript e React</h1>

      <section className="exemplo">
        <h2>1. Arrow function: boasVindas</h2>
        <p>{boasVindas('Carla')}</p>
      </section>

      <section className="exemplo">
        <h2>2. Arrow function: parOuImpar</h2>
        <p>parOuImpar(4): {parOuImpar(4)}</p>
        <p>parOuImpar(7): {parOuImpar(7)}</p>
      </section>

      <section className="exemplo">
        <h2>3. map: formatar preços</h2>
        <p>{JSON.stringify(precosFormatados)}</p>
      </section>

      <section className="exemplo">
        <h2>4. filter: palavras com mais de 4 letras</h2>
        <p>{JSON.stringify(palavrasLongas)}</p>
      </section>

      <section className="exemplo">
        <h2>5. filter + map: produtos em estoque</h2>
        <p>{JSON.stringify(produtosEmEstoque)}</p>
      </section>

      <section className="exemplo">
        <h2>6. Componente Cartao</h2>
        <div className="cartoes">
          <Cartao titulo="JavaScript" descricao="Linguagem usada para criar interatividade." />
          <Cartao titulo="React" descricao="Biblioteca para construir interfaces." />
          <Cartao titulo="Vite" descricao="Ferramenta que inicia e executa o projeto." />
        </div>
      </section>

      <section className="exemplo">
        <h2>7. Componente Aviso</h2>
        <Aviso urgente={true} />
        <Aviso urgente={false} />
      </section>

      <section className="exemplo">
        <h2>8. Componente Curtidas</h2>
        <Curtidas />
      </section>

      <section className="exemplo">
        <h2>9. Componente MostrarSenha</h2>
        <MostrarSenha />
      </section>

      <section className="exemplo">
        <h2>10. ListaTarefas + desafio</h2>
        <ListaTarefas />
      </section>
    </main>
  );
}

export default App;