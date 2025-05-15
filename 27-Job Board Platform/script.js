function addJob() {
    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;

    if (jobTitle && jobDescription) {
        const jobList = document.getElementById("jobList");

        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
              <h3>${jobTitle}</h3>
              <p>${jobDescription}</p>
          `;

        jobList.appendChild(jobCard);

        // Clear the form fields
        document.getElementById("jobForm").reset();
    } else {
        alert("Please fill out all fields");
    }
}
