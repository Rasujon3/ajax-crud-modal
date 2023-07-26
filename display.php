<?php
    include "./db.php";
    $select = "SELECT * FROM student";
    $ex = mysqli_query($con,$select);
    while($row=mysqli_fetch_array($ex)){ ?>
    <tr>
        <td> <?php echo $row['Id']; ?></td>
        <td> <?php echo $row['name']; ?></td>
        <td> <?php echo $row['email']; ?></td>
        <td> <?php echo $row['dept']; ?></td>
        <td> <button onclick="OnDelete(<?php echo $row['Id']; ?>)" class="btn btn-danger p-2">Delete</button></td>
        <td> <button onclick="OnUpdate(<?php echo $row['Id']; ?>)" class="btn btn-secondary p-2">Edit</button></td>
    </tr>

<?php   }
    
?>