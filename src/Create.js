import * as React from 'react';

class Create extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      steps : 4,
      title : this.props.title
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStepsChange = this.handleStepsChange.bind(this)
  }

  handleTitleChange(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleStepsChange = (e) => {
    if (e.currentTarget.value !== null && e.currentTarget.value !== "") {
      this.setState({steps: parseInt(e.currentTarget.value, 10)})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onItemCreation(this.state.title, this.state.steps)  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input className="form-control mt-2" 
                  id="title"
                  onChange={this.handleTitleChange} 
                  name="title" 
                  type="text" 
                  value={this.state.title} 
                  placeholder="task name" />
            </div> 
        </div>   
        <div className="form-group row">  
          <label htmlFor="steps" className="col-sm-2 col-form-label">Steps</label> 
          <div className="col-sm-10">      
            <input className="form-control mt-1" 
                  id="steps"
                  onChange={this.handleStepsChange} 
                  name="steps" 
                  type="number" 
                  min={0} 
                  max={4} 
                  value={this.state.steps} 
                  placeholder="steps" />
          </div>
        </div> 
        <button type="submit" 
                className="btn btn-primary shadow-none mt-2">Add Task</button>
       
      </form>
    );
  }
}


export default Create;
