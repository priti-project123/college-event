// // Validate user registration input
// const validateUser = (user) => {
//   const errors = [];

//   if (!user.name || user.name.trim() === '') errors.push('Name is required');
//   if (!user.email || !user.email.includes('@')) errors.push('Valid email is required');
//   if (!user.password || user.password.length < 6) errors.push('Password must be at least 6 characters');

//   return errors;
// };

// // Validate event creation input
// const validateEvent = (event) => {
//   const errors = [];

//   if (!event.title || event.title.trim() === '') errors.push('Title is required');
//   if (!event.description || event.description.trim() === '') errors.push('Description is required');
//   if (!event.date) errors.push('Date is required');
//   if (!event.category) errors.push('Category is required');

//   return errors;
// };

// // Validate category creation input
// const validateCategory = (category) => {
//   const errors = [];

//   if (!category.name || category.name.trim() === '') errors.push('Category name is required');

//   return errors;
// };



// const validateLogin = (data) => {
//   const errors = [];
//   if (!data.email || !data.email.includes('@')) errors.push('Valid email is required');
//   if (!data.password) errors.push('Password is required');
//   return errors;
// };




// module.exports = {
//   validateUser,
//   validateEvent,
//   validateLogin,
//   validateCategory,
// };










// Validate user registration input
const validateUser = (user) => {
  const errors = [];

  if (!user.name || user.name.trim() === '') errors.push('Name is required');
  if (!user.email || !user.email.includes('@')) errors.push('Valid email is required');
  if (!user.password || user.password.length < 6) errors.push('Password must be at least 6 characters');

  return errors;
};

// Validate login input
const validateLogin = (data) => {
  const errors = [];

  if (!data.email || !data.email.includes('@')) errors.push('Valid email is required');
  if (!data.password) errors.push('Password is required');

  return errors;
};

// Validate event creation
const validateEvent = (event) => {
  const errors = [];

  if (!event.title || event.title.trim() === '') errors.push('Event title is required');
  if (!event.description || event.description.trim() === '') errors.push('Event description is required');
  if (!event.date) errors.push('Event date is required');
  if (!event.category) errors.push('Event category is required');

  return errors;
};

// Validate category creation

const validateCategory = (category) => {
  const errors = [];

  if (!category.name || category.name.trim() === '') {
    errors.push('Category name is required');
  }

  return errors;
};


// Optional: Validate event registration
const validateRegistration = (data) => {
  const errors = [];

  if (!data.eventId || data.eventId.trim() === '') {
    errors.push('Event ID is required');
  }

  if (!data.userId || data.userId.trim() === '') {
    errors.push('User ID is required');
  }

  return errors;
};
module.exports = {
  validateUser,
  validateLogin,
  validateEvent,
  validateCategory,
  validateRegistration,
};
