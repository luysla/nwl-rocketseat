import express from 'express'

const routes = express.Router() 

routes.get('/', (req, resp) => {
    return resp.json({ message: 'oi' });
})


export default routes;