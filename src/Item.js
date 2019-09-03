import * as React from 'react';

class Item extends React.Component {

	constructor(props) {
		super(props)

		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	handleItemDelete(e) {
		e.preventDefault()
		this.props.onItemDelete()
	}

	render() {
		return (
			<tr>
				<td><div>{this.props.title}</div></td>
				<td>
					<button className="btn btn-primary btn-sm float-right" 
									onClick={this.handleItemDelete}>delete
					</button>
				</td>		
			</tr>
		)
	}  
}

export default Item;

