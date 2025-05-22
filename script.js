document.getElementById('form-agendamento').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  if (!nome || !telefone || !servico || !data || !hora) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar um ${servico} para o dia ${data} às ${hora}. Meu telefone para contato é ${telefone}.`;

  const urlWhatsApp = `https://wa.me/5518996413819?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, '_blank');
});