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
        Organização da Rotina, Disciplina e Uso Consciente da Tecnologia
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Estudar e trabalhar são atividades que exigem organização,
        responsabilidade e capacidade de administrar o próprio tempo. Em uma
        rotina cada vez mais conectada, também é necessário saber lidar com
        distrações, principalmente aquelas provocadas pelo celular e pelas redes
        sociais. Desenvolver bons hábitos pode ajudar a melhorar o desempenho,
        reduzir o estresse e tornar as atividades do dia a dia mais produtivas.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Ter uma rotina organizada não significa ocupar todas as horas do dia com
        tarefas. Significa saber quais atividades precisam ser realizadas,
        definir prioridades e reservar tempo suficiente para estudo, trabalho,
        descanso, alimentação, lazer e outras necessidades.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        Organização da Rotina de Estudos e Trabalho
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A organização da rotina começa pela identificação das atividades que
        precisam ser realizadas. Uma pessoa pode ter aulas, trabalhos, provas,
        compromissos profissionais, tarefas domésticas e momentos de descanso.
        Quando essas atividades não são planejadas, é comum deixar tarefas para
        a última hora, esquecer compromissos ou acumular muitas atividades.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Uma das formas de melhorar a organização é utilizar uma agenda,
        calendário ou lista de tarefas. Esses recursos permitem visualizar os
        compromissos e distribuir as atividades ao longo dos dias. O
        planejamento também ajuda a identificar quais tarefas são mais
        importantes ou possuem prazos mais próximos.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Outra estratégia importante é dividir tarefas grandes em etapas menores.
        Imagine, por exemplo, que um estudante precisa realizar um trabalho para
        entregar daqui a duas semanas. Em vez de deixar todo o trabalho para a
        véspera, ele pode dividir a atividade em etapas: pesquisar o tema,
        selecionar as informações, produzir o conteúdo, revisar e finalizar o
        trabalho.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Essa divisão torna a tarefa mais fácil de administrar e diminui a
        sensação de que existe uma atividade muito grande para ser realizada de
        uma só vez.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        Prioridades e Administração do Tempo
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Nem todas as tarefas possuem a mesma importância ou urgência. Por isso,
        organizar uma rotina também significa estabelecer prioridades. Uma
        atividade com prazo para o mesmo dia, por exemplo, normalmente precisa
        receber atenção antes de uma atividade que será necessária somente no
        mês seguinte.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Porém, trabalhar apenas com aquilo que é urgente pode gerar problemas.
        Quando uma pessoa deixa atividades importantes para depois, elas podem
        se transformar em situações urgentes. Por isso, uma boa organização
        procura antecipar tarefas e evitar o acúmulo de compromissos.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Também é importante reconhecer os próprios limites. Uma rotina muito
        cheia pode causar cansaço e dificultar a concentração. O descanso não
        deve ser visto simplesmente como tempo perdido, pois períodos de
        recuperação são importantes para manter a disposição e a capacidade de
        realizar as atividades.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        Disciplina, Constância e Motivação
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Quando falamos em alcançar objetivos, três conceitos aparecem com
        frequência: disciplina, constância e motivação. Apesar de estarem
        relacionados, eles possuem significados diferentes. Compreender essa
        diferença ajuda a desenvolver hábitos mais eficientes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
        Disciplina
      </h3>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Disciplina é a capacidade de realizar aquilo que precisa ser feito,
        mesmo quando não existe vontade naquele momento. Uma pessoa disciplinada
        procura cumprir seus compromissos e respeitar os horários e objetivos
        que estabeleceu.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Por exemplo, um estudante pode não estar com vontade de estudar em
        determinado dia, mas sabe que precisa revisar o conteúdo para uma
        avaliação. A disciplina ajuda esse estudante a iniciar a atividade mesmo
        sem depender de estar motivado.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
        Constância
      </h3>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Constância está relacionada à continuidade. Uma pessoa constante mantém
        uma determinada prática ao longo do tempo, evitando depender de ações
        isoladas.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Estudar durante algumas horas apenas na véspera de uma prova é diferente
        de estudar um pouco todos os dias. A segunda situação representa maior
        constância, pois o aprendizado é construído gradualmente.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A constância também permite perceber resultados que normalmente não
        aparecem imediatamente. Aprender uma nova habilidade, melhorar o
        desempenho profissional ou desenvolver um hábito pode levar semanas ou
        meses. Por isso, continuar realizando pequenas ações pode ser mais
        importante do que realizar uma grande quantidade de trabalho apenas uma
        vez.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
        Motivação
      </h3>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Motivação é aquilo que impulsiona uma pessoa a agir. Ela pode surgir de
        diferentes fatores: interesse por determinado assunto, desejo de
        alcançar um objetivo, reconhecimento, necessidade profissional ou
        satisfação pessoal.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A motivação pode variar bastante. Existem dias em que uma pessoa está
        muito disposta a estudar ou trabalhar e outros em que está cansada ou
        desinteressada. Por isso, depender exclusivamente da motivação pode
        dificultar a manutenção de uma rotina.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Disciplina e constância ajudam justamente nesses momentos. A motivação
        pode ajudar a começar, mas hábitos e organização contribuem para
        continuar.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        O Uso do Celular e das Redes Sociais
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O celular é uma ferramenta importante para comunicação, estudo, trabalho
        e acesso à informação. Com poucos toques, é possível pesquisar
        conteúdos, participar de reuniões, conversar com outras pessoas,
        utilizar aplicativos educacionais e acessar diferentes serviços.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Entretanto, o mesmo dispositivo também pode provocar distrações.
        Notificações, vídeos, mensagens, jogos e redes sociais podem interromper
        uma atividade e fazer com que a atenção seja direcionada para outra
        tarefa.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Quando uma pessoa está estudando ou realizando uma tarefa que exige
        concentração, cada interrupção pode dificultar a retomada do raciocínio.
        Mesmo que a pessoa permaneça poucos minutos no celular, várias
        interrupções ao longo do período podem comprometer o tempo disponível
        para a atividade.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        Uso Consciente das Redes Sociais
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Usar redes sociais de maneira consciente não significa necessariamente
        deixar de utilizá-las. Significa perceber como, quando e por quanto
        tempo elas estão sendo utilizadas, além de entender se esse uso está
        contribuindo ou atrapalhando os objetivos da pessoa.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Uma estratégia simples é estabelecer momentos específicos para verificar
        mensagens e redes sociais, evitando consultar o celular constantemente
        durante atividades que exigem concentração. Desativar notificações
        desnecessárias também pode reduzir interrupções.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Outra atitude importante é prestar atenção ao tipo de conteúdo
        consumido. As redes sociais apresentam uma grande quantidade de
        informações, mas nem todas são confiáveis, úteis ou adequadas.
        Desenvolver senso crítico é importante para avaliar aquilo que aparece
        na tela antes de acreditar, compartilhar ou utilizar uma informação.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        Tecnologia como Ferramenta
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        O celular e a internet não precisam ser vistos apenas como fontes de
        distração. Quando utilizados de forma planejada, podem contribuir para a
        organização e o aprendizado. Aplicativos de calendário, lembretes,
        listas de tarefas, plataformas de cursos e ferramentas de pesquisa podem
        auxiliar estudantes e profissionais.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A diferença está na forma como a tecnologia é utilizada. Uma pessoa pode
        usar o celular para pesquisar um conteúdo relacionado a uma atividade ou
        pode passar o mesmo período consumindo conteúdos que não possuem relação
        com seus objetivos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        Construindo uma Rotina Mais Equilibrada
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Uma rotina eficiente não precisa ser perfeita. É normal que imprevistos
        aconteçam e que alguns dias sejam diferentes do planejamento. O mais
        importante é conseguir reorganizar as atividades e retomar a rotina
        quando necessário.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Para isso, algumas atitudes podem ajudar:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        <li>Definir objetivos claros.</li>
        <li>Organizar as tarefas e seus prazos.</li>
        <li>Estabelecer prioridades.</li>
        <li>Dividir tarefas grandes em etapas menores.</li>
        <li>Reservar períodos para estudo e trabalho.</li>
        <li>Incluir momentos de descanso e lazer.</li>
        <li>Evitar distrações durante atividades que exigem concentração.</li>
        <li>Controlar o uso do celular e das redes sociais.</li>
        <li>Manter constância mesmo quando a motivação estiver baixa.</li>
        <li>Avaliar a própria rotina e fazer ajustes quando necessário.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
        Conclusão
      </h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Organizar a rotina de estudos e trabalho é uma forma de administrar
        melhor o tempo e reduzir o acúmulo de tarefas. Para isso, é importante
        estabelecer prioridades, planejar atividades e reservar momentos
        adequados para trabalho, estudo e descanso.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Disciplina, constância e motivação possuem papéis diferentes nesse
        processo. A motivação pode impulsionar uma pessoa a agir, enquanto a
        disciplina ajuda a realizar o que precisa ser feito mesmo quando a
        vontade não está presente. A constância permite manter esse
        comportamento ao longo do tempo.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Da mesma forma, o celular e as redes sociais podem ser ferramentas úteis
        ou fontes de distração, dependendo da maneira como são utilizados. O uso
        consciente da tecnologia envolve controlar interrupções, avaliar as
        informações recebidas e utilizar os recursos digitais de maneira
        alinhada aos próprios objetivos. Dessa forma, organização, disciplina e
        uso consciente da tecnologia podem contribuir para uma rotina mais
        equilibrada e produtiva.
      </p>

      <Checkbox checked={checked[2]} onChange={() => handleChange(2)} />

      {/* <Link disabled={!checked.every(Boolean)} /> */}
    </div>
  );
}
