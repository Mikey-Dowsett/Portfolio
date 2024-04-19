import { createApp } from "vue";
import VueRouter from "./router";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Image from "primevue/image";
import Avatar from "primevue/avatar";
import Galleria from "primevue/galleria";
import Tag from "primevue/tag";
import Divider from "primevue/divider";
import Menubar from "primevue/menubar";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

import "primevue/resources/themes/luna-amber/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(VueRouter);
app.use(PrimeVue, { ripple: true });

app.component("Button", Button);
app.component("Card", Card);
app.component("Image", Image);
app.component("Avatar", Avatar);
app.component("Galleria", Galleria);
app.component("Tag", Tag);
app.component("Divider", Divider);
app.component("Menubar", Menubar);
app.component("Splitter", Splitter);
app.component("SplitterPanel", SplitterPanel);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);

app.mount("#app");
