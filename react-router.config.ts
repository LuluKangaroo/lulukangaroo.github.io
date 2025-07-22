import type { Config } from "@react-router/dev/config";

/*
  CLIENT SIDE Rendering
    (client being individuals trying to access the app, requesting connections)
    Always client side render as user navigates app
    Server rendering to be disabled for Single Page apps

  SERVER SIDE Rendering
    (server being where the app is hosted, waiting for connections)
    Requires deployment that supports server side rendering
    Can still statically pre-render individual routes despite global server side
    Usage of clientLoader to avoid server rending/fetching for UI portions

  STATIC PRE-rendering
    Build-time operation to generate static HTML and client navigation data
      payloads (getting list of URLs)
    For SEO (search engine optimization), performance, deployments without
      server rendering
*/

// tl;dr I think I'm using clientside/static bc all the data is just in there
export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  
  // Static pre-rendering below, specify URLS to prerender
  /*
  async prerender() {
    return [
      "/",
      "/about",
      "/contact"
    ];
  }
  */
} satisfies Config;
