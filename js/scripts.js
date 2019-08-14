var code = 'MXxTaGV2Y2hlbmtvfDIwMDI=';
var parseCode = atob(code);
var arrCode = parseCode.split("|");
console.log(arrCode);


var baseComp = [
	{id: 0, key: 'pib', label:'Прізвище та імя', type:'text'},
	{id: 1, key: 'tel', label:'Телефон',type:'text'},
	{id: 2, key: 'email', label:'Email',type:'text'},
];
var baseFamComp = [
	{id: 0, key: 'pib', label:'Прізвище та імя', type:'text'},
	{id: 1, key: 'dobEx', label:'Дата і країна народження',type:'text'},
	{id: 3, key: 'additional', label:'Домашня адреса, зайнятість',type:'text'},
	{id: 4, key: 'marital', label:'Сімейний стан',type:'text'},
];
var baseDivorceComp = [
	{id: 0, key: 'pib', label:'Прізвище та імя', type:'text'},
	{id: 1, key: 'dobEx', label:'Дата і країна народження',type:'text'},
	{id: 3, key: 'additional', label:'Домашня адреса, зайнятість',type:'text'},
	{id: 4, key: 'marital', label:'Сімейний стан',type:'text'},
	];
var vm = new Vue({
	el: '#app',
	data: {
		//view
		isVisible: false,
		authorization: false,
		generalApp: true,
		visaApp: true,
		generalAppShow: false,
		visaAppShow: true,
		listGroupLoad: true,

		activeStudentAppSave: true,
		activeStudentAppSend: true,

		pass:  arrCode[2],
		username: arrCode[1],

		//ОСНОВНАЯ АНКЕТА
		alertMsg: 'Немає повідомлень',
		alertMsgClass: 0,
		alertClasses: ['alert-empty','alert-primary',' alert-warning', ' alert-info', ' alert-success'],
		studentAppFields: [  /*{key:'pib_i',label:''}*/  ],
		studentAppAnswers: {},
		studentStatus: 0,
		parentAppFields: [  /*{key:'pib_i',label:''}*/  ],
		parentAppAnswers: {},
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
		number: {
			student: 0,
			parent: 0
		},
		parentForm: false,
		// visa application
		gender: 'male',
		maritalAll: ['Single','Married','Divorced','Widow'],
		marital: 1,
		sectionA: {
			id: 'A', title: 'Main', collapsed: false, 
			answers: {pib: null, hasMaiden: false, maiden: null, dob: null, cityofbirth: null},
			fields: [
				{id: 0, num: "1. ", key: 'pib', label: 'Прізвище та ім\'я', type: 'text'},

				{id: 1, num: "2. ", key: 'hasMaiden', common: 'Ви коли-небудь змінювали прізвище?', type: 'radioyn'},

				{id: 2, key: 'maiden',label: 'Попередні прізвища', type: 'conditional', input: 'text', base: 'hasMaiden' },

				{id: 3, num: "3. ", key: 'dob', label: 'Дата народження', type: 'text'},

				{id: 4, num: "4. ", key: 'cityofbirth', label: 'Місто та країна народження', type: 'text'},
				]
			},
		sectionB: {
			id: 'B', title: 'Family Information', collapsed: true, 
			answers: {
						marital: 0,
						supposePib: null, supposeDob: null, supposeNat: null, supposeCityofbirth: null, supposeWork: null,
						otherMerrige: false, numOtherM: 1, pibOtherS_1: null, dobOtherS_1: null, natOtherS_1: null, startM_1: null, endM_1: null, countryTer_1: null,
						motherPib: null, motherTel: null, motherEmail: null, fatherPib: null, fatherTel: null, fatherEmail: null,noChildrens: true, childrens: [{pib_0: null, dob_0: null, countryofbirth_0: null, additional_0: null, marital_0: null}],noSisters: true, sisters: [{pib_0: null, dob_0: null, countryofbirth_0: null, additional_0: null, marital_0: null}], relatives: null},
			fields: [
				{id: 0, key: 'marital', label: 'Сімейний стан', type: 'select', options: ['Single','Married','Divorced','Widow']},
				{id: 1, key: 'supposePib', label: 'Прізвище та ім\'я дружини(чоловіка)', type: 'conditionalNotEquel', base: 'marital', val: 0, input: 'text' },
				{id: 4, key: 'supposeDob', label: 'Дата народження', type: 'conditionalNotEquel', base: 'marital', val: 0, input: 'text' },
				{id: 5, key: 'supposeNat', label: 'Громадянство', type: 'conditionalNotEquel', base: 'marital', val: 0, input: 'text' },
				{id: 6, key: 'supposeCityofbirth', label: 'Місто та країна народження', type: 'conditionalNotEquel', base: 'marital', val: 0, input: 'text' },
				{id: 7, key: 'supposeWork', label: 'Зайнятість (непрацює/працює/ким працює)', type: 'conditionalNotEquel', base: 'marital', val: 0, input: 'text' },
				{id: 8, key: 'motherPib', label: 'Прізвище та ім\'я матері', type: 'text'},
				{id: 9, key: 'motherTel', label: 'Телефон', type: 'text'},
				{id: 10, key: 'motherEmail', label: 'Email', type: 'text'},	
				{id: 11, key: 'fatherPib', label: 'Прізвище та ім\'я батька', type: 'text'},
				{id: 12, key: 'fatherTel', label: 'Телефон', type: 'text'},
				{id: 13, key: 'fatherEmail', label: 'Email', type: 'text'},	
				{id: 14, key: 'noChildrens', label: 'Дітей не маю', type: 'checkbox',  checked: true, },
				{id: 15, key: 'childrens',label: 'Інформація про дитину:', num: 1, type: 'conditionalreverse', input: 'group', comps: baseFamComp, base: 'noChildrens' },	
				{id: 16, key: 'noSisters', label: 'Братів та сестер не маю', type: 'checkbox',  checked: true, },
				{id: 17, key: 'sisters',label: 'Інформація про брата(сестру):', num: 1, type: 'conditionalreverse', input: 'group', comps: baseFamComp, base: 'noSisters' },	
				{id: 18, key: 'relatives', label: 'Чи є у вас родичі в країні, де ви будете навчатись?', type: 'text'},		
				]
			},
		sectionC: {id: 'C', title: 'Работа/Образование', collapsed: true, 
			answers:{noHigher: true, university: null, date: null, program: null, notWorking: true, work: null, start: null, income: null,},
			fields: [
				{id: 0, key: 'noHigher', label: 'Я не здобував(-ла) ще вищу освіту ', type: 'checkbox',  checked: true, },
				{id: 1, key: 'university',label: 'Назва університету', type: 'conditionalreverse', input: 'text',base: 'noHigher' },
				{id: 2, key: 'date',label: 'Дата вступу і випуску', type: 'conditionalreverse', input: 'text',base: 'noHigher' },
				{id: 3, key: 'program',label: 'Назва спеціальності', type: 'conditionalreverse', input: 'text',base: 'noHigher' },
				{id: 4, key: 'notWorking', label: 'Я не працюю', type: 'checkbox',  checked: true, },
				{id: 5, key: 'work',label: 'МІсце роботи, посада', type: 'conditionalreverse', input: 'text',base: 'notWorking'},
				{id: 6, key: 'start',label: 'Дата початку роботи', type: 'conditionalreverse', input: 'text',base: 'notWorking' },
				{id: 7, key: 'income',label: 'Середній дохід в місяць', type: 'text'},
				]
		},
		sectionD: {id: 'D', title: 'Громадянство', collapsed: true, 
			answers:{nationality: 'Україна', nochanges:true, noresidense:true, noperiod6:true, nogreencard:true, nogreencardget:true,},
			fields: [
				{id: 0, key: 'nationality',label: 'Громадянство', type: 'text'},
				{id: 1, key: 'nochanges', label: 'Я ніколи не змінював громадянство', type: 'checkbox',  checked: true, },
				{id: 2, key: 'noresidense', label: 'Я ніколи не отримував дозвіл на проживання в іншій країні', type: 'checkbox',  checked: true, },
				{id: 3, key: 'noperiod6', label: 'Я ніколи не проживав в іншій країні більше ніж 6 місяців підряд', type: 'checkbox',  checked: true, },
				{id: 4, key: 'nogreencard', label: 'У мене немає Грін карти', type: 'checkbox',  checked: true, },
				{id: 5, key: 'nogreencardget', label: 'Я ніколи не подавався на отримання Грін карти', type: 'checkbox',  checked: true, },
				]
		},
		sectionE: {id: 'E', title: 'Поїздка', collapsed: false, 
			answers:{entry:null, nopreviousvisa:false, previousvisas: null, norejectes:false, rejectes: null, notravels: false, travels: null},
			fields: [

				{id: 0, num: "1. ", key: 'entry',label: 'Запланована дата в\'їзду в країну', type: 'text'},

				{id: 1, num: "2. ", key: 'nopreviousvisa', common: 'Чи отримували ви візи в цю або інші країни?', type: 'radioyn',  },

				{id: 2, key: 'previousvisas',label: 'Коли і в які країни ви отримали візу', type: 'conditional', input: 'textarea', base: 'nopreviousvisa' },

				{id: 3, num: "3. ", key: 'norejectes', common: 'Чи отримували ви відмову у візі в цю або інші країни?', type: 'radioyn'},

				{id: 4, key: 'rejectes',label: 'Коли і в які країни ви подавались', type: 'conditional', input: 'textarea', base: 'norejectes' },

				{id:5, num: "4. ",  key: 'notravels', common: 'Чи подорожували ви в інші країни протягом останніх 10 років?', type: 'radioyn' },

				{id: 6, key: 'travels',label: "Країна, дата в'їзду, тривалість поїздки, причина поїздки", type: 'conditional', input: 'textarea', base: 'notravels' },

				]
		},

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
				this.authorization = false;
				this.listGroupLoad = true
				if(this.generalApp){
					this.generalAppShow = true;
				}else{
					if(this.visaApp){
						this.generalAppShow = true;
					}
				}
			}

		},

		addSet(key) {
		  let num = ++this.number[key]; 
		  let fieldsArr = key + 'AppFields';
		  let answersObj = key+ 'AppAnswers';
		  let setOffields = key+'Set';
		  let newIndex = this[fieldsArr].length;
		  let fields = this[setOffields];
		  // debugger;
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
