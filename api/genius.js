const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');
const express = require('express');
const app = express();
const port = 8082;
const cors = require('cors');

app.use(cors());

const bearerToken = '3FNGNhV6wOrgD-_zivZa3BHEGqadg8fqJfhEeENDhSSSX4ZxriaU1J_-qyZKFSGz';
const url = 'https://api.genius.com/search?q=';


app.listen(port, () => {
   console.log('Server Works !!! At port %d', port);
});

// const options = {
//   key: fs.readFileSync('/home/ubuntu/api-eska/privkey.pem'),
//   cert: fs.readFileSync('/home/ubuntu/api-eska/cert.pem')
// };

// https.createServer(options, app).listen(8082, () => {
//   console.log('HTTPS API listening on port 8082');
// });

app.get('/genius', async (req, res) => {
    var result
    const resp = await axios.get(url + req.query.search, { headers: { 'Authorization': `Bearer ${bearerToken}` } })
    if (resp.status === 200) {
        if (resp.data.response.hits.length !== 0) {
            result = resp.data.response.hits[0].result.api_path
            result = "https://api.genius.com" + result

            if (result !== undefined) {
                const resp2 = await axios.get(result, { headers: { 'Authorization': `Bearer ${bearerToken}` } })
                if (resp2.status === 200) {
                    result = resp2.data.response.song.path
                }
            }
            result = "https://genius.com" + result
            if (result !== undefined) {
                const resp3 = await axios.get(result)
                if (resp3.status === 200) {
                    const html = resp3.data;
                    const $ = cheerio.load(html);
                    let temp = '';
                    let specificPart = $('div.Lyrics__Container-sc-1ynbvzw-6').html() + "<br/>";
                    for (let i = 1 ; i < 6; i++) {
                        temp = $(`div.Lyrics__Container-sc-1ynbvzw-6:eq(${i})`).html();
                        if(temp !== null){
                            specificPart += temp +"<br/>"
                        }else {
                            break
                        }
                    }
                    result = specificPart
                }
            }
        }
        else {
            result = "<p>Teksty nie są dostępne dla tej muzyki</p>"
        }
    }
    console.log("called for: ",req.query.search)
    res.status(200).json({ result });
});

app.get('/test', async (req, res) => {
const resp3 = await axios.get("https://genius.com/Mr-polska-taki-jestem-2020-lyrics")
                if (resp3.status === 200) {
                    const html = resp3.data;
                    const $ = cheerio.load(html);
                    let temp = '';
                    let specificPart = $('div.Lyrics__Container-sc-1ynbvzw-6').html() + "<br/>";
                    for (let i = 1 ; i < 6; i++) {
                        temp = $(`div.Lyrics__Container-sc-1ynbvzw-6:eq(${i})`).html();
                        if(temp !== null){
                            specificPart += temp +"<br/>"
                        }else {
                            break
                        }
                    }
                    result = specificPart
                }
				res.status(200).json({ result });
});