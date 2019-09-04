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
    this.completeItem = this.completeItem.bind(this)
  }

  completeItem = (id) => () => {
    this.setState (prevState => ({
      items : prevState.items.map(
        item => item.id === id ? {...item, completed: true } : item
      )
    }))
  }

  incrementItem = (id) => () => {
    const stepValue = this.state.items.find(item => item.id ===id).step
    const stepsValue = this.state.items.find(item => item.id ===id).steps
    if (stepValue < stepsValue)
    {
      this.setState (prevState => ({
        items : prevState.items.map(
          item => item.id === id ? {...item, step: stepValue + 1 } : item
        )
      }))
    }
  }

  addItem(title, steps) {
    this.setState({
      items : this.state.items.concat({
        completed : false,
        id : uuid(),
        step : 0,
        steps,
        title
      })
    })
  }

  removeItem = (id) => () => {  
    this.setState({
      items : this.state.items.filter((item) => id !== item.id)
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Create onItemCreation={this.addItem}
                title="New Unnamed Task"
                steps="4"/>
        <List onDelete={this.removeItem}
              onComplete={this.completeItem}
              onIncrement={this.incrementItem}
              items={this.state.items}/>
      </div>
    );
  }
}

export default App;
