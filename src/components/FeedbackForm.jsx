import React from 'react'

function FeedbackForm() {
  return (
    <form name="feedback" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="feedback" />
      <label>Name<input type="text" name="name" /></label>
      <label>Email<input type="email" name="email" /></label>
      <label>What is your feedback?<textarea name="feedback"></textarea></label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default FeedbackForm