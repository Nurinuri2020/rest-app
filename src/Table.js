export default (props) => {
	return (
		<>
			<h1>Table</h1>

			{ props.data.length ? 
			<ul className="collection">
			  { props.data.map((elem) => (
		  		<li key={ elem.id } className="collection-item row">
			      	<div className="col s4">
			      		<p>{ elem.title }</p>
			      	</div>
			      	<div className="col s4">
			      		<p>{ elem.body }</p>
			      	</div>
			      	<div className="col s1 offset-s1">
			      		<button className="btn green" onClick={ () => props.editData(elem.id) }>Edit</button>
			      	</div>
					<div className="col s1 offset-s1">
			      		<button className="btn danger" onClick={ () => props.delData(elem.id) }>Delete</button>
			      	</div>
			    </li>
			    ))
			  }
		      
		    </ul>
		    :
		    <h3 className="grey-text">Нет данных</h3>
		    }


		</>
	)
}