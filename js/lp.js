
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
var intro0 = '\
            <p> Благодарим за обратную связь! Теперь мы знаем, что ты будешь учиться в 11 классе и спешим тебе сообщить что сейчас самое время начать готовиться к поступлению в зарубежные вузы! </p>\
            <p>Мы разработали схему блаблабла опыт блаблабла зачисляем блаблабла все индивидуально блаблабла</p>\
            <p> Чтоб завершить настройку своего профиля, расскажите нам больше о себе, заполнив форму справа</p>';
var intro1 = '2021';
var intro2 = '2022';

var vm = new Vue({
  el: '#app',
  data: {
    group: 0,
    intros: [intro0,intro1,intro2],
    user: 0,
    budget: null,
    free: false,
    disableBudget: false,
    lang: "0",
    lang2: 0,
    pass: "0"
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
    }
  }
});