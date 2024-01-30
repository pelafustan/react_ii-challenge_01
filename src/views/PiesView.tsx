import { useEffect, useState } from "react";
import { List, Card, Typography } from "antd";
import { Pie } from "../utils/utils";

export default function PiesView() {
  const [loading, setLoading] = useState(false);
  const [pies, setPies] = useState();
  useEffect(() => {
    setLoading(true);
    const apiKey = "d442d833c232405ab26ce32bfcd346c7";
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pie&offset=35`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPies(json.results);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <List
      style={{
        padding: "4rem",
      }}
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 5,
        xl: 5,
        xxl: 5,
      }}
      dataSource={pies}
      renderItem={(item: Pie) => (
        <List.Item key={item.id}>
          <Card
            title={item.title}
            cover={
              <img
                alt={item.title}
                src={item.image}
                style={{ boxSizing: "border-box", padding: "20px", }}
              />
            }
          >
            <Typography.Paragraph>{item.title}</Typography.Paragraph>
          </Card>
        </List.Item>
      )}
    />
  )
}
