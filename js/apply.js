var applications = [ {},
    { id: 1, 
      surname: 'Ivanov',
      year: 1997, 
      app1Status: 'completed', 
      app2Status: 'close', 
      numS: 1, 
      numP: 2, 
      students: '{"pib_1":"Иванов Василий","tel_1":"0123456789","email_1":"vaasia@gmail.com","homeAddress_1":"Kyiv","dobStudent_1":"01-01-1997"}',
      parents:'{"pib_1":"Иванова Ксения","tel_1":"0987654321","email_1":"kse@gmail.com","pib_2":"Иванов Олег","tel_2":"0246897531","email_2":""}',
      inCRM: false,
      driveSetUp: false,
      StudentVisa: false
    },
  ];

  var vm = new Vue({
  el: '#app',
  data: {
    user: applications[1],
    studentAppFields: [  /*{key:'pib_i',label:''}*/  ],
    parentAppFields: [  /*{key:'pib_i',label:''}*/  ],
    studentAppAnswers: {},
    parentAppAnswers: {},
    studentStatus: 0,
    parentForm: false,
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
      }
  },
  created: function () {
    console.log('create');
    this.addSet('student');
    this.addSet('parent');
    
  },
  computed: {
    numS(){
      return this.user.numS
    },
    fields() {
      return JSON.parse(this.user.students)
    },
    numP(){
      return this.user.numP
    },
    AppStatus(){
      return this.user.app1Status
    },
    fieldsParent() {
      return JSON.parse(this.user.parents)
    }

  },
  methods: {
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
  }
  
  });