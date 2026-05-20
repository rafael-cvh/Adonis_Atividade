import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  
  async login({ request, response }: any) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)
    if (!user) {
      return response.unauthorized('Credenciais inválidas')
    }

  
    const isPasswordValid = await hash.verify(user.password, password)
    if (!isPasswordValid) {
      return response.unauthorized('Credenciais inválidas')
    }

    return response.ok({
      message: "Login realizado com sucesso!",
      token: "token_simulado_v6_sucesso_valido",
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email
      }
    })
  }
}