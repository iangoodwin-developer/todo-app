import * as React from 'react';
import Item from './Item';

class List extends React.Component{

	render() {
		const items = this.props.items.map((item, index) => 
			<Item key={index} 
					id={item.id} 
					title={item.title} 
					onItemDelete={this.props.onItemDelete(item.id)}		
			/>
		)
		return <table className="table table-dark table-striped"><tbody>{items}</tbody></table>
	}  
  
}


export default List;

