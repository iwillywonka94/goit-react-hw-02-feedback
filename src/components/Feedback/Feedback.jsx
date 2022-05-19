import { Component } from 'react';

//import styles from './feedback.module.css';

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addFeedback = (propertyName) => {
        this.setState(prevState => {
            return {
                [propertyName]: prevState[propertyName] + 1
            }
        })
    };

    render() {
        const { good, neutral, bad } = this.state;
        const { addFeedback } = this;

        return (
            <div>
                <div>
                    <h2>Please, leave feedback</h2>
                    <ul>
                        <li>
                            <button type="button" onClick={() => addFeedback("good")}>Good</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => addFeedback("neutral")}>Neutral</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => addFeedback("bad")}>Bad</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: </li>
                        <li>Positive feedback: </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Feedback;