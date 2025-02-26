const handelDelete = (id) =>{
    console.log(id);
    fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
        method: 'delete',
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      })
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    .catch(error => console.error('Error:', error));
}