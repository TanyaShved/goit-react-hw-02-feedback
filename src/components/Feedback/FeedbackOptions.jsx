import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const namesOfItems = Object.keys(options);

  return (
    <ul className={s.list}>
      {namesOfItems.map(item => (
        <li key={item} className={s.item}>
          <button type="button" className={s.button} onClick={() => onLeaveFeedback(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;