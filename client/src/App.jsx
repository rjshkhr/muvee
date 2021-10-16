import { Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Watchlist from './pages/Watchlist'
import MovieInfo from './pages/MovieInfo'

import FontStyles from './styles/FontStyles'
import GlobalStyles from './styles/GlobalStyles'
import { lightTheme, darkTheme } from './styles/themes'
import useDarkMode from './hooks/useDarkMode'
import * as Styled from './App.styles.js'

const App = () => {
  const [theme, toggleTheme] = useDarkMode()

  const user = useSelector(({ auth }) => auth.user)

  return (
    <>
      <FontStyles />
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />

        <Header theme={theme} toggleTheme={toggleTheme} />

        <Styled.Main>
          <Switch>
            <Route exact path='/'>
              {user ? <Home /> : <Redirect to='/login' />}
            </Route>

            <Route exact path='/watchlist'>
              {user ? <Watchlist /> : <Redirect to='/login' />}
            </Route>

            <Route exact path='/login'>
              {!user ? <Login /> : <Redirect to='/' />}
            </Route>

            <Route exact path='/register'>
              {!user ? <Register /> : <Redirect to='/' />}
            </Route>

            <Route exact path='/movie/:movieId' component={MovieInfo} />

            <Route path='*' component={NotFound} />
          </Switch>
        </Styled.Main>
      </ThemeProvider>
    </>
  )
}

export default App
