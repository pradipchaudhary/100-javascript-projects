document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const currentMonthElement = document.getElementById("currentMonth");
    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");

    let currentDate = new Date();

    prevMonthButton.addEventListener("click", function () {
        currentDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            1
        );
        renderCalendar();
    });

    nextMonthButton.addEventListener("click", function () {
        currentDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            1
        );
        renderCalendar();
    });

    renderCalendar();

    function renderCalendar() {
        calendar.innerHTML = "";
        currentMonthElement.textContent = formatMonth(currentDate);

        const firstDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );
        const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );

        for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
            calendar.innerHTML += '<div class="day"></div>';
        }

        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = i;
            dayElement.addEventListener("click", function () {
                showEvents(
                    new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        i
                    )
                );
            });
            calendar.appendChild(dayElement);
        }
    }

    function formatMonth(date) {
        const options = { year: "numeric", month: "long" };
        return date.toLocaleDateString("en-US", options);
    }

    function showEvents(date) {
        const eventsContainer = document.getElementById("calendar");
        eventsContainer.innerHTML = "";

        const events = getEventsForDate(date);

        for (const event of events) {
            const eventElement = document.createElement("div");
            eventElement.classList.add("event");
            eventElement.textContent = event.title;
            eventElement.addEventListener("click", function () {
                alert(`Event: ${event.title}\nDate: ${event.date}`);
            });
            eventsContainer.appendChild(eventElement);
        }
    }

    function getEventsForDate(date) {
        // This is a placeholder. You would typically fetch events from a database or another source.
        return [
            { title: "Meeting", date: "2022-02-09" },
            { title: "Birthday Party", date: "2022-02-14" },
            // Add more events as needed
        ];
    }
});
