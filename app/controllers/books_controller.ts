import type { HttpContext } from '@adonisjs/core/http'
import Livro from '#models/livro'
import { createLivroValidator, updateLivroValidator } from '#validators/livro_validator'

export default class BooksController {
  async index({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const livros = await Livro.query().where('user_id', user.id).orderBy('created_at', 'desc')
    return response.ok({ livros })
  }

  async show({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const livro = await Livro.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .firstOrFail()
    return response.ok({ livro })
  }

  async store({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const data = await request.validateUsing(createLivroValidator)
    const livro = await Livro.create({
      titulo: data.titulo,
      autor: data.autor ?? null,
      genero: data.genero ?? null,
      anoPublicacao: data.ano_publicacao ?? null,
      statusLeitura: data.status_leitura ?? 'quero ler',
      observacoes: data.observacoes ?? null,
      userId: user.id,
    })
    return response.created({ message: 'Livro criado com sucesso', livro })
  }

  async update({ auth, params, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const livro = await Livro.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .firstOrFail()
    const data = await request.validateUsing(updateLivroValidator)
    livro.merge({
      titulo: data.titulo ?? livro.titulo,
      autor: data.autor !== undefined ? data.autor : livro.autor,
      genero: data.genero !== undefined ? data.genero : livro.genero,
      anoPublicacao: data.ano_publicacao !== undefined ? data.ano_publicacao : livro.anoPublicacao,
      statusLeitura: data.status_leitura ?? livro.statusLeitura,
      observacoes: data.observacoes !== undefined ? data.observacoes : livro.observacoes,
    })
    await livro.save()
    return response.ok({ message: 'Livro atualizado com sucesso', livro })
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const livro = await Livro.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .firstOrFail()
    await livro.delete()
    return response.ok({ message: 'Livro removido com sucesso' })
  }
}