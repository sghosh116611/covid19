import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async(country) => {
    let changeUrl = url;

    if (country)
        changeUrl = `${url}/countries/${country}`;
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const dailyDataModified = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate
        }));
        return dailyDataModified;
    } catch (error) {
        console.log(error);
    }
}

export const fetchcountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries;
    } catch (error) {
        console.log(error);
    }
}