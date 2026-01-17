const loginSection = document.getElementById("loginSection");
const dashboard = document.getElementById("dashboard");

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin123") {
    loginSection.classList.add("hidden");
    dashboard.classList.remove("hidden");
    loadCourses();
  } else {
    alert("Invalid login");
  }
}

function getCourses() {
  return JSON.parse(localStorage.getItem("courses")) || [];
}

function saveCourses(courses) {
  localStorage.setItem("courses", JSON.stringify(courses));
}

function addCourse() {
  const title = document.getElementById("courseTitle").value;
  const desc = document.getElementById("courseDesc").value;

  if (!title || !desc) {
    alert("Fill all fields");
    return;
  }

  const courses = getCourses();
  courses.push({ title, desc });
  saveCourses(courses);

  document.getElementById("courseTitle").value = "";
  document.getElementById("courseDesc").value = "";

  loadCourses();
}

function loadCourses() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";

  getCourses().forEach((course, index) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center mb-2";
    li.innerHTML = `
      <span>${course.title}</span>
      <button onclick="deleteCourse(${index})"
        class="text-red-600">Delete</button>
    `;
    list.appendChild(li);
  });
}

function deleteCourse(index) {
  const courses = getCourses();
  courses.splice(index, 1);
  saveCourses(courses);
  loadCourses();
}

const coursesGrid = document.getElementById("coursesGrid");

if (coursesGrid) {
  const courses = JSON.parse(localStorage.getItem("courses")) || [];

  coursesGrid.innerHTML = "";

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded shadow";

    card.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${course.title}</h3>
      <p class="text-gray-600">${course.desc}</p>
      <a href="course.html"
        class="inline-block mt-4 bg-purple-700 text-white px-4 py-2 rounded">
        Know More
      </a>
    `;

    coursesGrid.appendChild(card);
  });
}

/* ===== BLOGS (LINK BASED) ===== */
function getBlogs() {
  return JSON.parse(localStorage.getItem("blogs")) || [];
}

function saveBlogs(blogs) {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

function addBlog() {
  const title = document.getElementById("blogTitle").value;
  const link = document.getElementById("blogLink").value;

  if (!title || !link) {
    alert("Fill all blog fields");
    return;
  }

  const blogs = getBlogs();
  blogs.push({ title, link });
  saveBlogs(blogs);

  document.getElementById("blogTitle").value = "";
  document.getElementById("blogLink").value = "";

  loadBlogs();
}

function loadBlogs() {
  const list = document.getElementById("blogList");
  list.innerHTML = "";

  getBlogs().forEach((blog, index) => {
    list.innerHTML += `
      <li class="flex justify-between items-center mb-2">
        <a href="${blog.link}" target="_blank" class="text-blue-600 underline">
          ${blog.title}
        </a>
        <button onclick="deleteBlog(${index})"
         class="text-red-600">Delete</button>
      </li>
    `;
  });
}

function deleteBlog(index) {
  const blogs = getBlogs();
  blogs.splice(index, 1);
  saveBlogs(blogs);
  loadBlogs();
}

