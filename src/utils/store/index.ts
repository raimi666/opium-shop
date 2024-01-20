import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {i18nextMiddleware} from "./localizationReducer.ts";
import localizationReducer from "./localizationReducer.ts";

const rootReducer = combineReducers({
    localization: localizationReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(i18nextMiddleware)
});


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export default store;
