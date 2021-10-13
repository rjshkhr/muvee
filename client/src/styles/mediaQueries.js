const mediaQueries = size => {
  const breakpoints = {
    xs: '375px',
    sm: '520px',
    md: '768px',
    lg: '1024px',
    xl: '1200px'
  }

  return `@media screen and (max-width: ${breakpoints[size]})`
}

export default mediaQueries
