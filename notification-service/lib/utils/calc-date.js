'use strict';

const TOTAL_WEEKDAYS = 7;
const MIN_TO_SEC = 60;
const HOUR_TO_SEC = 3600;
const DAY_TO_SEC = 86400;

function getSecondsFromJanTo(currentMonth, dateFn) {
  const currentYear = dateFn.current().getFullYear();
  const jan = dateFn.specificDate(currentYear, 0, 1);
  const current = dateFn.specificDate(currentYear, currentMonth, 1);
  return (current.getTime() - jan.getTime()) / 1000;
}

function getFixedDateTime(dateConf, dateFn) {
  let date = dateFn.current();
  date.setHours(dateConf.hour, dateConf.min, dateConf.sec);

  while (true) {
    let weekDay = dateConf.weekDay;
    let day = dateConf.day;

    dateConf.month && date.setMonth(dateConf.month - 1);

    const lastDayOfMonth = dateFn.specificDate(date.getFullYear(), date.getMonth() + 1, 0);

    if (!weekDay && day) {
      date.setDate(day);
      if (date > lastDayOfMonth) {
        date.setDate(lastDayOfMonth.getDate());
      }
    }

    if (weekDay && day) {
      date.setDate(1);

      let alignment = 0;
      if (date.getDay() !== 0) {
        alignment = TOTAL_WEEKDAYS - date.getDay();
        day = day - 1;
      }

      let expectedDate = alignment + (day - 1) * TOTAL_WEEKDAYS + weekDay;
      date.setDate(expectedDate);

      while (date > lastDayOfMonth) {
        expectedDate = expectedDate - TOTAL_WEEKDAYS;
        date.setDate(expectedDate);
      }
    }

    if (weekDay && !day) {
      date.setDate(1);
      let alignment = date.getDay() - (weekDay - 1);
      date.setDate(date.getDate() - alignment);

      while (date < dateFn.current()) {
        date.setDate(date.getDate() + TOTAL_WEEKDAYS);
      }
    }

    if (date >= dateFn.current()) return date;

    incrementDate(dateConf, date);
  }
}

function incrementDate(dateConf, date, incBy=1) {
  if (dateConf.month) {
    date.setFullYear(date.getFullYear() + incBy);
  } else if (dateConf.day) {
    date.setMonth(date.getMonth() + incBy);
  } else if (dateConf.hour) {
    date.setDate(date.getDate() + incBy);
  } else if (dateConf.min) {
    date.setHours(date.getHours() + incBy, date.getMinutes(), date.getSeconds());
  } else if (dateConf.sec) {
    date.setHours(date.getHours(), date.getMinutes() + incBy, date.getSeconds());
  }
}

const typeFn = {
  'FIXED': (dateConf, dateFn) => {
    const expectedDateTime = getFixedDateTime(dateConf, dateFn);
    return expectedDateTime.toMySQLDate();
  },
  'INTERVAL': (dateConf, dateFn) => {
    const base = dateFn.current();
    const interval = dateConf.sec
      + dateConf.min * MIN_TO_SEC
      + dateConf.hour * HOUR_TO_SEC
      + dateConf.day * DAY_TO_SEC
      + getSecondsFromJanTo(dateConf.month, dateFn);
    base.setMilliseconds(interval * 1000);
    return base.toMySQLDate();
  },
  'INTERVAL_TIME_FIXED': (dateConf, dateFn) => {
    const base = dateFn.current();
    const interval = dateConf.day * DAY_TO_SEC + getSecondsFromJanTo(dateConf.month, dateFn);
    base.setMilliseconds(interval * 1000);
    base.setHours(dateConf.hour, dateConf.min, dateConf.sec);
    return base.toMySQLDate();
  }
};

function calculateDate(dateConf, dateFn) {
  if (!dateConf) return null;

  dateConf = Object.assign(
    { type: 'FIXED', month: 0, weekDay: 0, hour: 0, min: 0, sec: 0 },
    dateConf
  );

  return typeFn[dateConf.type](dateConf, dateFn);
}

module.exports = {
  calculateDate
};