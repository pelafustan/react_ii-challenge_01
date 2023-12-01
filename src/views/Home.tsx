import { Tabs } from "antd";
import type { TabsProps } from 'antd';
import PiesView from "./PiesView";
import CakesView from "./CakesView";

export default function Home() {
  const items: TabsProps["items"] = [
    {
      label: "Cakes",
      key: "1",
      children: <CakesView />
    },
    {
      label: "Pies",
      key: "2",
      children: <PiesView />
    },
  ];

  return (
    <>
      <h1 style={{ paddingTop: "2rem" }}>Our Products</h1>
      <Tabs
        defaultActiveKey="1"
        type="card"
        tabPosition="left"
        items={items}
      />
    </>
  )
}
