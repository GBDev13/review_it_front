// import { useForm } from 'react-hook-form';
import { Container, LogoContent, Content } from './styles';

export default function Login() {
  // const {
  //   register,
  //   formState: { errors }
  // } = useForm();
  return (
    <Container>
      <LogoContent>
        <h1>
          review<span>.it</span>
        </h1>
      </LogoContent>

      <Content>
        <form>
          <input type="email" name="" id="" placeholder="E-mail" />
          <input type="password" name="" id="" placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
}
