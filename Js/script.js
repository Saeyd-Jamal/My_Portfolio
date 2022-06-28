let skills_sction = document.querySelector(".skills"),
    skills_sction_img = document.querySelector(".skills .image"),
    skills_progress = document.querySelectorAll(".prog span"),
    nums_progress = document.querySelectorAll(".title span"),
    about_sction_con = document.querySelector(".about .container"),
    projects_sction_con = document.querySelector(".my_projects .container"),
    connect_sction = document.querySelector(".connect"),
    connect_sction_img = document.querySelector(".connect .image"),
    connect_sction_content = document.querySelector(".connect .content"),
    loading_sction = document.querySelector(".loading"),
    sections = document.querySelectorAll("section"),
    started = false;

window.onscroll = function(){
  if(window.scrollY >= about_sction_con.offsetTop - 900){
    about_sction_con.classList.add('load_sction_top');
  }
  if(window.scrollY >= projects_sction_con.offsetTop - 650){
    projects_sction_con.classList.add('load_sction_top');
  }
  if(window.scrollY >= connect_sction.offsetTop - 670){
    connect_sction_img.classList.add('load_sction_left');
    connect_sction_content.classList.add('load_sction_top');
  }
  if(window.scrollY >= skills_sction.offsetTop - 400){
    skills_progress.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
    if(!started){
      nums_progress.forEach((numPregress)=> startNumsProgress(numPregress));
    }
    started = true;
    skills_sction_img.classList.add('load_sction_left');
  }
}

function startNumsProgress(numPreg){
  let progress = numPreg.dataset.goal;
  let startedNum = setInterval(()=>{
    numPreg.textContent++;
    if(numPreg.textContent == progress){
      clearInterval(startedNum);
    }
  },1000 / progress);
}

// onload
window.onload = function(){
  sections.forEach((section)=>{
    section.style.display = "block";
  });
  loading_sction.style.display = "none";
}
