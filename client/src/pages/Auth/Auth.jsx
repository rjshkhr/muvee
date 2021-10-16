import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import Loading from '../../components/Loading'

import * as Styled from './Auth.styles'
import capitalize from '../../utils/capitalize'
import { loginAction, registerAction } from '../../store/auth/actions'

const Auth = ({ label }) => {
  const dispatch = useDispatch()

  const { userLoading, userError } = useSelector(({ auth }) => auth)

  const [authLoading, setAuthLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setAuthLoading(false)
  }, [setAuthLoading])

  const handleSubmit = e => {
    e.preventDefault()

    label === 'register'
      ? dispatch(registerAction({ name, email, password }))
      : dispatch(loginAction({ email, password }))

    setName('')
    setEmail('')
    setPassword('')
  }

  if (userLoading || authLoading) return <Loading />

  return (
    <Styled.Container>
      <Styled.Heading>{label}</Styled.Heading>

      <Styled.Form onSubmit={handleSubmit}>
        {userError && <Styled.Error>{capitalize(userError)}</Styled.Error>}

        {label === 'register' && (
          <Styled.FormGroup>
            <Styled.UserIcon />
            <Styled.Input
              type='text'
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder='Name'
            />
          </Styled.FormGroup>
        )}

        <Styled.FormGroup>
          <Styled.EmailIcon />
          <Styled.Input
            type='email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder='Email'
          />
        </Styled.FormGroup>

        <Styled.FormGroup>
          <Styled.PasswordIcon />
          <Styled.Input
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder='Password'
          />
        </Styled.FormGroup>

        <Button type='submit' fullWidth>
          {label}
        </Button>

        {label === 'register' ? (
          <Styled.Text>
            Already have an account? <Link to='/login'>Log In</Link>
          </Styled.Text>
        ) : (
          <Styled.Text>
            Don&apos;t have an account? <Link to='/register'>Register</Link>
          </Styled.Text>
        )}
      </Styled.Form>
    </Styled.Container>
  )
}

Auth.propTypes = {
  label: PropTypes.string.isRequired
}

export default Auth
