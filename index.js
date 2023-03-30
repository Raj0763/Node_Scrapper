const express = require('express');
const usetube = require('usetube');

const app = express();

app.use(express.json());
const base_url = 'https://www.youtube.com/watch?v=';

app.post('/crawl', async (req, res) => {
    let { playlistUrl } = req.body;
    let tracks = [];
    const playList = await usetube.getPlaylistVideos(playListId);
    let id = 1
    playList.forEach(ele => {
        tracks.push(
            {
                
                "url": base_url + ele.id
            }
        )
        id += 1
    })
    res.json({ tracks });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});