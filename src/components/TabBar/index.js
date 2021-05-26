import { Typography } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

const TabBar = () => {
  const { tabs, selectedTab, selectedTitle } = useStyles()
  return (
    <>
      <div className={tabs}>
        <div className={selectedTab}>
          <Typography variant='h4' className={selectedTitle}>
            Home
          </Typography>
        </div>
      </div>
    </>
  )
}

export default TabBar