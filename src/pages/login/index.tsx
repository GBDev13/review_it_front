import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Container, LogoContent, Content } from './styles';

type SignInFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<SignInFormData>();

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>review.it | login</title>
      </Head>

      <Container>
        <LogoContent>
          <h1>
            review<span>.it</span>
          </h1>
        </LogoContent>

        <Content>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              required
              {...register('email')}
            />

            <input
              name="password"
              type="password"
              placeholder="Senha"
              required
              {...register('password')}
            />

            <button type="submit">Entrar</button>
          </form>
        </Content>
      </Container>
    </>
  );
}
