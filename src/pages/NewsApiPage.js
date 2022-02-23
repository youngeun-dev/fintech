import React, {useState} from 'react';
import axios from "axios";
import HeaderWhite from '../components/HeaderWhite';
import NewsList from '../components/News/NewsList';
import SearchInput from '../components/News/SearchInput';

const NewsApiPage = () => {

const [searchText, setSearchText] = useState("");
const [searchResultList, setSearchResultList] = useState([]);

const handleSearchTextChange = (e) => {
// input 변경사항을 search Text 반영
  const {value} = e.target;
  setSearchText(value);
};

const handleSearchButtonClick = () => {
// axios 통해 newsList 요청하기
// searchInput 데이터를 news api에 요청
    const searchApiUrl = `https://newsapi.org/v2/everything?q=${searchText}&from=2022-01-23&sortBy=publishedAt&apiKey=9b98d8fe8ce042ed9ae96037f108fb17`;

    axios
    .get(searchApiUrl)
    .then((response) => {
      console.log(response);
      setSearchResultList(response.data.articles);
      console.log("뉴스 리스트 데이터는 : ", searchResultList);
    })
    .catch((err) => {
      console.error(err);
    });
};

  return (
    <div>
        <HeaderWhite title="뉴스검색"></HeaderWhite>
        <SearchInput 
          handleChange = {handleSearchTextChange}
          handleClick = {handleSearchButtonClick}
        ></SearchInput>
        <NewsList searchResultList = {searchResultList}></NewsList>
    </div>
  )
}

export default NewsApiPage;