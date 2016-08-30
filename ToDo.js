// Function that runs on page load
$(document).ready(function(){
  // Add button click event
  $("#addNew").click(function(){
    addNewRow();
  });
  // Delete button click event
  $('#taskTable').on('click','.deleteButton',function(){
    deleteRow($(this));
  });
  $('#taskTable').on('click','.doneButton',function(){
    doneTask($(this));
  });
});


// Add a new row when Add Task button is clicked
function addNewRow(){
  var numRows = $('#taskTable tr').length;
  $('#taskTable tr:last').after('\
    <tr>\
      <td><input type="text" id="title-'+numRows+'" placeholder="Your Task Name"/></td>\
      <td><input type="checkbox" class="doneButton" id="done-'+numRows+'" title="Complete Task" value="Done" /></td>\
      <td><input type="button" class="deleteButton" id="delete-'+numRows+'" title="Delete Task" value="Delete" /></td>\
    </tr>\
  ');
}


// Delete the grandparent of the delete button
// which is the entire row of the table (tr > td > a)
function deleteRow(button){
  button.parent().parent().remove();
}

function doneTask(button){
         var taskField =     button.parent().prev().children().attr('id');
         $("#"+taskField).attr("disabled","true");
}