import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'bookscontrollers.index': { paramsTuple?: []; params?: {} }
    'bookscontrollers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'bookscontrollers.store': { paramsTuple?: []; params?: {} }
    'bookscontrollers.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'bookscontrollers.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'bookscontrollers.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'bookscontrollers.index': { paramsTuple?: []; params?: {} }
    'bookscontrollers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'bookscontrollers.index': { paramsTuple?: []; params?: {} }
    'bookscontrollers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'bookscontrollers.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'bookscontrollers.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}