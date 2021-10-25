/*Student’s Name : Damandeep Singh
 StudentID : 301170650
 Date : 24th october, 2021
 */
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var contact=document.getElementById("contact_row"+no);
 var mail=document.getElementById("mail_row"+no);
	
 var name_data=name.innerHTML;
 var contact_data=contact.innerHTML;
 var mail_data=mail.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 contact.innerHTML="<input type='text' id='contact_text"+no+"' value='"+contact_data+"'>";
 mail.innerHTML="<input type='text' id='mail_text"+no+"' value='"+mail_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var contact_val=document.getElementById("contact_text"+no).value;
 var mail_val=document.getElementById("mail_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("contact_row"+no).innerHTML=contact_val;
 document.getElementById("mail_row"+no).innerHTML=mail_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_contact=document.getElementById("new_contact").value;
 var new_mail=document.getElementById("new_mail").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='contact_row"+table_len+"'>"+new_contact+"</td><td id='mail_row"+table_len+"'>"+new_mail+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_contact").value="";
 document.getElementById("new_mail").value="";
}