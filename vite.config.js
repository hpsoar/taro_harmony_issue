module.exports = {
  optimizeDeps: {
    include: [],
    exclude: []
  },
  optimizeJS: {
    terser: {
      compress: {
        drop_console: true
      }
    }
  }
}
