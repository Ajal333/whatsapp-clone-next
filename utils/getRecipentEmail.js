const getRecipientEmail = (users, loggedInUser) =>
  users?.filter((filteredUser) => filteredUser !== loggedInUser?.email)[0];

export default getRecipientEmail;
