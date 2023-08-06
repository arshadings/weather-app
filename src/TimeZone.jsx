const TIME_ZONE_KEY = "3a53a4898100463f86d66dc21e25b14e";

const getTimeZone = async(city) => { 
    const TIMEZONEURL = `https://timezone.abstractapi.com/v1/current_time/?api_key=${TIME_ZONE_KEY}&location=${city}`;

    const data = await fetch(TIMEZONEURL)
        .then( (res) => res.json() )
        .then( (data) => data )

    const { datetime, timezone_abbreviation } = data;

    return {
        datetime,
        timezone_abbreviation
    }
}

export { getTimeZone };


