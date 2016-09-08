function checkAllCheckbox(source){
    checkboxes = document.getElementsByName('checklist');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

function removeAllCheckData(){

    var checklistarray = [];
    var unhchecklistarray = [];
    $("input:checkbox[name=checklist]:checked").each(function(){
        checklistarray.push($(this).val());
    });

    $("input:checkbox[name=checklist]:not(:checked)").each(function(){
        unhchecklistarray.push($(this).val());
    });

    $("#totalcount").val(unhchecklistarray.length);
    var i =0;
    for(i =0; i<checklistarray.length; i++){
        $("#item"+checklistarray[i]).remove();
    }
}

function loadMore()
{
    var totalcount = $("#totalcount").val();
    var i = 0;
    //    if( (parseInt(totalcount) + 10) < 100 ) {
    for( i = totalcount; i <= parseInt(totalcount) + 10; i++ ){

        var data = '<div id="item'+i+'" class="row blockcss">\
        <div class="col-sm1"> \
        <input type="checkbox" name="checklist" value="'+i+'" class="checklist">\
        </div>\
        <div class="col-sm2">\
        <img src="https://cdn3.iconfinder.com/data/icons/basic-interface/100/user_man-32.png" alt="smiley.gif" width="32" height="32" class="imgtag">\
        </div>\
        <div class="col-sm8">\
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>\
        </div>\
        </div>'

        $("#itemlist").append(data);    
    }

    $("#totalcount").val(parseInt(totalcount)+10);
    //    }
    //    $(window).bind('scroll', bindScroll);
}

function searchText(){

    var src_str = $("#itemlist").html();
    var term = $("#search").val();
    term = term.replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*");
    var pattern = new RegExp("("+term+")", "gi");

    src_str = src_str.replace(pattern, "<mark>$1</mark>");
    src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"$1</mark>$2<mark>$4");

    $("#itemlist").html(src_str);

}

function addList(){
    var description = $("#description").val();
    var totalcount = $("#totalcount").val();
    var count = parseInt(totalcount)+1;
    var img = "https://cdn3.iconfinder.com/data/icons/basic-interface/100/user_man-32.png";

    var data = '<div id="item'+count+'" class="row blockcss">\
    <div class="col-sm1"> \
    <input type="checkbox" name="checklist" value="'+count+'" class="checklist">\
    </div>\
    <div class="col-sm2">\
    <img src="'+img+'" alt="smiley.gif" width="32" height="32" class="imgtag">\
    </div>\
    <div class="col-sm8">\
    <p>'+description+'</p>\
    </div>\
    </div>'

    $("#itemlist").append(data);    
    $("#totalcount").val(parseInt(totalcount)+1);

}