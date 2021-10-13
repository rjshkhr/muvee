import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Watchlist from './pages/Watchlist'

import FontStyles from './styles/FontStyles'
import GlobalStyles from './styles/GlobalStyles'
import { lightTheme, darkTheme } from './styles/themes'
import { useDarkMode } from './hooks/useDarkMode'
import * as Styled from './App.styles.js'

const App = () => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <FontStyles />
      <GlobalStyles />

      <Header theme={theme} toggleTheme={toggleTheme} />

      <Styled.Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/watchlist' component={Watchlist} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Styled.Main>
    </ThemeProvider>
  )
}

export default App
