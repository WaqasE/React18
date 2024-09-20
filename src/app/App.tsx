import { ConfigProvider } from "antd";
import { getAntdTheme } from "../theme/antd.theme";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./shared/";

export default function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={getAntdTheme("light")}>
        <Routes />
      </ConfigProvider>
    </Provider>
  );
}
