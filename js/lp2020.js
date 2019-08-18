
	  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 3000,
      max: 40000,
      step: 1000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  $( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 0,
      max: 9,
      step: 0.5,
      value: 5.5,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
      }
    });
    $( "#amount2" ).val( $( "#slider-range-max" ).slider( "value" ) );
  } );


var vm = new Vue({
  el: '#app',
  data: {
    email :clientsEmail,
    group: 0,
    user: 0,
    budget: null,
    free: false,
    disableBudget: false,
    lang: "0",
    lang2: 0,
    pass: "0"
  },
  created: function () {
    // this.test()
  },

  methods: {
    setSlider(){
      $( function() {
        $( "#slider-range-max" ).slider({
          range: "max",
          min: 0,
          max: 9,
          step: 0.5,
          value: 5.5,
          slide: function( event, ui ) {
            $( "#amount2" ).val( ui.value );
          }
        });
        $( "#amount2" ).val( $( "#slider-range-max" ).slider( "value" ) );
      } );
    },
    test() {
      $.ajax({
          type: "POST",
          url: "https://edusteps.com.ua",
          data: {},
          cache: false, 
          beforeSend: function(){
             console.log('before')
          }          
        }).done(function(data){
          console.log('done')
        });

    }
  }
});