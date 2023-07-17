function adjust_nav_height(e){
  let dropdown_caller = e.parentElement.children[1];
  if(dropdown_caller.style.display === 'none'){
    dropdown_caller.style.display = 'block';
  }else{
    dropdown_caller.style.display = 'none';
  }

  let dropdown_services = document.getElementsByClassName('dropdown-content-mobile')[0];
  let dropdown_attractions = document.getElementsByClassName('dropdown-content-mobile')[1]
  let navbar = document.querySelector('nav ol'); 
  console.log(dropdown_services.style.display);
  if(dropdown_services.style.display === 'block' && dropdown_attractions.style.display === 'block'){
    navbar.style.height = '825px';
  } else if(dropdown_services.style.display === 'block' && dropdown_attractions.style.display != 'block'){
    navbar.style.height = '625px';
  } else if(dropdown_services.style.display != 'block' && dropdown_attractions.style.display === 'block'){
    navbar.style.height = '675px';
  }else{
    navbar.style.height = '465px';
  }
};

function close_nav(){
  let navbar = document.querySelector('nav ol'); 
  let dropdown_services = document.getElementsByClassName('dropdown-content-mobile')[0];
  let dropdown_attractions = document.getElementsByClassName('dropdown-content-mobile')[1]
  navbar.style.height = '0px';
  dropdown_services.style.display = 'none';
  dropdown_attractions.style.display = 'none';
}

function open_nav(){
  let navbar = document.querySelector('nav ol'); 
  navbar.style.height = '465px';
}