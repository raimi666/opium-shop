import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ILocalizationState, selectLocalization, setLocalization} from "../../utils/store/localizationReducer.ts";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useTranslation} from "react-i18next";

export const Settings: React.FC = () => {

    const { t } = useTranslation();

    const dispatch = useDispatch();
    const localizationValue = useSelector(selectLocalization);

    const handleSetLocalization = (newLocalization: ILocalizationState['value']) => {
        dispatch(setLocalization({ value: newLocalization }));
    };

    return(<div>
        <div>
            <FormControl fullWidth sx={{width: '6rem'}}>
                <InputLabel id="localization-label">
                    {t('navigation.label')}
                </InputLabel>
                <Select
                    labelId="localization-label"
                    id="localization"
                    value={localizationValue}
                    label={t('navigation.label')}
                    onChange={(event) => {
                        handleSetLocalization(event.target.value as typeof localizationValue)
                    }}
                >

                    <MenuItem value='en'> ENG </MenuItem>
                    <MenuItem value='ru'> РУС </MenuItem>

                </Select>
            </FormControl>
        </div>
    </div>)
}
