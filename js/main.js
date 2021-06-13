var user = "";

setTimeout  (function(){
    axios.get('search.php')
    .then(function (response) {
      // handle success
     

            var main = document.querySelector('.activeuser');

             for(var i=0;i<response.data.name.length;i++)
             {
                var profilemain = document.createElement('div');
                var proname = document.createElement('div');
               var pronamecontent = document.createElement('h5')
                var circle = document.createElement("div");
                 pronamecontent.innerText=response.data.name[i].name;
                 proname.classList.add('proname');
                 proname.appendChild(pronamecontent)
                profilemain.classList.add("profilemain");
                circle.classList.add('circle');

                profilemain.appendChild(circle);
                profilemain.appendChild(proname);

                main.appendChild(profilemain);
                console.log(response.data.name[i].name);
             }


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  
  


},100)







setTimeout  (function(){
    axios.get('searchpost.php')
    .then(function (response) {
     
          console.log(response.data.data);

          //if(response.data.name)
              for(var i= 0 ; i<response.data.data.length;i++)
              {
                   var mainpost  = document.querySelector('.center');
                  if(response.data.data[i].posts == "")
                   {

                   }
                   
                   else{


                         var getname = document.createElement('h5');
                        var posts = document.createElement('div');

                        var postcontent = document.createElement('p');
                         postcontent.innerText = response.data.data[i].posts; 
                         posts.appendChild(getname) 
                         posts.appendChild(postcontent);
                         getname.innerText = response.data.data[i].name;
                        posts.classList.add('posts');
                        
                        mainpost.appendChild(posts);
                     }
              }
           
 

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  
  


},100)






















































document.querySelector('.btn').addEventListener('click', function(){
  
    var username = sessionStorage.getItem(user);
    console.log(username)
  
    var message = document.querySelector('.messagetext').value;



            if(username == "")
            {
                alert("First Check in Please");
                window.open('index.html','_self');
            }


             else{

                axios.post('post.php', {
                    name : username,
                    posts : message
                    })
                    .then(function (response) {
                      value = response.data;
                    console.log(response)
                      if(value == "success")
                      {
                        
                        window.location.reload();
                      }
            
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
            



             }







  



})