import axios from 'axios';

const addHeaderToDefaults = (header, value) => {
    axios.defaults.headers.common[header] = value;
};

export {
    addHeaderToDefaults,
};
