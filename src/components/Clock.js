import React from 'react'

class Clock extends React.Component {
  constructor() {
    super();

    this.state={
      time: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <section className="clock">
        <p className="clock__digital">{this.state.time.toLocaleTimeString()}</p>
      </section>
    )
  }
}

export default Clock