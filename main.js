<script type="text/javascript">
   

let numpantalla="0";
let pantallaconnumero="si"; //Si o No
let usarpunto="no"; //Si o No
let numespera=0;
let operapendiente="";
let solucion="";

function ingresarnumero(x)
{
if(x!=".")
{

	if(numpantalla=="0" || pantallaconnumero=="si")
		{
			document.Calculadora.txtboxnros.value=x;
			numpantalla=x;
		}
	else if(x!=".")
		{
			document.Calculadora.txtboxnros.value+=x;
			numpantalla+=x;
		}
}

if(x=="." && usarpunto=="no" && numpantalla=="0")
	{
		document.Calculadora.txtboxnros.value="0.";
		numpantalla=x;
		usarpunto="si";
	}	
else if(x=="." && usarpunto=="no")
	{

		document.Calculadora.txtboxnros.value +=x;
		numpantalla +=x;
		usarpunto="si";
	}
else if(x=="." && usarpunto=="si")
{

}
	pantallaconnumero="no";
}

function ingresaoperacion(y)
{
if(operapendiente =="")
{

numespera=document.Calculadora.txtboxnros.value;
document.Calculadora.txtboxnros.value +=y;
operapendiente = y;
pantallaconnumero = "no";
numpantalla = "";
usarpunto = "no";
_
}

}

function resultado()
{

if(operapendiente != "") 
{
solucion=numespera+operapendiente+numpantalla;
document.Calculadora.txtboxnros.value=eval(solucion);
numpantalla=eval(solucion);
pantallaconnumero="si";
operapendiente = "";
usarpunto = "no";

}

}

function raiz()
{

if(operapendiente == "")
{
document.Calculadora.txtboxnros.value=Math.sqrt(numpantalla);
pantallaconnumero = "no";
operapendiente = "";
usarpunto = "no";
}
}

function limpiar()
{

 numpantalla="0";
 pantallaconnumero="si";
 usarpunto="no"; 
 numespera=0;
 operapendiente="";
 solucion="";
document.Calculadora.txtboxnros.value="0";
}

</script>