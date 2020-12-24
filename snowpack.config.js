/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/src' },
  },

  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-sass'],

  install: [
    /* ... */
  ],

  installOptions: {
    /* ... */
  },

  devOptions: {
    port: 9001,
  },

  buildOptions: {
    /* ... */
  },

  proxy: {
    /* ... */
  },

  alias: {
    /* ... */
  },
}
