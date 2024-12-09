import express, { type Application, type Request, type Response } from 'express'

import 'dotenv/config'

const app: Application = express()

const PORT = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome')
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
