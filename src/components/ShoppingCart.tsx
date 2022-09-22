import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ShoppingCart: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { closeCart } = useShoppingCart();

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </>
  );
};

export default ShoppingCart;
