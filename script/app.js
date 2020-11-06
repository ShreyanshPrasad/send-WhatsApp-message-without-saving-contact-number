$(document).ready(function(){
    $('#btn').on('click', e =>{
        e.preventDefault();
        const countryCode = $('#countryCode').val();

        const phonenoPattern = /^\d{10}$/;       
        const contactNumber = $('#number').val();

        if(contactNumber.match(phonenoPattern)){
            const num = `${countryCode}${contactNumber}`;
            const message = $('#msg').val();
            const url = `https://api.whatsapp.com/send?phone=${num}&text=${message}`;
            window.location = url;
        }else
            alert('Invalid contact number');
    });
});