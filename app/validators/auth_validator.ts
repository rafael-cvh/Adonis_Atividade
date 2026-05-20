import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(2),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(6).confirmed(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password: vine.string(),
  })
)