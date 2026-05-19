/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
//import { controllers } from '#generated/controllers'

const AuthController = () => ('#controllers/auth_controller')
const Bookscontrollers = () => ('#controllers/books_controller')

router.post('register', [AuthController, 'register'])
router.post('login', [AuthController, 'login'])



//router.get('/', () => {
  //return { hello: 'world' }
//})

router
  .group(() => {
    router.post('/logout', [AuthController, 'logout'])
    router.get('/books', [Bookscontrollers, 'index'])
    router.get('/books/:id', [Bookscontrollers, 'show'])
    router.post('/books', [Bookscontrollers, 'store'])
    router.put('/books/:id', [Bookscontrollers, 'update'])
    router.delete('/books/:id', [Bookscontrollers, 'destroy'])
    })
  .use(middleware.auth.auth({ guards: ['api']}))
