  
  
  var user = "";
  var checking;
 

   var action = document.querySelector('#btnsubmit').addEventListener('click',function(){

   // sessionStorage.removeItem(user);
    var names = document.querySelector('.name').value;
    var emails = document.querySelector('.email').value;
    
    //  var checking = sessionStorage.getItem(user);
    
     // console.log(checking)
    
   if( names == ' ' )
    alert('please enter your user name');
    else if(emails == ' ')
      alert('please enter email');

   


   //   if(checking == names )
   //   {
    //    alert("USer Already Check in with these")
     //   window.open("main.html","_self");
  //    }else{
         
    //  }
             
       /* fetch('http://localhost/beach/insert.php', {
            credentials: 'include',
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: 
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });*/
          


          axios.post('insert.php', {
          name : names,
          email : emails
          })
          .then(function (response) {
            value = response.data;
          console.log(response)
            if(value == "success")
            {
              
              sessionStorage.setItem(user,names);
               window.open("main.html","_self");
            }

          })
          .catch(function (error) {
            console.log(error);
          });



          
        








   })
          
     














