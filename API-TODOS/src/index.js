import app from './app.js'
import logging from './helpers/Logging.js'


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    logging.info(`Server running on https://localhost:${PORT}`)
})