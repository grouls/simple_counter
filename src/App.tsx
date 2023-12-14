import { useReducer } from 'react';


enum ActionTypes {
  Plus = 'plus',
  Minus = 'minus',
  UpdateRange = 'updateRange',
}

type tCounter = {
  count: number;
  range: number;
};

const initialState: tCounter = {
  count: 0,
  range: 1
}

function reducer(state: tCounter, action: { type: string, range ?: number }) {

  switch ( action.type){
    case ActionTypes.Plus: { 
      return {
        ...state,
        count: state.count + state.range
      }
    }
    case ActionTypes.Minus: { 
      return {
        ...state,
        count: state.count - state.range
      }
    }
    case ActionTypes.UpdateRange: { 
      return {
        ...state,
        range: action.range
      }
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateRange = (value: number) => {
    if (!isNaN(value)) {
      dispatch({ type : 'updateRange', range : value})
    }
  };
  const handleClick = (type: string) => {
      dispatch({ type: ActionTypes[type] })
  };

  return (
    <div>
      <input
        type="number"
        value={state.range}
        onChange={(e) => updateRange(parseInt(e.target.value, 10))}
      />
      <button onClick={() => handleClick('Minus')}>-</button>
      <button onClick={() => handleClick('Plus')}>+</button>
      <p>clicked: {state.count}</p>
    </div>
  );
}
