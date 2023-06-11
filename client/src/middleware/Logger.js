const Logger = (store) => (next) => (action) => {
  console.log("Dispatching: ", action)
  const result = next(action)
  console.log("Store: ", store.getState())
  return result
}

export default Logger
