
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;
// const name = profileDataArgs[0];
// const Github = profileDataArgs[1];

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new err;

    console.log('Portfolio complete! Checkout index.html to the outcome!');
});
// console.log(name,github);
// console.log(generatePage(name, github));


// const generatePage = () => 'Name: Noah, Github: nizzyno';
// console.log(generatePage());

// const os = require('os');

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // for (let i = 0; i < profileDataArr.length; i++) {
//     //     console.log(profileDataArr[i]);
//     // }
//     // profileDataArr.forEach((profileItem) => {
//     //     console.log(profileItem)
//     // });
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);