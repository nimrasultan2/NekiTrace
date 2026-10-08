# NekiTrace 💚

> every donation leaves a trace.

a transparent donation tracking platform. donors browse real charity projects, see who they're helping and why, and follow every rupee to the end.

built as a capstone project for Fauji Foundation.

---

## what it do

- **project marketplace** — browse curated fundraising campaigns with goals, stories, and beneficiaries
- **donate with proof** — upload transaction screenshots so every contribution is on record
- **track progress** — live progress bars + milestone updates. no "trust me bro"
- **admin dashboard** — create projects, manage beneficiaries, reconcile donations, all in one place
- **role-based auth** — admins and donors, separate doors, separate vibes

##  the stack

| layer | tech |
| ----- | ---- |
| frontend | React.js |
| backend | Spring Boot (Java) |
| database | SQL Server |
| auth | role-based (JWT-ish) |

##  the vibe

- clean campaign cards with goals, raised, remaining
- beneficiary stories that hit different
- donation form with preset amounts + optional anonymity
- transaction proof upload for a real auditable trail
- admin console for projects + beneficiaries

## 🚀 run it

```bash
# frontend
npm install
npm run dev

# backend
./mvnw spring-boot:run
```

frontend → `localhost:5173`
backend → `localhost:8080`

##  structure

```
nek-itrace/
├── frontend/     # react app — donors see this
├── backend/      # spring boot — apis + logic
└── README.md
```

##  the journey

built during the IT Interns 2026 sessions at Fauji Foundation — frontend, backend, QC, PACS, documentation, networks, SAP, and way too much more. shoutout to every mentor who sat through our questions. 

---

made with intent. shipped with proof. every rupee leaves a trace.
