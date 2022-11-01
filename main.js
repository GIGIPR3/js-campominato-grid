/* let contenitoreGriglia = document.getElementById('griglia');
console.log(contenitoreGriglia);

var selezione = document.getElementById('modalita').value;
console.log(selezione);




let modalitaH = document.getElementById('Hard');

let modalitaM = document.getElementById('Medium');

let modalitaE = document.getElementById('Easy'); 
 */


/* var select = document.getElementById("modalita");
var indiceSelezionato = select.selectedIndex;

var valoreSelezionato = select.options[indiceSelezionato];
var valoreDentroLopzione = valoreSelezionato.value;
var testoDentroLopzione = valoreSelezionato.text; */

function creazioneQuadrato(){
    const div = document.createElement('div');
    div.classList.add('quadrato');
    return div;
}


function generaGioco(){

    var select = document.getElementById("modalita");
    var indiceSelezionato = select.selectedIndex;

    var valoreSelezionato = select.options[indiceSelezionato];
    var valoreDentroLopzione = valoreSelezionato.value;
    var testoDentroLopzione = valoreSelezionato.text;
 
    console.log(testoDentroLopzione);
    console.log(valoreDentroLopzione);

    let = quadratoElement = document.getElementById('quadrato');

    for (let i = 0; i < valoreSelezionato.value; i++){

    griglia.append(creazioneQuadrato())

    }

}