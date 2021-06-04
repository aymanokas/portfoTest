const style = {
  titleSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '12px 0 0 39px',
    alignItems: 'center'
  },
  title: {
    fontSize: '19px !important',
    justifyContent: 'center',
    fontWeight: 'bold !important',
    display: 'flex',
    color: '#000 !important'
  },
  picsContainer: (matches) => ({
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: matches ? 'row' : 'column',
    padding: 16
  }),
  picsBigRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  picsRow: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: 8
  },
  image: {
    '&:hover': {
      filter: 'brightness(50%)'
    },
    width: '100%',
    margin: 8,
    borderRadius: 2
  },
  cardTitle: {
    position: 'absolute',
    top: 10,
    fontSize: '16px !important',
    color: '#fcfcfc !important',
    lineHeight: '36px !important',
    left: 30,
    opacity: 0,
    marginBottom: 8
  },
  cardDes: {
    position: 'absolute',
    top: 40,
    fontSize: '12px !important',
    color: '#fcfcfc !important',
    height: '76%',
    overflow: 'auto',
    left: 30,
    opacity: 0,
    lineHeight: '36px !important'
  },
  cardContainer: {
    position: 'relative',
    '&:hover': {
      '& > h4': {
        opacity: 100
      }
    },
    cursor: 'pointer',
    width: '100%'
  },
  placeholder: {
    width: '100%',
    margin: 8,
    borderRadius: 2,
    height: 400,
    backgroundColor: '#00000060'
  },
  edit: {
    width: 100,
    display: 'flex',
    marginLeft: '16px !important',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    border: '.3px solid #00000090',
    borderRadius: 5
  }
}

export default style
