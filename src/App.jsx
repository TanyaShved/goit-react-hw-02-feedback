import { Component } from 'react';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    setItem = item => {
        this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
    };
    
    render() {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;
        return (
            <>
             <Section title="Please leave feedback">
               <FeedbackOptions
                options={this.state}
                onLeaveFeedback={this.setItem}
                    />
                    {this.countTotalFeedback() === 0 ?
                        <Notification message="No feedback given" /> :
                         <Statistics title="Statistics"
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}>
                    </Statistics>
                    }
                </Section>
                </>
    )
    }
   
}

export default App;

 