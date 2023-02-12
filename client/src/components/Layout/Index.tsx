import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Nav />
        {children}
        <Footer />
      </Provider>
    </>
  );
};
