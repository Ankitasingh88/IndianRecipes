import { useState } from "react"
import Header from "./Components/Header"
import Navigation from "./Components/Navigation_bar"
import Featured from "./Components/Featured"
import Category from './Components/Category'
import ChoseCategory from "./Components/ChoseCategory"
import Footer from "./Components/Footer"
import { SouthIndianArray,VegetableArray,RiceArray,ChappatiArray,DessertArray,StarterArray,DrinksArray,categoryArticles } from "./data/data"
import { categoryArray } from "./data/data"
import DisplayArticle from "./Components/DisplayArticle"

function App() {
  const[SelectedCategory,SetSelectedCategory] = useState(null);
  const[SelectedArticle,SetSelectedArticle] = useState(null)

  const UpdateArticle = (item) => {
    SetSelectedArticle(item); //we can declare a function here and we can pass it to the children instead of passing variable and declaring fun later.
  }
  return (
    <>
     <Header />
     <Navigation clickedCategory={SetSelectedCategory} clickedarticle={UpdateArticle}/>

     {SelectedCategory !== null && !SelectedArticle && 
     <ChoseCategory displayCategory={categoryArticles(SelectedCategory)} clickedarticle={UpdateArticle}/> 
     } 
    
    {!SelectedCategory  && !SelectedArticle &&
      <>
      <Featured clickedarticle={UpdateArticle}/>
      <Category title="SouthIndian" categoryArray={SouthIndianArray} clickedarticle={UpdateArticle}/>
      <Category title="Vegetable" categoryArray={VegetableArray} clickedarticle={UpdateArticle}/>
      <Category title="Rice" categoryArray={RiceArray} clickedarticle={UpdateArticle}/>
      <Category title="Chappati" categoryArray={ChappatiArray} clickedarticle={UpdateArticle}/>
      <Category title="Dessert" categoryArray={DessertArray} clickedarticle={UpdateArticle}/>
      <Category title="Starter" categoryArray={StarterArray} clickedarticle={UpdateArticle}/>
      <Category title="Drinks" categoryArray={DrinksArray} clickedarticle={UpdateArticle}/>
     </>}

      {SelectedArticle && 
        <DisplayArticle displayArticle={SelectedArticle} />
      }
  
     <Footer />
    </>
  )
}

export default App