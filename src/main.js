// import { createApp } from "vue";
// import Vuetify from "vuetify";

// import "./style.css";
// import App from "./App.vue";

// const vuetify = createVuetify();
// createApp(App).mount("#app");

import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import App from "./App.vue";
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
