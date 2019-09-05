import * as React from 'react';
import Item from './Item';

function List(props) {

	const listElement = (items) => {
		return (
			<ul className="list-group mt-2">
				{items}
			</ul>
		)
	}
	const items = props.items.map((item, index) => 
			<Item key={index} 
					id={item.id} 
					step={item.step} 
					steps={item.steps} 
					completed={item.completed} 
					title={item.title} 
					onDelete={props.onDelete(item.id)}
					onComplete={props.onComplete(item.id)}
					onIncrement={props.onIncrement(item.id)}	
			/>
		)
	return listElement(items)
}


export default List;

