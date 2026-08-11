// =====================================
// CURRENT SPECIAL
// Change only the information below
// =====================================

const currentSpecial = {
    title: "या महिन्याचा विशेष",

    name: "दिवाळी फराळ",

    description:
        "प्रत्येक सणासाठी ताजे, चविष्ट आणि घरगुती चवीचे पदार्थ.",

    items:
        "चकली • चिवडा • मोतीचूर लाडू • मसाला शेव"
};


// Show the special on the website

document.getElementById("special-title").textContent =
    currentSpecial.title;

document.getElementById("special-name").textContent =
    currentSpecial.name;

document.getElementById("special-description").textContent =
    currentSpecial.description;

document.getElementById("special-items").textContent =
    currentSpecial.items;
