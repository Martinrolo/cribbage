import app from './server'

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});
