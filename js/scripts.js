var vm = new Vue({
	el: '#app',
	data: {
		alertMsg: 'Немає повідомлень',
		// alertMsg: 'Заповніть спочатку анктеу студента і потім, за потреби, додайте інформацію про батьків',
		alertMsgClass: 0,
		alertClasses: ['alert-empty','alert-primary',' alert-warning', ' alert-info', ' alert-success'],
		studentAppFields: [  /*{key:'pib_i',label:''}*/  ],
		parentAppFields: [  /*{key:'pib_i',label:''}*/  ],
    	studentSet: [
	        ['pib','Прізвище та Ім\'я'],
	        ['tel','Телефон'],
	        ['email','E-mail'],
	        ['homeAddress','Домашня адреса'],
	        ['dobStudent','Дата народження']
    	],
    	parentSet: [
    		['pib','Прізвище та Ім\'я'],
    		['tel','Телефон'],
    		['email','E-mail']
    	],
    	parentForm: false,
    	studentAppAnswers: {},
    	parentAppAnswers: {},
    	number: {
    		student: 0,
    		parent: 0
    	}  
	},
	created: function () {
		this.addSet('student');
		this.addSet('parent');
	},
	methods: {
		addSet(key) {
	      let num = ++this.number[key]; 
	      let fieldsArr = key + 'AppFields';
	      let answersObj = key+'AppAnswers';
	      let setOffields = key+'Set';
	      let newIndex = this[fieldsArr].length;
	      let fields = this[setOffields];
	      for (var i = 0; i < fields.length; i++) {
	        Vue.set(this[fieldsArr], newIndex , 
	          { key: fields[i][0]+'_'+num, 
	            label: fields[i][1] }
	        );
	        newIndex++;
	        this[answersObj][fields[i][0]+'_'+num] = null;
	      }
	    }

	}
})