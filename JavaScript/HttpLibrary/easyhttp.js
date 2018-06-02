/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @author Osamuyi Edomwande
 *
 **/

 class EasyHTTP {
  // HTTP Get Request 
  async get (){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
   }
 
// Make an HTTP post request 
 async post(url, data){
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
   const resData = await response.json();
   return resData;
 }

 // PUT request
 async put (url,data){
   const response =  await fetch (url,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
   const resData = await response.json();
   return resData;
  }

    async delete(url) {
      const response = await fetch(url,{
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}

      });
      const resData = await 'Data Deleted...';
      return resData;
    }
}

