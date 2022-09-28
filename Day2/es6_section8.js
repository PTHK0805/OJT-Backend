//function getUsers(callback) {
//  console.log('Getting Users from Database...')
//  setTimeout(() => {
//    callback([
//      { username: 'john', email: 'john@test.com' },
//      { username: 'jane', email: 'jane@test.com' },
//    ]);
//  }, 4000);
//
//}
//
//function findUser(username, callback) {
//  getUsers(users => {
//    console.log(users);
//    console.log('Finding User With Given Username...')
//    setTimeout(() => {
//      const user = users.find(user => user.username === username);
//      callback(user);
//    }, 4000)
//
//  })
//}
//
//findUser('john', user => console.log(user));

// Promise
function getUsers() {
  console.log('Getting Users from Database...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 4000);
  })

}

function findUser(username, callback) {
  return new Promise((resolve, reject) => {
    getUsers().then(users => {
      console.log(users);
      console.log('Finding User With Given Username...')
      setTimeout(() => {
        const user = users.find(user => user.username === username);

        if (user) resolve(user);

        reject(new Error("Given Username can't find...").message);
      }, 4000)

    })
  })

}

findUser('John').then(result => console.log(result)).catch(err => console.log(err));
