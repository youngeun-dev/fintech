import React from 'react';

const NewsList = ({searchResultList}) => {
  return <div>
    {
      searchResultList.map((news)=>{
        return(
          <p>{news.title}</p>
        )
      })
    }
  </div>
}

export default NewsList;