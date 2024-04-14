import { Router } from "express"
const router = Router()

//Enrutamiento
router.get('/', (req, res) => res.render('index', { title: 'Bienvenido - Home'}))
router.get('/habilidades', (req, res) => res.render('habilidades', { title: 'habilidades'}))
router.get('/portafolio', (req, res) => res.render('portafolio', { title: 'portafolio'}))
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact'}))


export default router 