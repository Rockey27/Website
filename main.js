menu_list_array = ["Veg Margherita Pizza", "Peppy Paneer Pizza", " Chicken Dominator Pizza", "CHICKEN FIESTA Pizza", "Indi Chicken Tikka Pizza", "PEPPER BARBECUE CHICKEN Pizza", "PEPPER BARBECUE CHICKEN Pizza", "PEPPER BARBECUE & ONION Pizza", "Farm House Pizza",]; 
                    

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'> "
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + '</li>'
}
htmldata=htmldata+'<ol>' + '</ol>'
document.getElementById("display_menu").innerHTML = htmldata; 
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'> "
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + '</li>'
}
htmldata=htmldata+'<div class="card>' + '<img src="images/pizzaImg.png"/> ' + menu_list_array[i]; 
}
htmldata=htmldata="</section>"
document.getElementById("added_menu").innerHTML = htmldata;
}
