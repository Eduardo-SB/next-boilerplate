import * as S from './Main.styles';

const Main = ({
  title = 'React Boilerplate',
  description = 'TypeScript, React js, NextJS e Styled components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com um código."
    />
  </S.Wrapper>
);

export default Main;
