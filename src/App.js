import { Link, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import { Home } from './views';
import { Footer } from './components';

import { Container, Navbar, Nav } from 'react-bootstrap';

const App = () => {
  const routes = [
    {
      path: '/',
      RouteComponent: Route,
      Component: Home,
      nodeRef: useRef(null),
    }
  ];

  return (
    <div className="app d-flex flex-column">
      <Navbar bg="light" expand="lg" className="mb-4 bg-transparent custom-navbar">
        <Container>
          <Link
            className="nav-link"
            to="/"
          >
            <Navbar.Brand className="font-title">
              <span className="m-2 text-white fw-bold">
                Alkemy Frontend Challenge
              </span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                className="nav-link"
                to="/"
              >
                <span className="text-white">Home</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="transition-container-base">
        {
          routes.map(route => (
            <route.RouteComponent path={route.path} key={route.path} exact>
              {
                (routeProps) => (
                  <CSSTransition
                    classNames="mixed"
                    timeout={300}
                    in={routeProps.match !== null}
                    unmountOnExit={true}
                    nodeRef={route.nodeRef}
                  >
                    <div
                      className="transition-container"
                      ref={route.nodeRef}
                    >
                      <route.Component />
                    </div>
                  </CSSTransition>
                )
              }
            </route.RouteComponent>
          ))
        }
      </div>

      <Footer />
    </div>
  );
}

export default App;