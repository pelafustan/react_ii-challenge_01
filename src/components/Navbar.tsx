import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const navigation = [
    { label: "Home", key: "/" },
    { label: "Contact Us", key: "/contact" },
  ]

  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string; }) => {
    if (key) {
      navigate(key)
    }
  };

  return (
    <>
      <div style={{ paddingRight: "2rem" }}>
        <Logo color="white" size="2rem" />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["/"]}
        mode="horizontal"
        items={navigation}
        onClick={handleMenuClick}
      />
    </>
  );
}
