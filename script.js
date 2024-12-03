// Função para adicionar mais gabinetes
function adicionarGabinete() {
    const gabinetesContainer = document.getElementById('gabinetesContainer');
    const numeroGabinetes = gabinetesContainer.getElementsByClassName('gabinete').length + 1;

    const gabineteDiv = document.createElement('div');
    gabineteDiv.className = 'gabinete';
    gabineteDiv.id = `gabineteDiv${numeroGabinetes}`;
    gabineteDiv.innerHTML = `
        <div class="form-group">
            <label for="gabinete${numeroGabinetes}">INFORMAR GABINETE - ${numeroGabinetes}:</label>
            <select id="gabinete${numeroGabinetes}" class="form-control" required>
                <option value="DELTA">DELTA</option>
                <option value="DELTA ORION">DELTA ORION</option>
                <option value="DELTA TX">DELTA TX</option>
                <option value="ELTEK">ELTEK</option>
                <option value="ELTEK FULL TX">ELTEK FULL TX</option>
                <option value="EMERSON">EMERSON</option>
                <option value="EMERSON TX">EMERSON TX</option>
                <option value="PHB">PHB</option>
            </select>
        </div>
        <div class="form-group">
            <label for="retificadores${numeroGabinetes}">QUANTIDADE DE RETIFICADORES NO GABINETE ${numeroGabinetes}-FCC:</label>
            <input type="number" id="retificadores${numeroGabinetes}" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="siteBateria${numeroGabinetes}">SITE COM BATERIA:</label>
            <select id="siteBateria${numeroGabinetes}" class="form-control" onchange="mostrarBateriaInfo(${numeroGabinetes})" required>
                <option value="SIM">SIM</option>
                <option value="NAO">NÃO</option>
            </select>
        </div>
        <div class="bateria-info" id="bateriaInfo${numeroGabinetes}" style="display: none;">
            <div class="form-group">
                <label for="baterias${numeroGabinetes}">QUANTIDADE DE BATERIAS NO GABINETE-FCC ${numeroGabinetes}:</label>
                <input type="number" id="baterias${numeroGabinetes}" class="form-control">
            </div>
            <div class="form-group">
                <label for="infoBateria${numeroGabinetes}">INFORMAÇÕES DA BATERIA:</label>
                <select id="infoBateria${numeroGabinetes}" class="form-control">
                    <option value="EP TELECOM">EP TELECOM</option>
                    <option value="HUAWEI">HUAWEI</option>
                    <option value="MOURA">MOURA</option>
                    <option value="NEWMAX">NEWMAX</option>
                    <option value="UNIPOWER">UNIPOWER</option>
                    <option value="ZTE">ZTE</option>
                </select>
            </div>
            <div class="form-group">
                <label for="quantidadeBancos${numeroGabinetes}">QUANTIDADE DE BANCOS:</label>
                <input type="number" id="quantidadeBancos${numeroGabinetes}" class="form-control">
            </div>
            <div class="form-group">
                <label for="capacidade${numeroGabinetes}">CAPACIDADE:</label>
                <input type="text" id="capacidade${numeroGabinetes}" class="form-control">
            </div>
            <div class="form-group">
                <label for="volts${numeroGabinetes}">VOLTS:</label>
                <select id="volts${numeroGabinetes}" class="form-control">
                    <option value="2 V">2 V</option>
                    <option value="12 V">12 V</option>
                    <option value="24 V">24 V</option>
                    <option value="48 V">48 V</option>
                </select>
            </div>
            <div class="form-group">
                <label for="elemento${numeroGabinetes}">ELEMENTO:</label>
                <input type="number" id="elemento${numeroGabinetes}" class="form-control">
            </div>
            <div class="form-group">
                <label for="consumoFonte${numeroGabinetes}">CONSUMO FONTE:</label>
                <input type="number" id="consumoFonte${numeroGabinetes}" class="form-control">
            </div>
            <div class="form-group">
                <label for="autonomia${numeroGabinetes}">AUTONOMIA:</label>
                <select id="autonomia${numeroGabinetes}" class="form-control" onchange="mostrarTempoAutonomia(${numeroGabinetes})" required>
                    <option value="SIM">SIM</option>
                    <option value="NAO">NÃO</option>
                </select>
            </div>
            <div class="form-group" id="tempoAutonomiaGroup${numeroGabinetes}" style="display: none;">
                <label for="tempoAutonomia${numeroGabinetes}">TEMPO DE AUTONOMIA:</label>
                <input type="text" id="tempoAutonomia${numeroGabinetes}" class="form-control">
            </div>
        </div>
    `;
    gabinetesContainer.appendChild(gabineteDiv);
}

// Função para mostrar ou esconder informações da bateria
function mostrarBateriaInfo(numeroGabinetes) {
    const siteBateria = document.getElementById(`siteBateria${numeroGabinetes}`).value;
    const bateriaInfo = document.getElementById(`bateriaInfo${numeroGabinetes}`);
    bateriaInfo.style.display = (siteBateria === 'SIM') ? 'block' : 'none';
}

// Função para mostrar ou esconder o tempo de autonomia
function mostrarTempoAutonomia(numeroGabinetes) {
    const autonomia = document.getElementById(`autonomia${numeroGabinetes}`).value;
    const tempoAutonomiaGroup = document.getElementById(`tempoAutonomiaGroup${numeroGabinetes}`);
    tempoAutonomiaGroup.style.display = (autonomia === 'SIM') ? 'block' : 'none';
}

// Função para mostrar ou esconder o modelo do cadeado da entrada do site
function mostrarModeloCadeadoEntrada() {
    const cadeadoEntrada = document.getElementById('cadeado').value;
    const modeloCadeadoEntradaGroup = document.getElementById('modeloCadeadoEntradaGroup');
    modeloCadeadoEntradaGroup.style.display = (cadeadoEntrada === 'SIM') ? 'block' : 'none';
}

// Função para mostrar ou esconder o modelo do cadeado do gradil
function mostrarModeloCadeadoGradil() {
    const gradilCadeado = document.getElementById('gradilCadeado').value;
    const modeloCadeadoGradilGroup = document.getElementById('modeloCadeadoGradilGroup');
    modeloCadeadoGradilGroup.style.display = (gradilCadeado === 'SIM') ? 'block' : 'none';
}

// Função para gerar o relatório
function gerarRelatorio() {
    const relatorio = {
        site: document.getElementById('site').value.toUpperCase(),
        ami: document.getElementById('ami').value.toUpperCase(),
        tecnico: document.getElementById('tecnico').value.toUpperCase(),
        supervisor: document.getElementById('supervisor').value.toUpperCase(),
        coordenador: document.getElementById('coordenador').value.toUpperCase(),
        dataAcionamento: document.getElementById('dataAcionamento').value,
        dataDeslocamento: document.getElementById('dataDeslocamento').value,
        dataEntradaSite: document.getElementById('dataEntradaSite').value,
        dataSaidaSite: document.getElementById('dataSaidaSite').value,
        quemAcionou: document.getElementById('quemAcionou').value.toUpperCase(),
        cadeado: document.getElementById('cadeado').value,
        modeloCadeadoEntrada: document.getElementById('modeloCadeadoEntrada').value || '',
        gradilCadeado: document.getElementById('gradilCadeado').value,
        modeloCadeadoGradil: document.getElementById('modeloCadeadoGradil').value || '',
        vandalizado: document.getElementById('vandalizado').value.toUpperCase(),
        siteGPON: document.getElementById('siteGPON').value.toUpperCase(),
        zeladoria: document.getElementById('zeladoria').value.toUpperCase(),
        estadoPortas: document.getElementById('estadoPortas').value.toUpperCase(),
        portaGabinete: document.getElementById('portaGabinete').value.toUpperCase(),
        posteInterno: document.getElementById('posteInterno').value.toUpperCase(),
        iluminacao: document.getElementById('iluminacao').value.toUpperCase(),
        falhaAtividade: document.getElementById('falhaAtividade').value.toUpperCase(),
        causaEncontrada: document.getElementById('causaEncontrada').value.toUpperCase(),
        acaoRealizada: document.getElementById('acaoRealizada').value.toUpperCase(),
        pendencias: document.getElementById('pendencias').value.toUpperCase(),
        amiPendencia: document.getElementById('amiPendencia').value.toUpperCase(),
        testadoCom: document.getElementById('testadoCom').value.toUpperCase(),
        obs: document.getElementById('obs').value.toUpperCase(),
        gabinetes: []
    };

    const gabinetes = document.getElementsByClassName('gabinete');
    for (let i = 0; i < gabinetes.length; i++) {
        const gabinete = {
            tipo: document.getElementById(`gabinete${i + 1}`).value.toUpperCase(),
            retificadores: document.getElementById(`retificadores${i + 1}`).value,
            baterias: document.getElementById(`baterias${i + 1}`).value,
            siteBateria: document.getElementById(`siteBateria${i + 1}`).value.toUpperCase(),
            semAutonomia: document.getElementById(`autonomia${i + 1}`).value.toUpperCase(),
            infoBateria: document.getElementById(`infoBateria${i + 1}`).value.toUpperCase(),
            quantidadeBancos: document.getElementById(`quantidadeBancos${i + 1}`).value,
            capacidade: document.getElementById(`capacidade${i + 1}`).value.toUpperCase(),
            volts: document.getElementById(`volts${i + 1}`).value.toUpperCase(),
            elemento: document.getElementById(`elemento${i + 1}`).value,
            consumoFonte: document.getElementById(`consumoFonte${i + 1}`).value,
            tempoAutonomia: document.getElementById(`tempoAutonomia${i + 1}`).value || ''
        };
        relatorio.gabinetes.push(gabinete);
    }

    let resultado = `
*SITE:* ${relatorio.site}
*AMI:* ${relatorio.ami}
*NOME DO TÉCNICO:* ${relatorio.tecnico}
*NOME DO SUPERVISOR:* ${relatorio.supervisor}
*COORDENADOR:* ${relatorio.coordenador}
*DATA ACIONAMENTO:* ${relatorio.dataAcionamento}
*DATA HORA DESLOCAMENTO:* ${relatorio.dataDeslocamento}
*DATA HORA ENTRADA SITE:* ${relatorio.dataEntradaSite}
*DATA HORA SAÍDA SITE:* ${relatorio.dataSaidaSite}
*QUEM ACIONOU:* ${relatorio.quemAcionou}
*ENTRADA SITE POSSUI CADEADO:* ${relatorio.cadeado === 'NAO' ? 'SITE SEM CADEADO' : relatorio.cadeado === 'VANDALIZADO' ? 'CADEADO VANDALIZADO' : 'SIM'}
*MODELO DO CADEADO ENTRADA SITE:* ${relatorio.modeloCadeadoEntrada}
*GRADIL POSSUI CADEADO:* ${relatorio.gradilCadeado === 'NAO' ? 'SITE SEM CADEADO' : relatorio.gradilCadeado === 'VANDALIZADO' ? 'CADEADO VANDALIZADO' : 'SIM'}
*MODELO DO CADEADO GRADIL:* ${relatorio.modeloCadeadoGradil}
*SITE VANDALIZADO:* ${relatorio.vandalizado}
`;

    relatorio.gabinetes.forEach((gabinete, index) => {
        resultado += `
*GABINETE ${index + 1}:* ${gabinete.tipo}
*QUANTIDADE DE RETIFICADORES NO GABINETE ${index + 1}-FCC:* ${gabinete.retificadores}
*SITE COM BATERIA:* ${gabinete.siteBateria}
${gabinete.siteBateria === 'SIM' ? `
*QUANTIDADE DE BATERIAS NO GABINETE-FCC ${index + 1}:* ${gabinete.baterias}
*INFORMAÇÕES DA BATERIA:* ${gabinete.infoBateria}
*QUANTIDADE DE BANCOS:* ${gabinete.quantidadeBancos}
*CAPACIDADE:* ${gabinete.capacidade}
*VOLTS:* ${gabinete.volts}
*ELEMENTO:* ${gabinete.elemento}
*CONSUMO FONTE:* ${gabinete.consumoFonte}
*AUTONOMIA:* ${gabinete.semAutonomia}
${gabinete.semAutonomia === 'SIM' ? `*TEMPO DE AUTONOMIA:* ${gabinete.tempoAutonomia}` : '*SITE SEM AUTONOMIA*'}
` : '*SEM BATERIA NO GABINETE*'}
`;
    });

    resultado += `
*SITE POSSUI REDE GPON:* ${relatorio.siteGPON}
*NECESSÁRIO ZELADORIA:* ${relatorio.zeladoria}
*ESTADO DAS PORTAS DOS GABINETES:* ${relatorio.estadoPortas}
*INFORMAR A PORTA DE QUAL GABINETE:* ${relatorio.portaGabinete}
*EXISTÊNCIA POSTE INTERNO:* ${relatorio.posteInterno}
*EXISTÊNCIA ILUMINAÇÃO INTERNA-EXTERNA:* ${relatorio.iluminacao}
*FALHA DA ATIVIDADE:* ${relatorio.falhaAtividade}
*CAUSA ENCONTRADA:* ${relatorio.causaEncontrada}
*AÇÃO REALIZADA:* ${relatorio.acaoRealizada}
*PENDÊNCIAS:* ${relatorio.pendencias}
*AMI DA PENDÊNCIA:* ${relatorio.amiPendencia}
*TESTADO COM:* ${relatorio.testadoCom}
*OBSERVAÇÕES:* ${relatorio.obs}
`;

    document.getElementById('resultado').textContent = resultado;
}


// Função para enviar o relatório via WhatsApp
function enviarRelatorio() {
    const resultado = document.getElementById('resultado').textContent;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(resultado)}`;
    window.open(whatsappUrl, '_blank');
}

// Função para inicializar o formulário
function inicializarFormulario() {
    document.getElementById('cadeado').addEventListener('change', mostrarModeloCadeadoEntrada);
    document.getElementById('gradilCadeado').addEventListener('change', mostrarModeloCadeadoGradil);
}

window.onload = inicializarFormulario;

// Adicionar evento para o botão de adicionar gabinete
document.getElementById('adicionarGabineteBtn').addEventListener('click', adicionarGabinete);
