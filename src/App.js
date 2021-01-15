import React,{ useState, useEffect } from 'react';
import './App.scss';
import { useLocalStorageState } from './utils';
import SearchBox from './components/search-box/SearchBox';
import CardList from './components/card-list/CardList';
import PaginationControled from './components/pagination/PaginationControled';
import { apiKey } from './apiKey';
// search for marvel heroes by name, api call with name  CONDITION searchField is set
// render chararachters || bookmarked map over it
// card can be bookmarked and saved in localstrorage
// 20 results per page, use pagination to show all
// 4 x 5 2 x 10 1 x 20
// IMG NAME BOOKMARK STATE
//RESPONSE -> OBJ -> DATA -> {COUNT, LIMIT, OFFSET, TOTAL}, RESULTS [{NAME:'', THUMBNAIL:{EXTENSION, PATH}}]

const App = () => {

 

  const [ bookmarked, setBookmarked ] = useLocalStorageState('marvel_characters'); 
  const [ searchField, setSearchField ] = useState('s');
  const [ offset, setOffset ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ count, setCount ] = useState(0);
  const [ page, setPage ] = useState(1);
  const [ pageNum, setPageNum ] = useState(5);
  const [ characters, setCharacters ] = useState(Array(90).fill({name:"linda", thumbnail:{path:"https://i.pinimg.com/originals/ba/4c/00/ba4c0087e9b304b41a89fc62cb35ae28", extension:'.jpg'}}));

  function getData(){
    const name = searchField.trim();
    if(name){
        setOffset((page-1) * 20);
        fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}?nameStartsWith=${name}&limit=20&offset=${offset}`).
        then( result => result.json()).
        then( obj => {
            setTotal(obj.data.total);
            setCount(obj.data.count);
            setPageNum(parseInt(obj.data.total / 20));
            setCharacters(obj.data.results);
        }
        ).catch( e => setCharacters([]))
      }
    else{
      setTotal(bookmarked.length);
      setCount(bookmarked.length < 20 ? bookmarked.length : 20);
      setPageNum(parseInt(bookmarked.length / 20));
      setCharacters(bookmarked.slice(pageNum * 20, pageNum*20 + 20));
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
      setBookmarked(bookmarked.filter( item => element.id !== item.id))
    }
    }
  
    const checkIsBookmarked = (element) => {
      return bookmarked.some( item => item.id === element.id);
    }


  return (
    <div className="app">
      <header className="main-header">
        <h1 className="main-header__title">MARVEL CHARACTERS</h1>
      </header>

    <SearchBox onChange={onSearchChange} />
    <CardList characters={characters} onBookmarkChange={onBookmarkChange} isBookmarkedFunction={checkIsBookmarked}/>
    {pageNum ?
    <PaginationControled handleChange={handlePageChange} page={page} count={pageNum}/>
    :
    null
    }
    </div>
  )
}

export default App;