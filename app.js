// Varchas OS – Dynamic Application State and Frontend Logic

// 1. Central Application State
const state = {
  transactions: [
    { id: 1, title: 'Home Loan EMI', amount: 5293, category: 'Housing (EMI)', date: '2025-05-19' },
    { id: 2, title: 'Swiggy Dinner', amount: 1850, category: 'Food', date: '2025-05-19' },
    { id: 3, title: 'Grocery Run', amount: 2000, category: 'Food', date: '2025-05-18' },
    { id: 4, title: 'Fuel Petrol', amount: 2450, category: 'Transport', date: '2025-05-17' },
    { id: 5, title: 'Electricity Bill', amount: 1800, category: 'Utilities', date: '2025-05-16' },
    { id: 6, title: 'Netflix & Spotify', amount: 1250, category: 'Subscriptions', date: '2025-05-15' },
    { id: 7, title: 'Shopping & Others', amount: 3757, category: 'Others', date: '2025-05-14' }
  ],
  expenses: [], // Dynamic summaries calculated from state.transactions
  tasks: [
    { id: 1, name: 'Power BI Practice', category: 'Projects', tagClass: 'tag-skill', tagLabel: 'Skill', completed: false },
    { id: 2, name: 'PGCET MBA Quant Practice', category: 'MBA Prep', tagClass: 'tag-mba', tagLabel: 'MBA Prep', completed: false },
    { id: 3, name: 'Update LinkedIn Profile', category: 'Personal', tagClass: 'tag-personal', tagLabel: 'Personal', completed: false },
    { id: 4, name: 'Workforce Analytics Report', category: 'Work', tagClass: 'tag-work', tagLabel: 'Work', completed: false },
    { id: 5, name: 'Read 20 Pages (Book)', category: 'Personal', tagClass: 'tag-personal', tagLabel: 'Personal', completed: false }
  ],
  reminders: [
    { id: 1, title: 'EMI Payment', sub: 'Home Loan EMI', date: '25 May', hour: '10:00 AM', icon: '📅', iconBg: '#3b1a1a', iconColor: '#ef4444' },
    { id: 2, title: 'Gym Workout', sub: 'Push Day', date: 'Today', hour: '7:00 PM', icon: '💪', iconBg: 'rgba(0, 208, 132, 0.12)', iconColor: '#00d084' },
    { id: 3, title: 'CAT Preparation', sub: 'Quant Practice', date: 'Tomorrow', hour: '8:00 AM', icon: '📚', iconBg: 'rgba(139, 92, 246, 0.15)', iconColor: '#8b5cf6' },
    { id: 4, title: 'Power BI Practice', sub: 'Dashboard Building', date: 'Tomorrow', hour: '6:00 PM', icon: '📊', iconBg: 'rgba(59, 130, 246, 0.12)', iconColor: '#3b82f6' }
  ],
  bills: [
    { id: 1, name: 'Home Loan EMI', amt: '₹5,293', status: 'Due in 6 days', statusClass: 'status-late', icon: '🏠', iconBg: 'rgba(239, 68, 68, 0.12)', iconColor: '#ef4444' },
    { id: 2, name: 'Car Loan EMI', amt: '₹3,810', status: 'Paid', statusClass: 'status-paid', icon: '🚗', iconBg: 'rgba(59, 130, 246, 0.12)', iconColor: '#3b82f6' },
    { id: 3, name: 'Credit Card Bill', amt: '₹2,450', status: 'Due in 12 days', statusClass: 'status-due', icon: '💳', iconBg: 'rgba(139, 92, 246, 0.15)', iconColor: '#8b5cf6' }
  ],
  goals: [
    { id: 1, name: 'Analytics Transition', pct: 60, color: 'var(--green)' },
    { id: 2, name: 'MBA Admission', pct: 40, color: 'var(--purple)' },
    { id: 3, name: 'Financial Freedom', pct: 25, color: 'var(--orange)' },
    { id: 4, name: 'Fitness Goal', pct: 55, color: 'var(--blue)' }
  ],
  recentActivities: [
    { id: 1, text: 'Added expense: Swiggy', time: '1 hour ago' },
    { id: 2, text: 'Completed task: Resume Parser Project', time: '3 hours ago' },
    { id: 3, text: 'Updated goal: Analytics Transition', time: '5 hours ago' },
    { id: 4, text: 'Added reminder: Gym Workout', time: '6 hours ago' }
  ],
  skills: [
    { id: 1, name: 'Workforce Analytics', category: 'Work', pct: 65, hours: 42, level: 'Intermediate' },
    { id: 2, name: 'Power BI Dashboarding', category: 'Tech', pct: 85, hours: 78, level: 'Expert' },
    { id: 3, name: 'PGCET MBA Quant', category: 'MBA Prep', pct: 40, hours: 24, level: 'Beginner' },
    { id: 4, name: 'Strategic HR Management', category: 'Work', pct: 70, hours: 55, level: 'Intermediate' }
  ],
  notes: [
    { id: 1, title: 'Workforce Planning Guidelines', desc: 'Core principles of modern HR analytics, supply vs demand models, gap analysis.', content: 'Workforce Planning Guidelines:\n\n1. Define Organizational Objectives\n2. Analyze Current Workforce Supply\n3. Forecast Future Demand Requirements\n4. Perform Gap Analysis (Shortages/Surpluses)\n5. Develop Action Plans (Recruit, Retrain, Retain)', date: '2026-05-20T14:30:00Z' },
    { id: 2, title: 'Quant Prep Syllabus (PGCET)', desc: 'Topics list: Arithmetic, Algebra, Geometry, Data Interpretation.', content: 'PGCET MBA Quant Preparation Plan:\n\n- Arithmetic: Percentages, Profit & Loss, Ratio & Proportion, Time & Work, Time Speed Distance.\n- Algebra: Linear/Quadratic Equations, Progressions, Logarithms.\n- Geometry: Mensuration, Coordinate Geometry.\n- Data Interpretation: Tables, Bar Charts, Pie Charts, Line Graphs.', date: '2026-05-19T09:15:00Z' },
    { id: 3, title: 'Weekly MBA Study Schedule', desc: 'Grid schedule for working days and weekends study block allocations.', content: 'Weekly Study Routine:\n\n- Weekdays (Mon-Fri):\n  * 6:00 AM - 7:30 AM: Study Session (Quant/DI)\n  * 8:00 PM - 9:00 PM: Revision & Practice Quizzes\n- Weekends (Sat-Sun):\n  * 8:00 AM - 12:00 PM: Dedicated Mock Tests & Review\n  * 3:00 PM - 5:00 PM: Skill Project Work (Power BI / Workforce)', date: '2026-05-18T18:45:00Z' }
  ],
  activeNoteId: 1
};

// Category Configuration with Premium Accents
const categoryConfig = {
  'Housing (EMI)': { color: '#00d084', bg: 'rgba(0, 208, 132, 0.15)' },
  'Food': { color: '#eab308', bg: 'rgba(234, 179, 8, 0.15)' },
  'Transport': { color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
  'Utilities': { color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
  'Subscriptions': { color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
  'Others': { color: '#64748b', bg: 'rgba(100, 116, 139, 0.15)' }
};

// 2. Lifecycle Bootstrap
document.addEventListener('DOMContentLoaded', async () => {
  initDateBadge();         // Dynamic premium calendar day badge
  initDynamicReminders();   // Align reminders with real calendar day
  initSidebarMobileToggle();
  initRouter();             // Single page router system
  initThemeSwitcher();      // Dark/Light switcher state manager
  initTaskInteractions();
  initTaskModal();
  initReminderModal();
  initBillModal();          // Phase 7 modal manager
  initGoalModal();          // Phase 8 modal manager
  initSkillModal();         // Phase 9 modal manager
  initNotesSystem();        // Notes list & split text editor manager
  initExpenseModal();

  // Load backend database state on startup
  await loadStateFromBackend();

  // Initial dynamic renders
  recalculateAndRenderExpenses();
  renderTasks();
  renderReminders();
  renderBills();            // Custom dynamic render
  renderGoals();            // Custom dynamic render
  renderSkills();           // Custom dynamic render
  renderNotes();            // Custom dynamic render
  renderRecentActivities(); // Dynamic activity logs
  updateTaskStatCount();
  updateReminderStatCount();
  updateEMIStatCount();
});

// Load persistent state from Python Flask server
async function loadStateFromBackend() {
  try {
    const response = await fetch('/api/state');
    if (response.ok) {
      const data = await response.json();
      if (data) {
        Object.keys(data).forEach(key => {
          state[key] = data[key];
        });
        console.log("Persistent state loaded successfully:", state);
      }
    }
  } catch (err) {
    console.warn("Could not reach backend state APIs, using in-memory state:", err);
  }
}

// Background sync helper to update Python database
async function syncState() {
  try {
    const response = await fetch('/api/state', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    });
    if (response.ok) {
      console.log("OS state successfully synchronized to Flask server database.");
    } else {
      console.error("Failed to sync OS state.");
    }
  } catch (err) {
    console.error("Network error synchronizing state to Flask:", err);
  }
}


// 3. Dynamic Category Aggregation and Rendering (Phase 4 Core Math Engine)
function recalculateAndRenderExpenses() {
  const transactions = state.transactions;
  const grandTotal = transactions.reduce((sum, item) => sum + item.amount, 0);

  // Initialize fresh category sums mapping
  const categorySums = {
    'Housing (EMI)': 0,
    'Food': 0,
    'Transport': 0,
    'Utilities': 0,
    'Subscriptions': 0,
    'Others': 0
  };

  // Populate sums
  transactions.forEach(t => {
    if (categorySums[t.category] !== undefined) {
      categorySums[t.category] += t.amount;
    } else {
      categorySums['Others'] += t.amount;
    }
  });

  // Re-build state.expenses array
  state.expenses = Object.keys(categorySums).map(catName => {
    const amount = categorySums[catName];
    const pct = grandTotal > 0 ? (amount / grandTotal) * 100 : 0;
    return {
      category: catName,
      amount: amount,
      pct: parseFloat(pct.toFixed(1)),
      color: categoryConfig[catName].color
    };
  });

  // Render values to DOM
  const totalAmtString = `₹${grandTotal.toLocaleString('en-IN')}`;
  
  // Update overview card text labels
  const donutTotalAmt = document.getElementById('donutTotalAmt');
  if (donutTotalAmt) donutTotalAmt.textContent = totalAmtString;
  
  // Update stat counter card (Monthly Expenses card)
  const expenseStatValue = document.getElementById('expenseStatValue');
  if (expenseStatValue) expenseStatValue.textContent = totalAmtString;

  const expenseLimit = 60000;
  const limitPct = grandTotal > 0 ? (grandTotal / expenseLimit) * 100 : 0;
  
  const expenseStatFill = document.getElementById('expenseStatFill');
  if (expenseStatFill) expenseStatFill.style.width = `${Math.min(limitPct, 100)}%`;
  
  const expenseStatPct = document.getElementById('expenseStatPct');
  if (expenseStatPct) expenseStatPct.textContent = `${limitPct.toFixed(1)}%`;

  // Render Legend Items Dynamically
  renderExpenseLegend(state.expenses);

  // Render Transaction Ledger Dynamically
  renderTransactionLedger(state.transactions);

  // Draw the Canvas Chart
  renderDonutChart(state.expenses);
}

// 4. Render Dynamic Legend
function renderExpenseLegend(expenses) {
  const legendContainer = document.getElementById('expenseLegend');
  if (!legendContainer) return;
  
  legendContainer.innerHTML = '';
  
  // Sort category summaries so highest expense is at the top
  const sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);
  
  sortedExpenses.forEach(item => {
    // Only display categories with non-zero amounts for clean UI, unless it's Housing/Food as main pillars
    if (item.amount === 0) return;

    const legendHtml = `
      <div class="legend-item">
        <div class="legend-left">
          <div class="legend-dot" style="background:${item.color}"></div>
          <div class="legend-name">${item.category}</div>
        </div>
        <div class="legend-right">
          <span>₹${item.amount.toLocaleString('en-IN')}</span>
          <span class="legend-pct">${item.pct}%</span>
        </div>
      </div>
    `;
    legendContainer.insertAdjacentHTML('beforeend', legendHtml);
  });
}

// 5. Render Transaction Ledger Logs (Phase 4 Dynamic List)
function renderTransactionLedger(transactions) {
  const ledgerList = document.getElementById('ledgerList');
  const ledgerCount = document.getElementById('ledgerCount');
  if (!ledgerList) return;

  ledgerList.innerHTML = '';

  if (ledgerCount) {
    ledgerCount.textContent = `${transactions.length} items`;
  }

  if (transactions.length === 0) {
    ledgerList.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:12px 0;text-align:center;">No transaction logs entered.</div>';
    return;
  }

  // Render chronologically (newest first)
  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedTransactions.forEach(t => {
    const config = categoryConfig[t.category] || categoryConfig['Others'];
    const itemDate = new Date(t.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    
    const ledgerItemHtml = `
      <div class="ledger-item" data-id="${t.id}">
        <div class="ledger-item-info">
          <span class="ledger-item-title">${t.title}</span>
          <div class="ledger-item-meta">
            <span class="ledger-item-cat" style="background:${config.bg};color:${config.color}">${t.category}</span>
            <span>•</span>
            <span>${itemDate}</span>
          </div>
        </div>
        <div class="ledger-item-right">
          <span class="ledger-item-amt">₹${t.amount.toLocaleString('en-IN')}</span>
          <button class="ledger-delete-btn" title="Delete Transaction" data-id="${t.id}">&times;</button>
        </div>
      </div>
    `;
    ledgerList.insertAdjacentHTML('beforeend', ledgerItemHtml);
  });

  // Bind Ledger Delete Events
  ledgerList.querySelectorAll('.ledger-delete-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const transactionId = parseInt(this.getAttribute('data-id'));
      deleteTransaction(transactionId);
    });
  });
}

// 6. Delete Transaction Logic
function deleteTransaction(id) {
  const transactionIndex = state.transactions.findIndex(t => t.id === id);
  if (transactionIndex === -1) return;

  const transaction = state.transactions[transactionIndex];
  state.transactions.splice(transactionIndex, 1);

  // Log activity
  logActivity(`Deleted expense: ${transaction.title} (-₹${transaction.amount})`);

  // Recalculate balances
  recalculateAndRenderExpenses();
}

// 7. Render HTML5 Donut Canvas Chart
function renderDonutChart(expenses) {
  const canvas = document.getElementById('donutChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let start = -Math.PI / 2;
  const cx = 60, cy = 60, ro = 52, ri = 38;

  // Filter out zero amount slices
  const activeExpenses = expenses.filter(e => e.amount > 0);
  
  if (activeExpenses.length === 0) {
    // Render grey empty placeholder donut
    ctx.beginPath();
    ctx.moveTo(cx + ri * Math.cos(start), cy + ri * Math.sin(start));
    ctx.arc(cx, cy, ro, start, start + 2 * Math.PI);
    ctx.arc(cx, cy, ri, start + 2 * Math.PI, start, true);
    ctx.closePath();
    ctx.fillStyle = '#232838';
    ctx.fill();
    return;
  }

  activeExpenses.forEach((item) => {
    const slice = (item.pct / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx + ri * Math.cos(start), cy + ri * Math.sin(start));
    ctx.arc(cx, cy, ro, start, start + slice);
    ctx.arc(cx, cy, ri, start + slice, start, true);
    ctx.closePath();
    
    ctx.fillStyle = item.color;
    ctx.fill();
    
    // Sleek border divider slice
    ctx.strokeStyle = '#13161e';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    
    start += slice;
  });
}

// 8. Interactive Modal Systems (Phase 4 Glassmorphic Add Form Overlay)
function initExpenseModal() {
  const modal = document.getElementById('expenseModal');
  const openBtn = document.getElementById('openExpenseModalBtn');
  const closeBtn = document.getElementById('closeExpenseModalBtn');
  const cancelBtn = document.getElementById('cancelExpenseBtn');
  const form = document.getElementById('expenseForm');
  const dateInput = document.getElementById('expDate');
  const toggleLedgerBtn = document.getElementById('toggleLedgerBtn');
  const ledgerContainer = document.getElementById('expenseLedger');

  // Modal open
  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
      // Auto default date to current local calendar day
      if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
      }
    });
  }

  // Modal close helpers
  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      if (form) form.reset();
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('expTitle').value.trim();
      const amount = parseInt(document.getElementById('expAmount').value);
      const category = document.getElementById('expCategory').value;
      const date = document.getElementById('expDate').value;

      if (!title || !amount || !category || !date) return;

      const newTransaction = {
        id: Date.now(),
        title: title,
        amount: amount,
        category: category,
        date: date
      };

      state.transactions.push(newTransaction);

      // Re-trigger calculations and renders
      recalculateAndRenderExpenses();

      // Log activity
      logActivity(`Added expense: ${title} (₹${amount})`);

      // Close modal
      closeModal();
    });
  }

  // Expandable Transaction Ledger list
  if (toggleLedgerBtn && ledgerContainer) {
    toggleLedgerBtn.addEventListener('click', () => {
      const isHidden = ledgerContainer.style.display === 'none';
      if (isHidden) {
        ledgerContainer.style.display = 'block';
        toggleLedgerBtn.textContent = 'Hide transaction logs ↑';
      } else {
        ledgerContainer.style.display = 'none';
        toggleLedgerBtn.textContent = 'View transaction logs ↓';
      }
    });
  }
}

// 9. Sidebar Mobile Toggles (Hamburger Drawer)
function initSidebarMobileToggle() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }
}

// 10. Navigation Active Toggle
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  });
}

// 11. Tasks Checkbox Toggle and Category Filtering
let currentTaskFilter = 'all';

function initTaskInteractions() {
  const tabsContainer = document.getElementById('taskTabs');

  if (tabsContainer) {
    tabsContainer.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', function() {
        tabsContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        currentTaskFilter = this.textContent.trim().toLowerCase();
        renderTasks();
      });
    });
  }
}

// 12. Render and Manage Tasks
function renderTasks() {
  const taskListContainer = document.getElementById('taskListContainer');
  if (!taskListContainer) return;
  
  taskListContainer.innerHTML = '';

  const filtered = state.tasks.filter(task => {
    if (currentTaskFilter === 'all') return true;
    if (currentTaskFilter === 'work') return task.category === 'Work';
    if (currentTaskFilter === 'personal') return task.category === 'Personal';
    if (currentTaskFilter === 'mba prep') return task.category === 'MBA Prep';
    if (currentTaskFilter === 'projects') return task.category === 'Projects';
    return true;
  });

  if (filtered.length === 0) {
    taskListContainer.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:12px 0;text-align:center;">No tasks found in this category.</div>';
    return;
  }

  filtered.forEach(task => {
    const isCompleted = task.completed;
    const checkedAttr = isCompleted ? 'data-checked="true"' : 'data-checked="false"';
    const checkboxStyle = isCompleted ? 'style="background: var(--green); border-color: var(--green);"' : '';
    const textStyle = isCompleted ? 'style="text-decoration: line-through; color: var(--text-muted);"' : '';
    const checkIcon = isCompleted ? '<svg viewBox="0 0 12 12" width="10" height="10" style="position:relative;display:block;margin:auto"><polyline points="2,6 5,9 10,3" stroke="#000" stroke-width="2.5" fill="none"/></svg>' : '';

    const taskItemHtml = `
      <div class="task-item" data-id="${task.id}">
        <div class="task-check" data-id="${task.id}" ${checkedAttr} ${checkboxStyle}>${checkIcon}</div>
        <div class="task-name" ${textStyle}>${task.name}</div>
        <span class="task-tag ${task.tagClass}">${task.tagLabel}</span>
        <button class="task-delete-btn" title="Delete Task" data-id="${task.id}">&times;</button>
      </div>
    `;
    taskListContainer.insertAdjacentHTML('beforeend', taskItemHtml);
  });

  // Bind checkbox toggle event listeners
  taskListContainer.querySelectorAll('.task-check').forEach(chk => {
    chk.addEventListener('click', function(e) {
      e.stopPropagation();
      const taskId = parseInt(this.getAttribute('data-id'));
      toggleTaskCompletion(taskId);
    });
  });

  // Bind delete event listeners
  taskListContainer.querySelectorAll('.task-delete-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const taskId = parseInt(this.getAttribute('data-id'));
      deleteTask(taskId);
    });
  });
}

function toggleTaskCompletion(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;

  task.completed = !task.completed;
  
  if (task.completed) {
    logActivity(`Completed task: ${task.name}`);
  } else {
    logActivity(`Uncompleted task: ${task.name}`);
  }

  renderTasks();
  updateTaskStatCount();
}

function deleteTask(id) {
  const index = state.tasks.findIndex(t => t.id === id);
  if (index === -1) return;

  const task = state.tasks[index];
  state.tasks.splice(index, 1);

  logActivity(`Deleted task: ${task.name}`);

  renderTasks();
  updateTaskStatCount();
}

// 13. Render and Manage Reminders
function renderReminders() {
  const container = document.getElementById('reminderListContainer');
  if (!container) return;

  container.innerHTML = '';

  if (state.reminders.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:12px 0;text-align:center;">No reminders scheduled.</div>';
    return;
  }

  // Sort chronologically (rawDate first, then rawTime)
  const sorted = [...state.reminders].sort((a, b) => {
    if (a.rawDate !== b.rawDate) {
      return a.rawDate.localeCompare(b.rawDate);
    }
    return a.rawTime.localeCompare(b.rawTime);
  });

  sorted.forEach(rem => {
    const reminderHtml = `
      <div class="reminder-item" data-id="${rem.id}">
        <div class="r-icon" style="background:${rem.iconBg};color:${rem.iconColor}">${rem.icon}</div>
        <div class="r-info">
          <div class="r-title">${rem.title}</div>
          <div class="r-sub">${rem.sub}</div>
        </div>
        <div class="r-time">
          <div class="r-date">${rem.date}</div>
          <div class="r-hour">${rem.hour}</div>
        </div>
        <button class="reminder-delete-btn" title="Delete Reminder" data-id="${rem.id}">&times;</button>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', reminderHtml);
  });

  // Bind delete event listeners
  container.querySelectorAll('.reminder-delete-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const reminderId = parseInt(this.getAttribute('data-id'));
      deleteReminder(reminderId);
    });
  });
}

function deleteReminder(id) {
  const index = state.reminders.findIndex(r => r.id === id);
  if (index === -1) return;

  const reminder = state.reminders[index];
  state.reminders.splice(index, 1);

  logActivity(`Deleted reminder: ${reminder.title}`);

  renderReminders();
  updateReminderStatCount();
}

// 14. Task Modal Initialization
function initTaskModal() {
  const modal = document.getElementById('taskModal');
  const openBtn1 = document.getElementById('openTaskModalBtn');
  const openBtn2 = document.getElementById('addTaskItemBtn');
  const closeBtn = document.getElementById('closeTaskModalBtn');
  const cancelBtn = document.getElementById('cancelTaskBtn');
  const form = document.getElementById('taskForm');

  function openModal() {
    if (modal) modal.style.display = 'flex';
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      if (form) form.reset();
    }
  }

  if (openBtn1) openBtn1.addEventListener('click', openModal);
  if (openBtn2) openBtn2.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('taskTitle').value.trim();
      const category = document.getElementById('taskCategory').value;

      if (!title || !category) return;

      let tagClass = 'tag-personal';
      let tagLabel = 'Personal';
      if (category === 'Work') { tagClass = 'tag-work'; tagLabel = 'Work'; }
      else if (category === 'MBA Prep') { tagClass = 'tag-mba'; tagLabel = 'MBA Prep'; }
      else if (category === 'Projects') { tagClass = 'tag-skill'; tagLabel = 'Skill'; }

      const newTask = {
        id: Date.now(),
        name: title,
        category: category,
        tagClass: tagClass,
        tagLabel: tagLabel,
        completed: false
      };

      state.tasks.push(newTask);
      
      logActivity(`Created task: ${title}`);

      renderTasks();
      updateTaskStatCount();
      closeModal();
    });
  }
}

// 15. Reminder Modal Initialization
const reminderConfig = {
  '💪': { bg: 'rgba(0, 208, 132, 0.12)', color: '#00d084' },
  '📚': { bg: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' },
  '📊': { bg: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6' },
  '📅': { bg: '#3b1a1a', color: '#ef4444' },
  '🔔': { bg: 'rgba(234, 179, 8, 0.15)', color: '#eab308' },
  '💰': { bg: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }
};

function initReminderModal() {
  const modal = document.getElementById('reminderModal');
  const openBtn1 = document.getElementById('openReminderModalBtn');
  const openBtn2 = document.getElementById('addReminderItemBtn');
  const closeBtn = document.getElementById('closeReminderModalBtn');
  const cancelBtn = document.getElementById('cancelReminderBtn');
  const form = document.getElementById('reminderForm');
  const dateInput = document.getElementById('remDate');
  const timeInput = document.getElementById('remTime');

  function openModal() {
    if (modal) {
      modal.style.display = 'flex';
      if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
      }
      if (timeInput) {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        timeInput.value = `${hrs}:${mins}`;
      }
    }
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      if (form) form.reset();
    }
  }

  if (openBtn1) openBtn1.addEventListener('click', openModal);
  if (openBtn2) openBtn2.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('remTitle').value.trim();
      const sub = document.getElementById('remSub').value.trim();
      const dateVal = document.getElementById('remDate').value;
      const timeVal = document.getElementById('remTime').value;
      const icon = document.getElementById('remIcon').value;

      if (!title || !dateVal || !timeVal || !icon) return;

      const config = reminderConfig[icon] || { bg: 'rgba(234, 179, 8, 0.15)', color: '#eab308' };

      const newReminder = {
        id: Date.now(),
        title: title,
        sub: sub,
        date: getReminderDateLabel(dateVal),
        hour: format12HourTime(timeVal),
        rawDate: dateVal,
        rawTime: timeVal,
        icon: icon,
        iconBg: config.bg,
        iconColor: config.color
      };

      state.reminders.push(newReminder);

      logActivity(`Added reminder: ${title}`);

      renderReminders();
      updateReminderStatCount();
      closeModal();
    });
  }
}

// 16. Dynamic Date Badge and Initial Reminders Realignment
function initDateBadge() {
  const badge = document.querySelector('.date-badge');
  if (badge) {
    const today = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric', weekday: 'long' };
    badge.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      ${today.toLocaleDateString('en-US', options)}
    `;
  }
}

function initDynamicReminders() {
  const todayStr = new Date().toISOString().split('T')[0];
  
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowStr = tomorrowDate.toISOString().split('T')[0];

  const fiveDaysLater = new Date();
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 5);
  const fiveDaysLaterStr = fiveDaysLater.toISOString().split('T')[0];

  // Map initial static mocks to dynamic date tags relative to live system calendar
  if (state.reminders[0]) {
    state.reminders[0].rawDate = fiveDaysLaterStr;
    state.reminders[0].rawTime = '10:00';
    state.reminders[0].date = getReminderDateLabel(fiveDaysLaterStr);
  }

  if (state.reminders[1]) {
    state.reminders[1].rawDate = todayStr;
    state.reminders[1].rawTime = '19:00';
    state.reminders[1].date = 'Today';
  }

  if (state.reminders[2]) {
    state.reminders[2].rawDate = tomorrowStr;
    state.reminders[2].rawTime = '08:00';
    state.reminders[2].date = 'Tomorrow';
  }

  if (state.reminders[3]) {
    state.reminders[3].rawDate = tomorrowStr;
    state.reminders[3].rawTime = '18:00';
    state.reminders[3].date = 'Tomorrow';
  }
}

function getReminderDateLabel(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const targetDate = new Date(dateStr);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Tomorrow';
  } else if (diffDays === -1) {
    return 'Yesterday';
  } else {
    return targetDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }
}

function format12HourTime(timeStr) {
  if (!timeStr) return '';
  const [hoursStr, minutesStr] = timeStr.split(':');
  let hours = parseInt(hoursStr, 10);
  const minutes = minutesStr;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes} ${ampm}`;
}

// ==========================================
// 17. THEME SWITCHING SYSTEM (Slate-Frost / Cyber Theme Toggler)
// ==========================================
function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  
  // Read and apply saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      if (isLight) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
        logActivity('Switched to Slate-Frost Light Theme');
      } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
        logActivity('Switched to Dark Cyber Theme');
      }
    });
  }
}

// ==========================================
// 18. SINGLE-PAGE-APP ROUTER SYSTEM (Sidebar View Toggler)
// ==========================================
function initRouter() {
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.view-panel');
  
  function showView(viewId) {
    views.forEach(v => v.style.display = 'none');
    const activeView = document.getElementById(viewId);
    if (activeView) {
      activeView.style.display = 'block';
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      const id = this.id;
      if (id === 'navDashboard') {
        showView('dashboardView');
      } else if (id === 'navBills') {
        showView('billsView');
        renderBills();
      } else if (id === 'navSkills') {
        showView('skillsView');
        renderSkills();
        updateSkillsStatWidgets();
      } else if (id === 'navNotes') {
        showView('notesView');
        renderNotes();
      } else if (id === 'navExpenses') {
        showView('dashboardView');
        const card = document.querySelector('.card'); // First card is expenses overview
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (id === 'navTasks') {
        showView('dashboardView');
        const card = document.querySelector('.grid-3 .card:nth-child(2)'); // Tasks card
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (id === 'navReminders') {
        showView('dashboardView');
        const card = document.querySelector('.grid-3 .card:nth-child(3)'); // Reminders card
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (id === 'navGoals') {
        showView('dashboardView');
        const card = document.querySelector('.grid-3b .card:nth-child(2)'); // Goals card
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Close mobile drawer on navigation
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  });

  // Connect "View Ledger" button on Dashboard Bills card
  const dashboardViewAllBillsBtn = document.getElementById('dashboardViewAllBillsBtn');
  if (dashboardViewAllBillsBtn) {
    dashboardViewAllBillsBtn.addEventListener('click', () => {
      const navBills = document.getElementById('navBills');
      if (navBills) navBills.click();
    });
  }
}

// ==========================================
// 19. PREMIUM MODALS INITIALIZATION (Phases 7, 8, 9 Modals)
// ==========================================
function initBillModal() {
  const modal = document.getElementById('billModal');
  const openBtnDash = document.getElementById('addBillItemBtn');
  const openBtnHeader = document.getElementById('openBillModalBtnDash');
  const openBtnFull = document.getElementById('openBillModalBtnFull');
  const closeBtn = document.getElementById('closeBillModalBtn');
  const cancelBtn = document.getElementById('cancelBillBtn');
  const form = document.getElementById('billForm');
  const dateInput = document.getElementById('billDate');

  function openModal() {
    if (modal) {
      modal.style.display = 'flex';
      if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
      }
    }
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      if (form) form.reset();
    }
  }

  if (openBtnDash) openBtnDash.addEventListener('click', openModal);
  if (openBtnHeader) openBtnHeader.addEventListener('click', openModal);
  if (openBtnFull) openBtnFull.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('billTitle').value.trim();
      const amountVal = document.getElementById('billAmount').value;
      const icon = document.getElementById('billIcon').value;
      const dateVal = document.getElementById('billDate').value;

      if (!name || !amountVal || !icon || !dateVal) return;

      let iconBg = 'rgba(249, 115, 22, 0.15)';
      let iconColor = '#f97316';
      if (icon === '🏠') { iconBg = 'rgba(0, 208, 132, 0.12)'; iconColor = '#00d084'; }
      else if (icon === '🚗') { iconBg = 'rgba(59, 130, 246, 0.12)'; iconColor = '#3b82f6'; }
      else if (icon === '💳') { iconBg = 'rgba(139, 92, 246, 0.15)'; iconColor = '#8b5cf6'; }
      else if (icon === '⚡') { iconBg = 'rgba(234, 179, 8, 0.15)'; iconColor = '#eab308'; }

      const formattedAmt = `₹${parseInt(amountVal).toLocaleString('en-IN')}`;
      const dueLabel = getDaysRemainingLabel(dateVal);
      let statusClass = 'status-due';
      if (dueLabel.toLowerCase().includes('late') || dueLabel.toLowerCase().includes('overdue')) {
        statusClass = 'status-late';
      }

      const newBill = {
        id: Date.now(),
        name: name,
        amt: formattedAmt,
        status: dueLabel,
        statusClass: statusClass,
        icon: icon,
        iconBg: iconBg,
        iconColor: iconColor,
        dueDate: dateVal
      };

      state.bills.push(newBill);
      logActivity(`Created bill liability: ${name} (${formattedAmt})`);

      renderBills();
      updateEMIStatCount();
      closeModal();
    });
  }
}

function getDaysRemainingLabel(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Due Today';
  } else if (diffDays === 1) {
    return 'Due Tomorrow';
  } else if (diffDays > 1) {
    return `Due in ${diffDays} days`;
  } else {
    return `Overdue by ${Math.abs(diffDays)} days`;
  }
}

function initGoalModal() {
  const modal = document.getElementById('goalModal');
  const openBtn = document.getElementById('openGoalModalBtn');
  const closeBtn = document.getElementById('closeGoalModalBtn');
  const cancelBtn = document.getElementById('cancelGoalBtn');
  const form = document.getElementById('goalForm');

  function openModal() {
    if (modal) modal.style.display = 'flex';
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      if (form) form.reset();
      const progressVal = document.getElementById('goalProgressVal');
      if (progressVal) progressVal.textContent = '0%';
    }
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('goalTitle').value.trim();
      const pct = parseInt(document.getElementById('goalProgress').value);
      const color = document.getElementById('goalColor').value;

      if (!name) return;

      const newGoal = {
        id: Date.now(),
        name: name,
        pct: pct,
        color: color
      };

      state.goals.push(newGoal);
      logActivity(`Created goal target: ${name} (${pct}%)`);

      renderGoals();
      closeModal();
    });
  }
}

function initSkillModal() {
  const modal = document.getElementById('skillModal');
  const openBtn = document.getElementById('openSkillModalBtn');
  const closeBtn = document.getElementById('closeSkillModalBtn');
  const cancelBtn = document.getElementById('cancelSkillBtn');
  const form = document.getElementById('skillForm');

  function openModal() {
    if (modal) modal.style.display = 'flex';
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      if (form) form.reset();
    }
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('skillTitle').value.trim();
      const category = document.getElementById('skillCategory').value;
      const progressVal = parseInt(document.getElementById('skillProgress').value);

      if (!name || isNaN(progressVal)) return;

      let level = 'Beginner';
      if (progressVal >= 80) level = 'Expert';
      else if (progressVal >= 40) level = 'Intermediate';

      const newSkill = {
        id: Date.now(),
        name: name,
        category: category,
        pct: progressVal,
        hours: 0,
        level: level
      };

      state.skills.push(newSkill);
      logActivity(`Started skill tracker: ${name} (${level})`);

      renderSkills();
      updateSkillsStatWidgets();
      closeModal();
    });
  }
}

function initNotesSystem() {
  const createBtn = document.getElementById('createNoteBtn');
  const saveBtn = document.getElementById('saveNoteBtn');
  const deleteBtn = document.getElementById('deleteNoteBtn');
  const searchInput = document.getElementById('noteSearchInput');
  const titleInput = document.getElementById('noteEditTitle');
  const contentInput = document.getElementById('noteEditContent');

  if (createBtn) {
    createBtn.addEventListener('click', () => {
      const newNote = {
        id: Date.now(),
        title: 'Untitled Note',
        desc: 'Draft details...',
        content: '',
        date: new Date().toISOString()
      };
      state.notes.unshift(newNote);
      state.activeNoteId = newNote.id;
      logActivity('Created new notepad note');
      renderNotes();
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const activeNote = state.notes.find(n => n.id === state.activeNoteId);
      if (activeNote) {
        const title = titleInput.value.trim() || 'Untitled Note';
        const content = contentInput.value;
        
        activeNote.title = title;
        activeNote.content = content;
        activeNote.desc = content.trim().split('\n')[0].substring(0, 60) || 'No content...';
        activeNote.date = new Date().toISOString();
        
        logActivity(`Saved notepad changes: ${title}`);
        renderNotes();
      }
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      const activeIndex = state.notes.findIndex(n => n.id === state.activeNoteId);
      if (activeIndex !== -1) {
        const title = state.notes[activeIndex].title;
        state.notes.splice(activeIndex, 1);
        logActivity(`Deleted note record: ${title}`);
        
        if (state.notes.length > 0) {
          state.activeNoteId = state.notes[0].id;
        } else {
          state.activeNoteId = null;
        }
        renderNotes();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderNotes();
    });
  }
}

// ==========================================
// 20. PREMIUM DYNAMIC LIST RENDERING SYSTEM
// ==========================================
function renderBills() {
  const dashList = document.getElementById('dashboardBillsList');
  const fullList = document.getElementById('billsListContainer');

  // 1. Dashboard View Bills List
  if (dashList) {
    dashList.innerHTML = '';
    if (state.bills.length === 0) {
      dashList.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:12px 0;text-align:center;">No upcoming bill liabilities.</div>';
    } else {
      const displayBills = state.bills.slice(0, 3);
      displayBills.forEach(b => {
        const isPaid = b.status.toLowerCase() === 'paid';
        const clickAttr = isPaid ? '' : `onclick="payBill(${b.id})" style="cursor:pointer;" title="Mark as Paid"`;
        const billHtml = `
          <div class="bill-item" data-id="${b.id}">
            <div class="bill-icon" style="background:${b.iconBg};color:${b.iconColor}">${b.icon}</div>
            <div class="bill-name">${b.name}</div>
            <div class="bill-amt">${b.amt}</div>
            <div class="bill-status ${b.statusClass}" ${clickAttr}>${b.status}</div>
            <button class="bill-delete-btn" title="Delete Bill" onclick="deleteBill(${b.id})">&times;</button>
          </div>
        `;
        dashList.insertAdjacentHTML('beforeend', billHtml);
      });
    }
  }

  // 2. Full Bills View Ledger
  if (fullList) {
    fullList.innerHTML = '';
    if (state.bills.length === 0) {
      fullList.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:24px 0;text-align:center;">No financial commitments tracked. Add a new bill to begin.</div>';
    } else {
      state.bills.forEach(b => {
        const isPaid = b.status.toLowerCase() === 'paid';
        const payButton = isPaid ? '' : `<button class="bill-btn-full bill-btn-pay" onclick="payBill(${b.id})">✓ Pay</button>`;
        
        const billHtml = `
          <div class="bill-card-full">
            <div class="bill-icon" style="background:${b.iconBg};color:${b.iconColor}">${b.icon}</div>
            <div class="bill-info-block">
              <span class="bill-name-full">${b.name}</span>
              <span class="bill-due-full">${b.status}</span>
            </div>
            <div class="bill-amt-full">${b.amt}</div>
            <div class="bill-status ${b.statusClass}">${isPaid ? 'Paid' : 'Pending'}</div>
            <div class="bill-actions-full">
              ${payButton}
              <button class="bill-btn-full" style="color:var(--red);border-color:rgba(239,68,68,0.2);" onclick="deleteBill(${b.id})">&times; Delete</button>
            </div>
          </div>
        `;
        fullList.insertAdjacentHTML('beforeend', billHtml);
      });
    }
  }
}

function payBill(id) {
  const bill = state.bills.find(b => b.id === id);
  if (bill) {
    bill.status = 'Paid';
    bill.statusClass = 'status-paid';
    logActivity(`Paid bill liability: ${bill.name}`);
    renderBills();
    updateEMIStatCount();
  }
}

function deleteBill(id) {
  const idx = state.bills.findIndex(b => b.id === id);
  if (idx !== -1) {
    const bill = state.bills[idx];
    state.bills.splice(idx, 1);
    logActivity(`Deleted bill liability: ${bill.name}`);
    renderBills();
    updateEMIStatCount();
  }
}

function renderGoals() {
  const list = document.getElementById('dashboardGoalsList');
  if (!list) return;

  list.innerHTML = '';
  if (state.goals.length === 0) {
    list.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:12px 0;text-align:center;">No goals tracked. Click add to target.</div>';
  } else {
    state.goals.forEach(g => {
      const goalHtml = `
        <div class="goal-item" data-id="${g.id}">
          <div class="goal-row">
            <span class="goal-name">${g.name}</span>
            <span class="goal-pct">${g.pct}%</span>
          </div>
          <div class="goal-bar">
            <div class="goal-fill" style="width: ${g.pct}%; background: ${g.color}"></div>
          </div>
          <div style="display:flex; justify-content: flex-end; gap: 8px; margin-top: 5px; opacity:0.75;" class="goal-actions-bar">
            <span style="font-size:10px; color:var(--text-muted); cursor:pointer; font-weight:600;" onclick="updateGoalProgress(${g.id}, -10)">-10%</span>
            <span style="font-size:10px; color:var(--text-muted); cursor:pointer; font-weight:600;" onclick="updateGoalProgress(${g.id}, 10)">+10%</span>
            <span style="font-size:10px; color:var(--red); cursor:pointer; font-weight:600; margin-left: 10px;" onclick="deleteGoal(${g.id})">&times; Delete</span>
          </div>
        </div>
      `;
      list.insertAdjacentHTML('beforeend', goalHtml);
    });
  }

  // Update Header "Current Goal" stats card in grid
  const goalActiveValue = document.getElementById('goalActiveValue');
  const goalActiveFill = document.getElementById('goalActiveFill');
  const goalActiveAlert = document.getElementById('goalActiveAlert');

  if (state.goals.length > 0) {
    const activeGoal = state.goals[0];
    if (goalActiveValue) {
      goalActiveValue.textContent = activeGoal.name;
      goalActiveValue.style.color = 'var(--text)';
    }
    if (goalActiveFill) {
      goalActiveFill.style.width = `${activeGoal.pct}%`;
      goalActiveFill.style.background = activeGoal.color;
    }
    if (goalActiveAlert) {
      goalActiveAlert.textContent = `${activeGoal.pct}% progress achieved`;
      goalActiveAlert.style.color = activeGoal.color;
    }
  } else {
    if (goalActiveValue) {
      goalActiveValue.textContent = 'No Active Target';
      goalActiveValue.style.color = 'var(--text-muted)';
    }
    if (goalActiveFill) goalActiveFill.style.width = `0%`;
    if (goalActiveAlert) {
      goalActiveAlert.textContent = 'Click Goal option to add';
      goalActiveAlert.style.color = 'var(--text-muted)';
    }
  }
}

function updateGoalProgress(id, amt) {
  const goal = state.goals.find(g => g.id === id);
  if (goal) {
    goal.pct = Math.max(0, Math.min(100, goal.pct + amt));
    logActivity(`Updated goal progress: ${goal.name} (${goal.pct}%)`);
    renderGoals();
  }
}

function deleteGoal(id) {
  const idx = state.goals.findIndex(g => g.id === id);
  if (idx !== -1) {
    const goal = state.goals[idx];
    state.goals.splice(idx, 1);
    logActivity(`Removed goal target: ${goal.name}`);
    renderGoals();
  }
}

function renderSkills() {
  const container = document.getElementById('skillsListContainer');
  if (!container) return;

  container.innerHTML = '';
  if (state.skills.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted);font-size:12px;padding:24px 0;grid-column: 1 / -1;text-align:center;">No learning paths established. Create a skill domain to track mastery.</div>';
    return;
  }

  state.skills.forEach(s => {
    const badgeColor = s.category === 'Tech' ? 'var(--blue)' : s.category === 'Work' ? 'var(--orange)' : 'var(--purple)';
    const badgeBg = s.category === 'Tech' ? 'var(--blue-dim)' : s.category === 'Work' ? 'var(--orange-dim)' : 'var(--purple-dim)';
    const fillGrad = `linear-gradient(90deg, ${badgeColor}, var(--green))`;

    const skillHtml = `
      <div class="skill-card" data-id="${s.id}">
        <div class="skill-card-header">
          <span class="skill-title">${s.name}</span>
          <span class="skill-badge" style="background:${badgeBg}; color:${badgeColor}">${s.category}</span>
        </div>
        <div class="skill-level-row">
          <span class="skill-level-text" style="color:${badgeColor}">${s.level}</span>
          <span class="skill-hours">${s.hours} hrs practiced</span>
        </div>
        <div class="skill-progress-bar">
          <div class="skill-progress-fill" style="width: ${s.pct}%; background: ${fillGrad}"></div>
        </div>
        <div class="skill-actions">
          <button class="skill-btn skill-btn-primary" onclick="practiceSkill(${s.id})">⚡ Practice (+2h)</button>
          <button class="skill-btn" onclick="levelUpSkill(${s.id})">⭐ Level Up</button>
          <button class="skill-btn" style="flex:0; min-width:28px; color:var(--red); border-color:rgba(239,68,68,0.2);" onclick="deleteSkill(${s.id})" title="Delete Skill Tracker">&times;</button>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', skillHtml);
  });
}

function practiceSkill(id) {
  const skill = state.skills.find(s => s.id === id);
  if (skill) {
    skill.hours += 2;
    skill.pct = Math.min(100, skill.pct + 5);
    
    let logText = `Practiced skill: ${skill.name} (+2 hrs)`;
    if (skill.pct >= 100 && skill.level !== 'Expert') {
      skill.level = skill.level === 'Beginner' ? 'Intermediate' : 'Expert';
      skill.pct = skill.level === 'Intermediate' ? 40 : 80;
      logText = `⭐ Skill level up! ${skill.name} is now ${skill.level}`;
      triggerLevelUpPulseAnimation(id);
    }
    
    logActivity(logText);
    renderSkills();
    updateSkillsStatWidgets();
  }
}

function levelUpSkill(id) {
  const skill = state.skills.find(s => s.id === id);
  if (skill) {
    if (skill.level === 'Beginner') {
      skill.level = 'Intermediate';
      skill.pct = 50;
      logActivity(`⭐ Manually upgraded skill: ${skill.name} to Intermediate`);
      triggerLevelUpPulseAnimation(id);
    } else if (skill.level === 'Intermediate') {
      skill.level = 'Expert';
      skill.pct = 85;
      logActivity(`⭐ Manually upgraded skill: ${skill.name} to Expert`);
      triggerLevelUpPulseAnimation(id);
    } else {
      logActivity(`Skill ${skill.name} is already at high proficiency!`);
    }
    renderSkills();
    updateSkillsStatWidgets();
  }
}

function deleteSkill(id) {
  const idx = state.skills.findIndex(s => s.id === id);
  if (idx !== -1) {
    const skill = state.skills[idx];
    state.skills.splice(idx, 1);
    logActivity(`Deleted skill tracker: ${skill.name}`);
    renderSkills();
    updateSkillsStatWidgets();
  }
}

function triggerLevelUpPulseAnimation(id) {
  setTimeout(() => {
    const card = document.querySelector(`.skill-card[data-id="${id}"]`);
    if (card) {
      card.classList.add('skill-level-up-pulse');
      card.addEventListener('animationend', () => {
        card.classList.remove('skill-level-up-pulse');
      }, { once: true });
    }
  }, 50);
}

function updateSkillsStatWidgets() {
  const countVal = document.getElementById('skillsTotalCount');
  const expertVal = document.getElementById('skillsExpertCount');
  const hoursVal = document.getElementById('skillsTotalHours');

  const totalCount = state.skills.length;
  const expertCount = state.skills.filter(s => s.level === 'Expert').length;
  const totalHours = state.skills.reduce((sum, s) => sum + s.hours, 0);

  if (countVal) countVal.textContent = totalCount;
  if (expertVal) expertVal.textContent = expertCount;
  if (hoursVal) hoursVal.textContent = `${totalHours} hrs`;
}

function renderNotes() {
  const list = document.getElementById('notesListContainer');
  const searchInput = document.getElementById('noteSearchInput');
  const titleInput = document.getElementById('noteEditTitle');
  const dateInput = document.getElementById('noteEditDate');
  const contentInput = document.getElementById('noteEditContent');
  const editorContainer = document.getElementById('noteEditorContainer');

  if (!list) return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const filtered = state.notes.filter(n => {
    return n.title.toLowerCase().includes(query) || 
           n.desc.toLowerCase().includes(query) || 
           n.content.toLowerCase().includes(query);
  });

  list.innerHTML = '';
  if (filtered.length === 0) {
    list.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:24px 0;text-align:center;">No matching notes found.</div>';
  } else {
    filtered.forEach(n => {
      const isActive = n.id === state.activeNoteId;
      const formattedDate = new Date(n.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
      
      const noteHtml = `
        <div class="note-item ${isActive ? 'active' : ''}" onclick="selectNote(${n.id})">
          <span class="note-item-title">${n.title}</span>
          <span class="note-item-desc">${n.desc}</span>
          <span class="note-item-date">${formattedDate}</span>
        </div>
      `;
      list.insertAdjacentHTML('beforeend', noteHtml);
    });
  }

  // Bind active note to editor
  const activeNote = state.notes.find(n => n.id === state.activeNoteId);
  if (activeNote) {
    if (editorContainer) editorContainer.style.opacity = '1';
    if (titleInput) titleInput.value = activeNote.title;
    if (contentInput) contentInput.value = activeNote.content;
    if (dateInput) {
      const dateFormatted = new Date(activeNote.date).toLocaleString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });
      dateInput.textContent = `Last modified: ${dateFormatted}`;
    }
  } else {
    if (titleInput) titleInput.value = '';
    if (contentInput) contentInput.value = '';
    if (dateInput) dateInput.textContent = 'No active note selected';
    if (editorContainer) editorContainer.style.opacity = '0.6';
  }
}

function selectNote(id) {
  state.activeNoteId = id;
  renderNotes();
  syncState();
}

function renderRecentActivities() {
  const list = document.getElementById('dashboardActivityList');
  if (!list) return;

  list.innerHTML = '';
  if (state.recentActivities.length === 0) {
    list.innerHTML = '<div style="color:var(--text-muted);font-size:11px;padding:12px 0;text-align:center;">No recent activity logs.</div>';
    return;
  }

  const displayed = state.recentActivities.slice(0, 4);
  displayed.forEach(a => {
    const activityHtml = `
      <div class="activity-item">
        <div class="a-dot" style="background:var(--green)"></div>
        <div class="a-text">${a.text}</div>
        <div class="a-time">${a.time}</div>
      </div>
    `;
    list.insertAdjacentHTML('beforeend', activityHtml);
  });

  // Re-hook "Clear Logs" button inside card header
  const clearBtn = document.getElementById('viewAllActivityBtn');
  if (clearBtn) {
    const newClearBtn = clearBtn.cloneNode(true);
    clearBtn.replaceWith(newClearBtn);
    newClearBtn.addEventListener('click', () => {
      state.recentActivities = [];
      logActivity('Activity logs cleared');
      renderRecentActivities();
    });
  }
}

function logActivity(text) {
  const newItem = {
    id: Date.now(),
    text: text,
    time: 'Just now'
  };
  state.recentActivities.unshift(newItem);
  renderRecentActivities();
  syncState();
}

// Global scope registration for dynamic HTML attributes
window.updateGoalProgress = updateGoalProgress;
window.deleteGoal = deleteGoal;
window.practiceSkill = practiceSkill;
window.levelUpSkill = levelUpSkill;
window.deleteSkill = deleteSkill;
window.payBill = payBill;
window.deleteBill = deleteBill;
window.selectNote = selectNote;

// ==========================================
// 21. STATISTICS CALCULATORS AND CARD OVERSEERS
// ==========================================
function updateTaskStatCount() {
  const pendingCount = state.tasks.filter(t => !t.completed).length;
  const totalCount = state.tasks.length;
  const pct = totalCount > 0 ? ((totalCount - pendingCount) / totalCount) * 100 : 0;
  
  const statCard = document.querySelector('.stat-grid .stat-card:nth-child(2)');
  if (statCard) {
    const valueEl = statCard.querySelector('.stat-value');
    const subEl = statCard.querySelector('.stat-sub');
    const fillEl = statCard.querySelector('.stat-fill');
    const pctEl = statCard.querySelector('.stat-pct');
    
    if (valueEl) valueEl.textContent = pendingCount;
    if (subEl) subEl.textContent = `of ${totalCount} tasks`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (pctEl) pctEl.textContent = `${pct.toFixed(1)}%`;
  }
}

function updateReminderStatCount() {
  const todayStr = new Date().toISOString().split('T')[0];
  const todayReminders = state.reminders.filter(r => r.rawDate === todayStr);
  const count = todayReminders.length;
  
  const valueEl = document.getElementById('reminderStatValue');
  if (valueEl) valueEl.textContent = count;
  
  const fillEl = document.getElementById('reminderStatFill');
  if (fillEl) {
    const pct = count > 0 ? Math.min(count * 25, 100) : 0;
    fillEl.style.width = `${pct}%`;
  }
  
  const alertEl = document.getElementById('reminderStatAlert');
  if (alertEl) {
    const sorted = [...state.reminders].sort((a, b) => {
      if (a.rawDate !== b.rawDate) {
        return a.rawDate.localeCompare(b.rawDate);
      }
      return a.rawTime.localeCompare(b.rawTime);
    });
    
    const now = new Date();
    const nowTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    let nextReminder = sorted.find(r => {
      if (r.rawDate > todayStr) return true;
      if (r.rawDate === todayStr && r.rawTime >= nowTimeStr) return true;
      return false;
    });
    
    if (!nextReminder && sorted.length > 0) {
      nextReminder = sorted[0];
    }
    
    if (nextReminder) {
      alertEl.style.color = 'var(--blue)';
      alertEl.textContent = `Next: ${nextReminder.title} at ${nextReminder.hour}`;
    } else {
      alertEl.style.color = 'var(--text-muted)';
      alertEl.textContent = 'No upcoming reminders';
    }
  }
}

function updateEMIStatCount() {
  const activeBills = state.bills.filter(b => b.status.toLowerCase() !== 'paid');
  let totalLiabilities = 0;
  
  activeBills.forEach(b => {
    const rawVal = b.amt.replace(/[^\d]/g, '');
    totalLiabilities += parseInt(rawVal) || 0;
  });

  const totalBills = state.bills.length;
  const paidBills = state.bills.filter(b => b.status.toLowerCase() === 'paid').length;
  const pct = totalBills > 0 ? (paidBills / totalBills) * 100 : 100;
  
  const statCard = document.querySelector('.stat-grid .stat-card:nth-child(3)');
  if (statCard) {
    const valueEl = statCard.querySelector('.stat-value');
    if (valueEl) valueEl.textContent = `₹${totalLiabilities.toLocaleString('en-IN')}`;

    const subEl = statCard.querySelector('.stat-sub');
    if (subEl) {
      subEl.style.height = 'auto';
      subEl.textContent = `of ${totalBills} commitments`;
    }

    const fillEl = document.getElementById('emiStatFill');
    if (fillEl) fillEl.style.width = `${pct}%`;
    
    const alertEl = document.getElementById('emiStatAlert');
    if (alertEl) {
      if (activeBills.length > 0) {
        alertEl.style.color = 'var(--orange)';
        alertEl.textContent = `${activeBills.length} active commitments`;
      } else {
        alertEl.style.color = 'var(--green)';
        alertEl.textContent = `No pending liabilities`;
      }
    }
  }
}

