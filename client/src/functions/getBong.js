import axios from 'axios';

const getBong = async (state) => {



    const options = {
        method: 'GET',
        url: 'https://amazon23.p.rapidapi.com/product-search',
        params: { query: 'rolling paper', page: '1' },
        headers: {
            'X-RapidAPI-Key': '9240d49ddamsh63d6fa357ca8046p1fd0dajsn1593f7dee925',
            'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        state(response.data.result)
        console.log(response.data.result);
    }).catch(function (error) {
        console.error(error);
    });
};

export default getBong;