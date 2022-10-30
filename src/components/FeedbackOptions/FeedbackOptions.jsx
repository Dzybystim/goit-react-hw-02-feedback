import PropTypes from 'prop-types';
import {NavigatorButton, Button} from './FeedbackOptions.styled'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  let  choices = Object.keys(options);
return <NavigatorButton>
{choices.map(choice => {
    return <Button key={choice} type="button" onClick={() => onLeaveFeedback(choice)}>{choice}</Button>
})}
</NavigatorButton>
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
}
