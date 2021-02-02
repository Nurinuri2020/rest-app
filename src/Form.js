export default (props) => {
	return (
		<>
		  <div className="row">
		  	<div className="col s6">
		  		<label>
		  			Title:
		  			<input type="text" name="title" placeholder="Title" />
		  		</label>
		  		<label>
		  			Body:
		  			<input type="text" name="body" placeholder="Body" />
		  		</label>

		  		<button className="btn blue" onClick={ props.getData }>Get data</button>&nbsp;
		  		<button className="btn green">Post data</button>

		  	</div>

		  </div>



		</>
	)
}