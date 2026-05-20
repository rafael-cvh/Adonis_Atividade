/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    register: typeof routes['auth.register']
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
  }
  bookscontrollers: {
    index: typeof routes['bookscontrollers.index']
    show: typeof routes['bookscontrollers.show']
    store: typeof routes['bookscontrollers.store']
    update: typeof routes['bookscontrollers.update']
    destroy: typeof routes['bookscontrollers.destroy']
  }
}
