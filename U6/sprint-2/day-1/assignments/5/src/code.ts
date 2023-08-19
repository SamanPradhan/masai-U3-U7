// This the function
const getName = (firstName: string, lastName?: string) => {
  let fullName: string = firstName + " " + lastName;
  return fullName;
};

export default getName; // Make no changes here
