import {store} from '../store/store'

type IRootState = ReturnType<typeof store.getState>

export default IRootState