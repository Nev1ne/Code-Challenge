const form = document.querySelector('form');
		const resultDiv = document.querySelector('.result');
		
		form.addEventListener('submit', function(event) {
			event.preventDefault();

			const name = document.getElementById('name').value;
			const HTML = document.getElementById('HTML').value;
			const CSS = document.getElementById('CSS').value;
			const JAVA = document.getElementById('JAVA').value;
			const PYTHON = document.getElementById('PYTHON').value;

			const totalMarks = parseInt(HTML) + parseInt(CSS) + parseInt(JAVA) + parseInt(PYTHON);
			const averageMarks = totalMarks / 4;
      
let marks = prompt("Enter student marks (between 0 and 100):");
let grade;

if (marks > 79) {
  grade = "A";
} else if (marks >= 60 && marks <= 79) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Grade: " + grade);


resultDiv.innerHTML = `${name} got an average of ${averageMarks.toFixed(2)}% and a grade of ${grade}`;
});
