import React from 'react';
// import "./../../assets/stylesheets/ChartForm"


export default class Chartform extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      problem:    props.data ? props.data.problem : '',
      event_date: props.data ? props.data.event_date : '',
      location:   props.data ? props.data.location : '',
      status:     props.data ? props.data.status : '',
      provider:     props.data ? props.data.provider : '',
  };
  this.handleInputChange = this.handleInputChange.bind(this);
}


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  // console.log('ChartForm component loaded');
  }



  render() {
    // console.log(props);
    console.log({'ChartForm loaded': this.state});



      <div className="chartForm">
        <h1> ChartForm </h1>
        <p>This is the Chartform. It will display the detail information for each chart and allow for add & edit. </p>

      {/* It's its an edit for then update for that id, if its add then just post new state. */}
        <form className={this.props.isadd ? 'addForm' : 'editForm'}
        onSubmit={this.props.isadd
          ? change => this.props.chartSubmit('Put', change, this.state )
          : change => this.props.chartSubmit('Post' , change,
            this.state, this.props.chart.id) }>

          <div className="formEntry">
            <input
              type="text"
              className="formInput"
              name="problem"
              placeholder="Name"
              value={this.state.problem}
              onChange={this.handleInputChange}
            />


            <input
              type="text"
              className="formInput"
              name="event_date"
              placeholder="Event Date"
              value={this.state.event_date}
              onChange={this.handleInputChange}
            />


            <input
              type="text"
              className="formInput"
              name="location"
              placeholder="Description"
              value={this.state.location}
              onChange={this.handleInputChange}
            />


            <input
              type="text"
              className="formInput"
              name="status"
              placeholder="Status"
              value={this.state.status}
              onChange={this.handleInputChange}
            />

            <input
              type="text"
              className="formInput"
              name="provider"
              placeholder="Provider"
              value={this.state.provider}
              onChange={this.handleInputChange}
            />


{/*
            <select
              name="status"
              value={this.state.value}
              onChange={this.handleInputChange}
              className="formInput2"
            >
              <option value="1">Select Type</option>
              {this.props.type.map(type => (
                <option
                  value={type.id}
                  key={type.id}
                > {type.name}
                </option>
              ))}
            </select>
*/}



            <input
              type="submit"
              className="nav"
              value={this.props.addChart ? 'AddChart' : 'Submit'}
            />

          </div>
        </form>
      </div>



  }
}

