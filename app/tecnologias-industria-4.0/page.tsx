import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg mt-10 mb-10 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Tecnologias Habilitadoras da Indústria 4.0
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        A Indústria 4.0 representa uma transformação profunda nos sistemas
        produtivos, marcada pela integração entre o mundo físico e o digital.
        Esse novo modelo vai além da automação tradicional, incorporando
        tecnologias inteligentes que tornam os processos mais eficientes,
        conectados e adaptáveis. Compreender e reconhecer essas tecnologias
        habilitadoras é essencial para entender como a indústria moderna
        funciona e evolui.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Internet das Coisas (IoT)
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A Internet das Coisas permite a conexão entre máquinas, sensores e
        dispositivos, possibilitando a coleta e troca de dados em tempo real. No
        ambiente industrial, isso significa maior controle dos processos,
        manutenção preditiva e redução de falhas, aumentando a produtividade e
        eficiência.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Big Data e Análise de Dados
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Com o grande volume de dados gerados pelas máquinas conectadas, o Big
        Data surge como ferramenta essencial para processar e analisar essas
        informações. Ele permite identificar padrões, prever problemas e
        melhorar a tomada de decisões estratégicas dentro da indústria.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Computação em Nuvem
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A computação em nuvem possibilita o armazenamento e acesso remoto de
        dados, além de oferecer flexibilidade e redução de custos com
        infraestrutura. Ela facilita a integração entre diferentes setores e
        unidades produtivas, tornando os processos mais ágeis.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Inteligência Artificial
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A inteligência artificial permite que sistemas aprendam com dados e
        tomem decisões de forma autônoma. Na indústria, é utilizada para
        otimizar processos, melhorar a qualidade dos produtos e automatizar
        tarefas complexas, aumentando a eficiência operacional.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Sistemas Ciberfísicos
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Esses sistemas integram o mundo físico ao digital, permitindo o
        monitoramento e controle em tempo real dos processos industriais. Eles
        tornam as fábricas mais inteligentes, capazes de se adaptar rapidamente
        a mudanças e prevenir falhas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Robótica Avançada
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A robótica na Indústria 4.0 evoluiu para incluir robôs colaborativos,
        que trabalham ao lado dos humanos. Esses robôs são flexíveis, seguros e
        capazes de executar múltiplas tarefas, contribuindo para o aumento da
        produtividade.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Manufatura Aditiva
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Conhecida como impressão 3D, a manufatura aditiva permite produzir peças
        a partir de modelos digitais, com menor desperdício de material e maior
        personalização. É muito utilizada na prototipagem e produção sob
        demanda.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Realidade Aumentada e Virtual
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Essas tecnologias permitem a visualização de informações digitais no
        ambiente físico, auxiliando em treinamentos, manutenção e montagem de
        equipamentos. Elas aumentam a precisão e reduzem erros nas operações
        industriais.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Cibersegurança
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Com o aumento da conectividade, a proteção de dados e sistemas se torna
        fundamental. A cibersegurança garante a integridade das informações e a
        continuidade das operações industriais, evitando ataques e falhas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
        Conclusão
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        As tecnologias habilitadoras da Indústria 4.0 transformam a maneira como
        as empresas produzem, organizam e inovam. Reconhecer essas tecnologias é
        essencial para compreender o cenário atual da indústria e se preparar
        para as demandas do futuro, onde a integração entre tecnologia e
        produção será cada vez mais necessária.
      </p>

      <Link
        href="https://api.socrative.com/rc/yLhkrp?method=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800 transition duration-300"
      >
        Abra o teste clicando aqui
      </Link>
    </div>
  );
}
