$(document).ready(function () {

    var newTask;
    $("#addButton").click (function () {
        newTask=$("#taskInput").val();
        if(newTask.length !=0){
        var taskItem = '<li class="list-group-item">'+newTask+'<button id="doneButton" type="button" class="btn btn-dark float-right">done</button></li>';
        $("#todolist").prepend(taskItem);
        $("#taskInput").val("");
        }else{
            alert("You can't submit an empty task")
        }
        
    });

    $("ul").on("click","#doneButton", function () {
        $(this).parent().attr("class","list-group-item disabled");
        $(this).parent().attr("style","text-decoration: Line-Through");
        $("#todolist").append($(this).parent());
        $(this).remove();
    });

    $("#clearButton").click(function(){
        $("#todolist").children().remove();
    });
});

