import { Button, Typography } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import { lof, logo2 } from '../../assets'
import style from './style'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { useLocation } from 'react-router-dom'

const useStyles = createUseStyles(style)

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.match)
  const location = useLocation()
  const isProjectsRoute = location.pathname === '/'
  const isResoursesRoute = location.pathname === '/resources'
  const { logoStyle, topbarRightSide, topbar, selectedTitle, lofStyle, title, topbarLeftSide, button, topSection, searchContainer, searchSubContainer, bigTitle } = useStyles()
  return (
    <>
      <div className={topSection}>
        <div className={topbar}>
          <div className={topbarRightSide}>
            <img alt='' src={logo2} className={logoStyle} />
            <img alt='' src={lof} className={lofStyle} />
          </div>
          <div className={topbarLeftSide}>
            <Typography onClick={() => dispatch(push('/'))} variant='h4' className={isProjectsRoute ? selectedTitle : title}>
              Projects
            </Typography>
            <Typography onClick={() => dispatch(push('/resources'))} variant='h4' className={isResoursesRoute ? selectedTitle : title}>
              Resources
            </Typography>
            <Button variant='contained' onClick={() => dispatch(push('/admin'))} className={button}>
              {isAuth ? 'Admin' : 'Login'}
            </Button>
          </div>
        </div>
        <div className={searchContainer}>
          <div className={searchSubContainer}>
            <Typography variant='h4' className={bigTitle}>
              We design and communicate landscape design
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
