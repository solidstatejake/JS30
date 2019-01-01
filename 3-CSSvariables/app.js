const inputs = document.querySelectorAll(".slider-container input");

function updateInput() {
  const data_suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + data_suffix);

}

inputs.forEach(input => {
  input.addEventListener("change", updateInput);
  input.addEventListener("mousemove", updateInput);
})
