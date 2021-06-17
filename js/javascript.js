function teste(valor){
    video = document.getElementById(valor);
    if(valor != 'bg-video'){
        $(video).hide();
    }
    $(video).empty();
    return
};

    
function replay(valor,valor1){
    video = document.getElementById(valor);
    $(video).empty();
    $(video).show();
    if(valor === 'bg-video'){
        conteudo = '<video id="fifa21" autoplay onended="teste()"><source src="video/esportes/FIFA21.mp4" type="video/mp4"><source src="video/esportes/FIFA21_VP8.webm" type="video/webm"><source src="video/esportes/FIFA21_libtheora.ogv" type="video/ogg"></video>'
    }else{
        display = document.getElementById('')
        $(document.getElementById('bg-video')).empty();
        conteudo = '<video id="'+valor+'" class="vd-pl-cr" autoplay "><source src="video/'+valor1+'/'+valor+'.mp4" type="video/mp4"><source src="video/'+valor1+'/'+valor+'.webm" type="video/webm"><source src="video/'+valor1+'/'+valor+'.ogv" type="video/ogg"></video>';
        video.style.zIndex = "0";
    }
    $(video).append(conteudo);
}    



function jogar(valor){ 

    window.location.href=valor
}

function req(valor){
    window.location.href=valor
}      
        

function carrocelcont(valorinicial,valorfinal){
    $.ajax({
        url: '../csv/tipodecarrocel.csv',
        dataType: 'text',
    }).done(successFunction);

    function successFunction(data) {
        var allRows = data.split(/\r?\n|\r/);
        var conteinercarrocel = document.getElementById('conteinercarrocel');
        if(valorinicial>allRows.length){
            done();
        }else{
            if(allRows.length>valorfinal){
                stop = valorfinal;
            }else{
                stop = allRows.length;
            }
            for (var singleRow = valorinicial; singleRow < (allRows.length-1); singleRow++) {
                var rowCells = allRows[singleRow].split(';');
                var cont = 0;
                olw = '<div class="'+rowCells[1]+'">'  
                olw +='<div  id="'+rowCells[0]+'"></div>'
                olw += '</div>'
                $(conteinercarrocel).append(olw);    
                ggg = lugarnocarrocel(rowCells[0],rowCells[1]);   
                
            }     
        }
    }     
}

function lugarnocarrocel(id,name){
    if(id ==='linkjogar' | id === 'linkrequisitos'){
        arquivo = 'linkjogar'
    }else{
        arquivo = id
    }
    $.ajax({
        url: '../csv/'+arquivo+'.csv',
        dataType: 'text',
    }).done(successFunction);
    function successFunction(data){
        var allRows = data.split(/\r?\n|\r/);
        if(id === 'linkjogar'){
            for (var singleRow = 0; singleRow<allRows.length; rowCell ++){
                var rowCells = allRows[singleRow].split(';');
                if(rowCells[0]===name){
                    jogar(rowCells[1]);
                }
            }
        }else if(id==='linkrequisitos'){
            for (var singleRow = 0; singleRow<allRows.length; rowCell ++){
                var rowCells = allRows[singleRow].split(';');
                if(name===rowCells[0]){
                    req(rowCells[2]);
                }
            }
        }else{
            var locate = ''
            var foradofor = 0
            locate += '<div class="owl-carousel owl-theme">'
            for (var singleRow = 0; singleRow<(allRows.length-1); singleRow ++){
                var rowCells = allRows[singleRow].split(';');
                locate += '<div class="item">'
                locate += '<div class="divcarrosel" onmouseover="replay('+"'"+rowCells[0]+"',"+id+')" onmouseout="teste('+"'"+rowCells[0]+"',"+id+')" style="background-image: url(img/'+id+'/'+rowCells[0]+'.jpg);">';
                locate += '<div class="vd-carrocel" id="'+rowCells[0]+'">';
                locate += '</div>';
                locate += '<button type="button" id="bt-1-4" class="botaocarrocel" onclick="lugarnocarrocel('+"'"+'linkjogar'+"',"+"'"+rowCells[0]+"'"+')">Jogar</button>';
                locate += '<button type="button" id="bt-1-4" class="botaocarrocel" onclick="lugarnocarrocel('+"'"+'linkrequisitos'+"',"+"'"+rowCells[0]+"'"+')">Requisitos</button>';
                locate += '</div>';
                locate += '</div>';            
            }
            locate +='</div>';
            var conteinercarrocel = document.getElementById(id);
            
            locate += '<script type="text/javascript" src="js/carrocel.js"></script>'
            $(conteinercarrocel).append(locate);
        };
    };
};