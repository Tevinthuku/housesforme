Template.notes.rendered = function(){
    // pick a time
        $('.input_endtime').clockpicker({
      placement: 'bottom',
      align: 'left',
      darktheme: true,
      twelvehour: false
    });
    
    // modal
     $('.modal-trigger').leanModal();
};