import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

const StoreItem: React.FC<{
  id: number;
  name: string;
  feature: string;
  price: number;
  imgurl: string;
}> = ({ id, name, feature, price, imgurl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <Card className="p-4 h-100">
        <Card.Img
          variant="top"
          src={imgurl}
          height={"200px"}
          style={{ objectFit: "contain" }}
        />
        <Card.Body
          style={{ textAlign: "center", display: "grid", gap: "0.5rem" }}
        >
          <Card.Title style={{ fontSize: "18px" }}>{name}</Card.Title>
          <Card.Subtitle style={{ fontSize: "14px", color: "#868e96" }}>
            {feature}
          </Card.Subtitle>
          <Card.Text style={{ color: "#3b5bdb" }}>
            {formatCurrency(price)}
          </Card.Text>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button onClick={() => increaseCartQuantity(id)}>
                + Add To Cart
              </Button>
            ) : (
              <>
                <div className="">
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>

                  <span className="m-3">{quantity}</span>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  className="mt-2"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItem;
