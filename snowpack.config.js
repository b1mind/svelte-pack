/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    /* ... */
    public: '/',
    src: '/dist',
  },

  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-sass'],

  install: [
    /* ... */
  ],

  installOptions: {
    /* ... */
  },

  devOptions: {
    /* ... */
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
