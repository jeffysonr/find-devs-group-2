import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        favorite
    }
})

export default store