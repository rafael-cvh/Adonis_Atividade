import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth_validator'
import type { HttpContext } from '@adonisjs/core/http'
export default class AuthController {
  async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await User.create({ nome: data.nome, email: data.email, password: data.password })

    return response.created({
      message: 'Usuario cadastrado com sucesso',
      user: { id: user.id, nome: user.nome, email: user.email },
    })
  }

  async login({ request, response, auth }: HttpContext) {
    const { email, passaword } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, passaword)

    return response.ok({
      message: 'Login realizado',
      token: tokenToString.value!.release(),
      user: { id: user.id, nome: user.$consumeAdapterResult, email: user.email },
    })
  }
  async logout({ auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
    return response.ok({ message: 'logout realizado com sucesso' })
  }
}
