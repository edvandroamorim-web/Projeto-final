function mostrarFormulario() {
    document.getElementById('apresentacao').style.display = 'none';
    document.getElementById('configuracao').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
}

function voltarParaApresentacao() {
    document.getElementById('configuracao').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('apresentacao').style.display = 'block';
    document.getElementById('formPlano').reset(); 
}

function gerarPlanoFamiliar(event) {
    event.preventDefault();

    let numPessoas = document.getElementById('numPessoas').value;
    let tipoResidencia = document.getElementById('tipoResidencia').value;
    let possuiCriancas = document.getElementById('possuiCriancas').value;
    let possuiIdosos = document.getElementById('possuiIdosos').value;
    let riscoPrincipal = document.getElementById('riscoPrincipal').value;

    if (numPessoas <= 0) {
        alert("O número de pessoas deve ser maior que zero.");
        return;
    }

    let textoResumo = `Residência tipo ${tipoResidencia} com ${numPessoas} pessoa(s).`;
    document.getElementById('resumoFamilia').textContent = textoResumo;

    let textoRisco = "";
    document.getElementById('tituloRisco').textContent = riscoPrincipal;

    if (riscoPrincipal === "Enchente") {
        textoRisco = "Oriente sua família sobre as áreas alagadas da região. Busque um local seguro e alto. Acompanhe as informações oficiais de medição do rio.";
    } else if (riscoPrincipal === "Deslizamento") {
        textoRisco = "Oriente o afastamento imediato de encostas e áreas de risco. Fique atento a rachaduras no terreno ou paredes.";
    } else if (riscoPrincipal === "Vendaval") {
        textoRisco = "Oriente a permanência em local protegido. Mantenham-se afastados de árvores, janelas e estruturas frágeis que possam ceder.";
    }
    document.getElementById('recomendacaoRisco').textContent = textoRisco;

    let divAlertas = document.getElementById('alertasEspeciais');
    let pCrianca = document.getElementById('alertaCrianca');
    let pIdoso = document.getElementById('alertaIdoso');
    
    let mostrarAlertas = false;

    if (possuiCriancas === "Sim") {
        pCrianca.textContent = "Crianças: Garanta acompanhamento e responsabilidade contínua. Mantenha-as calmas e explique a situação de forma simples.";
        pCrianca.style.display = "block";
        mostrarAlertas = true;
    } else {
        pCrianca.style.display = "none";
    }

    if (possuiIdosos === "Sim") {
        pIdoso.textContent = "Idosos: Adicione uma orientação específica de apoio físico para deslocamento. Garanta que os medicamentos de uso contínuo estejam no kit de emergência.";
        pIdoso.style.display = "block";
        mostrarAlertas = true;
    } else {
        pIdoso.style.display = "none";
    }

    if (mostrarAlertas) {
        divAlertas.style.display = "block";
    } else {
        divAlertas.style.display = "none";
    }

    document.getElementById('configuracao').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
}