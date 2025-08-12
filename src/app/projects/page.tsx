import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "MeuPet+",
    description:
      "App de cuidados do seu pet, cartão de vacinas, medicamentos",
    url: "https://meupetplus.com.br/",
    imageUrl: "/projects/petcare.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          PHP Hyperf
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          React Native
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          MySQL
        </span>
      </div>
    ),
  },
  {
    name: "Monetizze",
    description:
      "Plataforma de ecommerce, cursos e afiliados.",
    url: "https://kings-cross-cinema-schedule-2025.vercel.app/",
    imageUrl: "/projects/monetizze.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#FF5D01] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          PHP
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          MySQL
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none ring-1 dark:ring-zinc-500 ring-zinc-600">
          ElasticSearch
        </span>
      </div>
    ),
  },
  {
    name: "koneq",
    description:
      "Plataforma de monitoramento de máquinas agricolas",
    url: "https://campanhas.bamaqmaquinas.com.br/koneq-telemetria",
    imageUrl: "/projects/koneq.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          PHP Laravel
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          Vue.js
        </span>
        <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none ring-1 dark:ring-zinc-500 ring-zinc-600">
          Postgrees
        </span>
      </div>
    ),
  },
  {
    name: "kim+",
    description:
      "App de mobilidade e tickets",
    url: "https://usekim.com.br/",
    imageUrl: "/projects/kim.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          React native
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          React js 
        </span>
        <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none ring-1 dark:ring-zinc-500 ring-zinc-600">
          Postgrees
        </span>
      </div>
    ),
  },
   {
    name: "Agn proteção veicular",
    description:
      "Plataforma de proteção veicular",
    url: "https://agnpv.com/",
    imageUrl: "/projects/agn.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          React native
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          React js 
        </span>
        <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none ring-1 dark:ring-zinc-500 ring-zinc-600">
          Postgrees
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-600">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={1200}
        height={630}
        alt="Logo for css2wind website"
      />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
