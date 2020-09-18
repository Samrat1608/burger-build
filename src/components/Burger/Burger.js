import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) =>{
               return <BurgerIngredient type={igKey} key={igKey + i}/>
            });
        });
 return(
     <div className={classes.Burger}>
         <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         {/*<BurgerIngredient type="cheese" />*/}
         {/*<BurgerIngredient type="bacon" />*/}
         {/*<BurgerIngredient type="meat" />*/}
         {/*<BurgerIngredient type="salad" />*/}
         <BurgerIngredient type="bread-bottom" />
     </div>
 );
};

export default burger;