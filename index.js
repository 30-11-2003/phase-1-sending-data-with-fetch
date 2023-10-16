// Add your code here
const users ={
    usersName:"Henry Owen",
    usersEmail:"Owenhenry@gmail.com",
    id :5
}
function submitData(users){
    
    console.log (submitData(usersName,usersEmail))

   fetch(' http://localhost:3000/users',{
        method :"POST",
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
        },
        body :JSON.stringify(submitData)        
        })
    
    .then (res=>res.json)
    .then (users=> console.log (`users ${id}`))

    .catch (function (error) {
        alert ("There is an error");
        console.log(error.message);
    })
}