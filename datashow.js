let ipProjetor = "";
let senhaPJLink = "";
let modoDemo = false;

document.getElementById("conectar").addEventListener("click", () => {
  ipProjetor = document.getElementById("ip").value.trim();
  senhaPJLink = document.getElementById("senha").value.trim();
  modoDemo = document.getElementById("demo").checked;

  logMsg(`Conectado a ${ipProjetor} (Demo: ${modoDemo})`);
});

function enviarComando(comando) {
  if (!ipProjetor) {
    alert("Digite o IP do projetor!");
    return;
  }

  if (modoDemo) {
    logMsg(`[DEMO] Comando enviado: ${comando}`);
    return;
  }

  fetch(`http://SEU_IP_LOCAL:3000/comando`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ip: ipProjetor,
      senha: senhaPJLink,
      comando: comando
    })
  })
    .then(res => res.text())
    .then(txt => logMsg(`Resposta: ${txt}`))
    .catch(err => logMsg(`Erro: ${err}`));
}

function logMsg(msg) {
  document.getElementById("log").textContent += msg + "\n";
}
