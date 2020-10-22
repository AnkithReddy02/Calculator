var result = document.getElementById('result');

	result.style.width = "150px";
function finalResult()
{

	var classList = document.querySelector('button').classList;

	classList.remove("btn-success");
	classList.remove("btn-danger");


	var list = document.getElementsByTagName('input');

	var num1 = parseFloat(list[0].value);
	var num2 = parseFloat(list[1].value);
	
	var operation = document.getElementById("Operator").value;

	//document.querySelector("#resultButton").innerHTML="Result";

	//document.getElementById("Operator").classList.toggle("Operation"); //once it applies once it doesnot..

	//console.log(operation);oper

	var results = 0;

	var flag = 0;



	if(operation.localeCompare("*")===0)
	{
		results = num1*num2;
	}
	else if(operation.localeCompare("-")===0)
	{
		results = num1-num2;
	}
	else if(operation.localeCompare("/")===0)
	{
		if(num2===0)
		{
			results = "Division by Zero Not possible";
			flag = 1;

			result.style.width = "250px";
		}
		else
		results = num1/num2;
	}
	else if(operation.localeCompare("%")===0)
	{
		results = num1%num2;
	}
	else if(operation.localeCompare("+")===0)
	{
		results = (num1 + num2);
	}
	else if(operation.localeCompare("^")===0)
	{
		results = Math.pow(num1,num2);

	}
	else
	{
		document.getElementById('error').innerHTML =  "Enter proper resultss and operations.";
		return;  //results;
	}

	document.getElementById('error').innerHTML =  "";

	if(flag===1)
	{
		classList.add("btn-danger");
	}
	else
	{
		result.style.width = "150px";
		classList.add("btn-success");
	}


	result.value = results;



	setTimeout(function() {classList.remove("btn-success");classList.remove("btn-danger");}, 1000);
}
