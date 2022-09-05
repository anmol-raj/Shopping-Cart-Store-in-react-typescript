import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent: React.FC<{}> = ({}) => {
  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <Button
            className="rounded"
            variant="outline-primary"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <div className="mb-1 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                height="auto"
                width="auto"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1.00001 0.75H1.46618C2.39878 0.75 3.20759 1.39455 3.41573 2.30362L3.95638 4.66487"
                ></path>
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.2025 5.49889C13.0642 6.96113 12.6495 8.17798 12.3014 8.92988C12.1225 9.31627 11.8083 9.61628 11.3966 9.7248C10.8927 9.85761 10.0258 10 8.625 10C7.22418 10 6.35732 9.85761 5.85345 9.7248C5.44172 9.61628 5.12747 9.31627 4.94859 8.92988C4.52389 8.01248 4 6.40293 4 4.5H12.25C12.8023 4.5 13.2545 4.94906 13.2025 5.49889Z"
                ></path>
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.5 13.4722C6.11809 13.4722 6.61915 12.9711 6.61915 12.353C6.61915 11.7349 6.11809 11.2339 5.5 11.2339C4.88192 11.2339 4.38086 11.7349 4.38086 12.353C4.38086 12.9711 4.88192 13.4722 5.5 13.4722Z"
                ></path>
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.75 13.4722C12.3681 13.4722 12.8691 12.9711 12.8691 12.353C12.8691 11.7349 12.3681 11.2339 11.75 11.2339C11.1319 11.2339 10.6309 11.7349 10.6309 12.353C10.6309 12.9711 11.1319 13.4722 11.75 13.4722Z"
                ></path>
              </svg>
            </div>
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#e03131",
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              3
            </div>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};

export default NavbarComponent;
