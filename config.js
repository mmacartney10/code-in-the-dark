function getConfig () {
  var paths = {
    dir: '/',
    src: './_src',
    dest: './build',
    app: './app',
    styles: '/styles'
  }

  var config = {
    src: {
      scripts: paths.app,
      styles: paths.src + paths.styles
    },
    dest: {
      scripts: paths.dest,
      styles: paths.dest
    }
  }

  return config
}

module.exports = getConfig
