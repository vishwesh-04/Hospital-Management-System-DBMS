let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  let data = JSON.stringify({
    user: username.value,
    pass: password.value,
  });
  let requestOpt = {
    method: "post",
    headers: {
      "Content-Type": data.type,
    },
    body: data,
    mode: "no-cors",
  };
  fetch("/getData", requestOpt)
    .then((res) => {
      // console.log(res)
      return res.json();
    })
    .then((data) => {
      window.location.href = data.url;
      console.log(data);
    });
});



let currDate = new Date();

function generateCalendar(date){
  const month = date.getMonth();
  const year = date.getFullYear();
  const calendarDates = document.getElementById("calendarDates");
  calendarDates.innerHTML = ``;

  const firstDate = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDate; i++) {
    const emptyDiv = document.createElement("div");
    calendarDates.appendChild(emptyDiv);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;
    dayDiv.classList.add("col");
    dayDiv.addEventListener("click", () => addEvent(dayDiv, day));
    console.log("BAC");
    calendarDates.appendChild(dayDiv);
    console.log("AAC");
  }
};

const addEvent = (dayDiv, event) => {
  const tempEvent = prompt("Enetr a desc: ");
  if (event) {
    const eventDiv = document.createElement("div");
    // eventDiv.textContent = event;
    // eventDiv.style.backgroundColor = 'yellow';
    // eventDiv.style.padding = '5px';
    // eventDiv.style.marginTop = '5px';
    const eventBadge = document.createElement("span");
    eventBadge.classList.add(`badge text-bg-secondary`);
    eventBadge.dataset.bs.toggle = "tooltip";
    eventBadge.dataset.bs.placement = "top";
    // eventBadge.dataset.bs.title = event;
    eventBadge.dataset.bs.title = tempEvent;
    eventDiv.appendChild(eventBadge);
    dayDiv.appendChild(eventDiv);
  }
};

let btnPrev = document.getElementById("btnPrev");
let btnNext = document.getElementById("btnNext");

btnPrev.addEventListener("click", () => {
  console.log("Prev");
  currDate.setMonth(currDate.getMonth() - 1);
  generateCalendar(currDate);
  console.log("Prev");
});
btnNext.addEventListener("click", () => {
  console.log("Next");
  currDate.setMonth(currDate.getMonth() + 1);
  generateCalendar(currDate);
  console.log("Next");
});

let calendar = document.getElementById("calendar");
calendar.onload(generateCalendar(new Date()));

// let calendarDates = document.getElementById("calendarDates");
// let currDate = new Date();

// const generateCalendar = (date) => {
//   const month = date.getMonth();
//   const year = date.getFullYear();

//   calendarDates.innerHTML = ``;

//   const firstDay = new Date(year, month, 1).getDay();
//   const totalDays = new Date(year, month + 1, 0).getDate();

//   for (let i = 0; i < firstDay; i++) {
//     const emptyDiv = document.createElement("div");
//     emptyDiv.classList.add("col", "border");
//     calendarDates.insertAdjacentElement("beforeend", emptyDiv);
//   }

//   for (let day = 1; day <= totalDays; day++) {
//     const dayDiv = document.createElement("div");
//     dayDiv.textContent = day;
//     dayDiv.classList.add("col", "border", "position-relative", "p-2");

//     dayDiv.addEventListener("click", () => addEvent(dayDiv, day));

//     calendarDates.insertAdjacentElement("beforeend", dayDiv);
//   }

//   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
//   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// };

// const addEvent = (dayDiv, day) => {
//   const tempEvent = prompt("Enter a description: ");
//   if (tempEvent) {

//     const eventDiv = document.createElement('div');
//     const eventBadge = document.createElement("span");

//     eventBadge.classList.add("badge", "text-bg-secondary", "mt-2");
//     eventBadge.dataset.bsToggle = "tooltip";
//     eventBadge.dataset.bsPlacement = "top";
//     eventBadge.title = tempEvent;

//     eventDiv.appendChild(eventBadge);
//     dayDiv.appendChild(eventDiv);
//   }
// };

// let btnPrev = document.getElementById("btnPrev");
// let btnNext = document.getElementById("btnNext");

// btnPrev.addEventListener("click", () => {
//   currDate.setMonth(currDate.getMonth() - 1);
//   generateCalendar(currDate);
// });
// btnNext.addEventListener("click", () => {
//   currDate.setMonth(currDate.getMonth() + 1);
//   generateCalendar(currDate);
// });

// generateCalendar(currDate);
