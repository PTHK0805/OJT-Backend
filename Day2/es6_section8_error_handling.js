const authorized = true;

function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (typeof id !== 'number') {
      reject('ID Must be a valid number');
    }
    resolve({
      id: id,
      username: 'admin'
    });
  });
}

//try {
//  getUserById(10)
//    .then(user => console.log(user.username))
//    //.catch(err => console.error(err));
//  console.log('next');
//
//} catch (error) {
//  console.log(`Caught by try/catch ${error}`);
//}



async function getUser() {
  try {
    const user = await getUserById('1');
    console.log(user);
  }
  catch (error) { 
    console.log(error);
  }
}

getUser();

