function toggleChatbot() {
            const chatbotInterface = document.getElementById('chatbot-interface');
            chatbotInterface.style.display = chatbotInterface.style.display === 'block' ? 'none' : 'block';
        }

        function sendMessage() {
            const userInput = document.getElementById('user-input').value.trim();
            const chatBody = document.getElementById('chat-body');

            if (userInput) {
        
                const userMessage = document.createElement('div');
                userMessage.textContent = userInput;
                userMessage.classList.add('user-message');
                chatBody.appendChild(userMessage);

                const responses = {  
    "hi":"hi! 'how can I Help You?'",
    "hello":"hello! 'how can I Help You?'",
    "events": "You can check upcoming events by visiting the 'Events' section on your VTOP portal. This section will include all university-wide and department-specific events such as seminars, workshops, and annual celebrations. Follow these steps to view events:\n1. Log in to VTOP.\n2. Navigate to the 'Events' tab in the main menu.\n3. Browse through the list of upcoming and past events, and click on the one you are interested in for more details.",
    "coe": "Under the 'Controller of Examinations (COE)' section, you can find exam schedules, results, revaluation details, and other examination-related information. Here's how to access this section:\n1. Log in to VTOP.\n2. Go to the 'COE' section from the main menu.\n3. You will be able to see exam schedules for the current and upcoming semesters.\n4. You can also view results, revaluation status, and apply for revaluation if necessary.",    
    "academic research": "In the 'Academic Research' section, find resources like course materials, research publications, journals, and academic papers. Follow these steps to access research materials:\n1. Log in to VTOP.\n2. Navigate to the 'Academic Research' tab in the menu.\n3. Select from various research papers, articles, and project details.\n4. Download any materials that are made available for your department or research area.",    
    "sporic": "For research-related policies and internal user guidelines, you can visit the 'SpoRIC' section under VTOP. SpoRIC is the center for research and innovation at VIT, and you can access research policies and guidelines here.\nSteps:\n1. Log in to VTOP.\n2. Go to 'SpoRIC' under the main menu.\n3. Browse through research policies, funding details, and guidelines for internal users.",    
    "others": "The 'Others' section includes various forms and guidelines such as hostel forms, library resource guidelines, and student-related documents. To access forms:\n1. Log in to VTOP.\n2. Go to the 'Others' section.\n3. Browse the available forms and documents you may need, such as hostel consent forms or library guidelines.",
    "timetable": "Your class timetable can be found in the 'Timetable' section under 'Academics'. Here's how to access your timetable:\n1. Log in to VTOP.\n2. Navigate to the 'Academics' section from the main menu.\n3. Click on 'Timetable' to view your class schedule.\n4. You can also download your timetable for offline reference.",
    "apply bonafide": "To apply for a Bonafide Certificate, visit the 'Student Services' section in VTOP. The Bonafide Certificate is typically used for purposes like travel, loan applications, or employment. To apply:\n1. Log in to VTOP.\n2. Go to the 'Student Services' section.\n3. Look for the 'Certificates' tab.\n4. Fill out the Bonafide Certificate application form and submit it for approval.",
    "semester dates": "The academic semester dates, including holidays, exams, and the start and end dates of each semester, are available in the 'Academic Calendar' section.\nSteps:\n1. Log in to VTOP.\n2. Go to the 'Academic Calendar' section from the menu.\n3. Browse through the calendar to see important dates for each semester and related holidays.",
    "apply hostel": "To apply for hostel accommodation, go to the 'Hostel' section on VTOP. Follow these steps:\n1. Log in to VTOP.\n2. Navigate to the 'Hostel' section in the menu.\n3. Fill out the hostel application form with necessary details such as your preference for room type.\n4. Submit the application for approval and check for updates in the hostel section.",
    "transcript application": "If you need to apply for an academic transcript, you can do so through the 'Transcript Request' section under 'Student Services'. To apply:\n1. Log in to VTOP.\n2. Go to 'Student Services'.\n3. Select 'Transcript Request' under the 'Examination' section.\n4. Fill out the form and submit a request for your transcript.",
    "exam registration": "To register for exams, go to the 'Examination Registration' section under 'COE' on VTOP. Here's how:\n1. Log in to VTOP.\n2. Navigate to the 'COE' section.\n3. Click on 'Examination Registration' and fill out the required details.\n4. Submit the registration form for the upcoming exam session.",
    "hostel vacating form": "The Hostel Vacating Consent Form is available in the 'Forms' section under the 'Hostel' category. To access and fill it out:\n1. Log in to VTOP.\n2. Go to the 'Hostel' section.\n3. Select 'Vacating Form' from the list of available forms.\n4. Fill out the details and submit it online.",
    "marksheet request": "To request your marksheet, visit the 'Examination' section on VTOP. Steps:\n1. Log in to VTOP.\n2. Navigate to the 'Examination' section.\n3. Find the 'Marksheet Request' form and fill it out.\n4. Submit the request for the marksheet, which will be processed by the examination department.",
    "certificates request": "Request for any academic certificates can be done under 'Certificates' in the 'Student Services' section. Here's how:\n1. Log in to VTOP.\n2. Navigate to 'Student Services'.\n3. Look for the 'Certificates' section and select the certificate you need (e.g., degree, course completion).\n4. Fill out the request form and submit it.",
    "apply for leave": "To apply for academic leave (whether for medical or personal reasons), go to the 'Leave Application' section under 'Academics'. Steps:\n1. Log in to VTOP.\n2. Navigate to 'Academics' and select 'Leave Application'.\n3. Fill out the leave form, including your leave dates and reason.\n4. Submit the form for approval.",
    "change password": "To change your VTOP portal password, follow these steps:\n1. Log in to VTOP.\n2. Go to your 'Profile' settings under the 'Account' section.\n3. Select 'Change Password' and enter your current password and the new password.\n4. Save the changes to update your password.",
    "revaluation application": "If you are not satisfied with your exam results, you can apply for revaluation. Steps:\n1. Log in to VTOP.\n2. Navigate to the 'COE' section and find 'Revaluation'.\n3. Fill out the revaluation request form with details such as the exam and subject.\n4. Submit the request online for review.",
    "course enrollment": "Course enrollment is available during registration periods. Here's how to enroll in courses:\n1. Log in to VTOP.\n2. Go to the 'Academics' section and select 'Course Enrollment'.\n3. Browse through available courses and select your preferred ones.\n4. Submit the enrollment request.",
    "degree certificate": "To apply for your degree certificate after graduation, go to 'Student Services'. Steps:\n1. Log in to VTOP.\n2. Navigate to 'Student Services' and find 'Degree Request'.\n3. Fill out the required form for your degree certificate.\n4. Submit the request for processing.",
    "migration certificate": "To apply for a migration certificate, go to 'Student Services' and look for the migration certificate option. Steps:\n1. Log in to VTOP.\n2. Go to 'Student Services' and select 'Migration Certificate'.\n3. Complete the application form.\n4. Submit your request for approval.",
    "student ID card": "To download or print your student ID card, follow these steps:\n1. Log in to VTOP.\n2. Navigate to 'Profile' in the menu.\n3. Look for the 'Student ID Card' option.\n4. Download or print your ID card from this section.",
    "internship registration": "To register for internships, follow these steps:\n1. Log in to VTOP.\n2. Go to 'Student Services' and select 'Internships'.\n3. Browse through available internship opportunities.\n4. Apply by submitting your details and resume.",
    "placement registration": "To register for placements, go to the 'Placement' section in VTOP. Steps:\n1. Log in to VTOP.\n2. Navigate to 'Placement'.\n3. Complete the registration form for placement activities.\n4. Submit your resume and other details required for placement registration.",
    "leave extension": "If you need to extend your leave, you can do so by submitting an extension request. Steps:\n1. Log in to VTOP.\n2. Navigate to 'Academics' and select 'Leave Application'.\n3. Fill out the leave extension request form with updated leave dates.\n4. Submit the form for approval.",
    "course withdrawal": "To withdraw from a course, follow these steps:\n1. Log in to VTOP.\n2. Go to the 'Academics' section and select 'Course Withdrawal'.\n3. Select the course you wish to withdraw from.\n4. Submit the withdrawal request for processing.",
    "change hostel room": "If you wish to change your hostel room, you can apply through the 'Hostel' section on VTOP. Steps:\n1. Log in to VTOP.\n2. Navigate to 'Hostel' and select 'Room Change Request'.\n3. Fill out the details for the room change.\n4. Submit the request for approval.",
    "change department": "If you want to change your department, request through 'Academics' on VTOP. Steps:\n1. Log in to VTOP.\n2. Go to 'Academics' and select 'Department Change'.\n3. Fill out the department change request form.\n4. Submit it for review and approval.",
    "revised timetable": "To get the revised class timetable, follow these steps:\n1. Log in to VTOP.\n2. Navigate to 'Academics' and click on 'Timetable'.\n3. If there is a revised timetable, it will be displayed.\n4. Download the updated timetable for your reference.",
    "change contact details": "To change your contact information on VTOP, follow these steps:\n1. Log in to VTOP.\n2. Go to 'Profile' under your account section.\n3. Edit your contact details such as phone number, email, or address.\n4. Save the updated details.",
    "leave cancellation": "To cancel your leave application, follow these steps:\n1. Log in to VTOP.\n2. Go to 'Leave Application' under 'Academics'.\n3. Select your leave application and click on 'Cancel'.\n4. Submit the cancellation request.",
    "re-enrollment": "If you need to re-enroll in a course, follow these steps:\n1. Log in to VTOP.\n2. Navigate to 'Academics' and select 'Re-enrollment'.\n3. Select the courses you wish to re-enroll in.\n4. Submit your re-enrollment request.",
    "scholarship application": "To apply for a scholarship, go to the 'Scholarship' section under 'Student Services'. Steps:\n1. Log in to VTOP.\n2. Go to 'Student Services' and select 'Scholarships'.\n3. Browse available scholarships.\n4. Apply by filling out the required forms and submitting the application.",
    "login issues": "If you're having trouble logging in, check if your credentials are correct. Reset your password if necessary by selecting 'Forgot Password' on the login page.",
    "password reset": "To reset your password:\n1. Go to the VTOP login page.\n2. Click on 'Forgot Password'.\n3. Enter your registered email or username.\n4. Follow the instructions to reset your password.",
        // Academic Services
        "course enrollment": "To enroll in courses, follow these steps:\n1. Log in to VTOP.\n2. Go to 'Academics' and select 'Course Enrollment'.\n3. Browse and select courses to enroll in.\n4. Submit your course selections.",
        "exam schedule": "Find your exam schedule in 'COE':\n1. Log in to VTOP.\n2. Navigate to 'COE' and click on 'Exam Schedule'.\n3. View or download the schedule.",
        "academic calendar": "Access the academic calendar to see important dates:\n1. Log in to VTOP.\n2. Go to 'Academic Calendar' from the main menu.\n3. Browse semester start/end dates and holidays.",
        "class timetable": "To view your class timetable:\n1. Log in to VTOP.\n2. Navigate to 'Academics' and click on 'Timetable'.\n3. Download or print your schedule.",
        "revised timetable": "If your timetable has changed, follow these steps:\n1. Log in to VTOP.\n2. Go to 'Academics' and click 'Revised Timetable'.\n3. Download the updated timetable.",
        
        // Examination Services
        "exam registration": "Register for exams by:\n1. Logging into VTOP.\n2. Going to 'COE' and selecting 'Exam Registration'.\n3. Filling out the required details and submitting your registration.",
        "revaluation process": "To apply for revaluation:\n1. Log in to VTOP.\n2. Navigate to 'COE' and click on 'Revaluation'.\n3. Complete and submit the revaluation form.",
        "exam results": "Check your exam results by:\n1. Logging into VTOP.\n2. Going to 'COE' and clicking on 'Results'.\n3. Viewing and downloading your results.",
        
        // Certificates and Documents
        "apply for bonafide": "Apply for a Bonafide Certificate through 'Student Services':\n1. Log in to VTOP.\n2. Navigate to 'Certificates' and select 'Bonafide'.\n3. Fill out the form and submit.",
        "transcript request": "Request your academic transcript by:\n1. Logging into VTOP.\n2. Going to 'Student Services' and selecting 'Transcript Request'.\n3. Filling out the form and submitting it.",
        "degree certificate": "Apply for a degree certificate by:\n1. Logging into VTOP.\n2. Navigating to 'Student Services' and selecting 'Degree Request'.\n3. Completing the form and submitting it.",
        "migration certificate": "To get a migration certificate:\n1. Log in to VTOP.\n2. Go to 'Student Services' and select 'Migration Certificate'.\n3. Fill out and submit the application.",
        "marksheet request": "Request your marksheet by:\n1. Logging into VTOP.\n2. Navigating to 'Examination' and selecting 'Marksheet Request'.\n3. Submitting the request form.",
        
        // Hostel Services
        "apply for hostel": "To apply for hostel accommodation:\n1. Log in to VTOP.\n2. Navigate to 'Hostel' and fill out the application form.\n3. Submit and wait for approval.",
        "hostel room change": "Request a room change by:\n1. Logging into VTOP.\n2. Navigating to 'Hostel' and selecting 'Room Change'.\n3. Completing the form and submitting it.",
        "hostel vacating form": "To fill out a hostel vacating form:\n1. Log in to VTOP.\n2. Go to 'Hostel' and select 'Vacating Form'.\n3. Submit it with the necessary details.",
        
        // Placement Services
        "placement registration": "Register for placements:\n1. Log in to VTOP.\n2. Go to 'Placement' and fill out the registration form.\n3. Upload your resume and submit.",
        "placement schedule": "Check placement schedules by:\n1. Logging into VTOP.\n2. Going to 'Placement' and viewing the schedule.",
        "resume upload": "Upload your resume for placements:\n1. Log in to VTOP.\n2. Navigate to 'Placement' and select 'Upload Resume'.\n3. Submit your updated resume.",
        
        // Attendance and Leave
        "attendance record": "Check your attendance:\n1. Log in to VTOP.\n2. Navigate to 'Academics' and click on 'Attendance'.\n3. View your overall and subject-wise attendance.",
        "apply for leave": "Submit a leave application:\n1. Log in to VTOP.\n2. Go to 'Academics' and select 'Leave Application'.\n3. Fill out and submit the form.",
        "leave extension": "Extend your leave by:\n1. Logging into VTOP.\n2. Navigating to 'Leave Application' under 'Academics'.\n3. Submitting a leave extension request.",
        
        // Student Support and Queries
        "contact support": "To contact support:\n1. Log in to VTOP.\n2. Go to 'Help & Support'.\n3. Submit a query or find contact details for direct assistance.",
        "FAQ section": "Visit the 'FAQ' section for common queries:\n1. Log in to VTOP.\n2. Navigate to 'Help & Support' and click on 'FAQ'.",
        "student helpline": "For immediate assistance, contact the student helpline:\n1. Log in to VTOP.\n2. Go to 'Help & Support' for the helpline number or email.",

  "classroomLocation": "To find the location of your classroom, check your class timetable under 'Academics' on VTOP.",
  "courseSyllabus": "Download your course syllabus by going to 'Academics' > 'Courses' > 'Syllabus'.",
  "assignmentSubmission": "Submit assignments through 'Academics' > 'Assignment Submission' before the deadline.",
  "assignmentFeedback": "View feedback on submitted assignments in 'Academics' > 'Submitted Assignments'.",
  "supplementaryExam": "Register for supplementary exams under 'COE' > 'Supplementary Exam Registration'.",
  "onlineClassSchedule": "Check your online class schedule under 'Academics' > 'Online Timetable'.",
  "recordedLectures": "Watch recorded lectures in 'Academics' > 'Recorded Classes'.",
  "libraryAccess": "Reserve or renew books through 'Library Services' > 'My Account' on VTOP.",
  "researchPaper": "Submit your research papers via 'Academic Research' > 'Paper Submission'.",
  "projectReview": "Schedule project reviews through 'Project Management' > 'Review Schedule'.",
  "examHallTicket": "Download your exam hall ticket under 'COE' > 'Exam Hall Ticket'.",
  "semesterFeePayment": "Pay semester fees through 'Student Services' > 'Fee Payment'.",
  "attendanceAlerts": "Set up attendance warning alerts under 'Profile' > 'Notifications'.",
  "studyMaterials": "Download study materials under 'Academics' > 'Course Materials'.",
  "specialExamRequest": "Submit a special exam request through 'COE' > 'Special Exam Request'.",
  "projectDeadline": "Check project deadlines under 'Academics' > 'Project Deadlines'.",
  "classFeedback": "Submit class feedback through 'Academics' > 'Feedback'.",
  "gradeReview": "Request a grade review under 'COE' > 'Grade Review'.",
  "classRepContact": "Find class representative contact info under 'Academics' > 'Class Info'.",
  "courseDropDeadline": "Check course drop deadlines under 'Academics' > 'Course Info'.",
  "pastExamPapers": "Download past exam papers from 'COE' > 'Past Papers'.",
  "courseEvaluation": "Complete course evaluation forms in 'Academics' > 'Evaluation'.",
  "additionalCourses": "Enroll in extra courses via 'Academics' > 'Add-On Courses'.",
  "gpaCalculation": "Check GPA calculation guidelines under 'COE' > 'GPA Info'.",
  "makeupClassSchedule": "Check make-up class schedules under 'Academics' > 'Make-up Timetable'.",
  "labEquipment": "Get lab equipment guidelines from 'Academics' > 'Lab Resources'.",
  "labExtensionRequest": "Request lab session extensions under 'Academics' > 'Lab Requests'.",
  "examSeating": "View your exam seating arrangement under 'COE' > 'Seating Plan'.",
  "counselingServices": "Sign up for counseling sessions under 'Student Services' > 'Counseling'.",
  "vtopSupport": "Report VTOP technical issues via 'Help & Support' > 'Report Issue'.",
  "lostAndFound": "Report or find lost items under 'Student Services' > 'Lost and Found'.",
  "sportsClub": "Join sports clubs through 'Student Life' > 'Sports Clubs'.",
  "extracurricularSignup": "Register for extracurricular activities under 'Student Life' > 'Activities'.",
  "eventCalendar": "View the event calendar under 'Student Life' > 'Event Calendar'.",
  "healthAppointment": "Book health services appointments under 'Health Center' > 'Book Appointment'.",
  "emergencyContacts": "Find emergency contact numbers in 'Help & Support' > 'Emergency Contacts'.",
  "cafeteriaMenu": "View cafeteria menus under 'Campus Services' > 'Cafeteria'.",
  "studentLeadership": "Apply for leadership roles under 'Student Life' > 'Leadership'.",
  "internationalServices": "Get information for international students under 'Student Services' > 'International'.",
  "studentConduct": "Read the student conduct policy in 'Profile' > 'Conduct Guidelines'.",
  "campusTour": "Schedule a campus tour under 'Student Services' > 'Campus Tours'.",
  "complaintRegistration": "File a complaint under 'Help & Support' > 'Complaint Desk'.",
  "insuranceInfo": "Check insurance details under 'Student Services' > 'Insurance Info'.",
  "personalCounseling": "Sign up for personal counseling under 'Health Center' > 'Counseling'.",
  "careerCounseling": "Schedule a career counseling session in 'Student Services' > 'Career Counseling'.",
  "libraryResources": "Reserve or search books under 'Library Services' > 'Search Books'.",
  "idReplacement": "Request a replacement ID card under 'Profile' > 'ID Replacement'.",
  "lockerRental": "Find locker rental details under 'Campus Services' > 'Lockers'.",
  "mentorContact": "Find your assigned mentor under 'Profile' > 'Mentor Info'.",
  "volunteerOpportunities": "Check for volunteer programs under 'Student Life' > 'Volunteer'.",
  "busPassRenewal": "Renew your bus pass under 'Campus Services' > 'Transportation'.",
  "culturalClubs": "Join cultural clubs under 'Student Life' > 'Cultural Clubs'.",
  "peerTutoring": "Register for tutoring under 'Student Services' > 'Peer Tutoring'.",
  "healthCamps": "Find health check-up camp dates under 'Health Center' > 'Camps'.",
  "wellnessPrograms": "Join wellness programs under 'Student Life' > 'Wellness'.",
  "alumniAccess": "Connect with alumni under 'Student Life' > 'Alumni Network'.",
  "studentDiscounts": "Check available student discounts under 'Student Services' > 'Discounts'.",
  "partTimeJobs": "Find part-time job listings under 'Student Services' > 'Job Board'.",
  "hostelAmenities": "View available amenities under 'Hostel' > 'Amenities'."
            };


                const defaultResponse = "I'm sorry, I don't have an answer for that yet. Please refer to the VTOP manual or contact support.";
                const botMessage = document.createElement('div');



                function getResponse(userInput) {
                    userInput = userInput.toLowerCase();
                    for (let key in responses) {
                        if (userInput.includes(key)) {
                            return responses[key];
                        }
                    }
                    return defaultResponse;
                }

                botMessage.textContent=getResponse(userInput);
                botMessage.classList.add('bot-message');
                chatBody.appendChild(botMessage);
                chatBody.scrollTop = chatBody.scrollHeight;
                document.getElementById('user-input').value = '';
            }
        }