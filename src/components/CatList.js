import React from 'react';
import RandomCat from './RandomCat';

class CatList extends React.Component{
  render(){
    return(
      <section className="section-cats">
        <h1>All cats are beautiful</h1>
        <ul className="section-cats_list">
          <li>
            <RandomCat width="200" height="200"/>
          </li>
          <li>
            <RandomCat width="200" height="400"/>
          </li>
          <li>
            <RandomCat />
          </li>
          <li>I could add a new cat, but it isn't loaded anyway</li>
        </ul>
      </section>
    );
  }
}

export default CatList;