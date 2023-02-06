// https://stackoverflow.com/questions/48218615/how-to-make-this-html-javascript-random-number-generator-output-multiple-results

function getNota() {
    nota => nota.value = getNota();
    const minNumber = 1; // The maximum number you want
    const maxNumber = 20; // The maximum number you want
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  }

  // Using querySelectorAll to get all output-elements, and then update the value of the output-element with a random number.
  document.querySelectorAll('#nota').forEach(
    nota => nota.value = getNota()
  );
  

function getNascimentoAluno() {
    nascimentoAluno => nascimentoAluno.value = getNascimentoAluno();
    const minDate = new Date("2000","01","01");
    const maxDate = new Date("2005","01","01");
    const timestamp = +minDate + Math.floor(Math.random() * (maxDate - minDate));
    return new Date(timestamp).toISOString().slice(0, 10).replace(/-/g, "/").replace("T", " ");
}

  // Using querySelectorAll to get all output-elements, and then update the value of the output-element with a random number.
  document.querySelectorAll('#nascimentoAluno').forEach(
    nascimentoAluno => nascimentoAluno.value = getNascimentoAluno()
  );
  
  
function getNumMatr() {
    numMatr => numMatr.value = getNumMatr();
    const minNumber = 001; // The maximum number you want
    const maxNumber = 199; // The maximum number you want
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  }

  // Using querySelectorAll to get all output-elements, and then update the value of the output-element with a random number.
  document.querySelectorAll('#numMatr').forEach(
    numMatr => numMatr.value = getNumMatr()
  );
  
  
function getSalario() {
    salario => salario.value = getSalario();
    const minNumber = 1000; // The maximum number you want
    const maxNumber = 2000; // The maximum number you want
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  }

  // Using querySelectorAll to get all output-elements, and then update the value of the output-element with a random number.
  document.querySelectorAll('#salario').forEach(
    salario => salario.value = getSalario()
  );
  

function getNascimentoProf() {
    nascimentoProf => nascimentoProf.value = getNascimentoProf();
    const maxDate = new Date("2000","01","01");
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp).toISOString().slice(0, 10).replace(/-/g, "/").replace("T", " ");
}

  // Using querySelectorAll to get all output-elements, and then update the value of the output-element with a random number.
  document.querySelectorAll('#nascimentoProf').forEach(
    nascimentoProf => nascimentoProf.value = getNascimentoProf()
  );
  
//https://stackoverflow.com/a/71977740
function getNomes() {
    nome => nome.value = getNomes();
	
	var nome = window.arrayNomes[Math.floor(Math.random() * arrayNomes.length)];
	return nome;
}

  document.querySelectorAll('#nome').forEach(
    nome => nome.value = getNomes()
  );
