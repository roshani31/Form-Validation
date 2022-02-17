
        const form = document.getElementById('form');
        const uname = document.getElementById('uname');
        const email = document.getElementById('email');
        const num = document.getElementById('num');
        const password = document.getElementById('password');
        const conpass = document.getElementById('conpass');
        // const submit = document.querySelector('submit');
        //add event
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            validate();
        })


        const sendData = (unameVal, sRate, count) => {
            if (sRate === count) {
                alert('Registration Successful');
                swal("Welcome! " + unameVal, "Registration Successful", "success");
                location.href = `demo.html?uname=${unameVal}`
            }
        }
        //for final data validation
        const successMsg = (unameVal) => {
            let formCon = document.getElementsByClassName('form-control');
            var count = formCon.length - 1;
            for (var i = 0; i < formCon.length; i++) {
                if (formCon[i].className === "form-control success") {
                    var sRate = 0 + i;
                    sendData(unameVal, sRate, count);
                } else {
                    return false;
                }
            }
        }
        //more email validate
        const isEmail = (emailVal) => {
            var atSymbol = emailVal.indexOf("@");
            if (atSymbol < 1) return false;
            var dot = emailVal.lastIndexOf('.');
            if (dot < atSymbol + 3) return false;
            if (dot === emailVal.length - 1) return false;
            return true;

        }
        // //define the validate function
        const validate = () => {
            const unameVal = uname.value.trim();
            const emailVal = email.value.trim();
            const numVal = num.value.trim();
            const passwordVal = password.value.trim();
            const conpassVal = conpass.value.trim();


            //validate username
            if (unameVal === "") {
                setErrorMsg(uname, 'Be compulsory');
            }
            else if (unameVal.length < 2) {
                setErrorMsg(uname, 'Required minimum 3 character');
            } else {
                setSuccessMsg(uname);
            }

            //validate email
            if (emailVal === "") {
                setErrorMsg(email, 'email cannot be blank');
            }
            else if (!isEmail(emailVal)) {
                setErrorMsg(email, 'Not a valid Email');
            } else {
                setSuccessMsg(email);
            }

            //validate phone
            if (numVal === "") {
                setErrorMsg(num, 'Mobile No.cannot be blank');
            }
            else if (numVal.length != 10) {
                setErrorMsg(num, 'Not a valid Mobile No.');
            } else {
                setSuccessMsg(num);
            }

            //validate password
            if (passwordVal === "") {
                setErrorMsg(password, 'Password cannot be blank');
            }
            else if (passwordVal.length <= 5) {
                setErrorMsg(password, 'Minimum 6 char');
            } else {
                setSuccessMsg(password);
            }

            //validate conpass
            if (conpassVal === "") {
                setErrorMsg(conpass, 'Confirm Password cannot be blank');
            }
            else if (passwordVal !== conpassVal) {
                setErrorMsg(conpass, 'Cannot Match');
            } else {
                setSuccessMsg(conpass);
            }

            successMsg(unameVal);

        }
        function setErrorMsg(input, errormsgs) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = "form-control error";
            small.innerText = errormsgs;
        }
        function setSuccessMsg(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";

        }
    