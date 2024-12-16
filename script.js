document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("survey-form");
    
    form.addEventListener("submit", function(event) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let age = document.getElementById("number").value;

        // Проверка на пустоту полей
        if (!name || !email || !age) {
            alert("Пожалуйста, заполните все поля!");
            event.preventDefault(); // Cancellation of form submission
        }

        // 
         emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            alert("Пожалуйста, введите корректный email!");
            event.preventDefault(); // Cancellation of form submission
        }
    });
});
