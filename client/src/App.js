import { Provider } from "react-redux";
import { configureAppStore } from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";
export const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
