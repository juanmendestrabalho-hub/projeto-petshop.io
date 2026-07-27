let form = document.getElementById("formAgendamento");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let pet = document.getElementById("pet").value;
    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;

    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    agendamentos.push({ pet, servico, data });

    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    alert("Agendado com sucesso!");
    form.reset();
});
