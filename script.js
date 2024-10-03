document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    const totalQuestions = 15;

    // Correct answers
    const answers = {
        q1: "C",
        q2: "D",
        q3: "B",
        q4: "B",
        q5: "B",
        q6: "B",
        q7: "A",
        q8: "C",
        q9: "C",
        q10: "C",
        q11: "B",
        q12: "B",
        q13: "A",
        q14: "B",
        q15: "B"
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        const feedbackElement = document.getElementById(`feedback${i}`);
        
        if (userAnswer) {
            if (userAnswer.value === answers[`q${i}`]) {
                score++;
                feedbackElement.textContent = "Correct!";
                feedbackElement.style.color = "green";
            } else {
                feedbackElement.textContent = `Incorrect! Correct answer: ${answers[`q${i}`]}`;
                feedbackElement.style.color = "red";
            }
        } else {
            feedbackElement.textContent = "Please select an answer.";
            feedbackElement.style.color = "orange";
        }
    }

    alert(`Total Marks Obtained: ${score} out of ${totalQuestions}`);
});
