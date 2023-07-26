window.addEventListener('load',function () {
    StudentDetailsDisplay();
})

// For insert code starts here
function AddStudentDetails() {
    var name = $("#name").val();
    var email = $("#email").val();
    var dept = $("#dept").val();
    
    $.ajax({
        url: "insert.php",
        method: "POST",
        data: {
            StName: name,
            StEmail: email,
            StDept: dept
        },
        success: function (data) {
            StudentDetailsDisplay();
        }
    });
    $("#exampleModal").modal('hide');
}

// For insert code ends here

// FOr select start
function StudentDetailsDisplay() {
    $.ajax({
        url: "display.php",
        method: "POST",
        success: function (data) {
            $("#tbody").html(data);
        }
    });
}
// FOr select end

// Delete start
function OnDelete(id) {
    $.ajax({
        url: "delete.php",
        method: "get",
        data: {id:id},
        success: function (data) {
            StudentDetailsDisplay();
        }
    });
}
// Delete end

// OnUpdate start
function OnUpdate(id) {
    $("#updateModal").modal('show');
    var hiddenId = $("#hiddenId").val(id);
    $.ajax({
        url: "update.php",
        method: "get",
        data: {id:id},
        success: function (data) {
            // console.log(data);
            var userInfo = JSON.parse(data);
            // var userInfo = JSON.decode(data);
            // console.log(userInfo);
            $('#upname').val(userInfo.name);
            $('#upemail').val(userInfo.email);
            $('#updept').val(userInfo.dept);
        }
    });
}
// OnUpdate end

// Update Query Start
function UserUpdate() {
    var hiddenId = $("#hiddenId").val();
    var name = $("#upname").val();
    var email = $("#upemail").val();
    var dept = $("#updept").val();

    $.ajax({
        url: "updateQuery.php",
        method: "post",
        data: {hiddenId:hiddenId,name:name,email:email,dept:dept},
        success: function (data) {
            StudentDetailsDisplay();
        }
    });
    $("#updateModal").modal('hide');
}
// Update Query End