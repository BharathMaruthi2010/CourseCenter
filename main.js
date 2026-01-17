/******** COURSES ********/
const coursesGrid = document.getElementById("coursesGrid");
if(coursesGrid){
const courses = [
{title:"Full Stack Development", desc:"Learn to build websites", img:"images/course1.jpg"},
{title:"Data Analytics", desc:"Analyze real data", img:"images/course2.jpg"},
{title:"Python Programming", desc:"Learn Python fast", img:"images/course3.jpg"},
{title:"UI/UX Design", desc:"Design beautiful apps", img:"images/course4.jpg"},
{title:"Digital Marketing", desc:"Promote businesses online", img:"images/course5.jpg"},
{title:"AI & Machine Learning", desc:"Build smart apps", img:"images/course6.jpg"},
];

courses.forEach(c=>{
const card=document.createElement("div");
card.className="bg-white rounded shadow hover:shadow-2xl transform hover:scale-105 transition duration-300";
card.innerHTML=`
<img src="${c.img}" class="w-full h-40 object-cover">
<div class="p-4">
<h3 class="font-bold text-xl mb-2">${c.title}</h3>
<p>${c.desc}</p>
<button class="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Know More</button>
</div>`;
coursesGrid.appendChild(card);
});
}

/******** BLOGS ********/
const blogsGrid = document.getElementById("blogsGrid");
if(blogsGrid){
const blogs=[
{title:"How to learn coding fast", img:"images/blog1.jpg"},
{title:"Top 5 career skills", img:"images/blog2.jpg"},
{title:"Why AI is the future", img:"images/blog3.jpg"},
];

blogs.forEach(b=>{
const card=document.createElement("div");
card.className="bg-white rounded shadow hover:shadow-2xl transform hover:scale-105 transition duration-300";
card.innerHTML=`
<img src="${b.img}" class="w-full h-40 object-cover">
<div class="p-4">
<h3 class="font-bold text-xl mb-2">${b.title}</h3>
<button class="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Read More</button>
</div>`;
blogsGrid.appendChild(card);
});
}

/******** CHAT ********/
const chatBtn=document.getElementById("chatBtn");
const chatBox=document.getElementById("chatBox");
const sendBtn=document.getElementById("sendBtn");
const chatInput=document.getElementById("chatInput");
const chatMessages=document.getElementById("chatMessages");

if(chatBtn){
chatBtn.onclick=()=>chatBox.classList.toggle("hidden");
}

if(sendBtn){
sendBtn.onclick=()=>{
if(chatInput.value.trim()=="")return;
chatMessages.innerHTML+=`<div><b>You:</b> ${chatInput.value}</div>`;
chatMessages.innerHTML+=`<div><b>Bot:</b> Thank you! Our team will contact you.</div>`;
chatInput.value="";
chatMessages.scrollTop=chatMessages.scrollHeight;
};
}

/******** CONTACT PAGE FORM ********/
const contactFormPage=document.getElementById("contactFormPage");
if(contactFormPage){
contactFormPage.addEventListener("submit",(e)=>{
e.preventDefault();
alert("Thank you! We will contact you soon.");
contactFormPage.reset();
});
}
