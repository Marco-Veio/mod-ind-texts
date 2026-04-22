import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg mt-10 mb-10 rounded-2xl flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-gray-800">
          Módulo da Indústria - 1º ano
        </h1>
        <Link
          href="/revolucao-industrial"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Revoluções Industriais
        </Link>
        <Link
          href="/tecnologias-industria-4.0"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Indústria 4.0
        </Link>
        <Link
          href="/inovacao-nos-processos-de-trabalho"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Inovação no processo de trabalho
        </Link>
        <Link
          href="/amabilidade-nas-relacoes-profissionais"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Amabilidade nas Relações Profissionais
        </Link>
        <Link
          href="/compreendendo-hierarquias"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Hierarquias
        </Link>
        <Link
          href="/novas-ideias"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Novas Ideias
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg mt-10 mb-10 rounded-2xl flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-gray-800">
          Módulo da Indústria - 2º ano
        </h1>
        <Link
          href="/fundamentos-da-qualidade"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Fundamentos da Qualidade
        </Link>
        <Link
          href="/aplicacao-ferramentas-da-qualidade"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Ferramentas da Qualidade Aplicadas nos Processos Industriais
        </Link>
        <Link
          href="/etapas-da-filosofia-lean"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Filosofia Lean
        </Link>
        <Link
          href="/amabilidade-nas-relacoes-profissionais"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Amabilidade nas Relações Profissionais
        </Link>
        <Link
          href="/compreendendo-hierarquias"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Hierarquias
        </Link>
        <Link
          href="/novas-ideias"
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Novas Ideias
        </Link>
      </div>
    </div>
  );
}
