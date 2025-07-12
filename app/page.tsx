import Component from "../portfolio-landing"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Matheus Aparecido - Portfolio",
  description: "Portfolio de projetos de desenvolvimento web e mobile",
  icons: {
    icon: "/icon.svg",
  },
};

export default async function Page() {
  try {
    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const [githubResponse, response] = await Promise.all([
      fetch(`${baseUrl}/api/github`),
      fetch(`${baseUrl}/api/cms/gethome`),
    ]);

    if (!githubResponse.ok) {
      throw new Error(`HTTP error! status: ${githubResponse.status}`);
    }

    const githubData = await githubResponse.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.data) {
      return <div>Erro: Dados não encontrados</div>;
    }

    return <Component props={data.data} githubData={githubData.data} />;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return <div>Erro ao carregar a página</div>;
  }
}
