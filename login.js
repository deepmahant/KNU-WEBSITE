$(document).ready(function() {
    let currentRole = 'student';

    // Role Toggling
    $('#studentBtn').click(function(e) {
        e.preventDefault();
        currentRole = 'student';
        $(this).removeClass('text-white/80').addClass('bg-blue-600 text-white shadow-lg');
        $('#adminBtn').removeClass('bg-blue-600 text-white shadow-lg').addClass('text-white/80');
        $('#idLabel').text('Student ID');
        $('#userId').attr('placeholder', 'Enter your Student ID');
    });

    $('#adminBtn').click(function(e) {
        e.preventDefault();
        currentRole = 'admin';
        $(this).removeClass('text-white/80').addClass('bg-blue-600 text-white shadow-lg');
        $('#studentBtn').removeClass('bg-blue-600 text-white shadow-lg').addClass('text-white/80');
        $('#idLabel').text('Admin ID');
        $('#userId').attr('placeholder', 'Enter your Admin ID');
    });

    // Form Submit
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const id = $('#userId').val();
        const pwd = $('#userPass').val();

        if(id && pwd) {
            Swal.fire({
                title: 'Authenticating...',
                html: 'Please wait while we verify your credentials.',
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            }).then(() => {
                // Simulate success
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: `Welcome, ${currentRole === 'student' ? 'Student' : 'Admin'}`,
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    // Redirect to Dashboard
                    window.location.href = 'dashboard.html';
                });
            });
        }
    });

    // Forgot Password
    $('#forgotPass').click(function(e) {
        e.preventDefault();
        Swal.fire({
            title: 'Reset Password',
            input: 'email',
            inputLabel: 'Enter your registered email address',
            inputPlaceholder: 'user@example.com',
            showCancelButton: true,
            confirmButtonText: 'Send Reset Link',
            confirmButtonColor: '#2563eb'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Sent!', 'A password reset link has been sent to your email.', 'success');
            }
        });
    });

    // OTP Login
    $('#otpLoginBtn').click(function(e) {
        e.preventDefault();
        Swal.fire({
            title: 'Login with OTP',
            input: 'text',
            inputLabel: 'Enter your registered Mobile Number',
            inputPlaceholder: 'e.g. 9876543210',
            showCancelButton: true,
            confirmButtonText: 'Send OTP',
            confirmButtonColor: '#2563eb'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Enter OTP',
                    text: `OTP sent to ${result.value}`,
                    input: 'text',
                    inputPlaceholder: 'XXXXXX',
                    showCancelButton: true,
                    confirmButtonText: 'Verify & Login',
                    confirmButtonColor: '#2563eb'
                }).then((otpResult) => {
                    if (otpResult.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Verified!',
                            showConfirmButton: false,
                            timer: 1000
                        }).then(() => {
                            window.location.href = 'dashboard.html';
                        });
                    }
                });
            }
        });
    });
});
