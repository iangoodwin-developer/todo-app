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

	handleIncrement(e) {
		e.preventDefault()
		this.props.onIncrement()
	}

	handleSetAsCompleted(e) {
		e.preventDefault()
		this.props.onComplete()
	}

	handleItemDelete(e) {
		e.preventDefault()
		this.props.onDelete()
	}

	render() {
		return (
			<li className={`list-group-item list-group-item-info ${this.props.completed ? "disabled" : " " }`}>
				<div className="d-flex justify-content-between">
      		<p className="">{this.props.title}</p>
      		<div className="">	
      			<button className={`btn btn-sm btn-success shadow-none mr-1 ${this.props.completed ? "disabled" : " " }`}
										onClick={this.handleIncrement}>step forward</button>

						<button className={`btn btn-sm btn-secondary shadow-none mr-1 ${this.props.completed ? "disabled" : " " }`}
										onClick={this.handleSetAsCompleted}>finish</button>
						
						<button className="btn btn-sm btn-danger shadow-none mr-1" 
										onClick={this.handleItemDelete}>delete</button>
					</div>		
    		</div>
    	
				<div className="badge badge-primary badge-pill">{this.props.step} / {this.props.steps} Steps</div>
				<div className="progress mt-2">
				  <div className={`progress-bar w-${parseInt(this.props.step / this.props.steps * 100)}`} 
				  		role="progressbar" 
				  		aria-valuenow={this.props.step} 
				  		aria-valuemin="0" 
				  		aria-valuemax="100"></div>
				</div>
				<p className={`mt-1 ${this.props.completed ? " " : "hidden"}`}>Task complete</p>
		
			</li>
		)
	}  
}

export default Item;

