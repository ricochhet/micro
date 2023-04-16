import { Server } from "./src/micro.mod";
import BasicAuth from "./src/web/server/auth/BasicAuth";

const app = Server()
import * as fs from 'fs'

app.post('/auth', (req, res) => {
    BasicAuth.create(
        req,
        res,
        () => {
            res.out('Success!', 200).send(req.url || "")
        },
        JSON.parse(fs.readFileSync('./userHashTable.json').toString())
    )
})

app.listen(8080)