"use strict";

module.exports = () => {
  let date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  // let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  // let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  // let year = date_ob.getFullYear();

  // current hours
  // let hours = date_ob.getHours();

  // current minutes
  // let minutes = date_ob.getMinutes();

  // current seconds
  // let seconds = date_ob.getSeconds();

  // prints time in HH:MM format
  // console.log(hours + ":" + minutes);

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  // return (
  //   year +
  //   "-" +
  //   month +
  //   "-" +
  //   date +
  //   "_" +
  //   hours +
  //   ":" +
  //   minutes +
  //   ":" +
  //   seconds
  // );
  return date_ob.getTime();
};
