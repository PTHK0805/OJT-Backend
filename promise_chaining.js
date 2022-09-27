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
    }, 2000)
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
      console.log(`Get the services of ${user.userName} from the API.`);
      setTimeout(() => {
          resolve(['Email', 'VPN', 'CDN']);
      }, 3 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
      console.log(`Calculate the service cost of ${services}.`);
      setTimeout(() => {
          resolve(services.length * 100);
      }, 2 * 1000);
  });
}

getUser(100)
  .then(users => getServices(users))
  .then(services => getServiceCost(services))
  .then(service => console.log(service));