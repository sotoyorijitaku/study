// 例外をスローする

/**
 * @throws {InvalidDateFormatError} ユーザーが誕生日を間違って入力した
 * @throws {DateIsInTheFutureError} ユーザーが未来の誕生日を入力した
 */
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function ask() {
  return prompt("When is your birthday?");
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === "[Object Date]" &&
    !Number.isNaN(date.getTime())
  );
}

function parse(birthday: string): Date {
  let date = new Date(birthday);
  if (!isValid(date)) {
    throw new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD");
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError("Are you a timelord?");
  }
  return date;
}

try {
  let date = parse(ask());
  console.info("Date is", date.toISOString());
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message);
  } else if (e instanceof DateIsInTheFutureError) {
    console.info(e.message);
  } else {
    throw e;
  }
}
