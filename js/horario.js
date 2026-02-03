// ─── Timetable Data ──────────────────────────────────────────────────────────
const data = {
  "timetable": {
    "title": "DAM 2025",
    "days": ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    "time_slots": ["8:30-9:30", "9:30-10:30", "10:30-11:30", "11:30-12:30", "12:30-13:30", "13:30-14:30"],
    "subjects": ["Entornos de Desarrollo", "Sistemas Informáticos", "Programación", "Robótica", "Lenguajes de Marcas", "Bases de Datos", "Itinerario Empleabilidad"],
    "subject_info": {
      "Entornos de Desarrollo": {
        "url": "https://campus.europaeducationgroup.es/courses/116675/modules",
        "teams": {
          "1": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTlhMWMzYTYtNDQzZC00NWQxLTlhYTItNTkzODdhODI2NTlj%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%225e7e0fcc-01f3-4250-83e5-c11873c6ca89%22%7d"
        }
      },
      "Programación": {
        "url": "https://campus.europaeducationgroup.es/courses/104848/modules",
        "teams": {
          "Martes": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MjVmYTc1ZDctOGZkNi00Y2Y1LThmZGEtODgyNjk0YmU0ODJk%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%22275b1295-4877-4add-aed9-4db0ba9c8425%22%7d",
          "Jueves": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTk2ZmUxNWUtNDMzNC00N2MwLThkMWYtOTJmY2JlNzMxMTQy%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%22275b1295-4877-4add-aed9-4db0ba9c8425%22%7d"
        }
      },
      "Lenguajes de Marcas": {
        "url": "https://campus.europaeducationgroup.es/courses/114391/modules",
        "teams": {
          "1": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDU2MTE1MDYtMzQxYi00ZGZhLWJlZDItODAzYzY2NzdmY2Q2%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%225e7e0fcc-01f3-4250-83e5-c11873c6ca89%22%7d"
        }
      },
      "Sistemas Informáticos": {
        "url": "https://campus.europaeducationgroup.es/courses/113313/modules",
        "teams": {
          "Lunes": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTlhMWMzYTYtNDQzZC00NWQxLTlhYTItNTkzODdhODI2NTlj%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%225e7e0fcc-01f3-4250-83e5-c11873c6ca89%22%7d",
          "Jueves": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDQwYjgzNTQtNWQwZS00MzJiLWI0YWYtNWQzYTRkMzZlNGVl%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%225e7e0fcc-01f3-4250-83e5-c11873c6ca89%22%7d"
        }
      },
      "Bases de Datos": {
        "url": "https://campus.europaeducationgroup.es/courses/116295/modules",
        "teams": {
          "1": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTY4NTJjYWQtYTQwZS00NmVmLWE0MzQtMjQ2ZDVhN2Y4MWIw%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%2241dd77d0-bb1a-4580-9e0e-10046d348140%22%7d",
          "2": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWUyNTA0MzEtNGYxZS00NzM5LThlZmUtNTk2ZGFmYTA3OTU4%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%2241dd77d0-bb1a-4580-9e0e-10046d348140%22%7d"
        }
      },
      "Robótica": {
        "url": "https://campus.europaeducationgroup.es/courses/103874/modules",
        "teams": {
          "1": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2U4YTU5OTYtYWJlNS00NTZmLWE5N2MtODIwYWFmMjRkNjVk%40thread.v2/0?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%2241dd77d0-bb1a-4580-9e0e-10046d348140%22%7d"
        }
      },
      "Itinerario Empleabilidad": {
        "url": "https://campus.europaeducationgroup.es/courses/106795/modules",
        "teams": {
          "1": "https://teams.microsoft.com/l/meetup-join/19%3aoT4A0fFYSM2YDq1yxaF0jJ__sB9nl31xKrVcBwuetnk1%40thread.tacv2/1759480418753?context=%7b%22Tid%22%3a%22cfab0009-84b7-4397-a0f8-f77cdf1579c1%22%2c%22Oid%22%3a%2245a6ec04-a8ba-4a53-8542-3b5c86a1f6ca%22%7d"
        }
      }
    },
    "schedule": {
      "Lunes": [
        { "subject": "Entornos de Desarrollo", "start": "8:30", "length": 2 },
        { "subject": "Sistemas Informáticos", "start": "10:30", "length": 4 }
      ],
      "Martes": [
        { "subject": "Programación", "start": "8:30", "length": 4 },
        { "subject": "Robótica", "start": "12:30", "length": 2 }
      ],
      "Miércoles": [
        { "subject": "Lenguajes de Marcas", "start": "8:30", "length": 3 },
        { "subject": "Bases de Datos", "start": "11:30", "length": 3 }
      ],
      "Jueves": [
        { "subject": "Sistemas Informáticos", "start": "8:30", "length": 2 },
        { "subject": "Programación", "start": "10:30", "length": 4 }
      ],
      "Viernes": [
        { "subject": "Bases de Datos", "start": "8:30", "length": 3 },
        { "subject": "Itinerario Empleabilidad", "start": "11:30", "length": 3 }
      ]
    }
  }
};

function generateTimetable() {
  const timetable = data.timetable;

  const days = timetable.days;
  const timeSlots = timetable.time_slots;
  const schedule = timetable.schedule;
  const subjectInfo = timetable.subject_info;

  // ─── Build a grid: grid[slotIndex][dayIndex] = { subject, rowspan } | null
  //     null means the cell is covered by a rowspan above it
  // ───────────────────────────────────────────────────────────────────────────
  const grid = timeSlots.map(() => days.map(() => null));

  days.forEach((day, dayIndex) => {
    const daySchedule = schedule[day];

    daySchedule.forEach((entry) => {
      const startSlotIndex = timeSlots.findIndex((slot) => slot.startsWith(entry.start));
      if (startSlotIndex === -1) return;

      grid[startSlotIndex][dayIndex] = { subject: entry.subject, rowspan: entry.length };

      for (let i = 1; i < entry.length; i++) {
        grid[startSlotIndex + i][dayIndex] = null;
      }
    });
  });

  // ─── Generate HTML ──────────────────────────────────────────────────────────
  let html = `<table>
    <thead>
        <tr>
            <th>${timetable.title}</th>
            ${days.map((day) => `<th>${day}</th>`).join("\n            ")}
        </tr>
    </thead>
    <tbody>\n`;

  timeSlots.forEach((slot, slotIndex) => {
    let cells = "";

    days.forEach((day, dayIndex) => {
      const cell = grid[slotIndex][dayIndex];

      if (cell === null) return;

      const info = subjectInfo[cell.subject];
      const url = info ? info.url : "#";
      const rowspanAttr = cell.rowspan > 1 ? ` rowspan="${cell.rowspan}"` : "";

      cells += `\n            <td${rowspanAttr}><a href="${url}" target="_blank">${cell.subject}</a></td>`;
    });

    html += `        <tr>
            <th scope="row">${slot}</th>${cells}
        </tr>\n`;
  });

  html += `    </tbody>
</table>`;

  // ─── Output ───────────────────────────────────────────────────────────────
  const container = document.getElementById("timetable");
  if (container) {
    container.innerHTML = html;
  } else {
    console.log(html);
  }
}

// ─── Generate Teams Links ─────────────────────────────────────────────────────
function generateTeamsLinks() {
  const subjects = data.timetable.subjects;
  const subjectInfo = data.timetable.subject_info;
  let html = "<ul>";

  subjects.forEach((subject) => {
    const info = subjectInfo[subject];
    if (!info || !info.teams) return;

    const teams = info.teams;
    const keys = Object.keys(teams);

    html += `<li>${subject}<ul>`;

    if (keys.length === 1) {
      html += `<li><a href="${teams[keys[0]]}" class="button">Teams</a></li>`;
    } else if (keys.includes("1")) {
      keys.forEach((key) => {
        html += `<li><a href="${teams[key]}" class="button">Teams ${key}</a></li>`;
      });
    } else {
      keys.forEach((day) => {
        html += `<li><a href="${teams[day]}" class="button">${day}</a></li>`;
      });
    }

    html += `</ul></li>`;
  });

  html += "</ul>";

  const container = document.getElementById("teams-links");
  if (container) {
    container.innerHTML = html;
  } else {
    console.log(html);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
generateTimetable();
generateTeamsLinks();