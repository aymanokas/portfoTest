const style = {
  tabs: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '.3px #00000055 solid'
  },
  title: {
    fontSize: '19px !important',
    width: '100% !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#5e5e5e !important',
    '&:hover': {
      color: '#0064f9 !important'
    }
  },
  tab: {
    minWidth: 90,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'auto',
    padding: '0 16px'
  },
  selectedTab: {
    minWidth: 90,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'auto',
    borderBottom: '3px #0064f9 solid',
    padding: '0 16px'
  },
  selectedTitle: {
    fontSize: '19px !important',
    width: '100% !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#0064f9 !important'
  }
}

export default style