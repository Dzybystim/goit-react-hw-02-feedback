import React, { Component } from "react";
import {Statistics} from 'components/Statistics/Statistics'
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions'
import {Section} from 'components/Section/Section'
import {Notification} from 'components/Notification/Notification'


class Choice extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      
    noСhoiceMade = false;

    buttonChoice = (choice) => {
        this.noСhoiceMade = true
        this.setState(prevState => (
            {
            [choice]: prevState[choice]+1
        }))
    }

    countTotalFeedback = (values) => {
        return values.reduce((acc, number) => {
        return acc+number;
        }, 0);
        }

    countPositiveFeedbackPercentage = (values) => {
      if(values[0]){
      let total = this.countTotalFeedback(values)
      return Math.round((values[0]/total)*100)
    }
      return 0
    }


    render() {
        let message

        this.noСhoiceMade 
        ?
        message = <Statistics 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback}
        positivePercentage={this.countPositiveFeedbackPercentage}/>
        :
        message = <Notification 
        message={"There is no feedback"}/>

        
    return (
        <div>
            <Section title={"Please leave feedback"}>
            <FeedbackOptions 
            options={this.state}
            onLeaveFeedback={this.buttonChoice}
            />
            </Section>
            <Section title={"Statistics"} >
            {message}
            </Section>
        </div>
    )
}
}

export default Choice



















