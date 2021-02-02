import { useState } from 'react';

import Form from './Form';
import Table from './Table';
import Modal from './Modal';
import { toaster } from 'evergreen-ui';


function App() {

  const [ Data, setData ] = useState([]);
  const [ Item, setItem ] = useState({});
  const [ stateModal, setModal ] = useState(false);


  const getData = () => {
  	fetch('https://jsonplaceholder.typicode.com/posts')
  		.then(res => res.json())
  		.then(data => setData(data));
  }


  const deleteData = (id) => {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'DELETE',
		header: {
			"Content-type": "application/json; charset=UTF-8"
			}
	  })
	  .then(res => res.json()) 
	  .then(res => {
		  console.log("ID: ",id, " is deleted!");
		  const newList = Data.filter((item) => item.id !== id);
 
		  setData(newList);
		  toaster.success(`Пост номер ${id} успешно удален!`)
		})
  }

  const editData = (post_id) => {

  	

  	const Post = Data.find((elem) => elem.id === post_id);

  	setItem(Post);

  	setModal(true);
  }

  const saveData = (Post) => {

  	fetch(`https://jsonplaceholder.typicode.com/posts/${Post.id}`, {
  		method: 'put',
  		body: JSON.stringify(Post),
  		headers: {
  			"Content-type": "application/json; charset=UTF-8"
  		}
  	})
  	.then(res => res.json())
  	.then(data => {

  		console.log(data);

  		const UpdateItem = Data.find((elem) => elem.id === Post.id);

	    UpdateItem.title = Post.title;
	    UpdateItem.body = Post.body;

		setModal(false);
		toaster.success(`Пост номер ${Post.id} успешно обновлен!`)
    });


	
  }




  return (
    <>
    <div className="container">
    	<h1>Rest App</h1>

      	<Form getData={ getData }/>

      	<Table data={ Data } editData={ editData } delData={ deleteData } />
	</div>

	{ stateModal ? <Modal item={ Item } saveData={ saveData } close={ () => setModal(false) } /> : null }
      
    </>
  );
}

export default App;
