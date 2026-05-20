/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.register': {
    methods: ["POST"],
    pattern: '/register',
    tokens: [{"old":"/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.logout': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'bookscontrollers.index': {
    methods: ["GET","HEAD"],
    pattern: '/books',
    tokens: [{"old":"/books","type":0,"val":"books","end":""}],
    types: placeholder as Registry['bookscontrollers.index']['types'],
  },
  'bookscontrollers.show': {
    methods: ["GET","HEAD"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['bookscontrollers.show']['types'],
  },
  'bookscontrollers.store': {
    methods: ["POST"],
    pattern: '/books',
    tokens: [{"old":"/books","type":0,"val":"books","end":""}],
    types: placeholder as Registry['bookscontrollers.store']['types'],
  },
  'bookscontrollers.update': {
    methods: ["PUT"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['bookscontrollers.update']['types'],
  },
  'bookscontrollers.destroy': {
    methods: ["DELETE"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['bookscontrollers.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
