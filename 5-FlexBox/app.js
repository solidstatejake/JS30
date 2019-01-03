const top_and_bottom_words = document.querySelectorAll(".panel");
const middle_word = document.querySelectorAll(".middle")

top_and_bottom_words.forEach(p_element => {
  p_element.addEventListener("mouseover", ()=>{
    p_element.classList.add("open-active");
    middle_word.classList.toggle("active");
  });

  p_element.addEventListener("mouseleave", ()=>{
    p_element.classList.remove("open-active");
    middle_word.classList.toggle("active");
  });
});

