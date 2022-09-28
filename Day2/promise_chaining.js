//function generateNumber(num) {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve(num);
//    }, 3 * 1000);
//});
//}
//
//let p = new Promise((resolve, reject) => {
//  setTimeout(() => {
//      resolve(10);
//  }, 3 * 100);
//});
//
//p.then((result) => {
//  console.log(result);
//  return generateNumber(result * 2);
//}).then((result) => {
//  console.log(result);
//  return generateNumber(result * 3)
//}).then((result) => {
//  console.log(result);
//})

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log('Getting User From Databse with Given ID...');
    setTimeout(() => {
      resolve({
        userId: userId,
        userName: 'admin'
      })
    }, 1000)
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.userName} from the API.`);
    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN']);
    }, 2000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3000);
  });
}

getUser(100)
  .then(users => getServices(users))
  .then(services => getServiceCost(services))
  .then(service => console.log(service));


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first Promise is solved...');
    resolve(10);
  }, 4000)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second Promise is solved...');
    resolve(20);
  }, 4000)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third Promise is solved...');
    resolve(30);
  }, 4000)
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
  }, 1 * 1000);

});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has rejected');
      reject(20);
  }, 2 * 1000);
});


Promise.race([p4, p5])
  .then(value => console.log(`Resolved: ${value}`))
  .catch(reason => console.log(`Rejected: ${reason}`));


Promise.all([p1, p2, p3]).then(result => {
  const total = result.reduce((prev, curr) => prev + curr);
  console.log(`Result: ${result}`)
  console.log(`Total: ${total}`);
}).catch(err => console.log(err));


