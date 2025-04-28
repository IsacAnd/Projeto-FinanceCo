document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "/pages/login.html";
    });
  }
});

function login() {
  const username = document.getElementById("user-input").value;
  const password = document.getElementById("password-input").value;

  console.log(username, password);

  if (username == "isac" && password == "1234") {
    window.location.href = "../index.html";
    showAlert("Login efetuado com sucesso!", "success");
    return;
  } else {
    showAlert("Usuário ou senha incorretos!");
    return;
  }
}

function register() {}

function showAlert(message, type = "error") {
  const alertBox = document.getElementById("alert-message");

  alertBox.textContent = message;

  if (type === "success") {
    alertBox.classList.add("success");
  } else {
    alertBox.classList.remove("success");
  }

  alertBox.classList.remove("hidden");
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 500);
  }, 3000);
}

const ctx = document.getElementById("meuGrafico").getContext("2d");

// Dados iniciais do gráfico
const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "jul", "Ago"],
  datasets: [
    {
      label: "Vendas",
      data: [12, 19, 3, 5, 2, 3, 5, 10],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
  ],
};

// Opções
const options = {
  responsive: true,
  animation: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Cria o gráfico
const meuGrafico = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});

// Atualiza os dados a cada 3 segundos com valores aleatórios
setInterval(() => {
  meuGrafico.data.datasets[0].data = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 20)
  );
  meuGrafico.update();
}, 3000);
