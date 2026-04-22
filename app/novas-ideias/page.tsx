"use client";

import Checkbox from "@/components/Checkbox";
import Link from "@/components/Link";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(new Array(3).fill(false));

  const handleChange = (index: number) => {
    setChecked((oldState) => {
      const newState = [...oldState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg mt-10 mb-10 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Novas Ideias como Oportunidades: Caminhos para a Inovação no Cotidiano
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Em um mundo em constante transformação, somos frequentemente expostos a
        novas informações, ideias e opiniões que desafiam aquilo que já
        conhecemos. No ambiente de trabalho e em nossas atividades cotidianas,
        essas novidades podem surgir de diversas formas: uma sugestão de um
        colega, uma mudança de processo, uma nova tecnologia ou até mesmo uma
        crítica construtiva. A forma como reagimos a esses estímulos é
        determinante para nosso crescimento e para a capacidade de inovar.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Reconhecer a ocorrência de novos fatos e perspectivas como oportunidades
        — e não como ameaças — é uma habilidade essencial para quem deseja
        evoluir e gerar impacto positivo. Muitas vezes, a tendência natural é
        resistir ao que é diferente, pois o novo pode gerar desconforto,
        insegurança ou até medo de perder o controle. No entanto, é justamente
        nesse espaço de desconforto que surgem as maiores possibilidades de
        aprendizado e transformação.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        A importância de uma mentalidade aberta
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ter uma mentalidade aberta significa estar disposto a considerar ideias
        diferentes, mesmo que elas contrariem crenças ou práticas já
        estabelecidas. Isso não implica aceitar tudo sem questionar, mas sim
        avaliar com curiosidade e senso crítico. Uma postura aberta permite
        identificar valor onde antes só se via divergência.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        No ambiente profissional, essa atitude contribui para a construção de
        soluções mais completas e inovadoras. Quando diferentes perspectivas são
        consideradas, aumentam as chances de encontrar caminhos mais eficientes,
        criativos e sustentáveis.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        O papel das diferenças na inovação
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ideias inovadoras raramente surgem de pensamentos homogêneos. É na
        diversidade de opiniões, experiências e visões de mundo que encontramos
        novas possibilidades. Quando pessoas com diferentes pontos de vista
        colaboram, elas ampliam o campo de análise e enriquecem o processo de
        tomada de decisão.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Valorizar opiniões divergentes não significa evitar conflitos, mas
        aprender a lidar com eles de forma construtiva. O diálogo respeitoso e a
        escuta ativa são ferramentas fundamentais para transformar diferenças em
        soluções.
      </p>

      <Checkbox checked={checked[0]} onChange={() => handleChange(0)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Transformando mudanças em oportunidades
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Mudanças fazem parte de qualquer processo de evolução. No entanto, nem
        sempre são recebidas com entusiasmo. Muitas vezes, são vistas como
        interrupções ou complicações. Para transformar essa percepção, é
        importante desenvolver a capacidade de enxergar além do impacto imediato
        e considerar os benefícios potenciais.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ao se deparar com uma nova ideia ou situação, pergunte-se: “O que posso
        aprender com isso?” ou “Como isso pode melhorar minhas atividades?”.
        Essas perguntas ajudam a redirecionar o foco, saindo da resistência para
        a exploração.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        A responsabilidade individual na inovação
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Inovar não é responsabilidade exclusiva de líderes ou áreas específicas.
        Cada pessoa, dentro de suas atribuições, tem a capacidade de identificar
        melhorias e propor mudanças. Isso começa com a disposição de observar o
        próprio trabalho de forma crítica e buscar maneiras de torná-lo mais
        eficiente e significativo.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Assumir essa responsabilidade implica sair de uma postura passiva e
        adotar uma atitude proativa. Pequenas mudanças no dia a dia podem gerar
        grandes impactos ao longo do tempo, especialmente quando são
        compartilhadas e replicadas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Superando resistências internas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A resistência ao novo é um comportamento natural. Ela pode estar ligada
        ao medo do desconhecido, à insegurança ou à sensação de perda de
        controle. Reconhecer essas emoções é o primeiro passo para lidar com
        elas de forma consciente.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Em vez de rejeitar imediatamente uma ideia diferente, experimente
        analisá-la com curiosidade. Avalie seus possíveis benefícios, riscos e
        impactos. Esse exercício ajuda a desenvolver uma postura mais
        equilibrada e menos reativa.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        A escuta ativa como ferramenta de crescimento
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Escutar de forma ativa é mais do que simplesmente ouvir. É prestar
        atenção, buscar compreender e considerar o ponto de vista do outro. Essa
        habilidade é essencial para reconhecer o valor de novas ideias e
        construir soluções colaborativas.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Muitas oportunidades são perdidas não pela falta de boas ideias, mas
        pela ausência de abertura para escutá-las. Ao desenvolver a escuta
        ativa, você amplia seu repertório e fortalece sua capacidade de
        inovação.
      </p>

      <Checkbox checked={checked[1]} onChange={() => handleChange(1)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Criando um ambiente favorável à inovação
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ambientes que incentivam a troca de ideias e valorizam a diversidade
        tendem a ser mais inovadores. Isso não depende apenas da cultura
        organizacional, mas também das atitudes individuais. Ao demonstrar
        abertura, respeito e interesse por novas perspectivas, você contribui
        para a construção de um espaço mais colaborativo.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Incentivar a participação, reconhecer contribuições e promover diálogos
        construtivos são práticas que fortalecem esse ambiente e estimulam o
        surgimento de soluções criativas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Considerações finais
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Reconhecer novos fatos, ideias e opiniões como oportunidades é uma
        escolha que impacta diretamente sua forma de atuar e evoluir. Ao adotar
        uma postura aberta, curiosa e reflexiva, você amplia suas possibilidades
        de aprendizado e contribui para a construção de soluções mais inovadoras
        e eficazes.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Mais do que reagir às mudanças, trata-se de aprender a utilizá-las como
        ferramentas de crescimento. Ao fazer isso, você não apenas melhora suas
        próprias atividades, mas também influencia positivamente o ambiente ao
        seu redor, promovendo uma cultura de inovação contínua.
      </p>

      <Checkbox checked={checked[2]} onChange={() => handleChange(2)} />

      <Link disabled={!checked.every(Boolean)} />
    </div>
  );
}
