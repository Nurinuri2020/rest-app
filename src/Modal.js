import { useState } from 'react'

export default (props) => {

	const [Data, setData] = useState({ ...props.item });

	const saveData = (e) => {
		e.preventDefault();

		props.saveData(Data);
	}	

	return (
		<>
		 	<div className="modal_wrap">
		 		<div className="modal_window">
		 			<i className="material-icons modal_close" onClick={ props.close }>close</i>

		 			<h4>Edit post</h4>
		 			<form onSubmit={ saveData }>
		 				<label>
				  			Title:
				  			<input type="text" 
				  				   value={ Data.title }  
				  				   placeholder="Title" 
				  				   onChange={ (e) => setData({...Data, title: e.target.value}) }
				  			/>
				  		</label>
				  		<label>
				  			Body:
				  			<input type="text" 
				  				   value={ Data.body } 
				  				   placeholder="Body" 
				  				   onChange={ (e) => setData({...Data, body: e.target.value}) }
				  			/>
				  		</label>
				  		<button className="btn green">Save</button>
		 			</form>
		 		</div>
		 	</div>
		</>
	)
}