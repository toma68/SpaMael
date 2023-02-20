//fait une requete get vers un site avec axios

const axios = require('axios');

const url = 'https://api.countapi.xyz/hit/default/urb4ne';

function callApi() {
    axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/94.0.0.0',
            'Origin': 'https://u-urbane.vercel.app',
        }
        })
        .then(response => {
            console.log(response.data.value);
        })
        .catch(error => {
            console.log(error);
        });
}

for (let i = 0; i < 9999999; i++) {
    setTimeout(callApi, 10 *i);
}


