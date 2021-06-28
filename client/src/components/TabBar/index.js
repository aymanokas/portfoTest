import { Typography } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

const TabBar = ({ setTab, index }) => {
  const { tabs, selectedTab, title, tab, selectedTitle } = useStyles()

  return (
    <>
      <div className={tabs}>
        <div className={index === 1 ? selectedTab : tab}>
          <Typography variant='h4' onClick={() => setTab(1)} className={index === 1 ? selectedTitle : title}>
            PNG Cutout
          </Typography>
        </div>
        <div className={index === 2 ? selectedTab : tab}>
          <Typography variant='h4' onClick={() => setTab(2)} className={index === 2 ? selectedTitle : title}>
            CAD
          </Typography>
        </div>
        <div className={index === 3 ? selectedTab : tab}>
          <Typography variant='h4' onClick={() => setTab(3)} className={index === 3 ? selectedTitle : title}>
            Learning
          </Typography>
        </div>
      </div>
    </>
  )
}

export default TabBar
