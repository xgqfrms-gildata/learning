
// ## Format Dates

moment().format('MMMM Do YYYY, h:mm:ss a'); // February 5th 2017, 7:25:17 pm
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Feb 5th 17
moment().format('YYYY [escaped] YYYY');     // 2017 escaped 2017
moment().format();                          // 2017-02-05T19:25:17+08:00

// ## Relative Time

moment("20111031", "YYYYMMDD").fromNow(); // 5 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 5 years ago
moment().startOf('day').fromNow();        // 19 hours ago
moment().endOf('day').fromNow();          // in 5 hours
moment().startOf('hour').fromNow();       // 25 minutes ago

// ## Calendar Time

moment().subtract(10, 'days').calendar(); // 01/26/2017
moment().subtract(6, 'days').calendar();  // Last Monday at 7:25 PM
moment().subtract(3, 'days').calendar();  // Last Thursday at 7:25 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 7:25 PM
moment().calendar();                      // Today at 7:25 PM
moment().add(1, 'days').calendar();       // Tomorrow at 7:25 PM
moment().add(3, 'days').calendar();       // Wednesday at 7:25 PM
moment().add(10, 'days').calendar();      // 02/15/2017

// ## Multiple Locale Support

moment.locale();         // en
moment().format('LT');   // 7:25 PM
moment().format('LTS');  // 7:25:17 PM
moment().format('L');    // 02/05/2017
moment().format('l');    // 2/5/2017
moment().format('LL');   // February 5, 2017
moment().format('ll');   // Feb 5, 2017
moment().format('LLL');  // February 5, 2017 7:25 PM
moment().format('lll');  // Feb 5, 2017 7:25 PM
moment().format('LLLL'); // Sunday, February 5, 2017 7:25 PM
moment().format('llll'); // Sun, Feb 5, 2017 7:25 PM


