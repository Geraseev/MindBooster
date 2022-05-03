class Validator {

    constructor() {
      this.validations = [
        'data-min-length',
        'data-email-validate',
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
  
      let hasError = false;

      inputsArray.forEach(function(input, obj) {
  
        for(let i = 0; this.validations.length > i; i++) {
          if(input.getAttribute(this.validations[i]) != null) {
  
            let method = this.validations[i].replace("data-", "").replace("-", "");
  
            let value = input.getAttribute(this.validations[i])
  
            hasError = (hasError)? hasError : this[method](input,value);
  
          }
        }
  
      }, this);

      return hasError;
  
    }
  
    minlength(input, minValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
  
      if(inputLength < minValue) {
        this.printMessage(input, errorMessage);
        return true;
      }
      
      return false;
    }
  
    emailvalidate(input) {
      let re = /\S+@\S+\.\S+/;
  
      let email = input.value;
  
      let errorMessage = `Insira um e-mail no padrão abcde@email.com`;
  
      if(!re.test(email)) {
        this.printMessage(input, errorMessage);
        return true;
      }
  
      return false;
    }
    
    required(input) {
  
      let inputValue = input.value;
  
      if(inputValue === '') {
        let errorMessage = `Todos os campos são obrigatório`;
  
        this.printMessage(input, errorMessage);
        return true
      }
  
      return false;
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
    if(validator.validate(form)) {
        return;
    } else {
        console.log("pode prosseguir")
        window.location.href = "./home.html"
    }
  });