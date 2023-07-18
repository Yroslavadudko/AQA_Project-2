import { ReactComponent as iconMinus } from '../../../assets/icons/minus.svg';
import { ReactComponent as iconPlus } from '../../../assets/icons/plus.svg';
import { CounterWrp, StyledButton, getStyledIcon } from './Counter.styled';

const Counter = ({
  handleIncIngredients,
  handleDecIngredients,
  cocktailIngredientList
}) => {
  // const [counter, setCounter] = useState(3);

  const StyledIconMinus = getStyledIcon(iconMinus);
  const StyledIconPlus = getStyledIcon(iconPlus);
  console.log(cocktailIngredientList);

  return (
    <CounterWrp>
      <StyledButton onClick={()=> handleDecIngredients()}>
        <StyledIconMinus />
      </StyledButton>
      <p>{cocktailIngredientList.length }</p>
      <StyledButton onClick={()=> handleIncIngredients()}>
        <StyledIconPlus />
      </StyledButton>
    </CounterWrp>
  );
};

export default Counter;