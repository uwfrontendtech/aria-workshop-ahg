function showModal(){$("#modal").show(),$("#modal-overlay").show()}function hideModal(){$("#modal").hide(),$("#modal-overlay").hide()}$(document).ready(function(){$("#text-control").on("click",function(){$("#supplemental-text").slideToggle("fast"),"true"===$(this).attr("aria-expanded")?$(this).attr("aria-expanded","false").html("Show more"):$(this).attr("aria-expanded","true").html("Show less")}),$("#submit").on("click",function(e){if(e.preventDefault(),$("#name").val())if($("#question").val()){var t=$("#name").val();$("#participant").text(t),$("#has-have").text("has"),showModal()}else $("#error").text("Please answer the question!").show();else $("#error").text("Please enter your name").show();$("#ok").on("click",function(){hideModal()})})});