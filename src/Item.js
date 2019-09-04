import * as React from 'react';

class Item extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			step : this.props.step
		}

		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handleSetAsCompleted = this.handleSetAsCompleted.bind(this);
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleIncrement = (e) => {
		e.preventDefault()
		this.props.onIncrement()
	}

	handleSetAsCompleted = (e) => {
		e.preventDefault()
		this.props.onComplete()
	}

	handleItemDelete(e) {
		e.preventDefault()
		this.props.onDelete()
	}

	render() {
		return (
			<li className={`list-group-item ${this.props.completed ? "disabled" : " " }`}>
				<div className="d-flex justify-content-between">
      		<p className="">{this.props.title}</p>
      		<div className="btn btn-group ">	
      			<button className={`btn btn-primary shadow-none ${this.props.completed ? "disabled" : " " }`}
										onClick={this.handleIncrement}>step forward</button>

						<button className={`btn btn-secondary shadow-none ${this.props.completed ? "disabled" : " " }`}
										onClick={this.handleSetAsCompleted}>finish</button>
						
						<button className="btn btn-danger shadow-none" 
										onClick={this.handleItemDelete}>delete</button>
					</div>		
    		</div>
				<div className="badge badge-primary badge-pill">{this.props.step} / {this.props.steps} Steps</div>
				
				<div className={this.props.completed ? "shown" : "hidden"}>Finished</div>	
				
					
				
			</li>
		)
	}  
}

export default Item;

