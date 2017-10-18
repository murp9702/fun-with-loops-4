var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];
//
// 1. Write a set of loops that will print out each day of each month in the following format:

// for (var i=0; i < months.length; i++) {
//   for (var k=1; k <= months[i].days; k++) {
//     console.log(months[i].name + " " + k);
//   }
// }

// 2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).

// for (var i=0; i < 24; i++) {
//     for (var k=0; k < 60; k++) {
//         for (var m=0; m < 60; m++) {
//             console.log(i + ':' + k + ':' + m);
//         }
//     }
// }
//



// BONUS
// ----------
//
// 3. Write a set of loops that will print out each second of each hour in a day (in 12 hour clock format).
//
// For example, your output should look like the following:
//
// <pre>
// 1:0:0 AM
// ...
// 1:59:59 AM
// 2:0:0 AM
// ...
// 2:59:59 AM
// ...
// 11:59:59 AM
// 12:00:00 PM
// ...
// 12:59:59 PM
// 1:0:0 PM
// ...
// 1:59:59 PM
// 2:0:0 PM
// ...
// 11:59:59 PM
// 12:0:0 AM
// ...
// 12:59:59 AM
// </pre>
// for (var i=1; i < 12; i++) {
//     for (var k=0; k < 60; k++) {
//         for (var m=0; m < 60; m++) {
//             addAZero();
//             console.log(i + ':' + k + ':' + m + ' AM');
//         }
//     }
// }
// for (var i=12; i === 12; i++) {
//     for (var k=0; k < 60; k++) {
//         for (var m=0; m < 60; m++) {
//             addAZero();
//             console.log(i + ':' + k + ':' + m + ' PM');
//         }
//     }
// }

var am = 'AM';
var pm = 'PM';

function forLoop12 (amPm) {
    for (i=12; i === 12; i++) {
        for (k=0; k < 60; k++) {
            for (m=0; m < 60; m++) {
                addAZero(i, k, m);
                console.log(i + ':' + k + ':' + m + ' ' + amPm);
            }
        }
    }
}

function forLoop1To11 (amPm) {
    for (i=1; i < 12; i++) {
        for (k=0; k < 60; k++) {
            for (m=0; m < 60; m++) {
                addAZero();
                console.log(i + ':' + k + ':' + m + ' ' + amPm);
            }
        }
    }
}

function addAZero () {
    if  (m.toString().length === 1) {
        m = ('0' + m);
    }
    else if (k.toString().length === 1) {
        k = ('0' + k);
    }
    else if (i.toString().length === 1) {
        i = ('0' + i);
    }
}
forLoop1To11(am);
forLoop12(pm);
forLoop1To11(pm);
forLoop12(am);


//
// Now, write a function that turns all single digit numbers into their respective two digit format. For example, 1 should be 01 and 9 should be 09. Then use this function to format your output from part 3, so it will now look like the following:
//
// <pre>
// 01:00:00 AM
// ...
// 12:00:00 PM
// ...
// 01:00:00 PM
// ...
// 12:00:00 AM
// </pre>
