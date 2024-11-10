var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// Generate the resume with a slide-in effect and share/download functionality
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var picture, name, phone, email, address, skills, education, experience, pictureURL, username, uniqueResumeURL, generatedResume, resumeContainer;
        return __generator(this, function (_e) {
            picture = (_b = (_a = document.getElementById('picture')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
            name = document.getElementById('name').value;
            phone = document.getElementById('phone').value;
            email = document.getElementById('email').value;
            address = document.getElementById('address').value;
            skills = document.getElementById('skills').value;
            education = document.getElementById('education').value;
            experience = document.getElementById('experience').value;
            pictureURL = '';
            if (picture) {
                pictureURL = URL.createObjectURL(picture);
            }
            username = "username";
            uniqueResumeURL = "https://".concat(username, ".vercel.app/resume");
            generatedResume = "\n        <div class=\"resume-slide-left\">\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(pictureURL, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\"><br>\n            <strong>Phone:</strong> ").concat(phone, "<br>\n            <strong>Email:</strong> ").concat(email, "<br>\n            <strong>Address:</strong> ").concat(address, "<br><br>\n            <strong>Skills:</strong> <div id=\"skillsList\">").concat(skills, "</div><br>\n            <button id=\"addSkillBtn\" class=\"button-hover\">Add More Skills</button>\n            <div id=\"additionalSkills\"></div><br>\n            <strong>Education:</strong> <div id=\"educationList\">").concat(education, "</div><br>\n            <button id=\"addEducationBtn\" class=\"button-hover\">Add More Education</button>\n            <div id=\"additionalEducation\"></div><br>\n            <strong>Experience:</strong> <div id=\"experienceList\">").concat(experience, "</div><br>\n            <button id=\"addExperienceBtn\" class=\"button-hover\">Add More Experience</button>\n            <div id=\"additionalExperience\"></div><br>\n            <button id=\"downloadBtn\" class=\"button-hover\">Download PDF</button>\n            <button id=\"shareBtn\" class=\"button-hover\">Share Resume</button>\n            <div id=\"uniqueLink\">").concat(uniqueResumeURL, "</div>\n        </div>\n    ");
            resumeContainer = document.getElementById('generatedResume');
            resumeContainer.innerHTML = generatedResume;
            resumeContainer.classList.add('slide-from-left'); // Add slide-in effect class
            // Add event listeners for dynamically added buttons
            addDynamicEventListeners();
            // PDF Download Functionality
            (_c = document.getElementById('downloadBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
                var resumeContent = document.getElementById('generatedResume');
                Promise.resolve().then(function () { return require('html2pdf.js'); }).then(function (html2pdf) {
                    html2pdf().from(resumeContent).set({
                        filename: "".concat(name, "-resume.pdf"),
                        jsPDF: { format: 'a4' },
                        margin: 10
                    }).save();
                });
            });
            // Share Functionality - Copy URL to Clipboard
            (_d = document.getElementById('shareBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
                navigator.clipboard.writeText(uniqueResumeURL).then(function () {
                    alert('Resume link copied to clipboard!');
                }).catch(function (err) {
                    console.error('Could not copy link:', err);
                });
            });
            return [2 /*return*/];
        });
    });
});
// Function to handle dynamic event listeners for adding skills, education, and experience
function addDynamicEventListeners() {
    // Same dynamic event listeners as your initial code...
}
