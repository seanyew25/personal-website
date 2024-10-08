<script setup>
import { onMounted, ref } from "vue";

window.addEventListener("load", function () {
  VANTA.NET({
    el: "#skillBanner",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 320.0,
    minWidth: 200.0,
    scale: 2.0,
    scaleMobile: 1.0,
    color: 0x6cb5ca,
    backgroundColor: 0x1c2a8d,
  });
});
const languages = ref([
  { name: "Python", symbol: "devicon-python-plain colored" },
  { name: "Javascript", symbol: "devicon-javascript-plain colored" },
  { name: "SQL", symbol: "devicon-mysql-original" },
  { name: "GraphQL", symbol: "devicon-graphql-plain colored" },
  { name: "Terraform", symbol: "devicon-terraform-plain colored" },
  { name: "HTML", symbol: "devicon-html5-plain colored" },
  { name: "CSS", symbol: "devicon-css3-plain colored" },
]);
const frameworks = ref([
  { name: "React", symbol: "devicon-react-original colored" },
  { name: "Vue", symbol: "devicon-vuejs-plain colored" },
  { name: "Tailwind", symbol: "devicon-tailwindcss-original colored" },
  { name: "Bootstrap", symbol: "devicon-bootstrap-plain colored" },
  { name: "CSS", symbol: "devicon-css3-plain colored" },
]);
const technologies = ref([
  { name: "Docker", symbol: "devicon-docker-plain colored" },
  { name: "AWS", symbol: "devicon-amazonwebservices-plain-wordmark colored" },
]);

function checkData() {
  languages.value.forEach((language) => {
    console.log(language.name);
  });
}

onMounted(() => {
  checkData();
});
</script>

<template>
  <div id="skillBanner">
    <div class="skillHeading">
      <h1 class="text-white">Skills</h1>
    </div>
    <div class="outer">
      <v-card variant="text" class="m-auto" max-width="screen">
        <v-card-text>
          <h2 class="text-h6 mb-2 text-white">Languages</h2>

          <v-chip-group column>
            <v-chip
              v-for="language in languages"
              :key="language.name"
              class="text-white"
              style="pointer-events: none"
              color="primary"
            >
              <i :class="language.symbol"></i>
              &nbsp; {{ language.name }}
            </v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-text>
          <h2 class="text-white text-h6 mb-2">Frameworks</h2>

          <v-chip-group column>
            <v-chip
              v-for="framework in frameworks"
              :key="framework.name"
              class="text-white"
              color="primary"
              style="pointer-events: none"
            >
              <i :class="framework.symbol"></i>
              &nbsp; {{ framework.name }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-text>
          <h2 class="text-white text-h6 mb-2">Technologies</h2>

          <v-chip-group column>
            <v-chip
              v-for="technology in technologies"
              :key="technology.name"
              class="text-white"
              color="primary"
              style="pointer-events: none"
            >
              <i :class="technology.symbol"></i>
              &nbsp; {{ technology.name }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style>
.outer {
  @apply flex justify-center;
}
.skillHeading {
  @apply flex justify-center items-center pt-10;
}
</style>
