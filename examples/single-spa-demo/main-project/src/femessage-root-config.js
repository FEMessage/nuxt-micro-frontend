import { registerApplication, start } from "single-spa";
import { getManifest } from './utils.js'

registerApplication({
  name: "@femessage/nuxt",
  app: async () => {
        await getManifest('http://localhost:7102/_nuxt/manifest.json', 'app')
        return window["nuxt-subapp-app"];
  },
  activeWhen: ["/nuxt"]
});

start({
  urlRerouteOnly: true,
});
