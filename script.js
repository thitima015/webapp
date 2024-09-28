document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { firstName, lastName, phone, email, password };
    console.log(user);  // ตรวจสอบข้อมูลก่อนเก็บใน localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(storedUser);  // ตรวจสอบข้อมูลใน localStorage
    console.log(email, password);  // ตรวจสอบค่าที่ผู้ใช้กรอก

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password');
    }
});

window.onload = function() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        document.getElementById('displayName').textContent = storedUser.firstName;
        document.getElementById('firstName').textContent = storedUser.firstName;
        document.getElementById('lastName').textContent = storedUser.lastName;
        document.getElementById('phone').textContent = storedUser.phone;
        document.getElementById('email').textContent = storedUser.email;
    } else {
        window.location.href = 'login.html';
    }
};
