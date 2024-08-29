import React from 'react'
import Book from "./book";
import Anbani from "./assets/anbani.png";
import Dogman from"./assets/dogmen.png";
import Filosofia from "./assets/filosofia.png";
import Xelovneba from "./assets/xelovneba.png";


const BookList = () => {

    function action(name:string){
        alert(`this is a ${name}`)
    }
  return (
    <div>
      <Book image={Anbani} name='anbani' description="book about anban" weapons={['page 100']} action= {action}></Book>
    <Book image={Dogman} name='dogman' description="book about dogman" weapons={['page 200']}  action= {action}></Book>
    <Book image={Filosofia} name='filosofia' description="book about filosofi" weapons={['page 300']}  action= {action}></Book>
    <Book image={Xelovneba} name='xelovneba' description="book about xelovneba"  weapons={['page 400']} action= {action}></Book>
    </div>
  )
}

export default BookList
