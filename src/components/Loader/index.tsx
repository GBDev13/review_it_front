import { Container } from './styles';

function Loader() {
  return (
    <Container className="loader">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </Container>
  );
}

export default Loader;
