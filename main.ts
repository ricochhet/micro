import { timeSafeCompare } from "./src/web/server/utils/Compare";

import { Server } from "./src/micro.mod";
import BasicAuth from "./src/web/server/auth/BasicAuth";

import * as fs from 'fs'
import NodeWorker from './src/web/server/utils/NodeWorker'

const app = Server()

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