export const setUserLogIn = (bool) => {
    return{
        type: 'SET_USER_LOG_IN',
        bool: bool
    }
};

export const setUserData = (email, name) => {
    return{
        type: 'SET_USER_DATA',
        name: name,
        email: email
    }
};

export const setGarage = (lat, lng, zoom) => {
    return{
        type: 'SET_GARAGE',
        lat: lat,
        lng: lng,
        zoom: zoom
    }
};

export const setUserLoc = (x, y) => {
    return{
        type: 'SET_USER_LOC',
        x: x,
        y: y
    }
};