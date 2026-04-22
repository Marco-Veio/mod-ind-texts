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
        Filosofia Lean: Etapas para Otimização de Custos, Redução de Tempo e
        Eliminação de Desperdícios
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Em um cenário empresarial cada vez mais competitivo, as organizações
        precisam encontrar formas eficientes de reduzir custos, melhorar a
        produtividade e eliminar desperdícios. Nesse contexto, a filosofia Lean
        surge como uma abordagem estratégica que visa maximizar o valor entregue
        ao cliente ao mesmo tempo em que minimiza o uso de recursos. Originada
        no sistema produtivo japonês, a filosofia Lean se consolidou como uma
        das principais metodologias de gestão no mundo.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O Lean não é apenas um conjunto de ferramentas, mas uma forma de pensar
        e gerir processos. Seu foco principal está na identificação e eliminação
        de desperdícios, garantindo que cada etapa de um processo agregue valor
        ao produto ou serviço final. Dessa forma, empresas conseguem operar de
        maneira mais enxuta, ágil e eficiente.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        O Conceito de Valor
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A primeira etapa da filosofia Lean consiste em identificar o que é valor
        sob a perspectiva do cliente. Valor é tudo aquilo pelo qual o cliente
        está disposto a pagar. Isso significa que as empresas devem compreender
        profundamente as necessidades e expectativas do seu público para
        direcionar seus esforços de forma eficiente.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Muitas vezes, organizações realizam atividades que não agregam valor ao
        cliente, mas continuam sendo executadas por hábito ou falta de análise.
        O Lean propõe justamente a revisão dessas práticas, eliminando ou
        ajustando tudo aquilo que não contribui diretamente para a entrega de
        valor.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Mapeamento do Fluxo de Valor
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Após identificar o valor, a próxima etapa é mapear o fluxo de valor.
        Isso envolve analisar todas as etapas de um processo, desde o início até
        a entrega final, com o objetivo de identificar onde ocorrem
        desperdícios. Esse mapeamento permite visualizar o processo como um
        todo, facilitando a identificação de gargalos, retrabalhos e atividades
        desnecessárias.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Com essa análise, é possível tomar decisões mais assertivas sobre quais
        etapas devem ser mantidas, melhoradas ou eliminadas, contribuindo
        diretamente para a redução de custos e aumento da eficiência
        operacional.
      </p>

      <Checkbox checked={checked[0]} onChange={() => handleChange(0)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Criação de Fluxo Contínuo
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A terceira etapa do Lean é estabelecer um fluxo contínuo de trabalho.
        Isso significa garantir que as atividades ocorram de forma fluida, sem
        interrupções, atrasos ou acúmulo de tarefas. Um fluxo contínuo reduz o
        tempo de produção e melhora a qualidade dos resultados.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Para isso, é necessário reorganizar processos, eliminar gargalos e
        promover uma melhor integração entre as etapas. O objetivo é fazer com
        que o trabalho avance de maneira constante, evitando desperdícios de
        tempo e recursos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Sistema Puxado (Pull)
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O sistema puxado é uma das etapas mais importantes da filosofia Lean.
        Nesse modelo, a produção é baseada na demanda real do cliente, evitando
        a produção excessiva e o acúmulo de estoques. Isso contribui diretamente
        para a redução de custos e desperdícios.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ao produzir apenas o necessário, no momento certo, as empresas conseguem
        otimizar seus recursos e responder de forma mais ágil às necessidades do
        mercado. Esse sistema também favorece a identificação rápida de
        problemas, permitindo correções mais eficientes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Busca pela Perfeição (Melhoria Contínua)
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A última etapa da filosofia Lean é a busca pela perfeição, também
        conhecida como melhoria contínua. Essa etapa envolve o compromisso
        constante com a otimização dos processos, incentivando a identificação
        de novas oportunidades de melhoria.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A melhoria contínua requer o envolvimento de todos os colaboradores, que
        devem estar atentos a possíveis falhas e dispostos a propor soluções.
        Pequenas melhorias ao longo do tempo podem gerar grandes resultados,
        tornando a organização cada vez mais eficiente.
      </p>

      <Checkbox checked={checked[1]} onChange={() => handleChange(1)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Os Tipos de Desperdício no Lean
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A filosofia Lean identifica diversos tipos de desperdícios que devem ser
        eliminados, como excesso de produção, tempo de espera, transporte
        desnecessário, processos inadequados, estoques excessivos, movimentação
        desnecessária e defeitos. Esses desperdícios impactam diretamente os
        custos e a eficiência das operações.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ao reconhecer esses desperdícios, as empresas podem agir de forma
        estratégica para eliminá-los, tornando seus processos mais enxutos e
        produtivos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Ferramentas de Apoio ao Lean
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Para implementar a filosofia Lean, diversas ferramentas podem ser
        utilizadas, como o 5S, que auxilia na organização do ambiente de
        trabalho, e o mapeamento de processos, que facilita a visualização e
        análise das atividades. Essas ferramentas contribuem para a padronização
        e melhoria contínua.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O uso adequado dessas ferramentas permite que as empresas implementem o
        Lean de forma estruturada, garantindo resultados mais consistentes e
        sustentáveis.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Conclusão
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A filosofia Lean é uma abordagem poderosa para a otimização de custos,
        redução de tempo e eliminação de desperdícios. Ao compreender e aplicar
        suas etapas — valor, fluxo de valor, fluxo contínuo, sistema puxado e
        melhoria contínua — as organizações conseguem alcançar maior eficiência
        e competitividade.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Mais do que uma metodologia, o Lean representa uma mudança de
        mentalidade, onde a busca por melhorias é constante e o foco está sempre
        na geração de valor para o cliente. Dessa forma, empresas que adotam
        essa filosofia estão mais preparadas para enfrentar desafios e se
        destacar no mercado.
      </p>

      <Checkbox checked={checked[2]} onChange={() => handleChange(2)} />

      <Link disabled={!checked.every(Boolean)} />
    </div>
  );
}
