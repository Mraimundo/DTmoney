import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderPropos {
  onOpenNewTransationModal: () => void;
}

export function Header({ onOpenNewTransationModal }: HeaderPropos) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransationModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}