import React from 'react';
import axios from 'axios';

let BASE_URL = 'https://api.adviceslip.com/advice';

class Advice extends React.Component {
  constructor() {
    super();

    this.state={
      advice: ''
    }
  }

  componentDidMount() {
    axios.get(BASE_URL)
      .then(res => {
        const { advice } = res.data.slip
        this.setState({
          advice: advice
        })
      })
      .catch(err => {
        console.log(err)
      })    
  }

  componentWillUnmount() {
    clearInterval(this.adviceInterval)
  }

  adviceInterval = setInterval(() => this.getAdvice(), 1000 * 60);

  getAdvice = () => {
    axios.get(BASE_URL)
      .then(res => {
        const { advice } = res.data.slip
        this.setState({
          advice: advice
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
    return(
      <section className="advice">
        {`"${this.state.advice}"`}
      </section>
    );
  }
}

export default Advice