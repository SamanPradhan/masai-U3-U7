// This the function
const getName = (firstname: string, lastname?: string): string => {
  return lastname ? `${firstname} ${lastname}` : firstname;
};

export default getName; // Make no changes here
