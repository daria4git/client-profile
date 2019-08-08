var vm = new Vue({
	el: '#app',
	data: {
		alertMsg: 'Немає повідомлень',
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
    	isDisabledStudentSaveBtn: true,
    	activeSend: false,
    	studentAppProces: 0,
    	parentSet: [
    		['pib','Прізвище та Ім\'я'],
    		['tel','Телефон'],
    		['email','E-mail']
    	],
    	parentForm: false,
    	access: false,
    	pass: '1992',
    	studentAppAnswers: {},
    	studentStatus: 0,
    	parentAppAnswers: {},
    	number: {
    		student: 0,
    		parent: 0
    	} ,
	},
	computed: {
		//не работает
		btn: function(){
			// return this.studentAppAnswers['pib_1']
		}
	},
	created: function () {
		this.addSet('student');
		this.addSet('parent');
		//неработает
		// setTimeout(function(){this.setActive()},5000)
	},
	methods: {
		checkPass(value) {
			// console.log();
			if(value === this.pass) {
				console.log('guess')
				this.access = true;
			}

		},

		addSet(key) {
	      let num = ++this.number[key]; 
	      let fieldsArr = key + 'AppFields';
	      let answersObj = key+ 'AppAnswers';
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
	    },
	    setActive: function(){
	    	this.isDisabledStudentSaveBtn = false
	    },
	    saveToLS: function() {
	    	this.activeSend=true;

	    	let jsn = JSON.stringify(this.studentAppAnswers);
  			localStorage.setItem('studentAppAnswers', jsn);
	    	jsn = JSON.stringify(this.studentAppFields);
  			localStorage.setItem('studentAppFields', jsn);

	    	jsn = JSON.stringify(this.parentAppAnswers);
  			localStorage.setItem('parentAppAnswers', jsn);

	    	jsn = JSON.stringify(this.parentAppFields);
  			localStorage.setItem('parentAppFields', jsn);

  			localStorage.setItem('studentStatus', this.studentStatus);
  			localStorage.setItem('parentForm', this.parentForm);
  			this.alertMsg = "Ви щойно зберегли анктеу в цьому браузері. Щоб ми її побачили - натисніть 'Надіслати в EduSteps'"
			this.alertMsgClass = 3
	    },
	    sendToEdusteps: function(){
	    	
	    }

	}
});
setTimeout(function(){
vm.isDisabledStudentSaveBtn = false
},5000);
if(localStorage.getItem('studentAppFields')) {
	var jsnStr = localStorage.getItem('studentAppFields');
	var oldAnswers = JSON.parse(jsnStr);
	vm.studentAppFields = oldAnswers;
}
if(localStorage.getItem('studentAppAnswers')) {
	var jsnStr = localStorage.getItem('studentAppAnswers');
	var oldAnswers = JSON.parse(jsnStr);
	vm.studentAppAnswers = oldAnswers;
}
if(localStorage.getItem('parentAppFields')) {
	var jsnStr = localStorage.getItem('parentAppFields');
	var oldAnswers = JSON.parse(jsnStr);
	vm.parentAppFields = oldAnswers;
}
if(localStorage.getItem('parentAppAnswers')) {
	var jsnStr = localStorage.getItem('parentAppAnswers');
	var oldAnswers = JSON.parse(jsnStr);
	vm.parentAppAnswers = oldAnswers;
}
if(localStorage.getItem('studentStatus')) {
	let status = localStorage.getItem('studentStatus');
	vm.studentStatus = parseInt(status);
}
if(localStorage.getItem('parentForm')) {
	let status = localStorage.getItem('parentForm');
	vm.parentForm = !!status;
}