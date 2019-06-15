import { combineReducers } from 'redux'

import musicStoreReducer from './components/MusicStore/MusicStore.reducer'

const rootReducer = combineReducers({
  musicStore : musicStoreReducer
})

export default rootReducer