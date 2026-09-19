const projects = {
  "face-recognition": {
    number:"01", category:"ARTIFICIAL INTELLIGENCE", title:"AI Face Recognition",
    short:"Real-time face recognition accelerated with GPU inference.",
    description:"A real-time face recognition system built with Python and computer vision technologies. The system detects and identifies registered faces from a live camera feed using InsightFace and ONNX Runtime, with CUDA GPU acceleration for low-latency inference.",
    technologies:["Python","OpenCV","InsightFace","ONNX Runtime","CUDA","NVIDIA GPU"]
  },
  "drone-vision": {
    number:"02", category:"ROBOTICS", title:"Autonomous Drone Vision",
    short:"Computer vision experiments for drone navigation and marker detection.",
    description:"A robotics and computer vision project combining a Pixhawk flight controller with MAVLink communication and OpenCV-based ArUco marker detection. The project explores the connection between visual perception and autonomous drone systems.",
    technologies:["Python","OpenCV","MAVLink","PyMAVLink","Pixhawk","ArUco"]
  },
  "gesture-games": {
    number:"03", category:"COMPUTER VISION", title:"Gesture Controlled Games",
    short:"Interactive games controlled entirely through hand gestures.",
    description:"A series of computer-vision-based games where the player's hand movements become the controller. MediaPipe and OpenCV are used to track hand landmarks in real time and translate gestures into game actions.",
    technologies:["Python","MediaPipe","OpenCV","Game Development"]
  },
  "digital-logic": {
    number:"04", category:"DIGITAL SYSTEMS", title:"Digital Logic Systems",
    short:"Combinational logic systems designed and implemented from scratch.",
    description:"A collection of digital logic design projects involving Boolean algebra, multiplexing, comparison, arithmetic logic and practical IC implementations. Designs were tested physically using breadboards and standard logic ICs.",
    technologies:["Digital Logic","Boolean Algebra","TTL ICs","Breadboarding","Circuit Design"]
  },
  "portfolio": {
    number:"05", category:"WEB DEVELOPMENT", title:"Personal Portfolio",
    short:"A polished personal portfolio designed and built from scratch.",
    description:"This portfolio was designed to present my technical work, personal builds, skills and interests in one focused experience. It was first developed as a Next.js application and then rebuilt as a lightweight static HTML, CSS and JavaScript website for simple deployment and maintenance.",
    technologies:["HTML","CSS","JavaScript","Responsive Design","UI Design"]
  }
};

const id = new URLSearchParams(location.search).get("id");
const p = projects[id] || projects["portfolio"];

document.title = `${p.title} — Md. Mushfiqur Rahman`;
document.getElementById("number").textContent = p.number;
document.getElementById("category").textContent = p.category;
document.getElementById("title").textContent = p.title;
document.getElementById("short").textContent = p.short;
document.getElementById("description").textContent = p.description;

const tech = document.getElementById("technologies");
p.technologies.forEach(t => {
  const span = document.createElement("span");
  span.textContent = t;
  tech.appendChild(span);
});

if (id === "portfolio") {
  document.getElementById("visual").innerHTML = '<div class="portfolio-detail">MR<span style="color:#f2f3ef">.</span></div>';
}
