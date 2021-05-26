import { all } from 'redux-saga/effects'
import { loginRootSaga } from '../components/Login/store'

const RootSaga =  function * () {
  yield all([
    loginRootSaga()
  ])
}

export default RootSaga