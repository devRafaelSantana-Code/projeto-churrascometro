const inputAdultos = document.querySelector("#adultos");
const inputCriancas = document.querySelector("#criancas");
const inputDuracao = document.querySelector("#duracao");
const elementoResultado = document.querySelector("#resultado");

function calcular() {
   elementoResultado.innerHTML = "";

   if (
      inputAdultos.value === "" ||
      inputCriancas.value === "" ||
      inputDuracao.value === ""
   ) {
      alert("Por favor, preencha todos os campos antes de calcular!");
      return;
   }

   const adultos = Number(inputAdultos.value);
   const criancas = Number(inputCriancas.value);
   const duracao = Number(inputDuracao.value);

   console.log("Calculando para:", { adultos, criancas, duracao });

   const taxaCarne = carnePP(duracao);
   const taxaBebida = bebidaPP(duracao);

   const qtdTotalCarne = taxaCarne * adultos + (taxaCarne / 2) * criancas;
   const qtdTotalCerveja = cervejaPP(duracao) * adultos;
   const qtdTotalBebida = taxaBebida * adultos + (taxaBebida / 2) * criancas;

   const kgCarne = (qtdTotalCarne / 1000).toFixed(2).replace(".", ",");
   const latasCerveja = Math.ceil(qtdTotalCerveja / 355);
   const petsBebida = Math.ceil(qtdTotalBebida / 2000);

   elementoResultado.innerHTML = `
               <p>🥩 ${kgCarne} Kg de carne</p>
               <p>🍺 ${latasCerveja} Latas de cerveja (355ml)</p>
               <p>🥤 ${petsBebida} Garrafa(s) de 2L de bebida (suco ou refrigerante)</p>
            `;
}

const carnePP = (duracao) => (duracao >= 6 ? 650 : 400);
const cervejaPP = (duracao) => (duracao >= 6 ? 2000 : 1200);
const bebidaPP = (duracao) => (duracao >= 6 ? 1500 : 1000);
