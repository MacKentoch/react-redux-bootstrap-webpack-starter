type PromiseAction < Action > = Promise<Action>;

type ThunkAction < Action , State > = (
  dispatch: Dispatch<Action>,
  getState: GetState<State>,
) => any;

type Dispatch < Action > = (
  action: Action | ThunkAction<Action, any> | Promise<Action>,
) => any;

type GetState < State > = () => {} & State;
