//alert("执行了js");

function loadInfo() {
    $.getJSON("data.json", function(data) {
        $("#info").html("");//清空info内容
        $.each(data.data, function(i, item) {
            $("#info").append(
                    "<div>" + item.img_url	+ "</div>" + 
                    "<div>" + item.title	+ "</div>" +
                    "<div>" + item.time		+ "</div>" + 
					"<div>" + item.author	+ "</div>" +
					"<div>" + item.pages	+ "</div><hr/>");
        });
        });
};

loadInfo();