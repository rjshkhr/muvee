import { Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Watchlist from './pages/Watchlist'
import MovieInfo from './pages/MovieInfo'
import UserInfo from './pages/UserInfo'

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
              {!user ? <Auth label='login' /> : <Redirect to='/' />}
            </Route>

            <Route exact path='/register'>
              {!user ? <Auth label='register' /> : <Redirect to='/' />}
            </Route>

            <Route exact path='/movie/:movieId'>
              <MovieInfo />
            </Route>

            <Route exact path='/user/:userId'>
              <UserInfo />
            </Route>

            <Route exact path='*'>
              <NotFound text='Oops! page not found...' />
            </Route>
          </Switch>
        </Styled.Main>
      </ThemeProvider>
    </>
  )
}

export default App
