/*Student’s Name : Damandeep Singh
 StudentID : 301170650
 Date : 24th october, 2021
 */
function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd")
  {
    window.open('Businesscontact.html');/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username");/*displays error message*/
  }
}