

$('div[contenteditable]').keydown(function(e) {
    if (e.keyCode === 13) {
        document.execCommand('insertHTML', false, '<br><br>');
        return false;
    }
});

function tableInsert(){
    $('#tableModal').modal('toggle');
    let area=document.getElementById('editor-text-area');
    area.focus();
    let col=Number(document.getElementById("table-columns-num").value);
    let rows=Number(document.getElementById("table-rows-num").value);
    let table = '<br><table class="table table-dark table-striped table-bordered">';
    for(let i=0;i<rows;i++) {
        table=table.concat('<tr>');
        for(let k=0;k<col;k++){
            table=table.concat('<td></td>')
        }
        table=table.concat('</tr>')
    }
    table=table.concat('</table>');
    document.execCommand('insertHTML', false, table);
}