// Generate the resume with a slide-in effect and share/download functionality
document.getElementById('generateBtn')?.addEventListener('click', async function () {
    const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    let pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }

    // Generate a unique URL for sharing
    const username = "username"; // Replace this with the actual username logic
    const uniqueResumeURL = `https://${username}.vercel.app/resume`;

    // Generate the resume content with slide-in animation
    const generatedResume = `
        <div class="resume-slide-left">
            <h2>${name}</h2>
            <img src="${pictureURL}" alt="Profile Picture" width="100" height="100"><br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Address:</strong> ${address}<br><br>
            <strong>Skills:</strong> <div id="skillsList">${skills}</div><br>
            <button id="addSkillBtn" class="button-hover">Add More Skills</button>
            <div id="additionalSkills"></div><br>
            <strong>Education:</strong> <div id="educationList">${education}</div><br>
            <button id="addEducationBtn" class="button-hover">Add More Education</button>
            <div id="additionalEducation"></div><br>
            <strong>Experience:</strong> <div id="experienceList">${experience}</div><br>
            <button id="addExperienceBtn" class="button-hover">Add More Experience</button>
            <div id="additionalExperience"></div><br>
            <button id="downloadBtn" class="button-hover">Download PDF</button>
            <button id="shareBtn" class="button-hover">Share Resume</button>
            <div id="uniqueLink">${uniqueResumeURL}</div>
        </div>
    `;

    // Insert generated resume into the DOM
    const resumeContainer = document.getElementById('generatedResume') as HTMLElement;
    resumeContainer.innerHTML = generatedResume;
    resumeContainer.classList.add('slide-from-left');  // Add slide-in effect class

    // Add event listeners for dynamically added buttons
    addDynamicEventListeners();

    // PDF Download Functionality
    document.getElementById('downloadBtn')?.addEventListener('click', function () {
        const resumeContent = document.getElementById('generatedResume') as HTMLElement;
        import('html2pdf.js').then(html2pdf => {
            html2pdf().from(resumeContent).set({
                filename: `${name}-resume.pdf`,
                jsPDF: { format: 'a4' },
                margin: 10
            }).save();
        });
    });

    // Share Functionality - Copy URL to Clipboard
    document.getElementById('shareBtn')?.addEventListener('click', function () {
        navigator.clipboard.writeText(uniqueResumeURL).then(() => {
            alert('Resume link copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy link:', err);
        });
    });
});

// Function to handle dynamic event listeners for adding skills, education, and experience
function addDynamicEventListeners() {
    // Same dynamic event listeners as your initial code...
}
