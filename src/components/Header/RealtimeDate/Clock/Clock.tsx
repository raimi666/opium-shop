import React, {useEffect, useState} from "react";
import moment from "moment";

import 'moment/dist/locale/ru'
import 'moment/dist/locale/uk'


import styles from './Clock.module.scss'
import {useTranslation} from "react-i18next";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Moment} from "moment-timezone";

export const Clock: React.FC = () => {

    const { language } = useTranslation().i18n
    const [currentTime, setCurrentTime] = useState(moment().locale(language === "ua" ? "uk" : language || 'en'));
    const [fullDate, setFullDate] = useState<string | null>(null)
    const [dayOfWeek, setDayOfWeek] = useState<string | null>(null)
    const [time, setTime] = useState<string | null>(null)


    useEffect(() => {

        const date = moment().locale(language === "ua" ? "uk" : language)
        const day = date.format('dddd')
        const formatDay = language === 'en' ? 'Today' : day.charAt(0).toUpperCase() + day.slice(1)

        setCurrentTime(date)
        setDayOfWeek(formatDay)

    }, [language])

    useEffect(() => {

        const date = currentTime.format('DD MMM, YYYY');
        if(language === 'en') date.toUpperCase();
        setFullDate(date)
        const updateClock = () => {
            setCurrentTime(moment().locale(language))
        };

        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);

    }, [currentTime, language]);

    const formatFullDate = (m: Moment) => {

        let formattedMonth = m.format('MMM').replace('.', '')

        if(language === 'en') {
            formattedMonth = formattedMonth.toUpperCase()
        } else {
            formattedMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1)
        }

        return `${formattedMonth}, ${currentTime.format('YYYY')}`;
    }

    return (
        <div className={styles.container}>
            <p>
                { dayOfWeek }
            </p>
            <div className={styles.containerDate}>
                <span> {currentTime.format('DD')} </span>
                { formatFullDate(currentTime) }
                <AccessTimeIcon color="primary" fontSize="small"/>
                { currentTime.format('hh:mm') }
            </div>
        </div>
    );
};
