$("body").ready(function (){
		$("#button").click(function (){

			$("#log").text("Sending Request...");

			var method = $('input[type=radio]:checked').attr("id");
			var valorSelect = $("#select").val();
		    var url = "http://aws2015-songs.appspot.com/"+$("#url").val();
		    var urlFinal = url + valorSelect;
		    
		    var request = $.ajax({
		  		url: urlFinal,
		  		type: method,
		  		data: $("#payload").val()
			});
	
			request.done(function(data,status,jqXHR) {
		$("#mensaje").text (jqXHR.statusText);
				if (data != "") {
				
			$("#data").text( jqXHR.responseText );
					var parsedData = $.parseJSON(jqXHR.responseText);
					//$("#list").empty();
				
					if (Array.isArray(parsedData)){
					
			
					
						for (var i in parsedData ){
							var dump = "";
							var obj = parsedData[i];			
							
							for (var prop in obj) {
	
							
							dump += "(" + prop + "=" + obj[prop] + ")";
							}
							//$("#list").append("<li>"+dump+"</li>");
						}
						
					}else{
						var dump = "";
						var obj = parsedData;
						for (var prop in obj) {
							dump += "(" + prop + "=" + obj[prop] + ")";
						}
						//$("#list").append("<li>"+dump+"</li>");
					}
			
				}else{
				
					//$("#list").empty();
					$("#data").empty();
				
				}
			});
	
			request.always(function(jqXHR, status) {
				if (status == "error"){
					$("#status").text( jqXHR.status );
						$("#mensaje").text (jqXHR.statusText);
					//$("#list").empty();
					$("#data").empty();
				}else
					$("#status").text( "200" );
						$("#mensaje").text (jqXHR.statusText);
				$("#log").text("Done");
				
			});
		});
	 
		 $("#button").hover(function() {
		     $(this).addClass("active");
		   },function(){
		     $(this).removeClass("active");
		   });
		   
		}); 