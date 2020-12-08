const inputs=document.querySelectorAll(".controls input");

function handleUpdate(){
    // console.log(this.value)
    // const suffix=this.dataset.sizing;
    const suffix=this.dataset.sizing || " ";
   
    let app=document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
    console.log(`--${this.name}`, this.value+suffix)
}
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove",handleUpdate));
