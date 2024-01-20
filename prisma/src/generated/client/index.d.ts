
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Peca
 * 
 */
export type Peca = $Result.DefaultSelection<Prisma.$PecaPayload>
/**
 * Model TransacaoFinanceira
 * 
 */
export type TransacaoFinanceira = $Result.DefaultSelection<Prisma.$TransacaoFinanceiraPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs>;

  /**
   * `prisma.peca`: Exposes CRUD operations for the **Peca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pecas
    * const pecas = await prisma.peca.findMany()
    * ```
    */
  get peca(): Prisma.PecaDelegate<ExtArgs>;

  /**
   * `prisma.transacaoFinanceira`: Exposes CRUD operations for the **TransacaoFinanceira** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransacaoFinanceiras
    * const transacaoFinanceiras = await prisma.transacaoFinanceira.findMany()
    * ```
    */
  get transacaoFinanceira(): Prisma.TransacaoFinanceiraDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Servico: 'Servico',
    Peca: 'Peca',
    TransacaoFinanceira: 'TransacaoFinanceira'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'cliente' | 'servico' | 'peca' | 'transacaoFinanceira'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>,
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>,
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Peca: {
        payload: Prisma.$PecaPayload<ExtArgs>
        fields: Prisma.PecaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PecaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PecaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          findFirst: {
            args: Prisma.PecaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PecaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          findMany: {
            args: Prisma.PecaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>[]
          }
          create: {
            args: Prisma.PecaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          createMany: {
            args: Prisma.PecaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PecaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          update: {
            args: Prisma.PecaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          deleteMany: {
            args: Prisma.PecaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PecaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PecaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          aggregate: {
            args: Prisma.PecaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePeca>
          }
          groupBy: {
            args: Prisma.PecaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PecaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PecaCountArgs<ExtArgs>,
            result: $Utils.Optional<PecaCountAggregateOutputType> | number
          }
        }
      }
      TransacaoFinanceira: {
        payload: Prisma.$TransacaoFinanceiraPayload<ExtArgs>
        fields: Prisma.TransacaoFinanceiraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFinanceiraFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFinanceiraFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFinanceiraFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFinanceiraFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload>
          }
          findMany: {
            args: Prisma.TransacaoFinanceiraFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload>[]
          }
          create: {
            args: Prisma.TransacaoFinanceiraCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload>
          }
          createMany: {
            args: Prisma.TransacaoFinanceiraCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransacaoFinanceiraDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload>
          }
          update: {
            args: Prisma.TransacaoFinanceiraUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoFinanceiraDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoFinanceiraUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransacaoFinanceiraUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransacaoFinanceiraPayload>
          }
          aggregate: {
            args: Prisma.TransacaoFinanceiraAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransacaoFinanceira>
          }
          groupBy: {
            args: Prisma.TransacaoFinanceiraGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransacaoFinanceiraGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoFinanceiraCountArgs<ExtArgs>,
            result: $Utils.Optional<TransacaoFinanceiraCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    servicos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | ClienteCountOutputTypeCountServicosArgs
  }

  // Custom InputTypes

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }



  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    pecas: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pecas?: boolean | ServicoCountOutputTypeCountPecasArgs
  }

  // Custom InputTypes

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountPecasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PecaWhereInput
  }



  /**
   * Count Type PecaCountOutputType
   */

  export type PecaCountOutputType = {
    servicos: number
  }

  export type PecaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | PecaCountOutputTypeCountServicosArgs
  }

  // Custom InputTypes

  /**
   * PecaCountOutputType without action
   */
  export type PecaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PecaCountOutputType
     */
    select?: PecaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PecaCountOutputType without action
   */
  export type PecaCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    cliente_id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    cliente_id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    cliente_id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    cliente_id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
  }

  export type ClienteCountAggregateOutputType = {
    cliente_id: number
    nome: number
    email: number
    telefone: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    cliente_id?: true
  }

  export type ClienteSumAggregateInputType = {
    cliente_id?: true
  }

  export type ClienteMinAggregateInputType = {
    cliente_id?: true
    nome?: true
    email?: true
    telefone?: true
  }

  export type ClienteMaxAggregateInputType = {
    cliente_id?: true
    nome?: true
    email?: true
    telefone?: true
  }

  export type ClienteCountAggregateInputType = {
    cliente_id?: true
    nome?: true
    email?: true
    telefone?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cliente_id: number
    nome: string
    email: string | null
    telefone: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cliente_id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    servicos?: boolean | Cliente$servicosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    cliente_id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
  }

  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | Cliente$servicosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cliente_id: number
      nome: string
      email: string | null
      telefone: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }


  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClienteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cliente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClienteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cliente_id`
     * const clienteWithCliente_idOnly = await prisma.cliente.findMany({ select: { cliente_id: true } })
     * 
    **/
    findMany<T extends ClienteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
    **/
    create<T extends ClienteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clientes.
     *     @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     *     @example
     *     // Create many Clientes
     *     const cliente = await prisma.cliente.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClienteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
    **/
    delete<T extends ClienteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClienteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClienteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClienteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
    **/
    upsert<T extends ClienteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>
    ): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    servicos<T extends Cliente$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cliente model
   */ 
  interface ClienteFieldRefs {
    readonly cliente_id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }


  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }


  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }


  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }


  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }


  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }


  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }


  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
  }


  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }


  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }


  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
  }


  /**
   * Cliente.servicos
   */
  export type Cliente$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }


  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClienteInclude<ExtArgs> | null
  }



  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    servico_id: number | null
    cliente_id: number | null
    valor: number | null
  }

  export type ServicoSumAggregateOutputType = {
    servico_id: number | null
    cliente_id: number | null
    valor: number | null
  }

  export type ServicoMinAggregateOutputType = {
    servico_id: number | null
    cliente_id: number | null
    data_servico: Date | null
    descricao: string | null
    valor: number | null
  }

  export type ServicoMaxAggregateOutputType = {
    servico_id: number | null
    cliente_id: number | null
    data_servico: Date | null
    descricao: string | null
    valor: number | null
  }

  export type ServicoCountAggregateOutputType = {
    servico_id: number
    cliente_id: number
    data_servico: number
    descricao: number
    valor: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    servico_id?: true
    cliente_id?: true
    valor?: true
  }

  export type ServicoSumAggregateInputType = {
    servico_id?: true
    cliente_id?: true
    valor?: true
  }

  export type ServicoMinAggregateInputType = {
    servico_id?: true
    cliente_id?: true
    data_servico?: true
    descricao?: true
    valor?: true
  }

  export type ServicoMaxAggregateInputType = {
    servico_id?: true
    cliente_id?: true
    data_servico?: true
    descricao?: true
    valor?: true
  }

  export type ServicoCountAggregateInputType = {
    servico_id?: true
    cliente_id?: true
    data_servico?: true
    descricao?: true
    valor?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    servico_id: number
    cliente_id: number
    data_servico: Date
    descricao: string
    valor: number
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    servico_id?: boolean
    cliente_id?: boolean
    data_servico?: boolean
    descricao?: boolean
    valor?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pecas?: boolean | Servico$pecasArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    servico_id?: boolean
    cliente_id?: boolean
    data_servico?: boolean
    descricao?: boolean
    valor?: boolean
  }

  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pecas?: boolean | Servico$pecasArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      pecas: Prisma.$PecaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      servico_id: number
      cliente_id: number
      data_servico: Date
      descricao: string
      valor: number
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }


  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServicoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Servico that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServicoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `servico_id`
     * const servicoWithServico_idOnly = await prisma.servico.findMany({ select: { servico_id: true } })
     * 
    **/
    findMany<T extends ServicoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
    **/
    create<T extends ServicoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Servicos.
     *     @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     *     @example
     *     // Create many Servicos
     *     const servico = await prisma.servico.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServicoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
    **/
    delete<T extends ServicoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServicoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServicoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServicoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
    **/
    upsert<T extends ServicoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>
    ): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    pecas<T extends Servico$pecasArgs<ExtArgs> = {}>(args?: Subset<T, Servico$pecasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Servico model
   */ 
  interface ServicoFieldRefs {
    readonly servico_id: FieldRef<"Servico", 'Int'>
    readonly cliente_id: FieldRef<"Servico", 'Int'>
    readonly data_servico: FieldRef<"Servico", 'DateTime'>
    readonly descricao: FieldRef<"Servico", 'String'>
    readonly valor: FieldRef<"Servico", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }


  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }


  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }


  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }


  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }


  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }


  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }


  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
  }


  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }


  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }


  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
  }


  /**
   * Servico.pecas
   */
  export type Servico$pecasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    where?: PecaWhereInput
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    cursor?: PecaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }


  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
  }



  /**
   * Model Peca
   */

  export type AggregatePeca = {
    _count: PecaCountAggregateOutputType | null
    _avg: PecaAvgAggregateOutputType | null
    _sum: PecaSumAggregateOutputType | null
    _min: PecaMinAggregateOutputType | null
    _max: PecaMaxAggregateOutputType | null
  }

  export type PecaAvgAggregateOutputType = {
    peca_id: number | null
    quantidade: number | null
    preco_unitario: number | null
  }

  export type PecaSumAggregateOutputType = {
    peca_id: number | null
    quantidade: number | null
    preco_unitario: number | null
  }

  export type PecaMinAggregateOutputType = {
    peca_id: number | null
    nome: string | null
    quantidade: number | null
    preco_unitario: number | null
  }

  export type PecaMaxAggregateOutputType = {
    peca_id: number | null
    nome: string | null
    quantidade: number | null
    preco_unitario: number | null
  }

  export type PecaCountAggregateOutputType = {
    peca_id: number
    nome: number
    quantidade: number
    preco_unitario: number
    _all: number
  }


  export type PecaAvgAggregateInputType = {
    peca_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type PecaSumAggregateInputType = {
    peca_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type PecaMinAggregateInputType = {
    peca_id?: true
    nome?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type PecaMaxAggregateInputType = {
    peca_id?: true
    nome?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type PecaCountAggregateInputType = {
    peca_id?: true
    nome?: true
    quantidade?: true
    preco_unitario?: true
    _all?: true
  }

  export type PecaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peca to aggregate.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pecas
    **/
    _count?: true | PecaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PecaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PecaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PecaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PecaMaxAggregateInputType
  }

  export type GetPecaAggregateType<T extends PecaAggregateArgs> = {
        [P in keyof T & keyof AggregatePeca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeca[P]>
      : GetScalarType<T[P], AggregatePeca[P]>
  }




  export type PecaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PecaWhereInput
    orderBy?: PecaOrderByWithAggregationInput | PecaOrderByWithAggregationInput[]
    by: PecaScalarFieldEnum[] | PecaScalarFieldEnum
    having?: PecaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PecaCountAggregateInputType | true
    _avg?: PecaAvgAggregateInputType
    _sum?: PecaSumAggregateInputType
    _min?: PecaMinAggregateInputType
    _max?: PecaMaxAggregateInputType
  }

  export type PecaGroupByOutputType = {
    peca_id: number
    nome: string
    quantidade: number
    preco_unitario: number
    _count: PecaCountAggregateOutputType | null
    _avg: PecaAvgAggregateOutputType | null
    _sum: PecaSumAggregateOutputType | null
    _min: PecaMinAggregateOutputType | null
    _max: PecaMaxAggregateOutputType | null
  }

  type GetPecaGroupByPayload<T extends PecaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PecaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PecaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PecaGroupByOutputType[P]>
            : GetScalarType<T[P], PecaGroupByOutputType[P]>
        }
      >
    >


  export type PecaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    peca_id?: boolean
    nome?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    servicos?: boolean | Peca$servicosArgs<ExtArgs>
    _count?: boolean | PecaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peca"]>

  export type PecaSelectScalar = {
    peca_id?: boolean
    nome?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
  }

  export type PecaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | Peca$servicosArgs<ExtArgs>
    _count?: boolean | PecaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PecaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peca"
    objects: {
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      peca_id: number
      nome: string
      quantidade: number
      preco_unitario: number
    }, ExtArgs["result"]["peca"]>
    composites: {}
  }


  type PecaGetPayload<S extends boolean | null | undefined | PecaDefaultArgs> = $Result.GetResult<Prisma.$PecaPayload, S>

  type PecaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PecaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PecaCountAggregateInputType | true
    }

  export interface PecaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peca'], meta: { name: 'Peca' } }
    /**
     * Find zero or one Peca that matches the filter.
     * @param {PecaFindUniqueArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PecaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PecaFindUniqueArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Peca that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PecaFindUniqueOrThrowArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PecaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PecaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Peca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindFirstArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PecaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PecaFindFirstArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Peca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindFirstOrThrowArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PecaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PecaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pecas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pecas
     * const pecas = await prisma.peca.findMany()
     * 
     * // Get first 10 Pecas
     * const pecas = await prisma.peca.findMany({ take: 10 })
     * 
     * // Only select the `peca_id`
     * const pecaWithPeca_idOnly = await prisma.peca.findMany({ select: { peca_id: true } })
     * 
    **/
    findMany<T extends PecaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PecaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Peca.
     * @param {PecaCreateArgs} args - Arguments to create a Peca.
     * @example
     * // Create one Peca
     * const Peca = await prisma.peca.create({
     *   data: {
     *     // ... data to create a Peca
     *   }
     * })
     * 
    **/
    create<T extends PecaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PecaCreateArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pecas.
     *     @param {PecaCreateManyArgs} args - Arguments to create many Pecas.
     *     @example
     *     // Create many Pecas
     *     const peca = await prisma.peca.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PecaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PecaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peca.
     * @param {PecaDeleteArgs} args - Arguments to delete one Peca.
     * @example
     * // Delete one Peca
     * const Peca = await prisma.peca.delete({
     *   where: {
     *     // ... filter to delete one Peca
     *   }
     * })
     * 
    **/
    delete<T extends PecaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PecaDeleteArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Peca.
     * @param {PecaUpdateArgs} args - Arguments to update one Peca.
     * @example
     * // Update one Peca
     * const peca = await prisma.peca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PecaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PecaUpdateArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pecas.
     * @param {PecaDeleteManyArgs} args - Arguments to filter Pecas to delete.
     * @example
     * // Delete a few Pecas
     * const { count } = await prisma.peca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PecaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PecaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pecas
     * const peca = await prisma.peca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PecaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PecaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peca.
     * @param {PecaUpsertArgs} args - Arguments to update or create a Peca.
     * @example
     * // Update or create a Peca
     * const peca = await prisma.peca.upsert({
     *   create: {
     *     // ... data to create a Peca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peca we want to update
     *   }
     * })
    **/
    upsert<T extends PecaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PecaUpsertArgs<ExtArgs>>
    ): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaCountArgs} args - Arguments to filter Pecas to count.
     * @example
     * // Count the number of Pecas
     * const count = await prisma.peca.count({
     *   where: {
     *     // ... the filter for the Pecas we want to count
     *   }
     * })
    **/
    count<T extends PecaCountArgs>(
      args?: Subset<T, PecaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PecaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PecaAggregateArgs>(args: Subset<T, PecaAggregateArgs>): Prisma.PrismaPromise<GetPecaAggregateType<T>>

    /**
     * Group by Peca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PecaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PecaGroupByArgs['orderBy'] }
        : { orderBy?: PecaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PecaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPecaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peca model
   */
  readonly fields: PecaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PecaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    servicos<T extends Peca$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Peca$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Peca model
   */ 
  interface PecaFieldRefs {
    readonly peca_id: FieldRef<"Peca", 'Int'>
    readonly nome: FieldRef<"Peca", 'String'>
    readonly quantidade: FieldRef<"Peca", 'Int'>
    readonly preco_unitario: FieldRef<"Peca", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Peca findUnique
   */
  export type PecaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where: PecaWhereUniqueInput
  }


  /**
   * Peca findUniqueOrThrow
   */
  export type PecaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where: PecaWhereUniqueInput
  }


  /**
   * Peca findFirst
   */
  export type PecaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pecas.
     */
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }


  /**
   * Peca findFirstOrThrow
   */
  export type PecaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pecas.
     */
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }


  /**
   * Peca findMany
   */
  export type PecaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter, which Pecas to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }


  /**
   * Peca create
   */
  export type PecaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * The data needed to create a Peca.
     */
    data: XOR<PecaCreateInput, PecaUncheckedCreateInput>
  }


  /**
   * Peca createMany
   */
  export type PecaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pecas.
     */
    data: PecaCreateManyInput | PecaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Peca update
   */
  export type PecaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * The data needed to update a Peca.
     */
    data: XOR<PecaUpdateInput, PecaUncheckedUpdateInput>
    /**
     * Choose, which Peca to update.
     */
    where: PecaWhereUniqueInput
  }


  /**
   * Peca updateMany
   */
  export type PecaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pecas.
     */
    data: XOR<PecaUpdateManyMutationInput, PecaUncheckedUpdateManyInput>
    /**
     * Filter which Pecas to update
     */
    where?: PecaWhereInput
  }


  /**
   * Peca upsert
   */
  export type PecaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * The filter to search for the Peca to update in case it exists.
     */
    where: PecaWhereUniqueInput
    /**
     * In case the Peca found by the `where` argument doesn't exist, create a new Peca with this data.
     */
    create: XOR<PecaCreateInput, PecaUncheckedCreateInput>
    /**
     * In case the Peca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PecaUpdateInput, PecaUncheckedUpdateInput>
  }


  /**
   * Peca delete
   */
  export type PecaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
    /**
     * Filter which Peca to delete.
     */
    where: PecaWhereUniqueInput
  }


  /**
   * Peca deleteMany
   */
  export type PecaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pecas to delete
     */
    where?: PecaWhereInput
  }


  /**
   * Peca.servicos
   */
  export type Peca$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }


  /**
   * Peca without action
   */
  export type PecaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PecaInclude<ExtArgs> | null
  }



  /**
   * Model TransacaoFinanceira
   */

  export type AggregateTransacaoFinanceira = {
    _count: TransacaoFinanceiraCountAggregateOutputType | null
    _avg: TransacaoFinanceiraAvgAggregateOutputType | null
    _sum: TransacaoFinanceiraSumAggregateOutputType | null
    _min: TransacaoFinanceiraMinAggregateOutputType | null
    _max: TransacaoFinanceiraMaxAggregateOutputType | null
  }

  export type TransacaoFinanceiraAvgAggregateOutputType = {
    transacao_id: number | null
    valor: number | null
  }

  export type TransacaoFinanceiraSumAggregateOutputType = {
    transacao_id: number | null
    valor: number | null
  }

  export type TransacaoFinanceiraMinAggregateOutputType = {
    transacao_id: number | null
    tipo: string | null
    valor: number | null
    data_transacao: Date | null
    descricao: string | null
  }

  export type TransacaoFinanceiraMaxAggregateOutputType = {
    transacao_id: number | null
    tipo: string | null
    valor: number | null
    data_transacao: Date | null
    descricao: string | null
  }

  export type TransacaoFinanceiraCountAggregateOutputType = {
    transacao_id: number
    tipo: number
    valor: number
    data_transacao: number
    descricao: number
    _all: number
  }


  export type TransacaoFinanceiraAvgAggregateInputType = {
    transacao_id?: true
    valor?: true
  }

  export type TransacaoFinanceiraSumAggregateInputType = {
    transacao_id?: true
    valor?: true
  }

  export type TransacaoFinanceiraMinAggregateInputType = {
    transacao_id?: true
    tipo?: true
    valor?: true
    data_transacao?: true
    descricao?: true
  }

  export type TransacaoFinanceiraMaxAggregateInputType = {
    transacao_id?: true
    tipo?: true
    valor?: true
    data_transacao?: true
    descricao?: true
  }

  export type TransacaoFinanceiraCountAggregateInputType = {
    transacao_id?: true
    tipo?: true
    valor?: true
    data_transacao?: true
    descricao?: true
    _all?: true
  }

  export type TransacaoFinanceiraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransacaoFinanceira to aggregate.
     */
    where?: TransacaoFinanceiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransacaoFinanceiras to fetch.
     */
    orderBy?: TransacaoFinanceiraOrderByWithRelationInput | TransacaoFinanceiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoFinanceiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransacaoFinanceiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransacaoFinanceiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransacaoFinanceiras
    **/
    _count?: true | TransacaoFinanceiraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoFinanceiraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoFinanceiraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoFinanceiraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoFinanceiraMaxAggregateInputType
  }

  export type GetTransacaoFinanceiraAggregateType<T extends TransacaoFinanceiraAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacaoFinanceira]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacaoFinanceira[P]>
      : GetScalarType<T[P], AggregateTransacaoFinanceira[P]>
  }




  export type TransacaoFinanceiraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoFinanceiraWhereInput
    orderBy?: TransacaoFinanceiraOrderByWithAggregationInput | TransacaoFinanceiraOrderByWithAggregationInput[]
    by: TransacaoFinanceiraScalarFieldEnum[] | TransacaoFinanceiraScalarFieldEnum
    having?: TransacaoFinanceiraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoFinanceiraCountAggregateInputType | true
    _avg?: TransacaoFinanceiraAvgAggregateInputType
    _sum?: TransacaoFinanceiraSumAggregateInputType
    _min?: TransacaoFinanceiraMinAggregateInputType
    _max?: TransacaoFinanceiraMaxAggregateInputType
  }

  export type TransacaoFinanceiraGroupByOutputType = {
    transacao_id: number
    tipo: string
    valor: number
    data_transacao: Date
    descricao: string | null
    _count: TransacaoFinanceiraCountAggregateOutputType | null
    _avg: TransacaoFinanceiraAvgAggregateOutputType | null
    _sum: TransacaoFinanceiraSumAggregateOutputType | null
    _min: TransacaoFinanceiraMinAggregateOutputType | null
    _max: TransacaoFinanceiraMaxAggregateOutputType | null
  }

  type GetTransacaoFinanceiraGroupByPayload<T extends TransacaoFinanceiraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoFinanceiraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoFinanceiraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoFinanceiraGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoFinanceiraGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoFinanceiraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transacao_id?: boolean
    tipo?: boolean
    valor?: boolean
    data_transacao?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["transacaoFinanceira"]>

  export type TransacaoFinanceiraSelectScalar = {
    transacao_id?: boolean
    tipo?: boolean
    valor?: boolean
    data_transacao?: boolean
    descricao?: boolean
  }


  export type $TransacaoFinanceiraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransacaoFinanceira"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      transacao_id: number
      tipo: string
      valor: number
      data_transacao: Date
      descricao: string | null
    }, ExtArgs["result"]["transacaoFinanceira"]>
    composites: {}
  }


  type TransacaoFinanceiraGetPayload<S extends boolean | null | undefined | TransacaoFinanceiraDefaultArgs> = $Result.GetResult<Prisma.$TransacaoFinanceiraPayload, S>

  type TransacaoFinanceiraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransacaoFinanceiraFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransacaoFinanceiraCountAggregateInputType | true
    }

  export interface TransacaoFinanceiraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransacaoFinanceira'], meta: { name: 'TransacaoFinanceira' } }
    /**
     * Find zero or one TransacaoFinanceira that matches the filter.
     * @param {TransacaoFinanceiraFindUniqueArgs} args - Arguments to find a TransacaoFinanceira
     * @example
     * // Get one TransacaoFinanceira
     * const transacaoFinanceira = await prisma.transacaoFinanceira.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransacaoFinanceiraFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransacaoFinanceiraFindUniqueArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TransacaoFinanceira that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransacaoFinanceiraFindUniqueOrThrowArgs} args - Arguments to find a TransacaoFinanceira
     * @example
     * // Get one TransacaoFinanceira
     * const transacaoFinanceira = await prisma.transacaoFinanceira.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransacaoFinanceiraFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransacaoFinanceiraFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TransacaoFinanceira that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFinanceiraFindFirstArgs} args - Arguments to find a TransacaoFinanceira
     * @example
     * // Get one TransacaoFinanceira
     * const transacaoFinanceira = await prisma.transacaoFinanceira.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransacaoFinanceiraFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransacaoFinanceiraFindFirstArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TransacaoFinanceira that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFinanceiraFindFirstOrThrowArgs} args - Arguments to find a TransacaoFinanceira
     * @example
     * // Get one TransacaoFinanceira
     * const transacaoFinanceira = await prisma.transacaoFinanceira.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransacaoFinanceiraFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransacaoFinanceiraFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TransacaoFinanceiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFinanceiraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransacaoFinanceiras
     * const transacaoFinanceiras = await prisma.transacaoFinanceira.findMany()
     * 
     * // Get first 10 TransacaoFinanceiras
     * const transacaoFinanceiras = await prisma.transacaoFinanceira.findMany({ take: 10 })
     * 
     * // Only select the `transacao_id`
     * const transacaoFinanceiraWithTransacao_idOnly = await prisma.transacaoFinanceira.findMany({ select: { transacao_id: true } })
     * 
    **/
    findMany<T extends TransacaoFinanceiraFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransacaoFinanceiraFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TransacaoFinanceira.
     * @param {TransacaoFinanceiraCreateArgs} args - Arguments to create a TransacaoFinanceira.
     * @example
     * // Create one TransacaoFinanceira
     * const TransacaoFinanceira = await prisma.transacaoFinanceira.create({
     *   data: {
     *     // ... data to create a TransacaoFinanceira
     *   }
     * })
     * 
    **/
    create<T extends TransacaoFinanceiraCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransacaoFinanceiraCreateArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TransacaoFinanceiras.
     *     @param {TransacaoFinanceiraCreateManyArgs} args - Arguments to create many TransacaoFinanceiras.
     *     @example
     *     // Create many TransacaoFinanceiras
     *     const transacaoFinanceira = await prisma.transacaoFinanceira.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransacaoFinanceiraCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransacaoFinanceiraCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransacaoFinanceira.
     * @param {TransacaoFinanceiraDeleteArgs} args - Arguments to delete one TransacaoFinanceira.
     * @example
     * // Delete one TransacaoFinanceira
     * const TransacaoFinanceira = await prisma.transacaoFinanceira.delete({
     *   where: {
     *     // ... filter to delete one TransacaoFinanceira
     *   }
     * })
     * 
    **/
    delete<T extends TransacaoFinanceiraDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransacaoFinanceiraDeleteArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TransacaoFinanceira.
     * @param {TransacaoFinanceiraUpdateArgs} args - Arguments to update one TransacaoFinanceira.
     * @example
     * // Update one TransacaoFinanceira
     * const transacaoFinanceira = await prisma.transacaoFinanceira.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransacaoFinanceiraUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransacaoFinanceiraUpdateArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TransacaoFinanceiras.
     * @param {TransacaoFinanceiraDeleteManyArgs} args - Arguments to filter TransacaoFinanceiras to delete.
     * @example
     * // Delete a few TransacaoFinanceiras
     * const { count } = await prisma.transacaoFinanceira.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransacaoFinanceiraDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransacaoFinanceiraDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransacaoFinanceiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFinanceiraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransacaoFinanceiras
     * const transacaoFinanceira = await prisma.transacaoFinanceira.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransacaoFinanceiraUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransacaoFinanceiraUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransacaoFinanceira.
     * @param {TransacaoFinanceiraUpsertArgs} args - Arguments to update or create a TransacaoFinanceira.
     * @example
     * // Update or create a TransacaoFinanceira
     * const transacaoFinanceira = await prisma.transacaoFinanceira.upsert({
     *   create: {
     *     // ... data to create a TransacaoFinanceira
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransacaoFinanceira we want to update
     *   }
     * })
    **/
    upsert<T extends TransacaoFinanceiraUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransacaoFinanceiraUpsertArgs<ExtArgs>>
    ): Prisma__TransacaoFinanceiraClient<$Result.GetResult<Prisma.$TransacaoFinanceiraPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TransacaoFinanceiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFinanceiraCountArgs} args - Arguments to filter TransacaoFinanceiras to count.
     * @example
     * // Count the number of TransacaoFinanceiras
     * const count = await prisma.transacaoFinanceira.count({
     *   where: {
     *     // ... the filter for the TransacaoFinanceiras we want to count
     *   }
     * })
    **/
    count<T extends TransacaoFinanceiraCountArgs>(
      args?: Subset<T, TransacaoFinanceiraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoFinanceiraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransacaoFinanceira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFinanceiraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransacaoFinanceiraAggregateArgs>(args: Subset<T, TransacaoFinanceiraAggregateArgs>): Prisma.PrismaPromise<GetTransacaoFinanceiraAggregateType<T>>

    /**
     * Group by TransacaoFinanceira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFinanceiraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransacaoFinanceiraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoFinanceiraGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoFinanceiraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransacaoFinanceiraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoFinanceiraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransacaoFinanceira model
   */
  readonly fields: TransacaoFinanceiraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransacaoFinanceira.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoFinanceiraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TransacaoFinanceira model
   */ 
  interface TransacaoFinanceiraFieldRefs {
    readonly transacao_id: FieldRef<"TransacaoFinanceira", 'Int'>
    readonly tipo: FieldRef<"TransacaoFinanceira", 'String'>
    readonly valor: FieldRef<"TransacaoFinanceira", 'Float'>
    readonly data_transacao: FieldRef<"TransacaoFinanceira", 'DateTime'>
    readonly descricao: FieldRef<"TransacaoFinanceira", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TransacaoFinanceira findUnique
   */
  export type TransacaoFinanceiraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * Filter, which TransacaoFinanceira to fetch.
     */
    where: TransacaoFinanceiraWhereUniqueInput
  }


  /**
   * TransacaoFinanceira findUniqueOrThrow
   */
  export type TransacaoFinanceiraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * Filter, which TransacaoFinanceira to fetch.
     */
    where: TransacaoFinanceiraWhereUniqueInput
  }


  /**
   * TransacaoFinanceira findFirst
   */
  export type TransacaoFinanceiraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * Filter, which TransacaoFinanceira to fetch.
     */
    where?: TransacaoFinanceiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransacaoFinanceiras to fetch.
     */
    orderBy?: TransacaoFinanceiraOrderByWithRelationInput | TransacaoFinanceiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransacaoFinanceiras.
     */
    cursor?: TransacaoFinanceiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransacaoFinanceiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransacaoFinanceiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransacaoFinanceiras.
     */
    distinct?: TransacaoFinanceiraScalarFieldEnum | TransacaoFinanceiraScalarFieldEnum[]
  }


  /**
   * TransacaoFinanceira findFirstOrThrow
   */
  export type TransacaoFinanceiraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * Filter, which TransacaoFinanceira to fetch.
     */
    where?: TransacaoFinanceiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransacaoFinanceiras to fetch.
     */
    orderBy?: TransacaoFinanceiraOrderByWithRelationInput | TransacaoFinanceiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransacaoFinanceiras.
     */
    cursor?: TransacaoFinanceiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransacaoFinanceiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransacaoFinanceiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransacaoFinanceiras.
     */
    distinct?: TransacaoFinanceiraScalarFieldEnum | TransacaoFinanceiraScalarFieldEnum[]
  }


  /**
   * TransacaoFinanceira findMany
   */
  export type TransacaoFinanceiraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * Filter, which TransacaoFinanceiras to fetch.
     */
    where?: TransacaoFinanceiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransacaoFinanceiras to fetch.
     */
    orderBy?: TransacaoFinanceiraOrderByWithRelationInput | TransacaoFinanceiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransacaoFinanceiras.
     */
    cursor?: TransacaoFinanceiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransacaoFinanceiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransacaoFinanceiras.
     */
    skip?: number
    distinct?: TransacaoFinanceiraScalarFieldEnum | TransacaoFinanceiraScalarFieldEnum[]
  }


  /**
   * TransacaoFinanceira create
   */
  export type TransacaoFinanceiraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * The data needed to create a TransacaoFinanceira.
     */
    data: XOR<TransacaoFinanceiraCreateInput, TransacaoFinanceiraUncheckedCreateInput>
  }


  /**
   * TransacaoFinanceira createMany
   */
  export type TransacaoFinanceiraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransacaoFinanceiras.
     */
    data: TransacaoFinanceiraCreateManyInput | TransacaoFinanceiraCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TransacaoFinanceira update
   */
  export type TransacaoFinanceiraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * The data needed to update a TransacaoFinanceira.
     */
    data: XOR<TransacaoFinanceiraUpdateInput, TransacaoFinanceiraUncheckedUpdateInput>
    /**
     * Choose, which TransacaoFinanceira to update.
     */
    where: TransacaoFinanceiraWhereUniqueInput
  }


  /**
   * TransacaoFinanceira updateMany
   */
  export type TransacaoFinanceiraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransacaoFinanceiras.
     */
    data: XOR<TransacaoFinanceiraUpdateManyMutationInput, TransacaoFinanceiraUncheckedUpdateManyInput>
    /**
     * Filter which TransacaoFinanceiras to update
     */
    where?: TransacaoFinanceiraWhereInput
  }


  /**
   * TransacaoFinanceira upsert
   */
  export type TransacaoFinanceiraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * The filter to search for the TransacaoFinanceira to update in case it exists.
     */
    where: TransacaoFinanceiraWhereUniqueInput
    /**
     * In case the TransacaoFinanceira found by the `where` argument doesn't exist, create a new TransacaoFinanceira with this data.
     */
    create: XOR<TransacaoFinanceiraCreateInput, TransacaoFinanceiraUncheckedCreateInput>
    /**
     * In case the TransacaoFinanceira was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoFinanceiraUpdateInput, TransacaoFinanceiraUncheckedUpdateInput>
  }


  /**
   * TransacaoFinanceira delete
   */
  export type TransacaoFinanceiraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
    /**
     * Filter which TransacaoFinanceira to delete.
     */
    where: TransacaoFinanceiraWhereUniqueInput
  }


  /**
   * TransacaoFinanceira deleteMany
   */
  export type TransacaoFinanceiraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransacaoFinanceiras to delete
     */
    where?: TransacaoFinanceiraWhereInput
  }


  /**
   * TransacaoFinanceira without action
   */
  export type TransacaoFinanceiraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransacaoFinanceira
     */
    select?: TransacaoFinanceiraSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    cliente_id: 'cliente_id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    servico_id: 'servico_id',
    cliente_id: 'cliente_id',
    data_servico: 'data_servico',
    descricao: 'descricao',
    valor: 'valor'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const PecaScalarFieldEnum: {
    peca_id: 'peca_id',
    nome: 'nome',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario'
  };

  export type PecaScalarFieldEnum = (typeof PecaScalarFieldEnum)[keyof typeof PecaScalarFieldEnum]


  export const TransacaoFinanceiraScalarFieldEnum: {
    transacao_id: 'transacao_id',
    tipo: 'tipo',
    valor: 'valor',
    data_transacao: 'data_transacao',
    descricao: 'descricao'
  };

  export type TransacaoFinanceiraScalarFieldEnum = (typeof TransacaoFinanceiraScalarFieldEnum)[keyof typeof TransacaoFinanceiraScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    cliente_id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringNullableFilter<"Cliente"> | string | null
    servicos?: ServicoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    servicos?: ServicoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cliente_id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringNullableFilter<"Cliente"> | string | null
    servicos?: ServicoListRelationFilter
  }, "cliente_id">

  export type ClienteOrderByWithAggregationInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    cliente_id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    servico_id?: IntFilter<"Servico"> | number
    cliente_id?: IntFilter<"Servico"> | number
    data_servico?: DateTimeFilter<"Servico"> | Date | string
    descricao?: StringFilter<"Servico"> | string
    valor?: FloatFilter<"Servico"> | number
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    pecas?: PecaListRelationFilter
  }

  export type ServicoOrderByWithRelationInput = {
    servico_id?: SortOrder
    cliente_id?: SortOrder
    data_servico?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    pecas?: PecaOrderByRelationAggregateInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    servico_id?: number
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    cliente_id?: IntFilter<"Servico"> | number
    data_servico?: DateTimeFilter<"Servico"> | Date | string
    descricao?: StringFilter<"Servico"> | string
    valor?: FloatFilter<"Servico"> | number
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    pecas?: PecaListRelationFilter
  }, "servico_id">

  export type ServicoOrderByWithAggregationInput = {
    servico_id?: SortOrder
    cliente_id?: SortOrder
    data_servico?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    servico_id?: IntWithAggregatesFilter<"Servico"> | number
    cliente_id?: IntWithAggregatesFilter<"Servico"> | number
    data_servico?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
    descricao?: StringWithAggregatesFilter<"Servico"> | string
    valor?: FloatWithAggregatesFilter<"Servico"> | number
  }

  export type PecaWhereInput = {
    AND?: PecaWhereInput | PecaWhereInput[]
    OR?: PecaWhereInput[]
    NOT?: PecaWhereInput | PecaWhereInput[]
    peca_id?: IntFilter<"Peca"> | number
    nome?: StringFilter<"Peca"> | string
    quantidade?: IntFilter<"Peca"> | number
    preco_unitario?: FloatFilter<"Peca"> | number
    servicos?: ServicoListRelationFilter
  }

  export type PecaOrderByWithRelationInput = {
    peca_id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    servicos?: ServicoOrderByRelationAggregateInput
  }

  export type PecaWhereUniqueInput = Prisma.AtLeast<{
    peca_id?: number
    AND?: PecaWhereInput | PecaWhereInput[]
    OR?: PecaWhereInput[]
    NOT?: PecaWhereInput | PecaWhereInput[]
    nome?: StringFilter<"Peca"> | string
    quantidade?: IntFilter<"Peca"> | number
    preco_unitario?: FloatFilter<"Peca"> | number
    servicos?: ServicoListRelationFilter
  }, "peca_id">

  export type PecaOrderByWithAggregationInput = {
    peca_id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    _count?: PecaCountOrderByAggregateInput
    _avg?: PecaAvgOrderByAggregateInput
    _max?: PecaMaxOrderByAggregateInput
    _min?: PecaMinOrderByAggregateInput
    _sum?: PecaSumOrderByAggregateInput
  }

  export type PecaScalarWhereWithAggregatesInput = {
    AND?: PecaScalarWhereWithAggregatesInput | PecaScalarWhereWithAggregatesInput[]
    OR?: PecaScalarWhereWithAggregatesInput[]
    NOT?: PecaScalarWhereWithAggregatesInput | PecaScalarWhereWithAggregatesInput[]
    peca_id?: IntWithAggregatesFilter<"Peca"> | number
    nome?: StringWithAggregatesFilter<"Peca"> | string
    quantidade?: IntWithAggregatesFilter<"Peca"> | number
    preco_unitario?: FloatWithAggregatesFilter<"Peca"> | number
  }

  export type TransacaoFinanceiraWhereInput = {
    AND?: TransacaoFinanceiraWhereInput | TransacaoFinanceiraWhereInput[]
    OR?: TransacaoFinanceiraWhereInput[]
    NOT?: TransacaoFinanceiraWhereInput | TransacaoFinanceiraWhereInput[]
    transacao_id?: IntFilter<"TransacaoFinanceira"> | number
    tipo?: StringFilter<"TransacaoFinanceira"> | string
    valor?: FloatFilter<"TransacaoFinanceira"> | number
    data_transacao?: DateTimeFilter<"TransacaoFinanceira"> | Date | string
    descricao?: StringNullableFilter<"TransacaoFinanceira"> | string | null
  }

  export type TransacaoFinanceiraOrderByWithRelationInput = {
    transacao_id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data_transacao?: SortOrder
    descricao?: SortOrderInput | SortOrder
  }

  export type TransacaoFinanceiraWhereUniqueInput = Prisma.AtLeast<{
    transacao_id?: number
    AND?: TransacaoFinanceiraWhereInput | TransacaoFinanceiraWhereInput[]
    OR?: TransacaoFinanceiraWhereInput[]
    NOT?: TransacaoFinanceiraWhereInput | TransacaoFinanceiraWhereInput[]
    tipo?: StringFilter<"TransacaoFinanceira"> | string
    valor?: FloatFilter<"TransacaoFinanceira"> | number
    data_transacao?: DateTimeFilter<"TransacaoFinanceira"> | Date | string
    descricao?: StringNullableFilter<"TransacaoFinanceira"> | string | null
  }, "transacao_id">

  export type TransacaoFinanceiraOrderByWithAggregationInput = {
    transacao_id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data_transacao?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: TransacaoFinanceiraCountOrderByAggregateInput
    _avg?: TransacaoFinanceiraAvgOrderByAggregateInput
    _max?: TransacaoFinanceiraMaxOrderByAggregateInput
    _min?: TransacaoFinanceiraMinOrderByAggregateInput
    _sum?: TransacaoFinanceiraSumOrderByAggregateInput
  }

  export type TransacaoFinanceiraScalarWhereWithAggregatesInput = {
    AND?: TransacaoFinanceiraScalarWhereWithAggregatesInput | TransacaoFinanceiraScalarWhereWithAggregatesInput[]
    OR?: TransacaoFinanceiraScalarWhereWithAggregatesInput[]
    NOT?: TransacaoFinanceiraScalarWhereWithAggregatesInput | TransacaoFinanceiraScalarWhereWithAggregatesInput[]
    transacao_id?: IntWithAggregatesFilter<"TransacaoFinanceira"> | number
    tipo?: StringWithAggregatesFilter<"TransacaoFinanceira"> | string
    valor?: FloatWithAggregatesFilter<"TransacaoFinanceira"> | number
    data_transacao?: DateTimeWithAggregatesFilter<"TransacaoFinanceira"> | Date | string
    descricao?: StringNullableWithAggregatesFilter<"TransacaoFinanceira"> | string | null
  }

  export type ClienteCreateInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    servicos?: ServicoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    cliente_id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    servicos?: ServicoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: ServicoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: ServicoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    cliente_id?: number
    nome: string
    email?: string | null
    telefone?: string | null
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicoCreateInput = {
    data_servico: Date | string
    descricao: string
    valor: number
    cliente: ClienteCreateNestedOneWithoutServicosInput
    pecas?: PecaCreateNestedManyWithoutServicosInput
  }

  export type ServicoUncheckedCreateInput = {
    servico_id?: number
    cliente_id: number
    data_servico: Date | string
    descricao: string
    valor: number
    pecas?: PecaUncheckedCreateNestedManyWithoutServicosInput
  }

  export type ServicoUpdateInput = {
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
    pecas?: PecaUpdateManyWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    servico_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    pecas?: PecaUncheckedUpdateManyWithoutServicosNestedInput
  }

  export type ServicoCreateManyInput = {
    servico_id?: number
    cliente_id: number
    data_servico: Date | string
    descricao: string
    valor: number
  }

  export type ServicoUpdateManyMutationInput = {
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
  }

  export type ServicoUncheckedUpdateManyInput = {
    servico_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
  }

  export type PecaCreateInput = {
    nome: string
    quantidade: number
    preco_unitario: number
    servicos?: ServicoCreateNestedManyWithoutPecasInput
  }

  export type PecaUncheckedCreateInput = {
    peca_id?: number
    nome: string
    quantidade: number
    preco_unitario: number
    servicos?: ServicoUncheckedCreateNestedManyWithoutPecasInput
  }

  export type PecaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    servicos?: ServicoUpdateManyWithoutPecasNestedInput
  }

  export type PecaUncheckedUpdateInput = {
    peca_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    servicos?: ServicoUncheckedUpdateManyWithoutPecasNestedInput
  }

  export type PecaCreateManyInput = {
    peca_id?: number
    nome: string
    quantidade: number
    preco_unitario: number
  }

  export type PecaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
  }

  export type PecaUncheckedUpdateManyInput = {
    peca_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
  }

  export type TransacaoFinanceiraCreateInput = {
    tipo: string
    valor: number
    data_transacao: Date | string
    descricao?: string | null
  }

  export type TransacaoFinanceiraUncheckedCreateInput = {
    transacao_id?: number
    tipo: string
    valor: number
    data_transacao: Date | string
    descricao?: string | null
  }

  export type TransacaoFinanceiraUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_transacao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransacaoFinanceiraUncheckedUpdateInput = {
    transacao_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_transacao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransacaoFinanceiraCreateManyInput = {
    transacao_id?: number
    tipo: string
    valor: number
    data_transacao: Date | string
    descricao?: string | null
  }

  export type TransacaoFinanceiraUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_transacao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransacaoFinanceiraUncheckedUpdateManyInput = {
    transacao_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_transacao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ServicoListRelationFilter = {
    every?: ServicoWhereInput
    some?: ServicoWhereInput
    none?: ServicoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    cliente_id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    cliente_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ClienteRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PecaListRelationFilter = {
    every?: PecaWhereInput
    some?: PecaWhereInput
    none?: PecaWhereInput
  }

  export type PecaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicoCountOrderByAggregateInput = {
    servico_id?: SortOrder
    cliente_id?: SortOrder
    data_servico?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    servico_id?: SortOrder
    cliente_id?: SortOrder
    valor?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    servico_id?: SortOrder
    cliente_id?: SortOrder
    data_servico?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    servico_id?: SortOrder
    cliente_id?: SortOrder
    data_servico?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    servico_id?: SortOrder
    cliente_id?: SortOrder
    valor?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PecaCountOrderByAggregateInput = {
    peca_id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type PecaAvgOrderByAggregateInput = {
    peca_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type PecaMaxOrderByAggregateInput = {
    peca_id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type PecaMinOrderByAggregateInput = {
    peca_id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type PecaSumOrderByAggregateInput = {
    peca_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type TransacaoFinanceiraCountOrderByAggregateInput = {
    transacao_id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data_transacao?: SortOrder
    descricao?: SortOrder
  }

  export type TransacaoFinanceiraAvgOrderByAggregateInput = {
    transacao_id?: SortOrder
    valor?: SortOrder
  }

  export type TransacaoFinanceiraMaxOrderByAggregateInput = {
    transacao_id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data_transacao?: SortOrder
    descricao?: SortOrder
  }

  export type TransacaoFinanceiraMinOrderByAggregateInput = {
    transacao_id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data_transacao?: SortOrder
    descricao?: SortOrder
  }

  export type TransacaoFinanceiraSumOrderByAggregateInput = {
    transacao_id?: SortOrder
    valor?: SortOrder
  }

  export type ServicoCreateNestedManyWithoutClienteInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ServicoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutClienteInput | ServicoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutClienteInput | ServicoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutClienteInput | ServicoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServicoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput> | ServicoCreateWithoutClienteInput[] | ServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutClienteInput | ServicoCreateOrConnectWithoutClienteInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutClienteInput | ServicoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ServicoCreateManyClienteInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutClienteInput | ServicoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutClienteInput | ServicoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutServicosInput = {
    create?: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutServicosInput
    connect?: ClienteWhereUniqueInput
  }

  export type PecaCreateNestedManyWithoutServicosInput = {
    create?: XOR<PecaCreateWithoutServicosInput, PecaUncheckedCreateWithoutServicosInput> | PecaCreateWithoutServicosInput[] | PecaUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicosInput | PecaCreateOrConnectWithoutServicosInput[]
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
  }

  export type PecaUncheckedCreateNestedManyWithoutServicosInput = {
    create?: XOR<PecaCreateWithoutServicosInput, PecaUncheckedCreateWithoutServicosInput> | PecaCreateWithoutServicosInput[] | PecaUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicosInput | PecaCreateOrConnectWithoutServicosInput[]
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateOneRequiredWithoutServicosNestedInput = {
    create?: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutServicosInput
    upsert?: ClienteUpsertWithoutServicosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutServicosInput, ClienteUpdateWithoutServicosInput>, ClienteUncheckedUpdateWithoutServicosInput>
  }

  export type PecaUpdateManyWithoutServicosNestedInput = {
    create?: XOR<PecaCreateWithoutServicosInput, PecaUncheckedCreateWithoutServicosInput> | PecaCreateWithoutServicosInput[] | PecaUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicosInput | PecaCreateOrConnectWithoutServicosInput[]
    upsert?: PecaUpsertWithWhereUniqueWithoutServicosInput | PecaUpsertWithWhereUniqueWithoutServicosInput[]
    set?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    disconnect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    delete?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    update?: PecaUpdateWithWhereUniqueWithoutServicosInput | PecaUpdateWithWhereUniqueWithoutServicosInput[]
    updateMany?: PecaUpdateManyWithWhereWithoutServicosInput | PecaUpdateManyWithWhereWithoutServicosInput[]
    deleteMany?: PecaScalarWhereInput | PecaScalarWhereInput[]
  }

  export type PecaUncheckedUpdateManyWithoutServicosNestedInput = {
    create?: XOR<PecaCreateWithoutServicosInput, PecaUncheckedCreateWithoutServicosInput> | PecaCreateWithoutServicosInput[] | PecaUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: PecaCreateOrConnectWithoutServicosInput | PecaCreateOrConnectWithoutServicosInput[]
    upsert?: PecaUpsertWithWhereUniqueWithoutServicosInput | PecaUpsertWithWhereUniqueWithoutServicosInput[]
    set?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    disconnect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    delete?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    connect?: PecaWhereUniqueInput | PecaWhereUniqueInput[]
    update?: PecaUpdateWithWhereUniqueWithoutServicosInput | PecaUpdateWithWhereUniqueWithoutServicosInput[]
    updateMany?: PecaUpdateManyWithWhereWithoutServicosInput | PecaUpdateManyWithWhereWithoutServicosInput[]
    deleteMany?: PecaScalarWhereInput | PecaScalarWhereInput[]
  }

  export type ServicoCreateNestedManyWithoutPecasInput = {
    create?: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput> | ServicoCreateWithoutPecasInput[] | ServicoUncheckedCreateWithoutPecasInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPecasInput | ServicoCreateOrConnectWithoutPecasInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutPecasInput = {
    create?: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput> | ServicoCreateWithoutPecasInput[] | ServicoUncheckedCreateWithoutPecasInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPecasInput | ServicoCreateOrConnectWithoutPecasInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUpdateManyWithoutPecasNestedInput = {
    create?: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput> | ServicoCreateWithoutPecasInput[] | ServicoUncheckedCreateWithoutPecasInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPecasInput | ServicoCreateOrConnectWithoutPecasInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutPecasInput | ServicoUpsertWithWhereUniqueWithoutPecasInput[]
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutPecasInput | ServicoUpdateWithWhereUniqueWithoutPecasInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutPecasInput | ServicoUpdateManyWithWhereWithoutPecasInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutPecasNestedInput = {
    create?: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput> | ServicoCreateWithoutPecasInput[] | ServicoUncheckedCreateWithoutPecasInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPecasInput | ServicoCreateOrConnectWithoutPecasInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutPecasInput | ServicoUpsertWithWhereUniqueWithoutPecasInput[]
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutPecasInput | ServicoUpdateWithWhereUniqueWithoutPecasInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutPecasInput | ServicoUpdateManyWithWhereWithoutPecasInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ServicoCreateWithoutClienteInput = {
    data_servico: Date | string
    descricao: string
    valor: number
    pecas?: PecaCreateNestedManyWithoutServicosInput
  }

  export type ServicoUncheckedCreateWithoutClienteInput = {
    servico_id?: number
    data_servico: Date | string
    descricao: string
    valor: number
    pecas?: PecaUncheckedCreateNestedManyWithoutServicosInput
  }

  export type ServicoCreateOrConnectWithoutClienteInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput>
  }

  export type ServicoCreateManyClienteInputEnvelope = {
    data: ServicoCreateManyClienteInput | ServicoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ServicoUpsertWithWhereUniqueWithoutClienteInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutClienteInput, ServicoUncheckedUpdateWithoutClienteInput>
    create: XOR<ServicoCreateWithoutClienteInput, ServicoUncheckedCreateWithoutClienteInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutClienteInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutClienteInput, ServicoUncheckedUpdateWithoutClienteInput>
  }

  export type ServicoUpdateManyWithWhereWithoutClienteInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ServicoScalarWhereInput = {
    AND?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    OR?: ServicoScalarWhereInput[]
    NOT?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    servico_id?: IntFilter<"Servico"> | number
    cliente_id?: IntFilter<"Servico"> | number
    data_servico?: DateTimeFilter<"Servico"> | Date | string
    descricao?: StringFilter<"Servico"> | string
    valor?: FloatFilter<"Servico"> | number
  }

  export type ClienteCreateWithoutServicosInput = {
    nome: string
    email?: string | null
    telefone?: string | null
  }

  export type ClienteUncheckedCreateWithoutServicosInput = {
    cliente_id?: number
    nome: string
    email?: string | null
    telefone?: string | null
  }

  export type ClienteCreateOrConnectWithoutServicosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
  }

  export type PecaCreateWithoutServicosInput = {
    nome: string
    quantidade: number
    preco_unitario: number
  }

  export type PecaUncheckedCreateWithoutServicosInput = {
    peca_id?: number
    nome: string
    quantidade: number
    preco_unitario: number
  }

  export type PecaCreateOrConnectWithoutServicosInput = {
    where: PecaWhereUniqueInput
    create: XOR<PecaCreateWithoutServicosInput, PecaUncheckedCreateWithoutServicosInput>
  }

  export type ClienteUpsertWithoutServicosInput = {
    update: XOR<ClienteUpdateWithoutServicosInput, ClienteUncheckedUpdateWithoutServicosInput>
    create: XOR<ClienteCreateWithoutServicosInput, ClienteUncheckedCreateWithoutServicosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutServicosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutServicosInput, ClienteUncheckedUpdateWithoutServicosInput>
  }

  export type ClienteUpdateWithoutServicosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateWithoutServicosInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PecaUpsertWithWhereUniqueWithoutServicosInput = {
    where: PecaWhereUniqueInput
    update: XOR<PecaUpdateWithoutServicosInput, PecaUncheckedUpdateWithoutServicosInput>
    create: XOR<PecaCreateWithoutServicosInput, PecaUncheckedCreateWithoutServicosInput>
  }

  export type PecaUpdateWithWhereUniqueWithoutServicosInput = {
    where: PecaWhereUniqueInput
    data: XOR<PecaUpdateWithoutServicosInput, PecaUncheckedUpdateWithoutServicosInput>
  }

  export type PecaUpdateManyWithWhereWithoutServicosInput = {
    where: PecaScalarWhereInput
    data: XOR<PecaUpdateManyMutationInput, PecaUncheckedUpdateManyWithoutServicosInput>
  }

  export type PecaScalarWhereInput = {
    AND?: PecaScalarWhereInput | PecaScalarWhereInput[]
    OR?: PecaScalarWhereInput[]
    NOT?: PecaScalarWhereInput | PecaScalarWhereInput[]
    peca_id?: IntFilter<"Peca"> | number
    nome?: StringFilter<"Peca"> | string
    quantidade?: IntFilter<"Peca"> | number
    preco_unitario?: FloatFilter<"Peca"> | number
  }

  export type ServicoCreateWithoutPecasInput = {
    data_servico: Date | string
    descricao: string
    valor: number
    cliente: ClienteCreateNestedOneWithoutServicosInput
  }

  export type ServicoUncheckedCreateWithoutPecasInput = {
    servico_id?: number
    cliente_id: number
    data_servico: Date | string
    descricao: string
    valor: number
  }

  export type ServicoCreateOrConnectWithoutPecasInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput>
  }

  export type ServicoUpsertWithWhereUniqueWithoutPecasInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutPecasInput, ServicoUncheckedUpdateWithoutPecasInput>
    create: XOR<ServicoCreateWithoutPecasInput, ServicoUncheckedCreateWithoutPecasInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutPecasInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutPecasInput, ServicoUncheckedUpdateWithoutPecasInput>
  }

  export type ServicoUpdateManyWithWhereWithoutPecasInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutPecasInput>
  }

  export type ServicoCreateManyClienteInput = {
    servico_id?: number
    data_servico: Date | string
    descricao: string
    valor: number
  }

  export type ServicoUpdateWithoutClienteInput = {
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    pecas?: PecaUpdateManyWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateWithoutClienteInput = {
    servico_id?: IntFieldUpdateOperationsInput | number
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    pecas?: PecaUncheckedUpdateManyWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutClienteInput = {
    servico_id?: IntFieldUpdateOperationsInput | number
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
  }

  export type PecaUpdateWithoutServicosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
  }

  export type PecaUncheckedUpdateWithoutServicosInput = {
    peca_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
  }

  export type PecaUncheckedUpdateManyWithoutServicosInput = {
    peca_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ServicoUpdateWithoutPecasInput = {
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    cliente?: ClienteUpdateOneRequiredWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateWithoutPecasInput = {
    servico_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
  }

  export type ServicoUncheckedUpdateManyWithoutPecasInput = {
    servico_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    data_servico?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClienteCountOutputTypeDefaultArgs instead
     */
    export type ClienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicoCountOutputTypeDefaultArgs instead
     */
    export type ServicoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PecaCountOutputTypeDefaultArgs instead
     */
    export type PecaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PecaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteDefaultArgs instead
     */
    export type ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicoDefaultArgs instead
     */
    export type ServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PecaDefaultArgs instead
     */
    export type PecaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PecaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransacaoFinanceiraDefaultArgs instead
     */
    export type TransacaoFinanceiraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransacaoFinanceiraDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}