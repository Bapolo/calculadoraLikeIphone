window.document.addEventListener("DOMContentLoaded", () =>
{
	const buttons = document.querySelectorAll("button")
	const input = document.querySelector("form input")

	buttons.forEach(button => button.addEventListener("click", () =>
	{
		if (button.dataset.value === "")
		{
			input.value = ""
		}	
		else
		{
			input.value += parseInt(button.dataset.value)
		}
		
		console.log(button.dataset.value)
	}))
})