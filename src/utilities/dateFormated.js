
export const dateFormated = () => {
  // Get Today Date
  const todayDate = new Date();
  // Get 30 days before today
  todayDate.setDate(todayDate.getDate() - 30);
  // Get only YYY-MM-DD
  const lastThirtyDay = todayDate.toJSON().split("T")[0];
  return lastThirtyDay;
}