<?php
	/** create mysql connection to the DB we created */
	$conn = mysqli_connect("localhost","root","","cc105",3307,"C:/xampp/mysql/mysql.sock");
	
	/**this line specifies the mysql connection and our DB  */
	$database = mysqli_select_db($conn,'cc105');
	
	/** $encodedData variable stores the data that is taken from the front end.*/
	$EndodedData= file_get_contents('php://input');

	/**The 1st parameter of the $decodedData variable, 
	 * specifies the value to be decoded. The second parameter is a boolean in which the returned object will be converted into an associative array. 
	 * Default is false. */
	$DecodeData=json_decode($EndodedData, true);
	
	/** Passing data from front end to PHP variables*/
	$FirstName=$DecodeData['FirstName'];
	$LastName=$DecodeData['LastName'];
	$Username=$DecodeData['Username'];
	$Password=$DecodeData['Password'];
	
	/**Inserting query */
		$insert_Query ="INSERT INTO registeredusers(FirstName, LastName, Username, Password) 
		VALUES('$FirstName', '$LastName', '$Username', '$Password')";
		
		/**will return 0 if successful and 1 if not */
		$query_State = mysqli_query($conn, $insert_Query);  

		if($query_State = 0)
		{
		$Message = "Student has been registered successfully";

		} 
		else
		{
		$Message = "Server error. Please try again";
		}
			$Response[] = array("Message: " => $Message);
			echo json_encode($Response);

?>