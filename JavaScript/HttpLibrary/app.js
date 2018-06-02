const http = new EasyHTTP;

//Get Users 

// http.get('https://jsonplaceholder.tpypicode.com/users')
// .then (data => console.log(data))
// .catch(err => console.log(err));

//User Data 

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'

}

//Create Post 
http.post('https://jsonplaceholder.typicode.com/users',data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//Create Post 
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));