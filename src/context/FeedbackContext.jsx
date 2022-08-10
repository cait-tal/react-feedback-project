import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });
    // Delete feedback
    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete this feedback?')) {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
  };
  
  // Add feedback
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
  };
  
  // Update Feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item));
  }

  // Edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }
  
  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    updateFeedback,
    editFeedback, // function to edit feedback
    feedbackEdit // actual piece of state
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;