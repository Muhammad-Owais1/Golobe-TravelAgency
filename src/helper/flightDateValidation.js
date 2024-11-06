// dateValidation.js
const monthsDays = {
  May: 31,
  Jun: 30,
  Jul: 31,
};

export const validateDates = (startDay, startMonth, endDay, endMonth) => {
  // Check for empty fields
  if (!startDay || !startMonth || !endDay || !endMonth) {
    return { valid: false, error: "All fields must be filled in." };
  }

  const startDayNum = parseInt(startDay);
  const endDayNum = parseInt(endDay);

  // Check if the day is between 1 and valid days for the month
  if (startDayNum < 1 || startDayNum > monthsDays[startMonth]) {
    return {
      valid: false,
      error: `Invalid start date: ${startMonth} has only ${monthsDays[startMonth]} days.`,
    };
  }
  if (endDayNum < 1 || endDayNum > monthsDays[endMonth]) {
    return {
      valid: false,
      error: `Invalid end date: ${endMonth} has only ${monthsDays[endMonth]} days.`,
    };
  }

  // Convert months to numeric form for comparison
  const monthToNum = (month) => Object.keys(monthsDays).indexOf(month) + 1;

  const startDate = new Date(2022, monthToNum(startMonth), startDayNum);
  const endDate = new Date(2022, monthToNum(endMonth), endDayNum);

  if (startDate > endDate) {
    return {
      valid: false,
      error: "Start date must be before or equal to the return date.",
    };
  }

  return { valid: true, error: "" };
};
