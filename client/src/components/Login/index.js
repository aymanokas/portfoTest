import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'
import { loginAction } from './store'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = createUseStyles(style)

const Login = ({ setAccess }) => {
  const isAuth = useSelector(state => state.auth.match)
  const isloading = useSelector(state => state.auth.isloading)
  const wrongInput = useSelector(state => state.auth.inputWrong)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const signin = (username, password) => dispatch(loginAction(username, password))
  const { inputClass, titleClass, loader, container, redBox, smallTitleClass, buttonClass, form } = useStyles()

  return (
    <div className={container}>
      <div className={form}>
        <p className={titleClass}>Welcome</p>
        <p className={smallTitleClass}>Name</p>
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
            <p className={smallTitleClass}>wrong input</p>
          </div>}

        <button onClick={() => signin({ username: name, password: pwd })} className={buttonClass}>{isloading ? <div className={loader} /> : 'login'}</button>
      </div>
    </div>
  )
}

export default Login
