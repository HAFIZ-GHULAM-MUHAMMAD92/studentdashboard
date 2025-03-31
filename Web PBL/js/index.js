function login() {
            let email = document.getElementById('login-email').value;
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
        }

        function logout() {
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('profile').style.display = 'none';
            document.getElementById('login-page').style.display = 'block';
        }

        function viewCourse(courseName) {
            document.getElementById('course-details').innerText = 'You are viewing ' + courseName;
            document.getElementById('html-progress-container').style.display = 'none';
            document.getElementById('css-progress-container').style.display = 'none';
            document.getElementById('js-progress-container').style.display = 'none';
            
            let progressContainerId = courseName === 'JavaScript' ? 'js-progress-container' : `${courseName.toLowerCase()}-progress-container`;
            document.getElementById(progressContainerId).style.display = 'block';
        }

        function showProfile() {
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('profile').style.display = 'block';
        }

        function showDashboard() {
            document.getElementById('dashboard').style.display = 'block';
            document.getElementById('profile').style.display = 'none';
        }

        function updateProfilePic(event) {
            const file = event.target.files[0];
            if (file) {
                document.getElementById('profile-pic').src = URL.createObjectURL(file);
            }
        }