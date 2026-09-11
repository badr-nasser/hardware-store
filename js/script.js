$(document).ready(function() {
    
    $('#loginForm').on('submit', function(event) {
        var form = $(this)[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            var toastElement = document.getElementById('successToast');
            if (toastElement) {
                var toast = new bootstrap.Toast(toastElement);
                toast.show();
            }
        }
        $(this).addClass('was-validated');
    });

    $('.ajax-btn').on('click', function() {
        var fileName = $(this).data('file'); 
        
        var filePath = '../data/' + fileName;

        $.ajax({
            url: filePath,
            method: 'GET',
            success: function(response) {
                $('#modalContent').html(response);
                
                var myModal = new bootstrap.Modal(document.getElementById('ajaxModal'));
                myModal.show();
            },
            error: function() {
                $('#modalContent').html('<p class="text-warning">ملاحظة: لكي يعمل الـ Ajax بشكل كامل، يجب تشغيل الموقع على Local Server (مثل Live Server).</p>');
                var myModal = new bootstrap.Modal(document.getElementById('ajaxModal'));
                myModal.show();
            }
        });
    });

});
