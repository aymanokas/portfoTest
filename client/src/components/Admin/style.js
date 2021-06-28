const style = {
  inputClass: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    '&::placeholder': {
      color: '#707070',
      fontFamily: '\'Roboto\', sans-serif',
      fontSize: 19
    },
    '&:focus': {
      boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.12)'
    },
    width: '80%',
    height: 29,
    fontSize: 24,
    padding: 10,
    borderRadius: 6,
    fontFamily: '\'Roboto\', sans-serif',
    backgroundColor: '#00000008'
  },
  dropDownClass: {
    width: '82.5%',
    margin: '10px 0 10px 0 !important',
    height: 45
  },
  inputAreaClass: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    '&::placeholder': {
      color: '#707070',
      fontFamily: '\'Roboto\', sans-serif',
      fontSize: 19
    },
    '&:focus': {
      boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.12)'
    },
    width: '80%',
    height: 200,
    fontSize: 24,
    padding: 10,
    borderRadius: 6,
    fontFamily: '\'Roboto\', sans-serif',
    backgroundColor: '#00000008'
  },
  titleClass: {
    fontSize: 32,
    color: '#000',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 'bold'
  },
  smallTitleClass: {
    fontSize: 19,
    fontFamily: '\'Roboto\', sans-serif',
    color: '#707070',
    margin: 10
  },
  buttonClass: {
    cursor: 'pointer',
    marginTop: 52,
    width: 260,
    height: 52,
    background: '#05a081 0% 0% no-repeat padding-box',
    border: '1px solid #707070',
    borderRadius: 10,
    color: 'white',
    fontSize: 20,
    marginBottom: 64,
    marginLeft: 16
  },
  buttonClass2: {
    cursor: 'pointer',
    marginTop: 52,
    width: 260,
    height: 52,
    background: '#fff 0% 0% no-repeat padding-box',
    border: '1px solid #05a081',
    borderRadius: 10,
    color: '#05a081',
    fontSize: 20,
    marginBottom: 64,
    marginLeft: 16
  },
  productImage: {
    width: 70
  },
  cartContainer: {
    display: 'flex',
    marginBottom: 16
  },
  image: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000010',
    borderRadius: 8,
    marginRight: 20
  },
  mycart: {
    fontSize: 21,
    color: '#000',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 'bold',
    marginBottom: 16
  },
  mainText: {
    fontSize: 16,
    color: '#000',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    marginBottom: 16
  },
  price: {
    fontSize: 16,
    color: '#707070',
    fontWeight: 300,
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    marginBottom: 16
  },
  products: {
    height: 500,
    overflow: 'auto'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 34,
    height: 800
  },
  imageContainerStyle: {
    width: 350
  },
  imageStyle: {
    width: '100%',
    borderRadius: 6
  }
}

export default style
