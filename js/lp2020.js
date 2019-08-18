$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    navElement:"span",
    navText:[" <span class='fa fa-angle-left'></span> "," <span class='fa fa-angle-right'></span> "],
    items: 1
  });

  $('#calendar td:not(.dis)').click(function(){
      var date = $(this).data('date');
      $('#curr-date').html(date);
      var coords = $(this).position();
      var left = coords.left-300;
      $('#pop').css({'top':coords.top+'px', 'left': left+'px'});
      $('#pop').fadeIn()
    });
  $('#open-menu').click(function(){
      $('.tels').toggleClass('in')
    });
  $('#open-mob').click(function(){
      $(this).toggleClass('in');
      $('.my-menu').toggleClass('in')
    });
  $('.for-table').on('click','#close-pop',function(){
      $('#pop').fadeOut()
    });
  $("a[href='#']").click(function(){
      event.preventDefault()
    })
  $("a[href^='#']").click(function(event){
    event.preventDefault();
    var scroll_el = $(this).attr('href'); 
    if (scroll_el === "#") return
    if ($(scroll_el).length != 0) { 
      var mypos = $(scroll_el).offset().top-75;
      $('html, body').animate({ scrollTop: mypos}, 900); 
    }
  });
  })
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
  el: '#calendar',
  data: { finished: false,
 
    firstRow: [
      {dis:true, key: 0, data: 19, month: '08', cons: false},
      {dis:false, key: 1, data: 20, month: '08', cons: true, consArr: ['ok','pending'], time: '12:00'},
      {dis:false, key: 2, data: 21, month: '08', cons: true, consArr: ['ok','ok','pending'], time: '10:00, 14:00'},
      {dis:false, key: 3, data: 22, month: '08', cons: true, consArr: ['ok','ok'], time: '10:30, 14:00'},
      {dis:false, key: 4, data: 23, month: '08', cons: true, consArr: ['ok'], time: '15:00'},
      {dis:true,  key: 5, data: '24,25', month: '08', cons: false},
    ],
    secondRow: [
      {dis:true, key: 6, data: 26, month: '08', cons: false},
      {dis:true, key: 7, data: 27, month: '08', cons: false},
      {dis:false, key: 8, data: 28, month: '08', cons: false},
      {dis:false, key: 9, data: 29, month: '08', cons: false},
      {dis:false, key: 10, data: 30, month: '08', cons: false},
      {dis:true,  key: 11, data: '31,01', month: '08', cons: false},
    ],
    thirdRow: [
      {dis:true, key: 12, data: 2, month: '09', cons: false},
      {dis:true, key: 13, data: 3, month: '09', cons: false},
      {dis:false, key: 14, data: 4, month: '09', cons: false},
      {dis:false, key: 15, data: 5, month: '09', cons: false},
      {dis:false, key: 16, data: 6, month: '09', cons: false},
      {dis:true,  key: 17, data: '7,8', month: '09', cons: false},
    ]
  },
  mounted: function () {
  this.$nextTick(function () {
    // Код, который будет запущен только после
    // отображения всех представлений
    $('#calendar').addClass('finished')

  })
}
   
});

var vm = new Vue({
  el: '#app',
  data: {
    email: clientsEmail,
   
    newEmail: null,
    role: null,
    budget: null,
    free: false,
    noBudget: false,
    countries: [],
    lang: "0",
    lang2: 0,
    pass: "0",
    thank: false
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
    setSliderIelts(){
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
    setSliderToefl(){
      $( function() {
        $( "#slider-range-max" ).slider({
          range: "max",
          min: 30,
          max: 120,
          step: 1,
          value: 95,
          slide: function( event, ui ) {
            $( "#amount2" ).val( ui.value );
          }
        });
        $( "#amount2" ).val( $( "#slider-range-max" ).slider( "value" ) );
      } );
    },
    sendForm(){
      $('#questionnaire input').attr('disabled', true);
      $('#questionnaire .custom').addClass('disabled');
      $('#slider-range-max').css({opacity: 0.5});
      $('#slider-range').css({opacity: '0.5'});
      $('.progress-bar').css({width: '100%'}).html('100%');
      this.thank = true;
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