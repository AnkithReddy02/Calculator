function result()
{
	
	var list = document.getElementsByTagName('input');

	var num1 = parseFloat(list[0].value);
	var num2 = parseFloat(list[1].value);
	
	var operation = (list[2].value);

	//console.log(operation);

	var value = 0;

	if(operation.localeCompare("*")===0)
	{
		value = num1*num2;
	}
	else if(operation.localeCompare("-")===0)
	{
		value = num1-num2;
	}
	else if(operation.localeCompare("/")===0)
	{
		if(num2===0)
		{
			value = "Division by Zero Not possible";
		}
		else
		value = num1/num2;
	}
	else if(operation.localeCompare("%")===0)
	{
		value = num1%num2;
	}
	else if(operation.localeCompare("+")===0)
	{
		value = (num1 + num2);
	}
	else if(operation.localeCompare("^")===0)
	{
		value = Math.pow(num1,num2);
	}
	else
	{
		document.getElementById('error').innerHTML =  "Enter proper values and operations.";
		return;
	}

	document.getElementById('error').innerHTML =  "";


	var result = document.getElementById('result');


	


	result.value = value;

}
