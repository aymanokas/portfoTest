import { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'
import { loginAction } from './store'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = createUseStyles(style)

const Login = ({ setAccess }) => {
  const isAuth = useSelector(state => state.auth.match)
  const isloading = useSelector(state => state.auth.isloading)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [wrongInput, setWrongInput] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [pwd, setPwd] = useState('')
  useEffect(() => {
    isloading || !clicked ? setWrongInput(false) : setWrongInput(!isAuth)
  }, [isloading, isAuth, clicked])
  const signin = (username, password) => dispatch(loginAction(username, password))
  const { inputClass, titleClass, warningClass, loader, container, redBox, smallTitleClass, buttonClass, form } = useStyles()

  return (
    <div className={container}>
      <div className={form}>
        <p className={titleClass}>Welcome</p>
        <p className={smallTitleClass}>Username</p>
        <input
          className={inputClass}
          placeholder='username'
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <p className={smallTitleClass}>Password</p>
        <input
          className={inputClass}
          placeholder='password'
          type='password'
          onChange={e => setPwd(e.target.value)}
        />
        {wrongInput &&
          <div className={redBox}>
            <p className={warningClass}>Wrong username And/Or password</p>
          </div>}

        <button
          onClick={() => {
            signin({ username: name, password: pwd })
            setClicked(true)
          }}
          className={buttonClass}
        >
          {isloading ? <div className={loader} x /> : 'login'}
        </button>
      </div>
    </div>
  )
}

export default Login
