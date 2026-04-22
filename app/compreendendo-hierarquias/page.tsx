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
        Compreendendo Hierarquias, Instâncias de Decisão e Níveis de Autonomia
        no Cotidiano
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Em todos os espaços que frequentamos — sejam eles profissionais,
        familiares, acadêmicos ou sociais — estamos inseridos em estruturas que
        organizam as relações, orientam comportamentos e influenciam decisões.
        Muitas vezes, essas estruturas passam despercebidas, operando de forma
        silenciosa, mas determinante. Compreender a existência de diferentes
        hierarquias, instâncias de decisão e níveis de autonomia é essencial
        para desenvolver uma atuação mais consciente, estratégica e equilibrada
        dentro desses ambientes.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Este texto convida você a observar com mais atenção os contextos em que
        está inserido, reconhecendo não apenas quem ocupa posições de autoridade
        formal, mas também aqueles que exercem influência de maneira mais sutil.
        Ao longo desta leitura, você será estimulado a refletir sobre como essas
        dinâmicas impactam suas ações, suas escolhas e sua capacidade de
        transformação dentro dos espaços que habita.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        O que são hierarquias e por que elas existem?
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Hierarquias são formas de organização que estabelecem níveis de
        autoridade, responsabilidade e poder dentro de um grupo. Elas existem
        para estruturar processos, facilitar a tomada de decisão e garantir que
        objetivos sejam alcançados de maneira coordenada. Em ambientes de
        trabalho, por exemplo, é comum encontrarmos organogramas que deixam
        claro quem responde a quem, quais são as funções de cada pessoa e como
        as decisões devem fluir.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        No entanto, nem todas as hierarquias são formalizadas. Existem também
        aquelas que emergem naturalmente, baseadas em experiência, conhecimento,
        carisma ou capacidade de liderança. Essas hierarquias “natas” podem ser
        tão influentes quanto as instituídas, e às vezes até mais, pois se
        sustentam na legitimidade percebida pelos membros do grupo.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Hierarquias instituídas versus hierarquias natas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        As hierarquias instituídas são aquelas definidas oficialmente por uma
        organização ou grupo. Elas aparecem em cargos, títulos e funções
        formais: gerente, coordenador, diretor, supervisor. Essas posições
        carregam consigo responsabilidades claras e, geralmente, autoridade para
        tomar decisões dentro de determinados limites.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Já as hierarquias natas surgem espontaneamente. Uma pessoa pode não ter
        um cargo de liderança, mas ser constantemente consultada por colegas
        devido à sua experiência ou habilidade técnica. Outra pode exercer
        influência por sua capacidade de comunicação ou por inspirar confiança.
        Essas dinâmicas revelam que o poder não está apenas nos títulos, mas
        também nas relações e percepções construídas no dia a dia.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Reconhecer essa dualidade é fundamental. Ignorar hierarquias informais
        pode levar a conflitos, desalinhamentos e dificuldades na execução de
        tarefas. Por outro lado, compreender essas relações permite navegar com
        mais inteligência nos ambientes, fortalecendo conexões e ampliando
        possibilidades de atuação.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Instâncias de decisão: onde e como as decisões são tomadas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Toda organização possui instâncias de decisão — ou seja, níveis nos
        quais escolhas são feitas e direcionamentos são definidos. Essas
        instâncias podem variar desde decisões estratégicas, tomadas por altos
        níveis de liderança, até decisões operacionais, realizadas por equipes
        no dia a dia.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Entender onde uma decisão é tomada é tão importante quanto compreender
        quem a toma. Em muitos casos, decisões aparentemente simples precisam
        seguir fluxos específicos de aprovação. Em outros, há maior liberdade
        para agir com autonomia. Saber identificar esses limites evita
        frustrações, retrabalho e conflitos desnecessários.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Além disso, perceber as instâncias de decisão ajuda a direcionar melhor
        ideias, sugestões e demandas. Ao compreender quem tem o poder de decidir
        sobre determinado assunto, você aumenta as chances de ser ouvido e de
        contribuir efetivamente.
      </p>

      <Checkbox checked={checked[0]} onChange={() => handleChange(0)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Níveis de autonomia: até onde você pode ir?
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Autonomia refere-se à capacidade de agir, decidir e assumir
        responsabilidades sem a necessidade de aprovação constante. No entanto,
        essa autonomia não é igual para todos os indivíduos ou situações. Ela
        varia de acordo com o contexto, o nível hierárquico, a experiência e a
        confiança estabelecida.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Em alguns ambientes, a autonomia é incentivada e vista como um sinal de
        maturidade profissional. Em outros, as decisões são mais centralizadas,
        exigindo alinhamento constante com lideranças. Nenhum desses modelos é
        necessariamente melhor ou pior; o importante é compreender qual é a
        lógica predominante no seu contexto.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Desenvolver a capacidade de identificar seus próprios limites de
        autonomia é um passo essencial para evitar excessos — como agir sem
        alinhamento — ou restrições desnecessárias — como deixar de agir quando
        poderia. Esse equilíbrio é construído com observação, diálogo e
        experiência.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        A influência das hierarquias nas relações interpessoais
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        As hierarquias impactam diretamente a forma como nos relacionamos com os
        outros. Elas podem influenciar desde a maneira como nos comunicamos até
        o nível de abertura que temos para expressar opiniões e discordâncias.
        Em ambientes muito hierarquizados, por exemplo, pode haver maior
        formalidade e cautela nas interações.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Por outro lado, ambientes mais horizontais tendem a favorecer trocas
        mais diretas e colaborativas. No entanto, mesmo nesses contextos, ainda
        existem formas de influência e liderança que precisam ser reconhecidas.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Desenvolver inteligência relacional envolve perceber essas nuances e
        adaptar sua comunicação de forma adequada. Isso não significa deixar de
        ser autêntico, mas sim ser estratégico na forma de se posicionar.
      </p>

      <Checkbox checked={checked[1]} onChange={() => handleChange(1)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Consciência de contexto: uma habilidade essencial
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A capacidade de perceber hierarquias, instâncias de decisão e níveis de
        autonomia está diretamente ligada à consciência de contexto. Trata-se de
        uma habilidade que envolve observar, interpretar e compreender o
        ambiente ao seu redor, identificando padrões, relações e dinâmicas.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Pessoas com alta consciência de contexto tendem a navegar com mais
        facilidade em diferentes situações, pois conseguem ajustar seu
        comportamento de acordo com as demandas do ambiente. Elas sabem quando
        agir, quando esperar, quando propor e quando escutar.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Essa habilidade pode ser desenvolvida com prática e reflexão. Perguntas
        como “quem decide isso?”, “qual é o meu papel aqui?” e “até onde posso
        ir?” são ferramentas simples, mas poderosas para ampliar sua percepção.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Desafios comuns ao lidar com hierarquias
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Um dos principais desafios é lidar com a frustração quando há limitações
        de autonomia. Muitas vezes, ideias e iniciativas precisam passar por
        validações que podem parecer lentas ou burocráticas. Nesses casos,
        compreender o funcionamento do sistema ajuda a lidar melhor com essas
        situações.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Outro desafio é reconhecer e respeitar hierarquias informais. Ignorar
        essas dinâmicas pode gerar resistência ou dificultar a implementação de
        mudanças. Por isso, é importante mapear não apenas estruturas formais,
        mas também redes de influência.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Também é comum enfrentar dificuldades ao transitar entre diferentes
        contextos, cada um com suas próprias regras e expectativas. A
        flexibilidade e a capacidade de adaptação são fundamentais nesses casos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Caminhos para uma atuação mais consciente
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Desenvolver uma atuação mais consciente começa com a observação. Preste
        atenção em como as decisões são tomadas, quem são as pessoas mais
        influentes e como as relações se estabelecem. Esse mapeamento inicial
        fornece uma base importante para suas ações.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Em seguida, busque clareza sobre seu papel e suas responsabilidades.
        Entender o que se espera de você facilita a identificação de seus
        limites e possibilidades de atuação.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O diálogo também é essencial. Conversar com lideranças e colegas ajuda a
        alinhar expectativas, esclarecer dúvidas e construir confiança. Quanto
        mais transparente for a comunicação, maior será sua capacidade de atuar
        com autonomia.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Por fim, desenvolva sua capacidade de adaptação. Cada contexto exige uma
        abordagem diferente, e a flexibilidade é uma habilidade-chave para
        navegar com eficácia entre diferentes estruturas e dinâmicas.
      </p>

      <Checkbox checked={checked[2]} onChange={() => handleChange(2)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Considerações finais
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Reconhecer a existência de hierarquias, instâncias de decisão e níveis
        de autonomia não significa se limitar ou se conformar, mas sim agir com
        maior consciência e intencionalidade. Essa compreensão permite que você
        faça escolhas mais estratégicas, construa relações mais sólidas e
        contribua de forma mais efetiva para os ambientes em que está inserido.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ao desenvolver esse olhar, você amplia sua capacidade de leitura do
        mundo e fortalece sua atuação como indivíduo e profissional. Mais do que
        entender estruturas, trata-se de compreender como você se posiciona
        dentro delas — e como pode transformá-las de maneira consciente e
        responsável.
      </p>

      <Link disabled={!checked.every(Boolean)} />
    </div>
  );
}
