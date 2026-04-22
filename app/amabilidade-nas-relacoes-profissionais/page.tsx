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
        Compromisso com a Amabilidade nas Relações Profissionais
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Comprometer-se com a prática permanente e intensiva da amabilidade nas
        relações profissionais não é apenas uma escolha de comportamento, mas
        uma estratégia consciente para construir ambientes de trabalho mais
        saudáveis, produtivos e sustentáveis. Em um contexto organizacional
        marcado por pressões constantes, prazos e metas desafiadoras, a
        amabilidade se destaca como um diferencial capaz de transformar a
        qualidade das interações humanas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        O significado da amabilidade no ambiente de trabalho
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A amabilidade vai além da cordialidade superficial. Trata-se de uma
        postura ativa de respeito, empatia e consideração pelo outro. Envolve
        ouvir com atenção, comunicar-se de forma clara e respeitosa, reconhecer
        o valor das pessoas e agir com integridade, mesmo em situações
        desafiadoras.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Essa prática exige intenção e consistência. Não se trata de agir com
        gentileza apenas em momentos convenientes, mas de incorporar esse
        comportamento como parte da identidade profissional. A amabilidade,
        quando genuína, fortalece vínculos e constrói confiança entre colegas,
        líderes e equipes.
      </p>

      <Checkbox checked={checked[0]} onChange={() => handleChange(0)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Amabilidade como base para o engajamento
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O engajamento no trabalho está diretamente relacionado à forma como as
        pessoas se sentem dentro do ambiente organizacional. Profissionais que
        se percebem respeitados e valorizados tendem a demonstrar maior
        motivação, comprometimento e disposição para contribuir com os objetivos
        da equipe.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A amabilidade cria um ambiente de segurança psicológica, no qual os
        indivíduos se sentem confortáveis para expressar ideias, compartilhar
        opiniões e assumir riscos sem medo de julgamentos. Esse ambiente
        favorece a inovação, o aprendizado contínuo e o fortalecimento do senso
        de pertencimento.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Cooperação e construção de relações sólidas
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A cooperação é um dos pilares das organizações de alto desempenho, e a
        amabilidade desempenha um papel essencial nesse processo. Quando as
        relações são pautadas pelo respeito mútuo, as pessoas tendem a colaborar
        mais, compartilhar conhecimentos e apoiar umas às outras na busca por
        resultados comuns.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ambientes colaborativos não surgem por acaso. Eles são construídos a
        partir de interações diárias baseadas em confiança, escuta ativa e
        reconhecimento. A amabilidade atua como um facilitador dessas
        interações, reduzindo conflitos desnecessários e promovendo um clima
        organizacional mais harmonioso.
      </p>

      <Checkbox checked={checked[1]} onChange={() => handleChange(1)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        O efeito multiplicador da amabilidade
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Um dos aspectos mais poderosos da amabilidade é seu efeito contagioso.
        Atitudes positivas tendem a ser replicadas, influenciando o
        comportamento coletivo. Quando um profissional age com respeito e
        consideração, ele contribui para a criação de um ciclo virtuoso, no qual
        outros se sentem incentivados a agir da mesma forma.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Esse efeito multiplicador fortalece a cultura organizacional, tornando a
        amabilidade um valor compartilhado. Com o tempo, essa prática deixa de
        ser um esforço individual e passa a ser uma característica do ambiente
        como um todo.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Desafios e desenvolvimento contínuo
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Manter a amabilidade em todas as situações pode ser desafiador,
        especialmente em momentos de pressão, conflitos ou divergências. No
        entanto, é justamente nesses contextos que essa prática se torna mais
        relevante. Desenvolver autoconhecimento e inteligência emocional é
        fundamental para lidar com emoções e manter uma postura equilibrada.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A disciplina na prática da amabilidade exige atenção constante às
        próprias atitudes e comportamentos. Pequenas ações, como ouvir com
        atenção, agradecer, reconhecer esforços e oferecer apoio, fazem uma
        grande diferença na construção de relações mais positivas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        O papel da liderança
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Líderes têm um papel fundamental na promoção da amabilidade no ambiente
        de trabalho. Ao adotarem uma postura respeitosa, justa e empática, eles
        influenciam diretamente o comportamento de suas equipes e estabelecem
        padrões de convivência.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Uma liderança amável não significa ausência de cobrança, mas sim a
        capacidade de equilibrar resultados com relações humanas. Líderes que
        valorizam a escuta, o reconhecimento e o respeito contribuem para o
        fortalecimento do engajamento e da cooperação.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Amabilidade no cotidiano organizacional
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Incorporar a amabilidade ao dia a dia exige consistência. Cumprimentar
        colegas, demonstrar interesse genuíno, comunicar-se com clareza e
        respeito, e reconhecer contribuições são práticas simples que, quando
        realizadas de forma contínua, transformam o ambiente de trabalho.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A comunicação digital também demanda atenção. Mensagens escritas podem
        ser facilmente interpretadas de forma equivocada, por isso é importante
        adotar um tom respeitoso e claro, evitando ambiguidades e
        mal-entendidos.
      </p>

      <Checkbox checked={checked[2]} onChange={() => handleChange(2)} />

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Impactos no bem-estar e nos resultados
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A amabilidade contribui significativamente para o bem-estar dos
        profissionais. Ambientes mais respeitosos reduzem o estresse, aumentam a
        satisfação no trabalho e promovem uma melhor qualidade de vida. Esses
        fatores impactam diretamente a produtividade e a retenção de talentos.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Além disso, organizações que valorizam relações saudáveis tendem a
        apresentar melhores resultados. A cooperação, o engajamento e a
        confiança fortalecem a capacidade das equipes de enfrentar desafios e
        alcançar objetivos de forma mais eficaz.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Conclusão
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O compromisso com a prática permanente e intensiva da amabilidade nas
        relações profissionais é uma escolha estratégica e humana. Trata-se de
        reconhecer que os resultados são construídos por pessoas e que a
        qualidade das interações influencia diretamente o desempenho coletivo.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ao adotar a amabilidade como princípio orientador, promove-se um
        ambiente mais colaborativo, engajado e sustentável. Esse compromisso
        contínuo transforma o trabalho em um espaço de respeito, crescimento e
        realização, beneficiando indivíduos, equipes e organizações como um
        todo.
      </p>

      <Link disabled={!checked.every(Boolean)} />
    </div>
  );
}
