import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCocktailsByFourCategoryThunk } from 'redux/Cocktails/cocktailsOperations';

import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks'; // by Igor

import { selectCocktails } from 'redux/selectors';

const HomePage = () => {
  const dispatch = useDispatch();

  const category = useSelector(selectCocktails);

  const ordinaryDrink = category.filter(item => {
    return item.category === 'Ordinary Drink';
  });

  const cocktail = category.filter(item => {
    return item.category === 'Cocktail';
  });

  const shake = category.filter(item => {
    return item.category === 'Shake';
  });

  const other = category.filter(item => {
    return item.category === 'Other/Unknown';
  });

  useEffect(() => {
    dispatch(getCocktailsByFourCategoryThunk());
  }, []);

  return (
    <>
      <PreviewDrinks title="Ordinary Drink" data={ordinaryDrink} />
      <PreviewDrinks title="Cocktail" data={cocktail} />
      <PreviewDrinks title="Shake" data={shake} />
      <PreviewDrinks title="Other/Unknown" data={other} />
    </>
  );
};

export default HomePage;
