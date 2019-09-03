import * as React from 'react';
import './App.css';
import Create from './Create';
import Header from './Header';
import List from './List';
import uuid from 'react-uuid';


class App extends React.Component {

  constructor(props) {

    super(props)
    this.listElement = React.createRef();
    this.state = {
      items : [],    
    }

    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  addItem(title, steps) {
    this.setState({
      items : this.state.items.concat({
        completed : false,
        id : uuid(),
        title
      })
    })
  }

  removeItem(id) {  
    const deleteFunc = () => {
      this.setState({
        items : this.state.items.filter((item) => id !== item.id)
      })
    }
    return deleteFunc
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Create onItemCreation={this.addItem} title="Untitled Task"/>
        <List onItemDelete={this.removeItem} items={this.state.items}/>
      </div>
    );
  }
}

export default App;
