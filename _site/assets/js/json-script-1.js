 $(document).ready(function(){

var myObject = 
  {
    "row": [
        // {
        //     "TITLE": "master",
        //     "LINK": "#",
        //     "ID": 9999,
        //     "PARENT_ID": ""
        // },
        {
            "STATUS": -1,
            "TITLE": "Alabama",
            "LINK": "#",
            "ID": 100,
            "PARENT_ID": 9999
        },
	        {
	            "STATUS": -1,
	            "TITLE": "Hurricane Creek",
	            "LINK": "#",
	            "ID": 101,
	            "PARENT_ID": 100
	        },
	        {
	            "STATUS": -1,
	            "TITLE": "Mississippi River",
	            "LINK": "#",
	            "ID": 102,
	            "PARENT_ID": 100
	        },
	        {
	            "STATUS": -1,
	            "TITLE": "Red River",
	            "LINK": "#",
	            "ID": 103,
	            "PARENT_ID": 100
	        },

        {
            "STATUS": -1,
            "TITLE": "Alaska",
            "LINK": "#",
            "ID": 200,
            "PARENT_ID": 9999
        },
        {
            "STATUS": -1,
            "TITLE": "Arizona",
            "LINK": "#",
            "ID": 300,
            "PARENT_ID": 9999
        },
        {
            "STATUS": -1,
            "TITLE": "Arkansas",
            "LINK": "#",
            "ID": 400,
            "PARENT_ID": 9999
        },
        {
            "STATUS": -1,
            "TITLE": "California",
            "LINK": "#",
            "ID": 500,
            "PARENT_ID": 9999
        },




        {
            "STATUS": -1,
            "TITLE": "Colorado",
            "LINK": "#",
            "ID": 600,
            "PARENT_ID": 9999
        },
	        {
	            "STATUS": -1,
	            "TITLE": "South Platte",
	            "LINK": "#",
	            "ID": 601,
	            "PARENT_ID": 600
	        },
	        {
	            "STATUS": 0,
	            "TITLE": "Upper Platte",
	            "LINK": "#",
	            "ID": 602,
	            "PARENT_ID": 600
	        },
		        {
		            "STATUS": 0,
		            "TITLE": "Mayfly",
		            "LINK": "#",
		            "ID": 6021,
		            "PARENT_ID": 602
		        },  





        {
            "STATUS": -1,
            "TITLE": "Connecticut",
            "LINK": "#",
            "ID": 700,
            "PARENT_ID": 9999
        },
        {
            "STATUS": -1,
            "TITLE": "Delaware",
            "LINK": "#",
            "ID": 800,
            "PARENT_ID": 9999
        },
        {
            "STATUS": -1,
            "TITLE": "Florida",
            "LINK": "#",
            "ID": 900,
            "PARENT_ID": 9999
        },


    ]
}


//==============


/*for(var i=0; i < myObject.row.length; i++){
  item = "<ul>";
  item += "<li>";
  item += "<a>";
  item += myObject.row[i].TITLE;
  item += "</li>";
  item += "</ul>";
  
  $(".menu").append(item);
}*/

var builddata = function () {
    var source = [];
    var items = [];
    // build hierarchical source.
    for (i = 0; i < myObject.row.length; i++) {
        var item = myObject.row[i];
      
        var label = item["TITLE"];
        var parentid = item["PARENT_ID"];
        var id = item["ID"];
      
      // console.log(label+parentid+"Node Id"+id+"<br/>");
        if (items[parentid]) {
            var item = { parentid: parentid, label: label, item: item };
         // console.log(item);
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
            //console.log(items)
        } else {
            items[id] = { parentid: parentid, label: label, item: item };
            source[id] = items[id];
            //console.log(items);
        }

    }
    return source;
}
var source = builddata();

var buildUL = function (parent, items) {


    $.each(items, function () {


	//console.log("this is the parent - " + this.parent)
	//console.log("this is the items - " + this.items)

        if (this.label) {
            // create LI element and append it to the parent element.
            //console.log("this is the entire list - " + this.label)

            // stating to seperate the lists
            if (this.parentid !== 9999) {
            	console.log(this.label)
            }

            var li = $("<li class=\"hello\">" + this.label + "</li>");
            li.appendTo(parent);

            //console.log("here is the parent" + parent)
            
            // if there are sub items, call the buildUL function.
            if (this.items && this.items.length > 0) {

            	//console.log(this.items)
                var ul = $("<ul class=rivers-"+ this.label + "></ul>");
                ul.appendTo(li);
                buildUL(ul, this.items);
            }
        }
    });
}
var ul = $("<ul class=\"mainlist\"></ul>");
ul.appendTo(".js-tempjson");
buildUL(ul, source);


});







