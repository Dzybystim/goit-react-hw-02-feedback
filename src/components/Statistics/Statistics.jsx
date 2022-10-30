import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   let data = {
       good: good,
       neutral: neutral,
       bad: bad
   }
    let values = Object.values(data)
    let choices = Object.keys(data);
    
    return <div>
    {choices.map(choice => {
        return <p key={choice}>{choice}: {data[choice]}</p>
    })}
     <p>total: {total(values)}</p>
     <p>positive feedback: {positivePercentage(values)} %</p>
     </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}
