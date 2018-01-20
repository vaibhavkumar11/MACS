//FOR FORM
$.fn.serializeObject = function() {
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
     if (o[this.name]) {
       if (!o[this.name].push) {
         o[this.name] = [o[this.name]];
       }
       o[this.name].push(this.value || "");
     } else {
       o[this.name] = this.value || "";
     }
   });
   return o;
 };
 
 var $form = $("form#test-form"),
   url =
     "https://script.google.com/macros/s/AKfycbwbhKIB_TEoQ3F2j_l_fGKs_BdkBNGtp1d6h5eeS_nDUh9gCiN5/exec"
 
 $("#submit-form").on("click", function(e) {
   e.preventDefault();
   var jqxhr = $.ajax({
     url: url,
     method: "GET",
     dataType: "json",
     data: $form.serializeObject()
   }).success;
   // do something
   alert("You have submitted the data")();
 });
 