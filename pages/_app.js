import "../styles/globals.scss";
import { rootReducer } from "states/reducers";
import { globalState } from "states/globalState";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// const devtools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  console.log('test push')
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
