export default class APIService{
    // Insert an article
    
    
    

    static create_user(firstname,lastname,email,username,password){
        return fetch(`http://localhost:5000/register`,{
            'method':'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(firstname,lastname,email,username,password)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    


}


