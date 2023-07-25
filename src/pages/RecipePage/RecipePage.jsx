import { useEffect } from 'react';
import {
  RecipePreparation,
  RecipePageHero,
  RecipeIngredientsList,
  Container,
} from 'components';
import { favoriteFilter } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  addToFavoriteThunk,
  getCocktailByIdThunk,
  removeFromFavoriteThunk,
} from 'redux/Cocktails/cocktailsOperations';
import {
  selectCocktailsIsLoading,
  selectFavorite,
  selectUserArray,
} from 'redux/selectors';

const RecipePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectCocktailsIsLoading);
  const contact = useSelector(selectFavorite);
  const user = useSelector(selectUserArray);
  const idQuery = useParams();
  let filter;

  useEffect(() => {
    dispatch(getCocktailByIdThunk(idQuery.id));
  }, []); // eslint-disable-line

  const handleSend = () => {
    filter = favoriteFilter(contact, user);
    if (filter) {
      dispatch(removeFromFavoriteThunk(contact._id));
    } else {
      dispatch(addToFavoriteThunk(contact._id)).then(res => {
        if (res.meta.requestStatus === 'fulfilled')
          dispatch(getCocktailByIdThunk(idQuery.id));
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <RecipePageHero func={handleSend} />
        {!loading && <RecipeIngredientsList />}
        <RecipePreparation />
      </Container>
    </>
  );
};

export default RecipePage;
