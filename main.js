// Admin password
var ADMIN_PASSWORD = '29122009';
var isAuthenticated = false;

// Schedule data storage - load from data.js first, then check localStorage
var storedSchedule = localStorage.getItem('schedule');
var schedule;

if (storedSchedule) {
  schedule = JSON.parse(storedSchedule);
} else if (typeof DEFAULT_SCHEDULE !== 'undefined') {
  schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
  saveToLocalStorage();
} else {
  schedule = {
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {}
  };
}

// Current selected day
var currentDay = 'monday';

// DOM Elements
var scheduleBody = document.getElementById('scheduleBody');
var dayButtons = document.querySelectorAll('.day-btn');
var adminPanel = document.getElementById('adminPanel');
var adminToggle = document.getElementById('adminToggle');
var closeAdmin = document.getElementById('closeAdmin');
var overlay = document.getElementById('overlay');
var hasGroupsCheckbox = document.getElementById('hasGroups');
var groupsSection = document.getElementById('groupsSection');
var saveBtn = document.getElementById('saveLesson');
var deleteBtn = document.getElementById('deleteLesson');
var clearBtn = document.getElementById('clearAll');
var logoutBtn = document.getElementById('logoutAdmin');
var exportBtn = document.getElementById('exportData');
var importInput = document.getElementById('importData');
var generateBtn = document.getElementById('generateCode');
var codeModal = document.getElementById('codeModal');
var closeCode = document.getElementById('closeCode');
var copyCodeBtn = document.getElementById('copyCode');
var generatedCodeEl = document.getElementById('generatedCode');

// Initialize
function init() {
  renderSchedule();
  bindEvents();
}

// Bind all event listeners
function bindEvents() {
  // Day buttons
  dayButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      dayButtons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentDay = btn.dataset.day;
      renderSchedule();
    });
  });

  // Admin panel toggle
  adminToggle.addEventListener('click', openAdminPanel);
  closeAdmin.addEventListener('click', closeAdminPanel);
  overlay.addEventListener('click', closeAdminPanel);

  // Groups checkbox
  hasGroupsCheckbox.addEventListener('change', function() {
    if (this.checked) {
      groupsSection.classList.add('active');
    } else {
      groupsSection.classList.remove('active');
    }
  });

  // Save lesson
  saveBtn.addEventListener('click', saveLesson);

  // Delete lesson
  deleteBtn.addEventListener('click', deleteLesson);

  // Clear all
  clearBtn.addEventListener('click', clearAllSchedule);

  // Logout
  logoutBtn.addEventListener('click', logoutAdmin);

  // Export/Import
  exportBtn.addEventListener('click', exportSchedule);
  importInput.addEventListener('change', importSchedule);

  // Generate code
  generateBtn.addEventListener('click', showGeneratedCode);
  closeCode.addEventListener('click', closeCodeModal);
  copyCodeBtn.addEventListener('click', copyGeneratedCode);
}

// Render schedule table
function renderSchedule() {
  var daySchedule = schedule[currentDay] || {};
  var html = '';

  // Check if there are any lessons
  var hasLessons = Object.keys(daySchedule).length > 0;

  if (!hasLessons) {
    html = '<tr class="empty-row"><td colspan="4">Розклад на цей день порожній</td></tr>';
  } else {
    // Sort lessons by number
    var sortedLessons = Object.keys(daySchedule).sort(function(a, b) {
      return parseInt(a) - parseInt(b);
    });

    sortedLessons.forEach(function(num) {
      var lesson = daySchedule[num];
      html += createLessonRow(num, lesson);
    });
  }

  scheduleBody.innerHTML = html;
}

// Create a lesson row HTML
function createLessonRow(num, lesson) {
  var linksHtml = '';

  if (lesson.hasGroups) {
    if (lesson.group1Link) {
      linksHtml += '<a href="' + lesson.group1Link + '" target="_blank" class="link-btn group-btn">Група 1</a>';
    }
    if (lesson.group2Link) {
      linksHtml += '<a href="' + lesson.group2Link + '" target="_blank" class="link-btn group-btn">Група 2</a>';
    }
  } else {
    if (lesson.link) {
      linksHtml = '<a href="' + lesson.link + '" target="_blank" class="link-btn">Приєднатися</a>';
    }
  }

  if (!linksHtml) {
    linksHtml = '<span style="color: #555;">—</span>';
  }

  return '<tr>' +
    '<td class="lesson-num">' + num + '</td>' +
    '<td class="lesson-time">' + (lesson.time || '—') + '</td>' +
    '<td class="lesson-name">' + (lesson.name || '—') + '</td>' +
    '<td class="lesson-links">' + linksHtml + '</td>' +
  '</tr>';
}

// Open admin panel
function openAdminPanel() {
  if (!isAuthenticated) {
    var enteredPassword = prompt('Введіть пароль адміністратора:');
    if (enteredPassword === null) {
      return;
    }
    if (enteredPassword !== ADMIN_PASSWORD) {
      alert('Невірний пароль!');
      return;
    }
    isAuthenticated = true;
  }

  adminPanel.classList.add('active');
  overlay.classList.add('active');
  document.getElementById('adminDay').value = currentDay;
  document.body.style.overflow = 'hidden';
}

// Close admin panel
function closeAdminPanel() {
  adminPanel.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  clearForm();
}

// Clear form fields
function clearForm() {
  document.getElementById('lessonNumber').value = '1';
  document.getElementById('lessonTime').value = '';
  document.getElementById('lessonName').value = '';
  document.getElementById('lessonLink').value = '';
  document.getElementById('hasGroups').checked = false;
  document.getElementById('group1Link').value = '';
  document.getElementById('group2Link').value = '';
  groupsSection.classList.remove('active');
}

// Save lesson
function saveLesson() {
  var day = document.getElementById('adminDay').value;
  var num = document.getElementById('lessonNumber').value;
  var time = document.getElementById('lessonTime').value.trim();
  var name = document.getElementById('lessonName').value.trim();
  var link = document.getElementById('lessonLink').value.trim();
  var hasGroups = document.getElementById('hasGroups').checked;
  var group1Link = document.getElementById('group1Link').value.trim();
  var group2Link = document.getElementById('group2Link').value.trim();

  if (!name) {
    alert('Введіть назву предмету');
    return;
  }

  if (!schedule[day]) {
    schedule[day] = {};
  }

  schedule[day][num] = {
    time: time,
    name: name,
    link: link,
    hasGroups: hasGroups,
    group1Link: group1Link,
    group2Link: group2Link
  };

  saveToLocalStorage();

  // Update view if same day
  if (day === currentDay) {
    renderSchedule();
  }

  closeAdminPanel();
}

// Delete lesson
function deleteLesson() {
  var day = document.getElementById('adminDay').value;
  var num = document.getElementById('lessonNumber').value;

  if (schedule[day] && schedule[day][num]) {
    delete schedule[day][num];
    saveToLocalStorage();

    if (day === currentDay) {
      renderSchedule();
    }
  }

  closeAdminPanel();
}

// Clear all schedule
function clearAllSchedule() {
  if (confirm('Ви впевнені, що хочете видалити весь розклад?')) {
    schedule = {
      monday: {},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {}
    };
    saveToLocalStorage();
    renderSchedule();
    closeAdminPanel();
  }
}

// Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem('schedule', JSON.stringify(schedule));
}

// Logout from admin
function logoutAdmin() {
  isAuthenticated = false;
  closeAdminPanel();
}

// Export schedule as JSON file
function exportSchedule() {
  var dataStr = JSON.stringify(schedule, null, 2);
  var blob = new Blob([dataStr], { type: 'application/json' });
  var url = URL.createObjectURL(blob);

  var a = document.createElement('a');
  a.href = url;
  a.download = 'schedule.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Import schedule from JSON file
function importSchedule(e) {
  var file = e.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function(event) {
    try {
      var imported = JSON.parse(event.target.result);
      schedule = imported;
      saveToLocalStorage();
      renderSchedule();
      alert('Розклад успішно завантажено!');
    } catch (err) {
      alert('Помилка читання файлу. Перевірте формат JSON.');
    }
  };
  reader.readAsText(file);

  // Reset input
  e.target.value = '';
}

// Generate data.js code
function showGeneratedCode() {
  var code = '// =====================================================\n';
  code += '// РОЗКЛАД УРОКІВ - редагуйте цей файл для збереження\n';
  code += '// =====================================================\n';
  code += '// Після редагування закомітьте файл в GitHub\n\n';
  code += 'var DEFAULT_SCHEDULE = ' + JSON.stringify(schedule, null, 2) + ';\n';

  generatedCodeEl.textContent = code;
  codeModal.classList.add('active');
  overlay.classList.add('active');
}

// Close code modal
function closeCodeModal() {
  codeModal.classList.remove('active');
  if (!adminPanel.classList.contains('active')) {
    overlay.classList.remove('active');
  }
}

// Copy generated code
function copyGeneratedCode() {
  var code = generatedCodeEl.textContent;

  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(function() {
      copyCodeBtn.textContent = 'Скопійовано!';
      setTimeout(function() {
        copyCodeBtn.textContent = 'Скопіювати код';
      }, 2000);
    });
  } else {
    // Fallback for older browsers
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copyCodeBtn.textContent = 'Скопійовано!';
    setTimeout(function() {
      copyCodeBtn.textContent = 'Скопіювати код';
    }, 2000);
  }
}

// Start the app
init();
