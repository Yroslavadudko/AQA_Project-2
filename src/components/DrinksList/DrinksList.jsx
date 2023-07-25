import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectSearch, selectSearchResults } from 'redux/selectors';
import { searchAllDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { DrinkCard } from 'components';
import { DrinkListStyled, Section } from './DrinkList.styled';
import { useNavigate } from 'react-router';
import { NotFound } from '../NotFound/NotFound';
import { useMediaRules } from 'hooks';

export const DrinksList = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useMediaRules();
  const searchResults = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  const navigate = useNavigate();
  const limit = isDesktop ? 9 : 8;

  useEffect(() => {
    dispatch(searchAllDrinksThunk({ search, page, limit }));
    navigate(
      `/main/drinks/${encodeURIComponent(
        search.chosenCategory
      )}?query=${encodeURIComponent(search.query)}&ingredient=${
        search.chosenIngredient
      }&page=${page}`
    );
  }, [dispatch, search, page, limit]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <DrinkListStyled>
        {searchResults.length !== 0 ? (
          searchResults.map(searchResult => (
            <DrinkCard
              key={searchResult._id}
              cocktail={searchResult}
              page={'drinks'}
            />
          ))
        ) : (
          <NotFound
            message={"We haven't found any cocktails for this search"}
          />
        )}
      </DrinkListStyled>
    </Section>
  );
};
