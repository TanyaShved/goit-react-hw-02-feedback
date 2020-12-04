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
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
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

 