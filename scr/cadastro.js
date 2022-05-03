class Validator {

    constructor() {
      this.validations = [
        'data-required',
        'data-equal',
      ]
    }
  
    validate(form) {
  
      let currentValidations = document.querySelectorAll('form .error-validation');
  
      if(currentValidations.length) {
        this.cleanValidations(currentValidations);
      }
  
      let inputs = form.getElementsByTagName('input');

      let inputsArray = [...inputs];
  
      inputsArray.forEach(function(input, obj) {
  
        for(let i = 0; this.validations.length > i; i++) {
          if(input.getAttribute(this.validations[i]) != null) {
  

            let method = this.validations[i].replace("data-", "").replace("-", "");
  
            let value = input.getAttribute(this.validations[i])
  
            this[method](input,value);
  
          }
        }
  
      }, this);
  
    }
  
    equal(input, inputName) {
  
      let inputToCompare = document.getElementsByName(inputName)[0];
  
      let errorMessage = `Senha não confere`;
  
      if(input.value != inputToCompare.value) {
        this.printMessage(input, errorMessage);
      }
    }
    

    required(input) {
  
      let inputValue = input.value;
  
      if(inputValue === '') {
        let errorMessage = `Todos os campos são obrigatório`;
  
        this.printMessage(input, errorMessage);
      }
  
    }
  

    printMessage(input, msg) {
    

      let errorsQty = input.parentNode.querySelector('.error-validation');
  

      if(errorsQty === null) {
        let template = document.querySelector('.error-validation').cloneNode(true);
  
        template.textContent = msg;
    
        let inputParent = input.parentNode;
    
        template.classList.remove('template');
    
        inputParent.appendChild(template);
      }
  
    }
  

    cleanValidations(validations) {
      validations.forEach(el => el.remove());
    }
  
  }
  
let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();


submit.addEventListener('click', function(e) {
    e.preventDefault();

    validator.validate(form);
});

function signup(){
    const form = document.getElementById("register-form");

    let inputs = form.getElementsByTagName('input');

    let inputsArray = [...inputs];

    let txtAlert = '';
    inputsArray.forEach((elementInput)=>{
        txtAlert += `${elementInput.id}: ${elementInput.value}\n\r`
    });
    alert(txtAlert);
}