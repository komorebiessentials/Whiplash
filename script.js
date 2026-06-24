const prepSections = {
  coding: {
    eyebrow: "Coding",
    title: "Minimum coding pattern set",
    subtitle:
      "A short, high-transfer set for people who need to become interview-ready fast. Learn the signal, solve once slowly, then explain from memory.",
    note:
      "Do not chase hundreds of problems first. These prompts cover the pattern vocabulary that lets you recognize most junior and mid-level coding questions.",
    stats: ["12 prompts", "7-10 days", "60-90 min/day"],
    dailyLoop: [
      "Attempt one prompt for 25 minutes before looking anything up.",
      "Write the brute force idea and the reason it is too slow.",
      "Explain the pattern trigger out loud in under 60 seconds.",
      "Redo yesterday's prompt from memory before starting a new one.",
    ],
    readiness: [
      "You can name the pattern before coding.",
      "You can explain time and space complexity without guessing.",
      "You can list edge cases before running the code.",
      "You can solve a similar problem without memorizing the old solution.",
    ],
    items: [
      ["Hash map", "Two Sum", "Need fast lookup for a value seen earlier.", "Anagrams, duplicates, frequency counts, complement checks.", "35 min"],
      ["Two pointers", "Valid Palindrome", "Sorted array, pair search, or compare both ends.", "Container area, reverse checks, in-place array cleanup.", "35 min"],
      ["Sliding window", "Longest Substring Without Repeating Characters", "Contiguous subarray or substring with a changing constraint.", "Max sum window, minimum window, longest valid segment.", "45 min"],
      ["Graph BFS", "Number of Islands", "Connected components, shortest layers, or grid neighbors.", "Rotting oranges, flood fill, maze distance.", "45 min"],
      ["Binary search", "Search Insert Position", "Sorted data lets you remove half the search space.", "First bad version, lower bound, rotated search.", "35 min"],
      ["Stack", "Valid Parentheses", "Need the most recent unmatched item.", "Undo history, nested parsing, monotonic stack.", "30 min"],
      ["Intervals", "Merge Intervals", "Ranges overlap, touch, or need sorting by start time.", "Meeting rooms, calendar conflicts, timelines.", "40 min"],
      ["Tree DFS", "Maximum Depth of Binary Tree", "Need to visit branches and combine child answers.", "Path sum, diameter, balanced tree checks.", "35 min"],
      ["Heap", "Kth Largest Element", "Need top K without sorting everything repeatedly.", "Priority queues, merge K lists, scheduling.", "40 min"],
      ["Dynamic programming", "Climbing Stairs", "Current answer depends on smaller overlapping answers.", "House robber, grid paths, coin change starter.", "45 min"],
      ["Backtracking", "Subsets", "Need to explore choices and undo them.", "Permutations, combinations, N-Queens starter.", "45 min"],
      ["Prefix sum", "Subarray Sum Equals K", "Need fast range sums or count previous totals.", "Range queries, equilibrium index, matrix sums.", "45 min"],
    ],
  },
  lld: {
    eyebrow: "LLD",
    title: "Low-level design minimum set",
    subtitle:
      "Practice the object-modeling problems that teach classes, ownership, state, extensibility, and clean APIs without getting lost in theory.",
    note:
      "For each design, keep the answer concrete: objects, responsibilities, core methods, state changes, and one extension point.",
    stats: ["10 prompts", "5-7 days", "45-75 min/day"],
    dailyLoop: [
      "List nouns and actions before drawing classes.",
      "Assign one clear owner for every behavior.",
      "Walk through the most important user flow.",
      "Add one future requirement and adjust the design.",
    ],
    readiness: [
      "You can explain why each class exists.",
      "You can avoid putting every method into one giant manager.",
      "You can handle state changes without vague handwaving.",
      "You can extend the design without rewriting everything.",
    ],
    items: [
      ["Objects", "Design a Parking Lot", "Entities have state, rules, and interactions.", "Inventory, booking, lockers, resource assignment.", "60 min"],
      ["State", "Design an Elevator", "System changes behavior based on current state and requests.", "Order lifecycle, delivery tracking, workflow engines.", "60 min"],
      ["Extensibility", "Design a Splitwise Clone", "Rules may expand: equal split, exact split, percentage split.", "Payments, billing, pricing rules, ledgers.", "60 min"],
      ["Interfaces", "Design a Rate Limiter Class", "Need clean APIs with replaceable algorithms.", "Cache, queue, retry policy, throttling.", "45 min"],
      ["Composition", "Design a Chess Game", "Many entities share behavior but have different rules.", "Board games, rule engines, validation systems.", "75 min"],
      ["Inventory", "Design a Vending Machine", "Product, payment, selection, and dispense flow interact.", "Kiosks, carts, checkout, finite state machines.", "60 min"],
      ["Booking", "Design a Movie Ticket System", "Need seat holds, availability, payment, and expiry.", "Reservations, appointments, resource locking.", "60 min"],
      ["Messaging", "Design a Chat App Model", "Users, conversations, messages, delivery state, and reads.", "Comments, notifications, collaborative tools.", "60 min"],
      ["Rules", "Design a Coupon Engine", "Business rules can combine, conflict, and change often.", "Pricing, discounts, eligibility, policy engines.", "60 min"],
      ["Files", "Design a File System", "Nested structures need common operations and traversal.", "Folders, menus, org charts, tree-based models.", "60 min"],
    ],
  },
  hld: {
    eyebrow: "HLD",
    title: "High-level design minimum set",
    subtitle:
      "A practical system design sprint for learning APIs, storage, scaling, queues, caching, consistency, and failure handling.",
    note:
      "Use the same answer order every time: requirements, API, data model, read path, write path, bottlenecks, failures, tradeoffs.",
    stats: ["10 prompts", "7-10 days", "60-90 min/day"],
    dailyLoop: [
      "Clarify scale and product requirements in 3 minutes.",
      "Draw the read path and write path separately.",
      "Add caching, queues, or partitioning only when forced by a bottleneck.",
      "End with failures and tradeoffs, not more boxes.",
    ],
    readiness: [
      "You can state assumptions before designing.",
      "You can choose storage based on access patterns.",
      "You can explain what breaks first as traffic grows.",
      "You can talk about retries, idempotency, and consistency.",
    ],
    items: [
      ["Basics", "Design a URL Shortener", "Need read-heavy lookup, unique keys, and redirects.", "Token services, share links, invite links.", "60 min"],
      ["Realtime", "Design Chat", "Users expect low-latency delivery and message history.", "Notifications, collaboration, live support.", "75 min"],
      ["Feeds", "Design a News Feed", "Many users read personalized ordered content.", "Timelines, recommendations, activity streams.", "75 min"],
      ["Reliability", "Design File Uploads", "Large payloads, retries, metadata, and background processing.", "Media apps, document storage, import pipelines.", "60 min"],
      ["Search", "Design Search Autocomplete", "Low-latency prefix lookup with ranking.", "Typeahead, product search, command palettes.", "60 min"],
      ["Events", "Design Notification System", "Many event types fan out to many delivery channels.", "Emails, push, alerts, reminders.", "60 min"],
      ["Queues", "Design a Background Job System", "Work should run asynchronously and retry safely.", "Video processing, imports, email delivery.", "60 min"],
      ["Counters", "Design View Counts", "High write volume, approximate reads, aggregation delay.", "Likes, metrics, analytics, rate dashboards.", "60 min"],
      ["Commerce", "Design an Order Checkout", "Payment, inventory, consistency, and rollback matter.", "Bookings, subscriptions, marketplace orders.", "75 min"],
      ["Limits", "Design an API Rate Limiter", "Need to protect systems from abusive or bursty traffic.", "Quotas, throttling, abuse prevention.", "60 min"],
    ],
  },
  behavioral: {
    eyebrow: "Behavioral",
    title: "Behavioral minimum story bank",
    subtitle:
      "Prepare a small set of real stories that can answer most behavioral questions without sounding rehearsed or generic.",
    note:
      "Each story should have a situation, task, action, result, and lesson. Keep it under two minutes and include one concrete detail.",
    stats: ["10 stories", "3-5 days", "30-45 min/day"],
    dailyLoop: [
      "Pick one real story, not a perfect story.",
      "Write the situation, task, action, result, and lesson in bullets.",
      "Say it out loud once and remove vague parts.",
      "Map the same story to two other question types.",
    ],
    readiness: [
      "You can answer without rambling.",
      "You can show your action, not just the team's action.",
      "You can include one result or consequence.",
      "You can explain what you learned or changed afterward.",
    ],
    items: [
      ["Ownership", "A bug you fixed end to end", "Shows debugging method and responsibility.", "Production issue, failing test, customer-facing defect.", "35 min"],
      ["Learning", "A concept you learned deeply", "Shows how you move past surface-level understanding.", "New language, framework, database, infrastructure.", "30 min"],
      ["Conflict", "A disagreement about implementation", "Shows communication and tradeoff thinking.", "Code review, design choice, scope negotiation.", "35 min"],
      ["Failure", "A mistake you corrected", "Shows maturity, reflection, and process improvement.", "Missed edge case, bad estimate, broken deployment.", "35 min"],
      ["Impact", "A project you are proud of", "Shows what you can own and explain clearly.", "Portfolio project, internship work, open source.", "30 min"],
      ["Ambiguity", "A vague task you clarified", "Shows product thinking and communication.", "Requirement gathering, scope decisions, tradeoffs.", "30 min"],
      ["Teamwork", "A time you helped someone", "Shows collaboration without ego.", "Mentoring, pair debugging, documentation.", "30 min"],
      ["Pressure", "A deadline or urgent issue", "Shows prioritization under constraints.", "Launch work, production issue, exam or hackathon.", "30 min"],
      ["Feedback", "A time feedback changed your work", "Shows coachability and iteration.", "Code review, design critique, manager feedback.", "30 min"],
      ["Tradeoff", "A technical decision you made", "Shows reasoning beyond just writing code.", "Library choice, schema choice, architecture choice.", "35 min"],
    ],
  },
};

function normalizeItems(section) {
  return section.items.map(([label, title, trigger, transfer, time], index) => ({
    id: `${section.eyebrow.toLowerCase()}-${index}`,
    label,
    title,
    trigger,
    transfer,
    time,
  }));
}

Object.values(prepSections).forEach((section) => {
  section.items = normalizeItems(section);
});

const prepSectionsRoot = document.querySelector("#prepSections");
const navItems = document.querySelectorAll(".nav-item");
const currentPage = document.body.dataset.page || "coding";
const currentSection = prepSections[currentPage] || prepSections.coding;

const pageGuides = {
  coding: {
    mental:
      "Your job is not to memorize this exact solution. Your job is to recognize the shape of the problem and remove repeated work.",
    firstMoves: [
      "Write the brute force approach in one sentence.",
      "Name the repeated work or slow scan.",
      "Apply the pattern only after you can say why it helps.",
    ],
    interview:
      "I first considered brute force, then noticed the trigger for this pattern. The optimized version uses the right structure to avoid repeated work, and I would discuss edge cases before coding.",
    pitfalls: ["Opening the solution too early.", "Coding before naming the pattern.", "Forgetting edge cases and complexity."],
    done: "You can solve it again tomorrow without seeing your old code.",
  },
  lld: {
    mental:
      "Think of the system as a set of objects with jobs. Good LLD is mostly clear ownership, not fancy class diagrams.",
    firstMoves: [
      "List the main nouns and actions.",
      "Assign behavior to the object that owns the data.",
      "Walk through one flow and adjust unclear ownership.",
    ],
    interview:
      "I will define the core entities, their responsibilities, the main methods, and how state changes during the primary flow. Then I will show how the design handles one future requirement.",
    pitfalls: ["Creating one giant manager class.", "Skipping state transitions.", "Not explaining why methods belong where they do."],
    done: "You can redraw the class model from memory and explain one extension.",
  },
  hld: {
    mental:
      "Think of the system as data moving through roads. APIs receive traffic, storage holds truth, caches create shortcuts, and queues absorb pressure.",
    firstMoves: [
      "Clarify requirements and rough scale.",
      "Draw the write path and read path separately.",
      "Add scale tools only where the path breaks.",
    ],
    interview:
      "I will state assumptions, define APIs, pick storage from access patterns, trace read and write paths, then discuss bottlenecks, consistency, and failure recovery.",
    pitfalls: ["Drawing random boxes without requirements.", "Adding cache or queues without a reason.", "Ignoring retries and duplicate work."],
    done: "You can explain the design in seven steps without notes.",
  },
  behavioral: {
    mental:
      "A behavioral answer is evidence. Use one real scene that proves how you work under pressure, ambiguity, feedback, or conflict.",
    firstMoves: [
      "Pick a real story with a clear decision you made.",
      "Write situation, task, action, result, and lesson.",
      "Remove vague claims and add one concrete detail.",
    ],
    interview:
      "The situation was specific, my responsibility was clear, I took a concrete action, the result changed something, and I learned something I would reuse.",
    pitfalls: ["Telling a story where you did not do anything.", "Rambling through too much background.", "Ending without a result or lesson."],
    done: "You can answer in under two minutes and adapt the story to related questions.",
  },
};

function list(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function checkKey(itemId, index) {
  return `buildready-${currentPage}-${itemId}-${index}`;
}

function isChecked(itemId, index) {
  return localStorage.getItem(checkKey(itemId, index)) === "true";
}

function checkedCount(item) {
  return [0, 1, 2].filter((index) => isChecked(item.id, index)).length;
}

function nextPracticeItem() {
  const item = currentSection.items.find((entry) => checkedCount(entry) < 3) || currentSection.items[0];
  const index = currentSection.items.indexOf(item);

  return { item, index };
}

function renderPracticeChecks(item) {
  const checks = [
    "Attempted without notes",
    "Explained out loud",
    "Wrote edge cases or tradeoffs",
  ];

  return checks
    .map(
      (check, index) => `
        <label class="practice-check">
          <input type="checkbox" data-progress-check data-item="${item.id}" data-check="${index}" ${isChecked(item.id, index) ? "checked" : ""} />
          <span>${check}</span>
        </label>
      `
    )
    .join("");
}

function explanationFor(item) {
  const guide = pageGuides[currentPage] || pageGuides.coding;

  return `
    <div class="explanation-panel" id="explanation-${item.id}">
      <div class="explanation-grid">
        <section>
          <h4>Mental model</h4>
          <p>${guide.mental}</p>
        </section>
        <section>
          <h4>This prompt tests</h4>
          <p>${item.trigger}</p>
        </section>
        <section>
          <h4>First moves</h4>
          <ul>${list(guide.firstMoves)}</ul>
        </section>
        <section>
          <h4>What to say</h4>
          <p>${guide.interview}</p>
        </section>
        <section>
          <h4>Common traps</h4>
          <ul>${list(guide.pitfalls)}</ul>
        </section>
        <section>
          <h4>Done when</h4>
          <p>${guide.done}</p>
        </section>
      </div>
      <div class="practice-checks" aria-label="Practice checks for ${item.title}">
        ${renderPracticeChecks(item)}
      </div>
    </div>
  `;
}

function renderPage() {
  const topbarEyebrow = document.querySelector(".topbar .eyebrow");
  const topbarTitle = document.querySelector(".topbar h1");
  const nextPractice = nextPracticeItem();

  topbarEyebrow.textContent = currentSection.eyebrow;
  topbarTitle.textContent = currentSection.title;

  prepSectionsRoot.innerHTML = `
    <section class="focus-start">
      <div class="focus-start-copy">
        <p class="eyebrow">Next 25 minutes</p>
        <h2 id="focusTitle">${nextPractice.item.title}</h2>
        <p id="focusMeta">${nextPractice.item.label} - ${nextPractice.item.time}. Practice it, explain it, mark it done.</p>
        <div class="inline-progress" aria-label="Track progress">
          <span class="progress-fill" id="pageProgressFill" style="width: 0%"></span>
        </div>
        <p class="progress-copy" id="progressHelp">0 practice checks complete.</p>
      </div>
      <a class="start-link" id="focusLink" href="#card-${nextPractice.item.id}">Start</a>
    </section>

    <section class="prep-section" id="${currentPage}">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${currentSection.stats.join(" / ")}</p>
          <h2>${currentSection.items.length} prompts. Do one at a time.</h2>
        </div>
      </div>
      <div class="pattern-grid">
        ${currentSection.items
          .map(
            (item, index) => `
              <article class="pattern-card" data-card id="card-${item.id}">
                <button class="pattern-card-button" type="button" aria-expanded="false" aria-controls="explanation-${item.id}">
                  <div class="pattern-topline">
                    <span class="pattern-number">${index + 1}</span>
                    <span class="skill-status">${item.label}</span>
                  </div>
                  <h3>${item.title}</h3>
                  <p><strong>Signal:</strong> ${item.trigger}</p>
                  <p><strong>Reuses in:</strong> ${item.transfer}</p>
                  <div class="card-footer">
                    <span>${item.time}</span>
                    <span class="expand-hint">Practice guide</span>
                  </div>
                </button>
                ${explanationFor(item)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function updateProgress() {
  const checks = [...document.querySelectorAll("[data-progress-check]")];
  const checked = checks.filter((check) => check.checked).length;
  const percent = checks.length ? Math.round((checked / checks.length) * 100) : 0;
  const progressFill = document.querySelector("#pageProgressFill");
  const progressHelp = document.querySelector("#progressHelp");

  progressFill.style.width = `${percent}%`;
  progressHelp.textContent =
    percent === 100
      ? "Track complete. Rehearse once tomorrow."
      : `${checked}/${checks.length} checks complete.`;

  const nextPractice = nextPracticeItem();
  const focusTitle = document.querySelector("#focusTitle");
  const focusMeta = document.querySelector("#focusMeta");
  const focusLink = document.querySelector("#focusLink");

  focusTitle.textContent = nextPractice.item.title;
  focusMeta.textContent = `${nextPractice.item.label} - ${nextPractice.item.time}. Practice it, explain it, mark it done.`;
  focusLink.href = `#card-${nextPractice.item.id}`;
}

navItems.forEach((item) => {
  item.classList.toggle("active", item.dataset.nav === currentPage);
});

renderPage();
updateProgress();

prepSectionsRoot.addEventListener("click", (event) => {
  const button = event.target.closest(".pattern-card-button");

  if (!button) {
    return;
  }

  const card = button.closest("[data-card]");
  const isOpen = card.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
});

prepSectionsRoot.addEventListener("change", (event) => {
  if (!event.target.matches("[data-progress-check]")) {
    return;
  }

  localStorage.setItem(
    checkKey(event.target.dataset.item, event.target.dataset.check),
    String(event.target.checked)
  );
  updateProgress();
});
