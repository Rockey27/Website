var i = 0;
function update()
{

    i++;
    var numbers_of_family__member_in_array = 3
    if(i > numbers_of_family__member_in_array)
{
    i = 0;
}
var updateImage = images[i];
var updateName = names[i];
document.getElementById("family_member_image").src = updateImage;
document.getElementById("family_member_name").innerHTML = updateName;
}