import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItems";
import storeItems from "../data/items.json";

const StoreComponent: React.FC<{}> = ({}) => {
  return (
    <>
      <Row style={{ justifyContent: "space-between" }}>
        <Col>
          <h3>Store page</h3>
        </Col>
        <Col>
          <input type={"search"} placeholder="Search" />
        </Col>
      </Row>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem imgurl={item.imgUrl} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StoreComponent;
