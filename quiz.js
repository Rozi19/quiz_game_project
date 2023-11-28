var question = document.getElementById("question");


fetch('quiz.json')
    .then(responces => responces.json())
    .then(data => {

        const questions = data.question;

        questions.forEach(element => {

            var questions = element.question;

            var question_continar = document.createElement('div');
            question_continar.className = 'question_continar';
            var question_section = document.createElement('div');
            var question_q = document.createElement('p');

            question_q.textContent = questions;

            question_section.appendChild(question_q);
            question_continar.appendChild(question_section);
            question.appendChild(question_continar);
            console.log(questions);
            
        });

    })