import { Layout, theme } from "antd";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import "./App.css";

export default function App() {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <>
      <Layout className="layout">
        <Layout.Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Navbar />
        </Layout.Header>
        <Layout.Content 
          style={{
            background: colorBgContainer,
            padding: "0 50px:",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Layout.Content>
      </Layout>
    </>
  );
}
