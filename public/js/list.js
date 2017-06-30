  var notelist=[
    {id:1,note:"blablabla",image:"../assets/beach1.jpeg"},
    {id:2,note:"booboobo",image:"../assets/beach2.jpeg"},
    {id:3,note:"bibibi",image:"../assets/beach3.jpeg"}
  ]

$(document).ready(function(){


   init();

 $('#list').on('click','.delete-btn',remove);  
 $('#imgInp').on('click',function(){ upload(this); });  


});





 function init(){
    //$('#list').append("<ul></ul>");
    for(var i=0;i<notelist.length;i++){
      console.log("eNTERS HERE")
      $('#list').append('<div class="note"> <img class="delete-btn" src="../assets/close.svg" alt="No available"/>  <img class="photo" src="'+ notelist[i].image+'" alt="No available"/> <p> '+ notelist[i].note +' </p></div>');
     $( ".note" ).draggable();
    }
    
  }

  function remove(){
    console.log("In remove");
    $(this).closest('.note').fadeOut('slow');
    $(this).closest('.note').remove();
    //$(this).fadeOut('slow');
    //$(this).remove();
  }

function addNew(){
  var note = $('#input').val();  
  var image = "../assets/"+$('#imgInp').val();
  $('#list').append('<div class="note"> <img class="delete-btn" src="../assets/close.svg" alt="No available"/> <img class="photo" src="'+image+'" alt="No available"/> <p> '+ note +' </p></div>');
  $( ".note" ).draggable();
  $('#input').val('');
  var image = $('#imgInp');
  image.val('');
  
}

function upload(input){
  console.log(input.files[0]);
  if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                console.log($('#imgInp').val());
            }
            
            reader.readAsDataURL(input.files[0]);
  }
  
 }

 
/*var notelist=[
{id:1,note:"blablabla"},
{id:2,note:"booboobo"},
{id:3,note:"bibibi"}
]

function init(){
  var list = document.getElementById('list');
  var ul = document.createElement('ul');

  for (var i=0;i<notelist.length;i++){
    var li = document.createElement('li');
    var content = document.createTextNode(notelist[i].note);
    var check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.setAttribute('class',"checkbox");
    li.appendChild(check);
    li.appendChild(content);  
    ul.appendChild(li);
  }
  list.appendChild(ul);
}

init();


function remove(){
  var checks = document.getElementsByClassName('checkbox');
  var notes = document.getElementsByTagName("li");
  for(var i=0; i<checks.length; i++){
    var check=checks[i];
    var note=notes[i];
    if(check.checked){
      //check.parentNode.removeChild(check);
      note.parentNode.removeChild(note);
      notelist.splice(i,1);
      console.log("New notelist",notelist)
    }
  }
}


function addNew(){

    var ul = document.getElementsByTagName('ul');

    var li = document.createElement('li');
    var content = document.createTextNode("testtest");
    var check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.setAttribute('class',"checkbox");
    li.appendChild(check);
    li.appendChild(content);  
    ul[0].appendChild(li);
}

function cleanArray(id){

}

function loadDoc(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			
			var details= JSON.parse(this.responseText)
			console.log(details);     			 

			var list = document.getElementById("list");

			var name = document.createElement('p');
			var label = document.createTextNode(details.name);
			name.appendChild(label);
			list.appendChild(name);

			console.log("Input value is:", document.getElementById('input').value); 			
                }
	};
	xhttp.open("GET", "ajax.json", true);
        xhttp.send();
}
*/