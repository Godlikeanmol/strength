const pass=document.getElementById("pass");

	const showbtn=document.querySelector(".showbtn");

	const text=document.querySelector(".text");

	const indicator=document.querySelector(".indicator");

	const weak =document.querySelector(".weak");

	const modrate = document.querySelector(".modrate");

	const strong = document.querySelector(".strong");

	const eye =document.querySelector(".fa-eye-slash")



	let regExpWeak = /[a-z]/;

	let regExpModrate = /\d+/;

	let regExpStrong =/[!,@,#,$,%,&,*]/;


	function trigger(){
		if(pass.value !=""){
			indicator.style.display="flex";
			showbtn.style.display="block"


		if(pass.value.length <=3 && (pass.value.match(regExpWeak)|| pass.value.match(regExpModrate)||
		 pass.value.match(regExpStrong)));
		{
			no=1;
		}

	if(pass.value.length >=6 && ((pass.value.match(regExpWeak) && pass.value.match(regExpModrate))||
	 (pass.value.match(regExpModrate) && pass.value.match(regExpStrong)) ||
	  (pass.value.match(regExpWeak) && pass.value.match(regExpStrong))))
		{
			no=2;
		}

		if(pass.value.length >=6 && pass.value.match(regExpWeak) &&pass.value.match(regExpModrate) &&
		 pass.value.match(regExpStrong))
		{
			no=3;
		}


		if(no==1)
		{
			weak.classList.add("active");
			text.style.display="block";
			text.innerText="Password Streangth is Weak";
			text.classList.add("weak");
			pass.style.outline="2px solid red"
		}

		if(no==2)
		{
			modrate.classList.add("active");
			text.innerText="Your Password Is Modrate";
			text.classList.add("modrate");
			pass.style.outline="2px solid orange"
		}

		else{
			modrate.classList.remove("active");
			text.classList.remove("modrate");
		}

		if(no==3)
		{
			weak.classList.add("active");
			modrate.classList.add("active")
			strong.classList.add("active");
			text.innerText="Your Password is Strong";
			text.classList.add("strong");
			pass.style.outline="2px solid green"
		}

		else{
			strong.classList.remove("active");
			text.classList.remove("strong")
		}

		
			showbtn.style.display="block";

			showbtn.onclick =function()
		{
			if(pass.type == "password")
			{
				pass.type = "text";

				eye.style.display='block'

			}

			else
			{
				pass.type = "password";
				eye.style.display="none"

			}
		}
		}


		else{
			indicator.style.display="none";
			text.style.display="none";
			showbtn.style.display="none";
			pass.style.outline=""
		}
	}