import { Button, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import { lof, logo2 } from '../../assets'
import style from './style'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'

const useStyles = createUseStyles(style)

const Header = ({ data, searchedData, setSearchedData }) => {
  const [search2, setSearch] = useState('')
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.match)
  const searchCourse = (data, searchTerm) => {
    if (searchTerm.length === 0) return data
    return data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  const { logoStyle, topbarRightSide, topbar, lofStyle, topbarLeftSide, textinput, button, topSection, searchContainer, searchSubContainer, bigTitle } = useStyles()
  return (
    <>
      <div className={topSection}>
        <div className={topbar}>
          <div className={topbarRightSide}>
            <img alt='' src={logo2} className={logoStyle} />
            <img alt='' src={lof} className={lofStyle} />
          </div>
          <div className={topbarLeftSide}>
            <Button variant='contained' onClick={() => dispatch(push('/admin'))} className={button}>
              {isAuth ? 'Admin' : 'Login'}
            </Button>
          </div>
        </div>
        <div className={searchContainer}>
          <div className={searchSubContainer}>
            <Typography variant='h4' className={bigTitle}>
              The best free stock photos and videos shared by talented creators.
            </Typography>
            <TextField
              className={textinput}
              InputLabelProps={{ style: { color: '#1a1a1a' } }}
              placeholder='Search for free photos '
              variant='outlined'
              onChange={(e) => {
                setSearch(e.target.value)
                setSearchedData(searchCourse(data, e.target.value))
              }}
              value={search2}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='Add'
                      style={{ width: 55, color: '#5e5e5e' }}
                      onClick={
                        () => {
                          setSearch('')
                        }
                      }
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
