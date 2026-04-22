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
        Analisando Complexidades: Compreendendo Problemas, Necessidades e
        Oportunidades no Trabalho
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        No cotidiano profissional, é comum nos depararmos com desafios que, à
        primeira vista, parecem simples de resolver. No entanto, ao observar com
        mais atenção, percebemos que muitos desses problemas carregam uma série
        de fatores interligados, tornando sua análise mais complexa do que
        aparentam. Desenvolver a capacidade de analisar essas complexidades é
        essencial para encontrar soluções mais eficazes, sustentáveis e
        alinhadas com a realidade.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Problemas, necessidades e oportunidades de melhoria raramente existem de
        forma isolada. Eles fazem parte de sistemas maiores, compostos por
        pessoas, processos, recursos e contextos específicos. Ignorar essa
        interdependência pode levar a soluções superficiais, que tratam apenas
        os sintomas, mas não as causas reais.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        A natureza dos problemas complexos
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Problemas complexos são aqueles que possuem múltiplas variáveis,
        diferentes perspectivas e, muitas vezes, informações incompletas. Eles
        não têm uma única resposta correta e podem ser interpretados de maneiras
        distintas por diferentes pessoas. Essa característica exige uma
        abordagem mais cuidadosa e analítica.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Em ambientes de trabalho, esses problemas podem surgir na forma de
        falhas em processos, dificuldades de comunicação, limitações de recursos
        ou mudanças no mercado. Cada um desses fatores pode influenciar o outro,
        criando uma rede de relações que precisa ser compreendida antes de
        qualquer ação.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Identificando causas e não apenas sintomas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Um erro comum ao lidar com problemas é focar apenas nos sintomas
        visíveis. Por exemplo, atrasos em entregas podem ser interpretados como
        falta de comprometimento, quando na verdade podem estar relacionados a
        falhas no planejamento, sobrecarga de trabalho ou falta de comunicação
        clara.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Analisar as causas exige ir além da superfície, fazendo perguntas como:
        “Por que isso está acontecendo?” e “Quais fatores estão contribuindo
        para essa situação?”. Essa investigação permite uma compreensão mais
        profunda e evita soluções paliativas.
      </p>

      <Checkbox checked={checked[0]} onChange={() => handleChange(0)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Considerando diferentes perspectivas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Cada pessoa envolvida em um problema pode ter uma visão diferente sobre
        ele. Essas perspectivas são influenciadas por experiências,
        responsabilidades e objetivos individuais. Ao considerar múltiplos
        pontos de vista, ampliamos nossa compreensão e aumentamos a qualidade da
        análise.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ignorar essas diferenças pode resultar em soluções incompletas ou
        enviesadas. Por outro lado, integrar diferentes opiniões contribui para
        decisões mais equilibradas e eficazes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        A importância do contexto
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Nenhum problema existe fora de um contexto. Fatores como cultura
        organizacional, recursos disponíveis, prazos e objetivos estratégicos
        influenciam diretamente a forma como as situações devem ser analisadas e
        resolvidas.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Uma solução que funciona em um ambiente pode não ser adequada em outro.
        Por isso, é fundamental considerar as particularidades do contexto antes
        de tomar decisões.
      </p>

      <Checkbox checked={checked[1]} onChange={() => handleChange(1)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Necessidades e oportunidades de melhoria
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Nem toda análise começa com um problema evidente. Muitas vezes, trata-se
        de identificar necessidades ou oportunidades de melhoria que ainda não
        se manifestaram como falhas. Essa postura proativa permite antecipar
        desafios e promover avanços contínuos.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Observar processos, resultados e feedbacks com atenção pode revelar
        pontos de melhoria que, quando trabalhados, aumentam a eficiência, a
        qualidade e a satisfação das pessoas envolvidas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Lidando com incertezas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A análise de situações complexas frequentemente envolve incertezas. Nem
        sempre todas as informações estão disponíveis, e decisões precisam ser
        tomadas mesmo assim. Nesses casos, é importante utilizar o melhor
        julgamento possível, com base nos dados existentes e na experiência
        acumulada.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Aceitar a incerteza como parte do processo reduz a ansiedade e permite
        agir de forma mais consciente e responsável, mesmo diante de cenários
        incompletos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Ferramentas de análise e pensamento crítico
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O pensamento crítico é uma habilidade central para lidar com
        complexidades. Ele envolve questionar, analisar informações, identificar
        relações e avaliar diferentes possibilidades antes de tomar decisões.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Algumas práticas úteis incluem mapear processos, listar possíveis
        causas, analisar impactos e testar hipóteses. Essas abordagens ajudam a
        estruturar o raciocínio e tornam a análise mais clara e consistente.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Evitando soluções simplistas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Diante da complexidade, pode surgir a tentação de buscar soluções
        rápidas e simples. Embora isso possa trazer alívio imediato, muitas
        vezes não resolve o problema de forma duradoura.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Investir tempo na análise aumenta as chances de encontrar soluções mais
        robustas, mesmo que isso demande mais esforço inicial. O equilíbrio
        entre agilidade e profundidade é essencial.
      </p>

      <Checkbox checked={checked[2]} onChange={() => handleChange(2)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Considerações finais
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Analisar as complexidades e dificuldades presentes em problemas,
        necessidades e oportunidades de melhoria é uma competência fundamental
        no ambiente de trabalho. Ela permite ir além das aparências, compreender
        relações e tomar decisões mais conscientes.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ao desenvolver essa habilidade, você se torna mais preparado para lidar
        com desafios reais, contribuindo de forma mais estratégica e eficaz.
        Mais do que resolver problemas, trata-se de compreendê-los profundamente
        — e, a partir disso, construir caminhos mais consistentes para a
        melhoria contínua.
      </p>

      <Link disabled={!checked.every(Boolean)} />
    </div>
  );
}
