const presets = [
  '@babel/preset-env',
  [
    '@babel/preset-react',
    {
      runtime: 'automatic'
    }
  ]
]

const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: true
    }
  ]
]

module.exports = {
  presets,
  plugins
}
