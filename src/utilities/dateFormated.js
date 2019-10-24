
export const dateFormated = () => {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() - 30);
  const lastThirtyDay = todayDate.toJSON().split("T")[0];
  return lastThirtyDay;
}