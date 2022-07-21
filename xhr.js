const url='https://jsonplaceholder.typicode.com/users';


// this will create new object for data
const xhr=new XMLHttpRequest();
xhr.open('GET',url);

xhr.onload=()=>{
      console.log(xhr.response);
      return console.log(JSON.parse(xhr.response)) ;
}

xhr.send();