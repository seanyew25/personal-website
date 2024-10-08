<script setup>
const projects = [
  {
    name: "😋 NomNom",
    link: "https://nomnom-alpha.vercel.app/",
    description: [
      "A recipe search app that allows users to search for recipes based on ingredients they have at home.",
      "Built with React, Tailwind CSS, Neo4j and Apollo GraphQL.",
      "Utilises LangChain and OpenAI to perform RAG",
    ],
  },

  {
    name: "✅ Checklist",
    link: "https://13.214.111.85.nip.io",
    description: [
      "Built with Vue.js, Nuxt, Express and PostgreSQL with RESTful API architecture",
      "Built a CI/CD pipeline using Docker, GitHub Actions and AWS EC2 to automate building and deployment processes",
      "Provisioned a AWS VPC using Terraform, including an Internet Gateway to enable users access",
    ],
  },
];
</script>
<template>
  <div class="project-outer">
    <h1>Projects</h1>

    <div class="card-grid">
      <v-card
        v-for="project in projects"
        :key="project.name"
        class="mx-auto"
        width="100%"
      >
        <template v-slot:title>
          <span class="font-weight-black">{{ project.name }}</span>
        </template>
        <v-card-subtitle>
          <a :href="project.link" class="subtitle-link">
            {{ project.link }}
          </a>
        </v-card-subtitle>

        <v-card-text class="bg-surface-light pt-4">
          <p v-for="desc in project.description" :key="desc">
            {{ desc }}
          </p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style>
h1 {
  @apply text-white text-center;
}
.project-outer {
  @apply bg-[#3d5a80] p-10;
}

.card-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 w-2/4 m-auto mt-8;
}
</style>
