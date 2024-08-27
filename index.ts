import express, { Express } from 'express';

const app: Express = express();
const Config = {
    port: 8001
}
async function main() {
    app.listen(Config.port, '127.0.0.1',  () => {
        console.log(`Listening at http://127.0.0.1:${Config.port}`);
    });

    app.get('/auth' , (req , res) => {
        res.send("Auth Gateway")
    })
}

main();