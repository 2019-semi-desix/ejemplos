(function(){
    var Module = {
        Config: {
            url: '/api/v1/estudiantes'
        },
        Controls: {
            tBody: document.querySelector('.js-body'),
        },
        Events: {
            onSuccess: function(resp){
                const { Controls: { tBody } } = Module;
                let responseHtml = '';
                for(var i = 0; i < resp.estudiantes.length ; i += 1){
                    responseHtml += `
                        <tr>
                            <td><a href="/estudiantes/${resp.estudiantes[i].id}">${resp.estudiantes[i].nombre}</a></td>
                            <td>${resp.estudiantes[i].edad}</td>
                        </tr>
                    `;
                }
                console.log(responseHtml);
                tBody.innerHTML = responseHtml;
            },
            onError: function(error){
                console.log(error);
            }
        },
        Methods: {
            init: function(){
                Module.Methods.initTable();
            },
            initTable: function(){
                const { Config: { url },
                      Events: { onSuccess, onError } } = Module;
                $.ajax({ url }).then(onSuccess).catch(onerror);
            }
        }
    };
    Module.Methods.init();
})();