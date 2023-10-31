document.addEventListener('DOMContentLoaded', function() {
    function toggleShape(triangle, rectangle, nextElements) {
        let isTriangleRotated = false;
        triangle.addEventListener('click', () => {
            if (isTriangleRotated) {
                triangle.style.transform = 'rotate(0deg)';
            } else {
                triangle.style.transform = 'rotate(180deg)';
            }
            isTriangleRotated = !isTriangleRotated;
            if (rectangle.style.display === 'none' || rectangle.style.display === '') {
                rectangle.style.display = 'block';
                if (window.matchMedia('(max-width: 1025px)').matches) {
                    nextElements.forEach((element) => {
                        element.style.marginTop = '200px';
                    });
                } else {
                    nextElements.forEach((element) => {
                        element.style.marginTop = '140px';
                    });
                }
            } else {
                rectangle.style.display = 'none';
                nextElements.forEach((element) => {
                    element.style.marginTop = '0';
                });
            }
        });
    }

    const triangle1 = document.getElementById('triangle1');
    const rectangle1 = document.getElementById('rectangle1');
    const q2 = document.getElementById('q2');
    const nextElements1 = [q2];
    toggleShape(triangle1, rectangle1, nextElements1)

    const triangle2 = document.getElementById('triangle2');
    const rectangle2 = document.getElementById('rectangle2');
    const q3 = document.getElementById('q3');
    const nextElements2 = [q3];
    toggleShape(triangle2, rectangle2, nextElements2);

    const triangle3 = document.getElementById('triangle3');
    const rectangle3 = document.getElementById('rectangle3');
    const q4 = document.getElementById('q4');
    const nextElements3 = [q4];
    toggleShape(triangle3, rectangle3, nextElements3);


    const triangle4 = document.getElementById('triangle4');
    const rectangle4 = document.getElementById('rectangle4');
    const nextElements4 = [];
    toggleShape(triangle4, rectangle4, nextElements4);
});
document.addEventListener('click', function (event) {
    const sideMenu = document.querySelector('.side-menu');
    const menuIcon = document.querySelector('.menu-icon');

    if (sideMenu.classList.contains('active') && event.target !== sideMenu && event.target !== menuIcon) {
        sideMenu.classList.remove('active');
    }
});

function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('active');
}

document.querySelector('.menu-icon').addEventListener('click', function (event) {
    event.stopPropagation();
});

document.querySelector('.side-menu').addEventListener('click', function (event) {
    event.stopPropagation();
});

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("videoPlayer");
    const toggleAudioButton = document.getElementById("toggleAudio");

    toggleAudioButton.addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        toggleAudioButton.innerText = "Вимкнути звук";
    } else {
        video.muted = true;
        toggleAudioButton.innerText = "Увімкнути звук";
    }
    });
});

function validatePhoneNumber(inputId, errorId) {
    const phoneNumber = document.getElementById(inputId).value;
    const phoneNumberPattern = /^\+380\d{9}$/;

    if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Будь ласка, введіть свій справжній номер");
        return false;
    } else {
        document.getElementById(errorId).textContent = "";
        return true;
    }
}

function validateForm(course) {
    const fullName = document.querySelector(`#${course}-form [name="full_name"]`).value;
    const phoneNumber = document.querySelector(`#${course}-form [name="phone"]`).value;
    const email = document.querySelector(`#${course}-form [name="email"]`).value;

    if (!fullName || !phoneNumber || !email) {
        alert("Будь ласка, заповніть всі дані");
        return false;
    }

    if (!validatePhoneNumber(`phone${course === 'course1' ? '' : '2'}`, `phone-error${course === 'course1' ? '' : '2'}`)) {
        return false;
    }

    return true;
}

let isCourse1FormVisible = false;
let isCourse2FormVisible = false;

function openForm(course) {
    if (course === 'course1') {
        if (!isCourse1FormVisible) {
            document.getElementById('course1-form').style.display = 'block';
            isCourse1FormVisible = true;
        } else {
            document.getElementById('course1-form').style.display = 'none';
            isCourse1FormVisible = false;
        }
        document.getElementById('course2-form').style.display = 'none';
        isCourse2FormVisible = false;
    } else if (course === 'course2') {
        if (!isCourse2FormVisible) {
            document.getElementById('course2-form').style.display = 'block';
            isCourse2FormVisible = true;
        } else {
            document.getElementById('course2-form').style.display = 'none';
            isCourse2FormVisible = false;
        }
        document.getElementById('course1-form').style.display = 'none';
        isCourse1FormVisible = false;
    }
}

function closeForm(course) {
    document.getElementById(course + '-form').style.display = 'none';
    if (course === 'course1') {
        isCourse1FormVisible = false;
    } else if (course === 'course2') {
        isCourse2FormVisible = false;
    }
}