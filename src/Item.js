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
				<div className="d-flex w-100 justify-content-between">
      		<p className="">{this.props.title}</p>
      		
    		</div>
				<div className="badge badge-primary badge-pill">{this.props.step} / {this.props.steps} Steps</div>
				
				<div className={this.props.completed ? "shown" : "hidden"}>Finished</div>	
				<div className="btn btn-group ">	
					<button className={`btn btn-secondary ${this.props.completed ? "hidden" : "shown" }`}
									onClick={this.handleSetAsCompleted}>finish</button>
					<button className={`btn btn-secondary ${this.props.completed ? "hidden" : "shown" }`}
									onClick={this.handleIncrement}>step forward</button>
					<button className="btn btn-secondary" 
									onClick={this.handleItemDelete}>delete</button>
				</div>		
					
				
			</li>
		)
	}  
}

export default Item;

