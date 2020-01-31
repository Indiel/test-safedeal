export default function timeConverter(time) {
  const date = new Date(time);

  let day = String(date.getDate());
  if (day.length < 10) {
    day = `0${day}`;
  }

  let month = String(date.getMonth() + 1);
  if (month.length < 10) {
    month = `0${month}`;
  }

  return `${day}.${month}.${date.getFullYear()}`;
}
