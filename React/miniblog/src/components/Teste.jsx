import { styled } from 'styled-components';

const StyledComponent = styled.div`
  height: 300px;
  width: 300px;
  background-color: ${(props) => props.color === 'true' ? 'blue' : 'red'};

`;

function Teste({color, setColor}) {
 
  console.log(color);

  return (
    <StyledComponent color={color.toString()}>
      <button onClick={() => setColor(!color)}>Trocar color</button>
    </StyledComponent>
  )
}

export default Teste