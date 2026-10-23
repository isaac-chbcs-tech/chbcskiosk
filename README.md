# Lunch ordering site: setup

1. **Supabase:** create a free project at supabase.com. In *SQL Editor*, paste and run `schema.sql`.
2. **Lock sign-ups:** Authentication > Providers > Email: turn OFF "Allow new users to sign up".
3. **Kitchen logins:** Authentication > Users > Add user (email + password) for each teacher and cooking student.
4. **Roster:** Table Editor > `students`. Delete the sample rows, then import a CSV with columns `first_name, last_initial, centre` (centre must be exactly K-2, 3-6, 7-8 or 9-10).
5. **Keys:** Project Settings > API. Paste the Project URL and the *anon public* key into `config.js`. Never use the service_role key.
6. **GitHub Pages:** put these files in a repo, then Settings > Pages > deploy from the main branch.
7. **Pages:** `index.html` is for students (order + rate). `kitchen.html` is the kitchen team portal (log in first).

Each lunch (Tuesday and Friday): Kitchen portal > Set up lunch > type the dishes > Start new lunch. After cooking, press Mark as cooked so students can rate.
