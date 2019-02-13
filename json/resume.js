
  function loadJson(file,callback) {
    var rawFile=new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 & rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
rawFile.send(null);
}
  loadJson("json/resume.json",function (text) {
    var data=JSON.parse(text);
    console.log(data);
      leftData(data.profile);
  skills(data.Skills);
  education(data.Education);

  });
  var left=document.querySelector(".leftDiv");

  console.log(left);
    function leftData(leftdetails) {

      var images=document.createElement("img");
      images.src=leftdetails.img;
      images.alt="profile Image";
      left.appendChild(images);
        left.classList.add("left");

      var name=document.createElement("h2");
      name.textContent=leftdetails.NAME;
      left.appendChild(name);

      var college=document.createElement("h2");
      college.textContent=leftdetails.COLLEGE;
      left.appendChild(college);

      var number=document.createElement("h3");
      number.textContent=leftdetails.NUMBER;
      left.appendChild(number);

      var mail=document.createElement("h5");
      mail.textContent=leftdetails.MAIL;
      left.appendChild(mail);
}
var right=document.querySelector(".rightDiv");

function skills(skil) {
   var skills=document.createElement("h1");
   skills.textContent="Skills";
   right.appendChild(skills)

   //
   // let ul=document.createElement("ul");
   // right.appendChild(ul);

   let hr1=document.createElement("hr");
   hr1.textContent="OS: "+skil.OS;
   right.appendChild(hr1);


   let hr2=document.createElement("hr");
    hr2.textContent="Programming skills: \n"+skil.PROGRAMMING_SKILLS;
    right.appendChild(hr2);
}
function education(edu) {

  var ed=document.createElement("h1");
  ed.textContent="Educational Details";
  right.appendChild(ed);
for (i in edu) {
  // Education[i]

  var h3=document.createElement("h3");
  h3.textContent=edu[i].DEGREE;
  right.appendChild(h3);

  let ul=document.createElement("ul");
  right.appendChild(ul);

  let li1=document.createElement("li");
   li1.textContent="College : "+edu[i].COLLEGE;
   right.appendChild(li1);

  let li2=document.createElement("li");
    li2.textContent="Branch : "+edu[i].BRANCH;
    right.appendChild(li2);

    let li3=document.createElement("li");
     li3.textContent="Percentage : "+edu[i].CGPA;
     right.appendChild(li3);

     let li4=document.createElement("li");
      li4.textContent="Year of Pass : "+edu[i].YEAROFPASSING;
      right.appendChild(li4);

}

}
