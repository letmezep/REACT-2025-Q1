declare module 'redux-mock-store' {
    import { AnyAction, Store } from 'redux';
    import { ThunkDispatch } from 'redux-thunk';
  
    type MockStore<S = unknown> = Store<S> & {
      dispatch: ThunkDispatch<S, undefined, AnyAction>;
      getActions: () => AnyAction[];
      clearActions: () => void;
    };
  
    export default function configureStore<S = unknown>(
      middlewares?: any[]
    ): (initialState?: S) => MockStore<S>;
  }
  