import Recipe from './Components/Recipe'
import SearchDiv from './Components/SearchDiv'
import api from './config'
import { useState, useEffect } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [search])

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${api.id}&app_key=${api.key}`)
    if(res.status === 200){
      const data = await res.json()
      setItems(data.hits)
    }
  }

  const onChange = e => setInput(e.target.value)

  const getSearch = (e) => { 
    e.preventDefault()
    setSearch(input) 
    setInput('')
}

  return (
    <div className="App">
      <div className='search-container'>
        {/* <h1>Div 1</h1> */}
        <SearchDiv onChange={onChange} input={input} onSubmit={getSearch}/>
      </div>

      <div className='recipes-container'>
        {/* <h1>Div 2</h1> */}
        <div className='recipes'>
          {items.map(item => (
            <Recipe 
              key={item.recipe.label}
              label={item.recipe.label}
              img={item.recipe.image}
              ingredients={item.recipe.ingredientLines}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
