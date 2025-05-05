function fetchGradeData() {
  return [
    {
      name: "Sydney Osuagwu",
      assignment1: "Mermaid Diagrams (0%)",
      assignment2: "Attendance & Review Week 2 (100%)"
    },
    {
      name: "Sydney Osuagwu",
      assignment1: "Machine Learning and AI (90.75%)",
      assignment2: "Attendance & Review Week 4 (14.33 / 15)"
    },
    {
      name: "Sydney Osuagwu",
      assignment1: "Git Command Line Lab (100%)",
      assignment2: "Front End With JavaScript (100 / 100)"
    },
    {
      name: "Sydney Osuagwu",
      assignment1: "Node Server Lab (100 / 100)",
      assignment2: "Debugging Assignment (95 / 100)"
    },
    {
      name: "Sydney Osuagwu",
      assignment1: "Attendance Week 6 (19 / 20)",
      assignment2: "Attendance Week 7 (23 / 24)"
    },
    {
      name: "Sydney Osuagwu",
      assignment1: "Attendance Week 8 (26 / 28)",
      assignment2: "Attendance Week 12 (36 / 40)"
    },
    {
      name: "Sydney Osuagwu",
      assignment1: "Attendance Week 13 (45 / 45)",
      assignment2: "Lab 1 Corrected (100 / 100)"
    }
  ];
}

function populateGradebook() {
  const grades = fetchGradeData();
  const table = document.getElementById("gradebook");

  grades.forEach(student => {
    const row = table.insertRow();
    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = student.assignment1;
    row.insertCell(2).textContent = student.assignment2;
  });
}

populateGradebook();
