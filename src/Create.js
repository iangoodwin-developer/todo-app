import * as React from 'react';

class Create extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title : this.props.title
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onItemCreation(this.state.title)  
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <div className="">
          <input className="form-control mt-5" 
                onChange={this.handleTitleChange} 
                name="title" 
                type="text" 
                value={this.state.title} 
                placeholder="task name" />
        
          <button type="submit" 
                  className="btn btn-primary mt-2">Add Task</button>
        </div>
       
      </form>
    );
  }
}


export default Create;
