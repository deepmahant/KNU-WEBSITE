$(document).ready(function () {

    // --- Real Time Clock ---
    function updateTime() {
        const now = new Date();
        $('#dateTimeDisplay').text(now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }));
    }
    setInterval(updateTime, 1000);
    updateTime();

    // --- Sidebar Logic ---
    let sidebarOpen = true;
    $('#toggleSidebar').click(function () {
        sidebarOpen = !sidebarOpen;
        if (sidebarOpen) {
            $('#sidebar').removeClass('w-20').addClass('w-72');
            $('.sidebar-text').fadeIn(200);
        } else {
            $('#sidebar').removeClass('w-72').addClass('w-20');
            $('.sidebar-text').hide();
            // close any open submenus
            $('.submenu').slideUp();
            $('.submenu-toggle').removeClass('active');
        }
    });

    // Submenu toggle
    $('.submenu-toggle').click(function () {
        if (!sidebarOpen) $('#toggleSidebar').click(); // open sidebar if closed
        $(this).toggleClass('active');
        $(this).next('.submenu').slideToggle(300);
    });

    // Placeholder alerts for extended features
    $(document).on('click', '.placeholder-feature', function (e) {
        e.preventDefault();
        const featureName = $(this).text().trim() || "Feature";
        Swal.fire({
            icon: 'info',
            title: featureName,
            text: 'This feature is currently under development. Please check back later!',
            confirmButtonColor: '#2563eb'
        });
    });

    // Logout
    $('#logoutBtn').click(function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Ready to Leave?',
            text: 'You are about to logout from your portal.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'login.html';
            }
        });
    });


    // --- Data Models ---
    const courseData = {
        'BCA': { semesters: 8, subjects: ['C Programming', 'Data Structures', 'Database Management Systems', 'Java', 'Software Engineering', 'Web Technologies', 'Computer Networks'] },
        'BBA': { semesters: 8, subjects: ['Business Economics', 'Financial Accounting', 'Marketing Management', 'Human Resource Management', 'Business Law', 'Organizational Behavior'] },
        'MCA': { semesters: 8, subjects: ['Advanced Java', 'Python Programming', 'Machine Learning', 'Cloud Computing', 'Artificial Intelligence', 'Cyber Security'] },
        'MBA': { semesters: 8, subjects: ['Corporate Finance', 'Strategic Management', 'Business Analytics', 'Digital Marketing', 'Operations Management', 'Global Business'] }
    };


    // --- View Templates ---
    const views = {
        'home-section': `
            <div class="space-y-6">
                <!-- Slider -->
                <div class="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl relative group">
                    <div class="swiper mySwiper w-full h-full">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide relative">
                                <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80" alt="Campus 1" class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 text-white">
                                    <div>
                                        <h3 class="text-3xl font-bold mb-2">Welcome to Kazi Nazrul University</h3>
                                        <p class="text-white/80">Empowering minds, shaping the future of education directly from our state-of-the-art campus.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relative">
                                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80" alt="Campus 2" class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 text-white">
                                    <div>
                                        <h3 class="text-3xl font-bold mb-2">World-Class Facilities</h3>
                                        <p class="text-white/80">Experience cutting edge lab equipment and massive physical & digital libraries.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relative">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80" alt="Campus 3" class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 text-white">
                                    <div>
                                        <h3 class="text-3xl font-bold mb-2">Vibrant Student Life</h3>
                                        <p class="text-white/80">Join numerous clubs, sports teams, and cultural events.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next !text-white opacity-0 group-hover:opacity-100 transition"></div>
                        <div class="swiper-button-prev !text-white opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                </div>

                <!-- Available Courses -->
                <h3 class="text-2xl font-bold text-slate-800 mt-8 mb-4">Our Premium Programs</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="glass-card bg-white p-6 rounded-2xl shadow-sm hover-lift cursor-pointer border border-blue-100">
                        <div class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4"><i class="fas fa-laptop-code"></i></div>
                        <h4 class="text-lg font-bold text-slate-800">BCA</h4>
                        <p class="text-sm text-slate-500 mt-2">Bachelor of Computer Application</p>
                    </div>
                    <div class="glass-card bg-white p-6 rounded-2xl shadow-sm hover-lift cursor-pointer border border-green-100">
                        <div class="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mb-4"><i class="fas fa-chart-line"></i></div>
                        <h4 class="text-lg font-bold text-slate-800">BBA</h4>
                        <p class="text-sm text-slate-500 mt-2">Bachelor of Business Administration</p>
                    </div>
                    <div class="glass-card bg-white p-6 rounded-2xl shadow-sm hover-lift cursor-pointer border border-purple-100">
                        <div class="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4"><i class="fas fa-microchip"></i></div>
                        <h4 class="text-lg font-bold text-slate-800">MCA</h4>
                        <p class="text-sm text-slate-500 mt-2">Masters of Computer Application</p>
                    </div>
                    <div class="glass-card bg-white p-6 rounded-2xl shadow-sm hover-lift cursor-pointer border border-orange-100">
                        <div class="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl mb-4"><i class="fas fa-briefcase"></i></div>
                        <h4 class="text-lg font-bold text-slate-800">MBA</h4>
                        <p class="text-sm text-slate-500 mt-2">Master of Business Administration</p>
                    </div>
                </div>
            </div>
        `,
        'admission-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto animate-[fadeIn_0.3s_ease-in-out]">
                <div class="border-b border-slate-200 pb-4 mb-6">
                    <h2 class="text-2xl font-bold text-slate-800">Student Admission Form</h2>
                    <p class="text-slate-500 text-sm mt-1">Enroll into KNU's premium programs.</p>
                </div>
                <form id="admissionForm" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                            <input type="text" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                            <input type="text" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Date of Birth</label>
                            <input type="date" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Gender</label>
                            <select class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-slate-700 mb-2">Select Course</label>
                            <select class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                                <option value="">Choose Course</option>
                                <option value="BCA">BCA (Bachelor of Computer Application)</option>
                                <option value="BBA">BBA (Bachelor of Business Administration)</option>
                                <option value="MCA">MCA (Master of Computer Application)</option>
                                <option value="MBA">MBA (Master of Business Administration)</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-slate-700 mb-2">Previous Qualifications (Percentage)</label>
                            <input type="number" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. 85.5" required>
                        </div>
                    </div>
                    <div class="pt-4 flex justify-end">
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition shadow-md">Submit Admission Application</button>
                    </div>
                </form>
            </div>
        `,
        'registration-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto animate-[fadeIn_0.3s_ease-in-out]">
                <div class="border-b border-slate-200 pb-4 mb-6">
                    <h2 class="text-2xl font-bold text-slate-800">Student Registration Form</h2>
                    <p class="text-slate-500 text-sm mt-1">Verify Admission ID to register.</p>
                </div>
                
                <!-- ID Verification Step -->
                <div id="verifyAdmissionStep" class="mb-6 p-5 bg-blue-50 rounded-xl border border-blue-100">
                    <label class="block text-sm font-medium text-blue-800 mb-2">Enter Admission ID for Verification</label>
                    <div class="flex gap-4">
                        <input type="text" id="verifyAddmId" class="flex-1 border border-blue-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. KNU-2026-XXXX">
                        <button id="verifyBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition shadow-md whitespace-nowrap">Verify ID</button>
                    </div>
                </div>

                <!-- Registration Form (Hidden Initially) -->
                <form id="registrationForm" class="space-y-6 hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <input type="text" id="regName" class="w-full border border-slate-300 bg-slate-50 rounded-lg px-4 py-2.5" readonly>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Course Allocated</label>
                            <input type="text" id="regCourse" class="w-full border border-slate-300 bg-slate-50 rounded-lg px-4 py-2.5" readonly>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Blood Group</label>
                            <select class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                                <option value="">Select</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Aadhar Number</label>
                            <input type="text" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-slate-700 mb-2">Permanent Address</label>
                            <textarea class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" rows="3" required></textarea>
                        </div>
                    </div>
                    <div class="pt-4 flex justify-end">
                        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-lg transition shadow-md">Complete Registration</button>
                    </div>
                </form>
            </div>
        `,
        'exam-reg-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
                <div class="border-b border-slate-200 pb-4 mb-6">
                    <h2 class="text-2xl font-bold text-slate-800">Exam Registration Form</h2>
                    <p class="text-slate-500 text-sm mt-1">Select your dynamic subjects based on course and semester.</p>
                </div>
                <form id="examForm" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Course</label>
                            <select id="examCourse" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                                <option value="">Select Course</option>
                                <option value="BCA">BCA</option>
                                <option value="BBA">BBA</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Semester</label>
                            <select id="examSem" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50" disabled required>
                                <option value="">Select Course First</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-slate-700 mb-2">Select Subjects</label>
                            <div id="examSubjects" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 border border-slate-200 rounded-lg bg-slate-50">
                                <p class="text-sm text-slate-500 italic col-span-full">Select course and semester to load subjects.</p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-4 flex justify-between items-center">
                        <p class="font-bold text-red-600 text-lg">Exam Fee: ₹<span id="examFeeVal">0</span></p>
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition shadow-md">Register & Pay</button>
                    </div>
                </form>
            </div>
        `,
        'marksheet-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
                <div class="border-b border-slate-200 pb-4 mb-6 no-print">
                    <h2 class="text-2xl font-bold text-slate-800">Auto Marksheet Generator</h2>
                    <p class="text-slate-500 text-sm mt-1">Enter marks to generate grade automatically.</p>
                </div>
                
                <div class="space-y-6 no-print">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-slate-700 mb-2">Student Name</label>
                            <input type="text" id="msName" class="w-full border border-slate-300 rounded-lg px-4 py-2" value="Deep Mahanta">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Subject 1 Mark</label>
                            <input type="number" id="msSub1" class="ms-input w-full border border-slate-300 rounded-lg px-4 py-2" value="85">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Subject 2 Mark</label>
                            <input type="number" id="msSub2" class="ms-input w-full border border-slate-300 rounded-lg px-4 py-2" value="92">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Subject 3 Mark</label>
                            <input type="number" id="msSub3" class="ms-input w-full border border-slate-300 rounded-lg px-4 py-2" value="78">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Subject 4 Mark</label>
                            <input type="number" id="msSub4" class="ms-input w-full border border-slate-300 rounded-lg px-4 py-2" value="88">
                        </div>
                        <div>
                            <button id="calcMarksheetBtn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition shadow-md">Generate</button>
                        </div>
                    </div>
                </div>

                <!-- Generated Output -->
                <div id="printArea" class="mt-10 border-2 border-slate-800 p-8 pt-10 hidden relative bg-white mx-auto max-w-2xl">
                    <div class="absolute top-4 left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">K</div>
                    <div class="text-center mb-8">
                        <h1 class="text-3xl font-extrabold text-slate-900 uppercase">Kazi Nazrul University</h1>
                        <p class="text-slate-600 font-medium tracking-widest mt-1">OFFICIAL MARKSHEET</p>
                    </div>
                    
                    <div class="mb-6 border-b pb-4">
                        <p class="text-lg"><strong>Name:</strong> <span id="outName"></span></p>
                        <p class="text-lg"><strong>Program:</strong> BCA (Semester 4)</p>
                    </div>

                    <table class="w-full text-left border-collapse border border-slate-400 mb-6">
                        <thead>
                            <tr class="bg-slate-100">
                                <th class="border border-slate-400 px-4 py-2">Subject Code</th>
                                <th class="border border-slate-400 px-4 py-2">Subject Name</th>
                                <th class="border border-slate-400 px-4 py-2">Obtained Marks</th>
                                <th class="border border-slate-400 px-4 py-2">Max Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border border-slate-400 px-4 py-2">MCA101</td><td class="border border-slate-400 px-4 py-2">Data Structures</td><td class="border border-slate-400 px-4 py-2" id="outSub1"></td><td class="border border-slate-400 px-4 py-2">100</td></tr>
                            <tr><td class="border border-slate-400 px-4 py-2">MCA102</td><td class="border border-slate-400 px-4 py-2">C Programming</td><td class="border border-slate-400 px-4 py-2" id="outSub2"></td><td class="border border-slate-400 px-4 py-2">100</td></tr>
                            <tr><td class="border border-slate-400 px-4 py-2">MCA103</td><td class="border border-slate-400 px-4 py-2">Digital Logic</td><td class="border border-slate-400 px-4 py-2" id="outSub3"></td><td class="border border-slate-400 px-4 py-2">100</td></tr>
                            <tr><td class="border border-slate-400 px-4 py-2">MCA104</td><td class="border border-slate-400 px-4 py-2">Mathematics</td><td class="border border-slate-400 px-4 py-2" id="outSub4"></td><td class="border border-slate-400 px-4 py-2">100</td></tr>
                        </tbody>
                    </table>

                    <div class="flex justify-between items-center bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div>
                            <p class="text-sm text-slate-500">Total Marks</p>
                            <p class="text-xl font-bold" id="outTotal">0 / 400</p>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500">Percentage</p>
                            <p class="text-xl font-bold" id="outPercent">0%</p>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500">Overall Grade</p>
                            <p class="text-3xl font-extrabold text-blue-600" id="outGrade">A</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-6 text-center hidden no-print" id="printBtnContainer">
                    <button class="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition" onclick="window.print()"><i class="fas fa-print mr-2"></i> Print Marksheet</button>
                </div>
            </div>
        `,
        'id-card-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
                <div class="flex-1 space-y-4 no-print">
                    <div class="border-b border-slate-200 pb-4 mb-4">
                        <h2 class="text-2xl font-bold text-slate-800">Generate ID Card</h2>
                        <p class="text-slate-500 text-sm">Upload photo and fill details.</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Upload Photo</label>
                        <input type="file" id="idPhotoInput" class="w-full border p-2 rounded-lg" accept="image/*">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Name</label>
                        <input type="text" id="idNameInput" class="w-full border p-2 rounded-lg" value="Deep Mahanta">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Course & Sem</label>
                        <input type="text" id="idCourseInput" class="w-full border p-2 rounded-lg" value="BCA - Sem 4">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Student ID</label>
                        <input type="text" id="idNumInput" class="w-full border p-2 rounded-lg" value="KNU26-BCA-001">
                    </div>
                    <button class="w-full bg-blue-600 text-white py-2 rounded-lg mt-4" onclick="window.print()">Print ID Card</button>
                </div>

                <!-- Card Live Preview -->
                <div class="flex-1 flex justify-center items-center bg-slate-100 p-6 rounded-xl overflow-hidden" id="printArea">
                    <div class="w-64 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 relative">
                        <div class="bg-blue-700 h-24 absolute top-0 w-full z-0 flex justify-center">
                            <h3 class="text-white font-bold text-sm text-center mt-2 w-full uppercase tracking-widest px-2">Kazi Nazrul University</h3>
                        </div>
                        <div class="relative z-10 flex flex-col items-center pt-12 pb-6 px-4">
                            <div class="w-24 h-24 bg-white p-1 rounded-full shadow-lg mb-4">
                                <img id="idPhotoPreview" src="https://ui-avatars.com/api/?name=Deep+Mahanta&background=2563eb&color=fff&size=150" alt="Profile" class="w-full h-full rounded-full object-cover">
                            </div>
                            <h2 class="text-lg font-bold text-slate-800 text-center" id="idNamePreview">Deep Mahanta</h2>
                            <p class="text-blue-600 font-semibold text-sm mb-1" id="idNumPreview">KNU26-BCA-001</p>
                            <p class="text-slate-500 text-sm mb-4" id="idCoursePreview">BCA - Sem 4</p>
                            
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KNU26-BCA-001" class="w-16 h-16 opacity-80" alt="QR">
                            
                            <div class="mt-4 border-t border-slate-200 w-full pt-2">
                                <p class="text-[10px] text-center text-slate-400">Valid till Aug 2028<br>Authorized Signatory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'reg-card-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
                <div class="border-b border-slate-200 pb-4 mb-6 flex justify-between items-center no-print">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-800">Registration Card</h2>
                        <p class="text-slate-500 text-sm">Download your official university registration card.</p>
                    </div>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg" onclick="window.print()"><i class="fas fa-download mr-2"></i>Download</button>
                </div>
                
                <div id="printArea" class="border-4 border-double border-blue-900 p-8 bg-blue-50/50 max-w-3xl mx-auto relative rounded-lg">
                    <!-- Watermark -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-[0.03] z-0 overflow-hidden pointer-events-none">
                        <i class="fas fa-university text-[300px]"></i>
                    </div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center justify-between border-b-2 border-blue-900 pb-4 mb-6">
                            <div class="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">K</div>
                            <div class="text-center flex-1">
                                <h1 class="text-3xl font-black text-blue-900 uppercase">Kazi Nazrul University</h1>
                                <p class="text-blue-700 font-bold tracking-widest mt-1">STUDENT REGISTRATION CERTIFICATE</p>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-2 space-y-4 text-lg">
                                <p><strong>Registration Number:</strong> <span class="text-blue-800 font-bold">KNU-REG-2026-99123</span></p>
                                <p><strong>Student Name:</strong> Deep Mahanta</p>
                                <p><strong>Course Registered:</strong> Bachelor of Computer Application (BCA)</p>
                                <p><strong>Session:</strong> 2026 - 2029</p>
                                <p><strong>Admitted Date:</strong> 09 April 2026</p>
                            </div>
                            <div class="flex justify-end items-start">
                                <div class="w-32 h-32 border-2 border-slate-300 p-1 bg-white shadow-sm">
                                    <img src="https://ui-avatars.com/api/?name=Deep+Mahanta&background=2563eb&color=fff&size=200" alt="Profile" class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-12 flex justify-between border-t border-slate-300 pt-8">
                            <div class="text-center">
                                <div class="border-b border-slate-800 w-32 mb-2 mx-auto"></div>
                                <p class="text-sm font-bold text-slate-700">Student Signature</p>
                            </div>
                            <div class="text-center">
                                <div class="text-blue-900 italic font-serif text-2xl mb-1">Registrar Sign</div>
                                <div class="border-b border-slate-800 w-32 mb-2 mx-auto"></div>
                                <p class="text-sm font-bold text-slate-700">Registrar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'admit-card-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
                <div class="border-b border-slate-200 pb-4 mb-6 flex justify-between items-center no-print">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-800">Exam Admit Card</h2>
                        <p class="text-slate-500 text-sm">Download your admit card for the upcoming semester examination.</p>
                    </div>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg" onclick="window.print()"><i class="fas fa-print mr-2"></i>Print</button>
                </div>
                
                <div id="printArea" class="border-2 border-slate-800 p-6 bg-white max-w-3xl mx-auto rounded-lg">
                    <div class="text-center border-b-2 border-slate-800 pb-4 mb-4 flex items-center">
                        <div class="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg mr-4">K</div>
                        <div class="flex-1">
                            <h1 class="text-2xl font-extrabold text-slate-900 uppercase">Kazi Nazrul University</h1>
                            <p class="text-slate-700 font-bold tracking-wider mt-1 text-sm bg-slate-200 py-1 inline-block px-4 rounded-full">ADMIT CARD - SEMESTER IV EXAM 2026</p>
                        </div>
                    </div>
                    
                    <div class="flex justify-between gap-6 mb-6">
                        <div class="flex-1 space-y-2 text-sm border border-slate-300 p-4 rounded-lg bg-slate-50">
                            <p><strong>Candidate Name:</strong> Deep Mahanta</p>
                            <p><strong>Roll No:</strong> KNU-BCA-4021</p>
                            <p><strong>Registration No:</strong> KNU-REG-2026-99123</p>
                            <p><strong>Course:</strong> BCA</p>
                        </div>
                        <div class="w-24 border border-slate-300 p-1">
                            <img src="https://ui-avatars.com/api/?name=Deep+Mahanta&background=2563eb&color=fff&size=100" class="w-full h-full object-cover">
                        </div>
                    </div>

                    <p class="font-bold text-sm bg-slate-800 text-white p-2 mb-2">Examination Schedule</p>
                    <table class="w-full text-left border-collapse border border-slate-400 mb-6 text-sm">
                        <thead class="bg-slate-100">
                            <tr>
                                <th class="border border-slate-400 px-3 py-2">Date</th>
                                <th class="border border-slate-400 px-3 py-2">Time</th>
                                <th class="border border-slate-400 px-3 py-2">Subject Name</th>
                                <th class="border border-slate-400 px-3 py-2 text-center">Invigilator Sign</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border border-slate-400 px-3 py-2">15 May 2026</td><td class="border border-slate-400 px-3 py-2">10:00 AM</td><td class="border border-slate-400 px-3 py-2">Data Structures</td><td class="border border-slate-400 px-3 py-2 text-center h-8"></td></tr>
                            <tr><td class="border border-slate-400 px-3 py-2">17 May 2026</td><td class="border border-slate-400 px-3 py-2">10:00 AM</td><td class="border border-slate-400 px-3 py-2">C Programming</td><td class="border border-slate-400 px-3 py-2 text-center h-8"></td></tr>
                            <tr><td class="border border-slate-400 px-3 py-2">19 May 2026</td><td class="border border-slate-400 px-3 py-2">10:00 AM</td><td class="border border-slate-400 px-3 py-2">Software Engg.</td><td class="border border-slate-400 px-3 py-2 text-center h-8"></td></tr>
                        </tbody>
                    </table>
                    
                    <div class="text-xs text-slate-600 bg-red-50 border border-red-200 p-3 rounded-lg mb-8">
                        <strong class="text-red-700">Important Instructions:</strong>
                        <ul class="list-disc ml-4 mt-1">
                            <li>Candidates must carry a valid Photo ID card along with this Admit Card.</li>
                            <li>Electronic devices are strictly prohibited inside the examination hall.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        'fees-section': `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
                <div class="border-b border-slate-200 pb-4 mb-6">
                    <h2 class="text-2xl font-bold text-slate-800">Fees Management System</h2>
                    <p class="text-slate-500 text-sm mt-1">Manage and pay Monthly or Semester Fees.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Monthly Fees -->
                    <div class="border border-blue-200 bg-blue-50/30 rounded-xl p-6 hover-lift transition">
                        <div class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4"><i class="fas fa-calendar-alt"></i></div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Monthly Hostel & Transport</h3>
                        <p class="text-slate-600 text-sm mb-4">Pay your monthly dues for hostel rent, mess, and bus transport.</p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex justify-between border-b border-slate-200 pb-2">
                                <span class="text-sm font-medium">Month</span>
                                <span class="text-sm font-bold text-blue-700">April 2026</span>
                            </div>
                            <div class="flex justify-between border-b border-slate-200 pb-2">
                                <span class="text-sm font-medium">Hostel + Mess</span>
                                <span class="text-sm">₹ 4,500</span>
                            </div>
                            <div class="flex justify-between border-b border-slate-200 pb-2">
                                <span class="text-sm font-medium">Transport</span>
                                <span class="text-sm">₹ 1,200</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-lg font-bold">Total Due</span>
                                <span class="text-lg font-extrabold text-red-600">₹ 5,700</span>
                            </div>
                        </div>
                        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition shadow-md pay-btn" data-amt="5700" data-type="Monthly">Pay Now</button>
                    </div>

                    <!-- Semester Fees -->
                    <div class="border border-purple-200 bg-purple-50/30 rounded-xl p-6 hover-lift transition">
                        <div class="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4"><i class="fas fa-graduation-cap"></i></div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Semester Tuition Fees</h3>
                        <p class="text-slate-600 text-sm mb-4">Pay your main academic semester tuition and lab fees.</p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex justify-between border-b border-slate-200 pb-2">
                                <span class="text-sm font-medium">Semester</span>
                                <span class="text-sm font-bold text-purple-700">Semester 4 (BCA)</span>
                            </div>
                            <div class="flex justify-between border-b border-slate-200 pb-2">
                                <span class="text-sm font-medium">Tuition Fee</span>
                                <span class="text-sm">₹ 28,000</span>
                            </div>
                            <div class="flex justify-between border-b border-slate-200 pb-2">
                                <span class="text-sm font-medium">Lab & Library</span>
                                <span class="text-sm">₹ 6,500</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-lg font-bold">Total Due</span>
                                <span class="text-lg font-extrabold text-red-600">₹ 34,500</span>
                            </div>
                        </div>
                        <button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-lg transition shadow-md pay-btn" data-amt="34500" data-type="Semester">Pay Now</button>
                    </div>
                </div>
            </div>
        `
    };

    // --- Navigation Logic ---
    function loadView(target) {
        if (views[target]) {
            $('#dynamicContentArea').html(views[target]);

            // Set active state on sidebar
            $('.nav-btn').removeClass('bg-blue-600/20 text-blue-400').addClass('text-slate-300 hover:text-white hover:bg-slate-800');
            $(`[data-target="${target}"]`).removeClass('text-slate-300 hover:text-white hover:bg-slate-800').addClass('bg-blue-600/20 text-blue-400');

            // Re-init specific view logic
            initViewLogic(target);

            // Re-init swiper if home
            if (target === 'home-section') {
                new Swiper('.mySwiper', {
                    spaceBetween: 30,
                    effect: 'fade',
                    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                    pagination: { el: '.swiper-pagination', clickable: true },
                    autoplay: { delay: 3500, disableOnInteraction: false },
                });
            }

            // Close sidebar on small screens
            if (window.innerWidth < 768 && sidebarOpen) {
                $('#toggleSidebar').click();
            }
        }
    }

    $('.nav-btn').click(function (e) {
        e.preventDefault();
        const target = $(this).data('target');
        loadView(target);

        let titleMap = {
            'home-section': 'University Home',
            'admission-section': 'Admission Portal',
            'registration-section': 'Student Registration',
            'exam-reg-section': 'Exam Registration',
            'marksheet-section': 'Marksheet System',
            'id-card-section': 'ID Card Generation',
            'reg-card-section': 'Registration Certificate',
            'admit-card-section': 'Examination Admit Card',
            'fees-section': 'Fees Management'
        };
        $('#pageTitle').text(titleMap[target] || 'Dashboard');
    });

    // Default load
    loadView('home-section');


    // --- View Specific Event Handlers ---
    function initViewLogic(target) {
        if (target === 'admission-section') {
            $('#admissionForm').off().submit(function (e) {
                e.preventDefault();
                Swal.fire('Success!', 'Admission Request Submitted successfully. Your temporary ID is KNU-TEMP-101', 'success');
                this.reset();
            });
        }

        if (target === 'registration-section') {
            $('#verifyBtn').off().click(function (e) {
                e.preventDefault();
                const v = $('#verifyAddmId').val();
                if (v) {
                    Swal.fire({
                        title: 'Checking Admission ID...',
                        timer: 1000,
                        didOpen: () => { Swal.showLoading() }
                    }).then(() => {
                        $('#verifyAdmissionStep').slideUp();
                        $('#registrationForm').slideDown();
                        $('#regName').val('Deep Mahanta'); // dummy data
                        $('#regCourse').val('BCA');
                    });
                }
            });
            $('#registrationForm').off().submit(function (e) {
                e.preventDefault();
                Swal.fire('Registered!', 'Your official student registration is complete. Check email for details.', 'success');
            });
        }

        if (target === 'exam-reg-section') {
            $('#examCourse').off().change(function () {
                const c = $(this).val();
                if (c && courseData[c]) {
                    $('#examSem').empty().append('<option value="">Select Sem</option>').prop('disabled', false).removeClass('bg-slate-50');
                    for (let i = 1; i <= courseData[c].semesters; i++) {
                        $('#examSem').append(`<option value="${i}">Semester ${i}</option>`);
                    }
                } else {
                    $('#examSem').empty().append('<option value="">Select Course First</option>').prop('disabled', true).addClass('bg-slate-50');
                    $('#examSubjects').html('<p class="text-sm text-slate-500 italic col-span-full">Select course and semester to load subjects.</p>');
                    $('#examFeeVal').text('0');
                }
            });

            $('#examSem').off().change(function(){
                const c = $('#examCourse').val();
                if(c && $(this).val()) {
                    let html = '';
                    courseData[c].subjects.forEach((sub, idx) => {
                        html += `
                        <label class="flex items-center gap-2 p-2 border rounded bg-white cursor-pointer hover:bg-blue-50 transition">
                            <input type="checkbox" checked class="rounded text-blue-600 focus:ring-blue-500 exam-sub-chk">
                            <span class="text-sm text-slate-700">${sub}</span>
                        </label>
                        `;
                    });
                    $('#examSubjects').html(html);
                    calcExamFee();
                }
            });

            function calcExamFee() {
                const count = $('.exam-sub-chk:checked').length;
                $('#examFeeVal').text(count * 500); // 500 per subject
            }

            $(document).on('change', '.exam-sub-chk', calcExamFee);

            $('#examForm').off().submit(function(e){
                e.preventDefault();
                if($('.exam-sub-chk:checked').length === 0) {
                    Swal.fire('Error', 'Please select at least one subject', 'error');
                    return;
                }
                Swal.fire({
                    title: 'Processing Payment...',
                    timer: 1500,
                    didOpen: () => { Swal.showLoading() }
                }).then(() => {
                    Swal.fire('Registered!', 'Your exam registration and fee payment was successful.', 'success');
                });
            });
        }

        if(target === 'marksheet-section') {
            $('#calcMarksheetBtn').off().click(function(e) {
                e.preventDefault();
                const m1 = parseInt($('#msSub1').val())||0;
                const m2 = parseInt($('#msSub2').val())||0;
                const m3 = parseInt($('#msSub3').val())||0;
                const m4 = parseInt($('#msSub4').val())||0;
                const total = m1+m2+m3+m4;
                const pct = (total / 400) * 100;
                
                let grade = 'F';
                if(pct >= 90) grade = 'O';
                else if(pct >= 80) grade = 'A+';
                else if(pct >= 70) grade = 'A';
                else if(pct >= 60) grade = 'B+';
                else if(pct >= 50) grade = 'B';
                else if(pct >= 40) grade = 'C';

                $('#outName').text($('#msName').val());
                $('#outSub1').text(m1);
                $('#outSub2').text(m2);
                $('#outSub3').text(m3);
                $('#outSub4').text(m4);
                $('#outTotal').text(`${total} / 400`);
                $('#outPercent').text(`${pct.toFixed(2)}%`);
                $('#outGrade').text(grade);

                $('#printArea').removeClass('hidden').addClass('animate-[fadeIn_0.5s_ease-in-out]');
                $('#printBtnContainer').removeClass('hidden');
            });
        }

        if(target === 'id-card-section') {
            $('#idNameInput').on('input', function(){ $('#idNamePreview').text($(this).val() || 'Student Name'); });
            $('#idCourseInput').on('input', function(){ $('#idCoursePreview').text($(this).val() || 'Course - Sem'); });
            $('#idNumInput').on('input', function(){ $('#idNumPreview').text($(this).val() || 'ID Number'); });
            
            $('#idPhotoInput').off().change(function(e){
                if(e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        $('#idPhotoPreview').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }

        if(target === 'fees-section') {
            $('.pay-btn').off().click(function(e) {
                e.preventDefault();
                const amt = $(this).data('amt');
                const type = $(this).data('type');
                Swal.fire({
                    title: 'Confirm Payment',
                    text: `You are about to pay ₹${amt} for ${type} Fees.`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Proceed to Pay',
                    confirmButtonColor: '#2563eb'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Processing securely...',
                            timer: 2000,
                            didOpen: () => { Swal.showLoading() }
                        }).then(() => {
                            Swal.fire('Payment Successful!', `Your ${type} fee receipt has been generated.`, 'success');
                            $(this).text('Paid').removeClass('bg-blue-600 bg-purple-600 hover:bg-blue-700 hover:bg-purple-700').addClass('bg-green-600 cursor-not-allowed').prop('disabled', true);
                        });
                    }
                });
            });
        }
    }

});
