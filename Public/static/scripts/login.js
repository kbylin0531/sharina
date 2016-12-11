document.login.username.attributes.value = '';
document.login.password.attributes.value = '';

isea.ready(function () {
    isea.loader.use('encrypt',function () {
        document.body.querySelector(".floating-btn").onclick = function () {
            var input = document.body.querySelector(".passwd-input");
            if(!input){
                alert('Something goes wrong!');
            }else{
                input.value = isea.encrypt.md5(isea.encrypt.sha1(input.value));
                console.log(input.value);
                document.login.submit();
                // alert(input.value);
            }
        };
    });
});
