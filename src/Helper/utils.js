export const getAgeValue = (date) => {
  let age = 0;

  if (date) {
    const today = new Date();
    const birthYear = date.getFullYear();
    const ageInYears = today.getFullYear() - birthYear;
    age =
      ageInYears -
      (today.getMonth() === date.getMonth() && today.getDate() < date.getDate()
        ? 1
        : 0);
  } else {
    age = 0;
  }
  return { date, age };
};
