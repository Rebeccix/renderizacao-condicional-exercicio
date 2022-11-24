// - Á página vai precisar ter:
//     - Um input para endereço
//     - Um input para número da residência
//     - um input para telefone
//     - um input para complemento
//     - um botão para ser usado para passar a próxima página
import { SendButton, Input, StyledLabel, Form, FormContainer } from "../TelaCadastro/styled";

export default function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro de endereço</h1>
      <Form>
        <StyledLabel htmlFor="endereço">
          endereço:
          <Input id="endereço" />
        </StyledLabel>
        <StyledLabel htmlFor="numDaResidencia">
          N da residência:
          <Input id="numDaResidencia"/>
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          telefone:
          <Input id="telefone" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Avançar</SendButton>
      </Form>
    </FormContainer>
  );
}
