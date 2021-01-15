import React,{ useState, useEffect } from 'react';
import './App.scss';
import { useLocalStorageState } from './utils';
import SearchBox from './components/search-box/SearchBox';
import CardList from './components/card-list/CardList';
import PaginationControled from './components/pagination/PaginationControled';
import { apiKey } from './apiKey';


const App = () => {

  //state
  const [ bookmarked, setBookmarked ] = useLocalStorageState('marvel_characters'); 
  const [ searchField, setSearchField ] = useState('');
  const [ page, setPage ] = useState(1);
  const [ pageCount, setPageCount ] = useState(0);
  const [ characters, setCharacters ] = useState([]);

  //fetch data helper function 
  function getData(){
    const name = searchField.trim();
    if(name){
        const offset = (page-1)*20;
        fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&nameStartsWith=${name}&limit=20&offset=${offset}`).
        then( result => result.json()).
        then( obj => {
            setPageCount(Math.ceil((obj.data.total / 20)));
            setCharacters(obj.data.results);
        }
        ).catch( e => {
          setCharacters([])
        })
      }
    else{
      setCharacters([]);
      setPageCount(Math.ceil((bookmarked.length / 20)));
    }
  }

  
  useEffect( () => {
    getData();
      },[searchField, page]);

      

  const onSearchChange = (event) => {
    setPage(1);
    setSearchField(event.target.value);
  }


  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const onBookmarkChange = (isBookmarked, element) => {
    if(!isBookmarked){
      setBookmarked([...bookmarked, element]);
    }
    else{
      if(bookmarked.length === 1)
        setPageCount(0);
      setBookmarked(bookmarked.filter( item => element.id !== item.id))
    }
    }
  
    const checkIsBookmarked = (element) => {
      return bookmarked.some( item => item.id === element.id);
    }
    
    const bookmarkedRender = bookmarked.slice((page-1) * 20, (page-1)*20 + 20);
  return (
    <div className="app">
      <header className="main-header">
        <h1 className="main-header__title">MARVEL CHARACTERS</h1>
      </header>
    <SearchBox onChange={onSearchChange} />
    <CardList characters={searchField ? characters : bookmarkedRender } onBookmarkChange={onBookmarkChange} isBookmarkedFunction={checkIsBookmarked}/>
    {pageCount ?
    <PaginationControled handleChange={handlePageChange} page={page} count={pageCount}/>
    :
    null
    }
    </div>
  )
}

export default App;