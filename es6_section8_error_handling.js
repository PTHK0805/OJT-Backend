function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject('Unauthorized access to the user data');
    }
    resolve({
      id: id,
      username: 'admin'
    });
  });
}

try {
  getUserById(10)
    .then(user => console.log(user.username))
    //.catch(err => console.error(err));
  console.log('next');

} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}