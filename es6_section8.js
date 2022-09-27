function getUsers(callback) {
  console.log('Getting Users from Database...')
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]);
  }, 4000);

}

function findUser(username, callback) {
  getUsers(users => {
    console.log(users);
    console.log('Finding User With Given Username...')
    setTimeout(() => {
      const user = users.find(user => user.username === username);
      callback(user);
    }, 4000)

  })
}

findUser('john', user => console.log(user));
