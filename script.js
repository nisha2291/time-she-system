const courseList = [];
const timeSlotList = [];

// Add Course
document.getElementById("addCourseBtn").addEventListener("click", () => {
    const courseName = document.getElementById("course-name").value;
    const teacherName = document.getElementById("teacher-name").value;

    if (courseName && teacherName) {
        courseList.push({ courseName, teacherName });
        updateCourseList();
        document.getElementById("course-name").value = "";
        document.getElementById("teacher-name").value = "";
    }
});

function updateCourseList() {
    const courseListElement = document.getElementById("courseList");
    courseListElement.innerHTML = "";
    courseList.forEach((course, index) => {
        courseListElement.innerHTML += `<li>${course.courseName} (Teacher: ${course.teacherName})</li>`;
    });
}

// Add Time Slot
document.getElementById("addTimeSlotBtn").addEventListener("click", () => {
    const day = document.getElementById("day").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;

    if (day && startTime && endTime) {
        timeSlotList.push({ day, startTime, endTime });
        updateTimeSlotList();
        document.getElementById("start-time").value = "";
        document.getElementById("end-time").value = "";
    }
});

function updateTimeSlotList() {
    const timeSlotListElement = document.getElementById("timeSlotList");
    timeSlotListElement.innerHTML = "";
    timeSlotList.forEach((slot, index) => {
        timeSlotListElement.innerHTML += `<li>${slot.day}: ${slot.startTime} - ${slot.endTime}</li>`;
    });
}

// Generate Schedule
document.getElementById("generateScheduleBtn").addEventListener("click", () => {
    const scheduleTable = document.getElementById("scheduleTable");
    const tableBody = scheduleTable.querySelector("tbody");

    if (courseList.length && timeSlotList.length) {
        scheduleTable.hidden = false;
        tableBody.innerHTML = "";

        courseList.forEach((course, index) => {
            const timeSlot = timeSlotList[index % timeSlotList.length];
            tableBody.innerHTML += `
                <tr>
                    <td>${course.courseName}</td>
                    <td>${course.teacherName}</td>
                    <td>${timeSlot.day}</td>
                    <td>${timeSlot.startTime}</td>
                    <td>${timeSlot.endTime}</td>
                </tr>
            `;
        });
    }
});
