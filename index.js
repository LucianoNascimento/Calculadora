        function calcular(tipo, valor){
    		if(tipo === 'acao'){
    			if (valor =='c') {
    				//limpar  o visor (id resultadp)
    				document.getElementById('resultado').value = '';
          }

    				if (valor === '+'|| valor ==='-' || valor ==='*' || valor ==='/' || valor ==='.') {
    					var valor_campo = document.getElementById('resultado').value += valor;
    					console.log(valor_campo)


            }

            if(valor === '='){

               var valor_campo = eval( document.getElementById('resultado').value);
               document.getElementById('resultado').value = valor_campo;
            }
    		}
    	else if(tipo === 'valor'){

    		document.getElementById('resultado').value += valor;

      }
    }
