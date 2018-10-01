import { createStore} from 'redux';

// destructure
let incrementCount = ({incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof incrementBy === "number" ? incrementBy : 1
})
let decremntCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy: typeof decrementBy === "number" ? decrementBy : 1
})
let setCount = (set = {}) => ({
  type: "SET",
  setBy: typeof set.setBy === "number" ? set.setBy : 1
})
let reset = () => ({
  type: "RESET"
})

let store = createStore((state = {count : 0}, action) => {
  switch (action.type) {
    case "INCREMENT":
      // let incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      // let decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      }
    case "RESET":
      return {
        count: 0
      }
    case "SET": 
      return {
        count: action.setBy
      }
    default : 
      return state
  }
});

// console.log(store.getState())

// store.dispatch({
//   type: "INCREMENT"
// });

// console.log(store.getState())

// store.dispatch({
//   type: "DECREMENT"
// });

// console.log(store.getState())

// store.dispatch({
//   type: "DECREMENT"
// });

// console.log(store.getState())

// store.dispatch({
//   type: "RESET"
// });

// console.log(store.getState())

let unsub = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: "INCREMENT",
  incrementBy: 6
});
store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy : 10}))

// store.dispatch({
//   type: "INCREMENT"
// });

// unsub();

store.dispatch(decremntCount());

store.dispatch(reset());

store.dispatch(decremntCount({decrementBy: 20}));

store.dispatch(setCount({setBy: 500}));