const questions = [
    "do u rembember the first phone call?",
    "Was it love at first sight for me?",
    "the first tamil song i dedicated was ennodu nee irundhal?",
    "i was hating you on nov 3 2023?",
    "Will you be mine forever?"
  ];
  
  const answers = [
    "a beautiful eve where i kinda fell for ur voice-29th sep",
    "yes you are right. nope,but the skillrack day has my whole heart",
    "Yes, you are right,its not that--its SIRIKADHEY.",
    "enaku una hate pannavey theriyathu ma,i love you that much",
    "You will always be my love."
  ];
  
  let currentQuestion = 0;
  
  function handleAnswer(isYes) {
    if (isYes) {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("question").textContent = questions[currentQuestion];
      } else {
        showCelebration();
      }
    } else {
      alert(answers[currentQuestion]);
    }
  }
  
  function showCelebration() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("balloons").classList.remove("hidden");
  }