import React from 'react';
import ReactDom from 'react-dom';

// CSS

import { data } from './books'
import SpecificBook from './Book'
import { greeting } from './testing/testing'

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map(book => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById('root'));
