function calculateGrade() {
    const marks = document.getElementById("marks").value;
    let grade;
  
    switch (true) {
      case marks >= 100:
        grade = "A+";
        break;
      case marks >= 90:
        grade = "A";
        break;
      case marks >= 80:
        grade = "B+";
        break;
      case marks >= 70:
        grade = "Distinction";
        break;
      case marks >= 60:
        grade = "C+";
        break;
      case marks >= 50:
        grade = "Passed";
        break;
      default:
        grade = "Failed";
    }
  
    document.getElementById("grade").textContent = grade;
  }