function validation() {

    const user = document.getElementById('Name').value;                                                        //This code Name Input
    const emails = document.getElementById('Email').value;                                                     //This code Email Input
    const mobileNumber = document.getElementById('mobilePhone').value.replaceAll(/\s/g,'');                    //This code Number Input


/*--------------Full-Name-Validation----------------------*/


    const UserPattern = /^[A-Za-z. ]{3,15}$/;                                                                  //This Pattern Name Regular Experssion

    const UserMessage1 = "Please fillup the username";
    const UserMessage2 = " * Username Charter must be between 2 and 20";
    const UserMessage3 = " * Please Put The Valid Name";

    if (user == "") {
        document.getElementById('username').innerHTML = UserMessage1;
        return false;
    } 
    if ((user.length <= 2) || (user.length >= 20)) {
        document.getElementById('username').innerHTML = UserMessage2;
        return false;
    }
    if (UserPattern.test(user)) {
        document.getElementById('username').innerHTML = " ";

    } else {
        document.getElementById('username').innerHTML = UserMessage3;
        return false;
    }


/*--------------Email-Validation----------------------*/
  
    
    const Mailclient = /^[A-Za-z_]{3,}@[A-za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;                                       //This Pattern Email Regular Expression

    const EmailMessage1 = " * Please Mention Mail Id";
    const EmailMessage2 = "  *Sorry '@' Symbol Misssing ";
    const EmailMessage3 = " Sorry ' . ' Symbol Missing";
    const EmailMessage4 = " Please Put The Valid Name";


    if (emails == "") {
        document.getElementById('emailids').innerHTML = EmailMessage1;
        return false;
    } else
        if (emails.indexOf('@') <= 0) {
            document.getElementById('emailids').innerHTML = EmailMessage2;
            return false;
        } else
            if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
                document.getElementById('emailids').innerHTML = EmailMessage3;
                return false;
            } else
                if (Mailclient.test(emails)) {
                    document.getElementById('emailids').innerHTML = " ";

                } else {
                    document.getElementById('emailids').innerHTML = EmailMessage4;
                    return false;
                }

/*--------------Number-Validation----------------------*/

    const NumPattern = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;                                        //This Pattern Number Regular Experssion

    const NumMessage1 = "Please fill the mobile Number field";
    const NumMessage3 = " * Mobile Number must be 14 digits only";


    if (mobileNumber == "") {
        document.getElementById('usernumbs').innerHTML = NumMessage1;
        return false;
    }

    if (mobileNumber.length != 14) {
        document.getElementById('usernumbs').innerHTML = NumMessage3;
        return false;
    }
    const reliance=mobileNumber.substring(6,9);
    if(parseInt(reliance)>= 621 && parseInt(reliance)<= 799){
        document.getElementById('usernumbs').innerHTML = "The mobile number is reliance jio";
        thankYou();
        return false;
    } else if(parseInt(reliance)>= 801 && parseInt(reliance)<= 920){
        document.getElementById('usernumbs').innerHTML = "The mobile number is idea";
        thankYou();
        return false;
    } else if(parseInt(reliance)>= 921 && parseInt(reliance)<= 999){
        document.getElementById('usernumbs').innerHTML = "The mobile number is vodafone";
        thankYou();
        return false;
    } 
}
function thankYou(){
    if(document.getElementById('usernumbs').innerHTML.length!=0){
        alert("\Thank you");
    }
}

/*--------------Number-digit-Validation----------------------*/

document.getElementById('mobilePhone').addEventListener('keyup', function(evt)
  {
    const phoneNumber = document.getElementById('mobilePhone');
    const charCode = (evt.which) ? evt.which : evt.keyCode;                                                                  //   Evt Mains Events
    phoneNumber.value = phoneFormat(phoneNumber.value);
  }
  );
  
document.getElementById('mobilePhone').value = phoneFormat(document.getElementById('mobilePhone').value);                     //  format the phone number on page load
  function numberPressed(evt) {                                                                                               // A determine function pressed key is an integer
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
               return false;
    }
            return true;
  }
  
  
  function phoneFormat(input) {                                                                                              // A function to format text look like a phone number
    input = input.replace(/\D/g, '');
    input = input.substring(0, 10);                                                                                          // The Trim remaining input to 10 characters & preserve phone number format
  
    const size = input.length;                                                                                               // Based the length string & we add formatting as necessary
    if (size == 0) {
            input = input;
    } else if (size < 4) {
                input = '(' + input;
    } else if (size < 7) {
                 input = '-' + input.substring(0, 3) + ')' + input.substring(3, 6);
    } else {
            input = '(' + input.substring(0, 3) + ') ' + ' - ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
    }
         return input;

}

/*--------------Submit-button-Validation----------------------*/
 