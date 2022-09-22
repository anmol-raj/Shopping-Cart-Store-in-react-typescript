import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const HomeComponent: React.FC<{}> = ({}) => {
  const [resourceType, setResourceType] = useState("posts");
  const [item, setItem] = useState([]);

  // Api rendering

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [resourceType]);

  return (
    <>
      <p>Home page</p>
      <div>
        <Button onClick={() => setResourceType("posts")}>Posts</Button>
        <Button onClick={() => setResourceType("users")}>Users</Button>
        <Button onClick={() => setResourceType("comments")}>Comments</Button>
      </div>
      <br />
      <h4>{resourceType}</h4>
      {item.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};
export default HomeComponent;
