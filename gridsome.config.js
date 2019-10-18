// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = []

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())


module.exports = {
  siteName: 'Céline De Schepper',
  plugins: [],
  css: {
    loaderOptions: {
      scss: {
        // options here will be passed to sass-loader
      },
      postcss: {
        plugins: postcssPlugins,
    },
    }
  },
  templates: {
    Projects: [
      {
        path: '/:slug',
        component: './src/templates/Projects.vue'
      }
    ]
  }
}
