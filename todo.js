function adicionarTarefa() {
    const inputTarefa = document.getElementById("nova-tarefa");
    const hora = document.getElementById("hora").value;
    const minuto = document.getElementById("minuto").value;
    
    const horario = `${hora}:${minuto}`;
    
  
    const tarefa = inputTarefa.value.trim();
  
  
    if (tarefa === "" || hora === "" || minuto === "") {
        alert("Digite a tarefa e selecione o horário!");
        return;
      }
      
  
    const lista = document.getElementById("lista-tarefas");
  
    const item = document.createElement("li");
  
    item.innerHTML = `
      <span>🕐 ${horario} - ${tarefa}</span>
      <div>
        <button class="concluir-btn" onclick="concluirTarefa(this)">✔</button>
        <button onclick="removerTarefa(this)">🗑</button>
      </div>
    `;
  
    lista.appendChild(item);
  
    inputTarefa.value = "";
    inputHorario.value = "";
  }
  
  function removerTarefa(botao) {
    const item = botao.parentElement.parentElement;
    item.remove();
  }
  
  function concluirTarefa(botao) {
    const item = botao.parentElement.parentElement;
    item.classList.toggle("concluida");
  }
  