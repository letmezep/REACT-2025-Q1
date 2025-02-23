// declare module 'redux-mock-store' {
//   import { AnyAction, Store } from 'redux';
//   import { ThunkDispatch } from 'redux-thunk';

//   type MockStore<S = unknown> = Store<S> & {
//     dispatch: ThunkDispatch<S, undefined, AnyAction>;
//     getActions: () => AnyAction[];
//     clearActions: () => void;
//   };

//   export default function configureStore<S = unknown>(
//     middlewares?: any[]
//   ): (initialState?: S) => MockStore<S>;
// }

declare module 'redux-mock-store' {
  import { AnyAction, Store } from 'redux';
  import { ThunkDispatch } from 'redux-thunk';

  type MockStore<S = unknown> = Store<S> & {
    dispatch: ThunkDispatch<S, undefined, AnyAction>;
    getActions: () => AnyAction[];
    clearActions: () => void;
  };

  type Middleware = (...args: unknown[]) => unknown;

  export default function configureStore<S = unknown>(
    middlewares?: Middleware[]
  ): (initialState?: S) => MockStore<S>;
}
