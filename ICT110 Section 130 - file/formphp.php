<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<style>
		.container {
		  display: block;
		  position: relative;
		  padding-left: 35px;
		  margin-bottom: 12px;
		  cursor: pointer;
		  font-size: 22px;
		  -webkit-user-select: none;
		  -moz-user-select: none;
		  -ms-user-select: none;
		  user-select: none;
		}

		/* Hide the browser's default checkbox */
		.container input {
		  position: absolute;
		  opacity: 0;
		  cursor: pointer;
		  height: 0;
		  width: 0;
		}

		/* Create a custom checkbox */
		.checkmark {
		  position: absolute;
		  top: 0;
		  left: 0;
		  height: 25px;
		  width: 25px;
		  background-color: #eee;
		}

		/* On mouse-over, add a grey background color */
		.container:hover input ~ .checkmark {
		  background-color: #ccc;
		}

		/* When the checkbox is checked, add a blue background */
		.container input:checked ~ .checkmark {
		  background-color: #2196F3;
		}

		/* Create the checkmark/indicator (hidden when not checked) */
		.checkmark:after {
		  content: "";
		  position: absolute;
		  display: none;
		}

		/* Show the checkmark when checked */
		.container input:checked ~ .checkmark:after {
		  display: block;
		}

		/* Style the checkmark/indicator */
		.container .checkmark:after {
		  left: 9px;
		  top: 5px;
		  width: 5px;
		  height: 10px;
		  border: solid white;
		  border-width: 0 3px 3px 0;
		  -webkit-transform: rotate(45deg);
		  -ms-transform: rotate(45deg);
		  transform: rotate(45deg);
		}
	</style>
</head>
<body>
	<form action="show.php" method="post">
		<center>
		<table border="0">
			<tr>
				<td> First Name </td>
				<td> <input type="text" name="fname" value="Your name" maxlength="50"> </td>
			</tr>
			<tr>
				<td> Password </td>
				<td> <input type="password" name="ps" maxlength="20"> </td>
			</tr>
			<tr>
				<td> Full Address </td>
				<td> <textarea name="address" rows="5" cols="22" placeholder="Please fill your address here"></textarea> </td>
			</tr>
			<tr>
				<td> Gender </td>
				<td> <input type="radio" name="gender" value="Female"> Female 
					<input type="radio" name="gender1" value="Male"> Male </td>
			</tr>
			<tr>
				<td> Hobby </td>
				<td>
					<fieldset>
						<legend> Lifestyle </legend>
						<ul>
							<li> <input type="checkbox" name="read" value="reading"> Reading </li>
							<li> <input type="checkbox" name="run" value="running"> Running </li>
							<li> <input type="checkbox" name="shop" value="shopping" checked="checked"> Shopping </li>
						</ul>
					</fieldset>
				</td>
				<td>
					<h1>Custom Checkboxes</h1>
					<label class="container">One
					  <input type="checkbox" checked="checked">
					  <span class="checkmark"></span>
					</label>
					<label class="container">Two
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="container">Three
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="container">Four
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
				</td>
			</tr>
			<tr>
				<td> Country </td>
				<td>
					<select name="ct" size="3" multiple> 
						<optgroup label="Asian">
							<option> Thailand </option>
							<option> India </option>
							<option selected> China </option>
						</optgroup>
						<optgroup label="Europe">
							<option> England </option>
						</optgroup>
						<optgroup label="America">
							<option> USA </option>
						</optgroup>
					</select>
				</td>
			</tr>
			<tr>
				<td> Profile picture </td>
				<td> <input type="file" name="imgpath"> </td>
			</tr>
			<tr>
				<td> Birthday </td>
				<td> <input type="date" name="dob"> </td>
			</tr>
			<tr>
				<td> Number of Sibling </td>
				<td> <input type="number" name="num" min="1" max="10"> </td>
			</tr>
			<tr>
				<td> Number of Sibling </td>
				<td> <input type="range" name="no" min="1" max="10"> </td>
			</tr>
			<tr>
				<td> Color </td>
				<td> <input type="color" name="color"> </td>
			</tr>
			<tr>
				<td></td>
				<td> <input type="submit" value="Sign up"> <input type="reset" value="Clear"> </td>
			</tr>

		</table>
		</center>
	</form>

	<?php
		echo "<h1><center>". $_POST['fname']."</h1></center><br>";
		echo $_POST['gender'];
		echo $_POST[''];
	?>

</body>
</html>