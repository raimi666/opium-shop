import {createSlice, Middleware, PayloadAction, isAction} from '@reduxjs/toolkit';
import { RootState } from "./index.ts";
import i18n from "../i18n.ts";

export interface ILocalizationState {
    value: 'en' | 'ru' | 'ua'
}

const initialState: ILocalizationState = {
    value: 'en'
}


export const i18nextMiddleware: Middleware<object, RootState> = store => next => {

    const storedLanguage = localStorage.getItem('selectedLanguage');

    if(storedLanguage) {
        i18n.changeLanguage(storedLanguage)
            .then(() => {
                store.dispatch(setLocalization({ value: storedLanguage as ILocalizationState['value'] }));
            });

    }

    return action => {

        const result = next(action);

        if (isAction(action) && action.type === setLocalization.type) {

            const value = action.payload.value

            localStorage.setItem('selectedLanguage', value);
            i18n.changeLanguage(value);
        }

        return result;

    }

}

export const localizationSlice = createSlice({
    name: 'localization',
    initialState,
    reducers: {
        setLocalization: (state, action: PayloadAction<ILocalizationState>) => {
            state.value = action.payload.value
        }
    }
})

export const { setLocalization } = localizationSlice.actions
export const selectLocalization = (state: RootState) => state.localization.value

export default localizationSlice.reducer
