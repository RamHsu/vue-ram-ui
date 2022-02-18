import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import RamUI from "./libs";

createApp(App).use(store).use(router).use(router).use(RamUI).mount("#app");
