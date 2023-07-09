const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config({ path: './config/.env' })
const cors = require('cors')
const port = process.env.PORT


// routes import
const sexeRoutes = require('./routes/sexe.routes');
const roleRoutes = require('./routes/role.routes')
const respRoutes = require('./routes/Responsable.routes')
const contratRoutes = require('./routes/Contrat.routes')
const typeContratRoutes = require('./routes/TypeContrat.routes')
const personnelRoutes = require('./routes/Personnel.routes')
const plantationRoutes = require('./routes/Plantation.routes')
const parcelleRoutes = require('./routes/Parcelle.routes')
const produitAgricoleRoutes = require('./routes/Prod_agri.routes')
const calibreRoutes = require("./routes/Calibre.routes")
const emballageRoutes = require("./routes/Emballage.routes")
const modePayementRoutes = require("./routes/Emballage.routes")
const planteurRoutes = require("./routes/Planteur.routes")
const prodPhytoRoutes = require("./routes/Prod_phyto.routes")
const userRoutes = require('./routes/users.routes')

// middleware import
const { checkUser, requireAuth } = require('./middleware/auth.middleware')


const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// middleware
app.get('*', checkUser)
app.get('/jwtid', requireAuth, (req, res) => {
    res.json({ id: res.locals.user.id })
    console.log(res.locals.user.id)
})

// routes
app.use('/api/sexe', sexeRoutes)
app.use('/api/role', roleRoutes)
app.use('/api/resp', respRoutes)
app.use('/api/contrat', contratRoutes)
app.use('/api/typeContrat', typeContratRoutes)
app.use('/api/personnel', personnelRoutes)
app.use('/api/plantation', plantationRoutes)
app.use('/api/parcelle', parcelleRoutes)
app.use('/api/prodAgri', produitAgricoleRoutes)
app.use('/api/calibre', calibreRoutes)
app.use('/api/emballage', emballageRoutes)
app.use('/api/modePayement', modePayementRoutes)
app.use('/api/planteur', planteurRoutes)
app.use('/api/prodPhyto', prodPhytoRoutes)
app.use('/api/user', userRoutes);





app.listen(port, () => {
    console.log(`Connecté au port ${port}`)
})