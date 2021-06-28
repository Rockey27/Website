function show(){
    var GuestName = document.getElementById(name1).display;
    

}
function sortedlist() 
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting = [];

    var length_of_name_of_students_array = name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);
 
    for (var k = 0; k < length_of_name_of_students_array; k++)
    {
        display_student_array_sorting.push("<h4> NAME - "+ name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);


    }



names_of_people.sort();

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {

        if(s==names_of_people[j]){
            found=found+1;
        }
       
    }
    document.getElementById("p2").innerHTML="name found "+ "times";
    console.log("found name "+found+" time/s");
          