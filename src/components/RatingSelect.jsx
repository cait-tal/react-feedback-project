import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  }

  return (
    <ul className='rating'>
      {[...Array(10).keys()].map((value) => {
        return (
          <li key={value + 1}>
            <input
              type='radio'
              name='rating'
              id={`num${value + 1}`}
              value={value + 1}
              onChange={handleChange}
              checked={selected === value + 1}
            />
            <label htmlFor={`num${value + 1}`}>{value + 1}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect