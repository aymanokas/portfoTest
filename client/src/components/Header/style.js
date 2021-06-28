import { bg } from '../../assets'

const style = {
  logoStyle: {
    width: 40,
    height: 40,
    borderRadius: 6
  },
  lofStyle: {
    width: 100
  },
  topbarRightSide: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40
  },
  topbarLeftSide: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '19px !important',
    paddingLeft: 8,
    paddingRight: 16,
    width: '80px !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#949391 !important',
    '&:hover': {
      color: '#fff !important'
    },
    cursor: 'pointer'
  },
  selectedTitle: {
    fontSize: '19px !important',
    paddingLeft: 8,
    paddingRight: 16,
    width: '80px !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#fff !important',
    cursor: 'pointer'
  },
  title2: {
    fontSize: '19px !important',
    paddingLeft: 12,
    width: '80px !important',
    fontWeight: 'bold !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#fff !important',
    cursor: 'pointer'
  },
  button: {
    color: '#fff !important',
    backgroundColor: '#4dabaa !important',
    marginLeft: '12px !important'
  },
  topSection: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: 'cover',
    height: 600,
    padding: 16
  },
  searchContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  searchSubContainer: {
    height: 300,
    width: 907,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  bigTitle: {
    fontSize: '66px !important',
    lineHeight: '68px !important',
    paddingLeft: 12,
    width: '100% !important',
    fontWeight: 'bold !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#fff !important',
    textAlign: 'center',
    marginBottom: '12px !important'
  },
  textinput: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '4px',
    width: '100%',
    '& > div': {
      '& > input': {
        color: '#1a1a1a'
      }
    }
  }
}

export default style
