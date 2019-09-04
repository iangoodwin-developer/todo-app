import * as React from 'react';
import Item from './Item';

class List extends React.Component{


	listElement(items) {
		return (
			<ul className="list-group">
				{items}
			</ul>
		)
	}

	render() {
		const items = this.props.items.map((item, index) => 
			<Item key={index} 
					id={item.id} 
					step={item.step} 
					steps={item.steps} 
					completed={item.completed} 
					title={item.title} 
					onDelete={this.props.onDelete(item.id)}
					onComplete={this.props.onComplete(item.id)}
					onIncrement={this.props.onIncrement(item.id)}	
			/>
		)
		return this.listElement(items)
	}  
  
}


export default List;

