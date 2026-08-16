-- ========================================
-- 1. ADMIN (needed first — Projects reference this)
-- ========================================
INSERT INTO Admins (FullName, Email, PasswordHash)
VALUES ('Admin User', 'admin@nekitrace.com', 'TEMP_PLAINTEXT_admin123');
-- NOTE: PasswordHash is plaintext for now — real hashing (BCrypt) comes later
-- when Spring Security is wired up. Don't ship this to production as-is.

-- ========================================
-- 2. BENEFICIARIES
-- ========================================
INSERT INTO Beneficiaries (FullName, Age, Details, ImageUrl) VALUES
('Ayesha Khan', 7, 'Patient', 'ayesha-heart.jpg'),
('Ahmed Raza', 14, 'Student', 'ahmed-education.jpg'),
('Fatima Bibi', NULL, 'Widow, mother of 5 children', 'fatima-food.jpg'),
('Bilal Ahmed', 22, 'Patient', 'bilal-wheelchair.jpg'),
('Muhammad Aslam', 45, 'Patient', 'aslam-kidney.jpg'),
('Khalid Mehmood', NULL, 'Family of 6', 'khalid-home.jpg'),
('Village Noor Community', NULL, '~400 residents', 'village-noor-water.jpg'),
('Elderly Patients Group', NULL, '15 patients, ages 60-85', 'cataract-camp.jpg'),
('Shahzaib Hussain', 19, 'Patient', 'shahzaib-prosthetic.jpg'),
('Sana Yousaf', 28, 'Divorced mother of 2', 'sana-sewing.jpg'),
('Ali & Sara', NULL, 'Siblings, ages 10 & 8', 'ali-sara-education.jpg'),
('Rabia Sultana', 35, 'Patient, mother of 3', 'rabia-cancer.jpg');

-- ========================================
-- 3. PROJECTS
-- ========================================
INSERT INTO Projects (Title, Category, Location, ImageUrl, Description, Story, Goal, Raised, Status, BeneficiaryId, CreatedByAdminId) VALUES

('Heart Surgery for Ayesha', 'Medical', 'Lahore, Punjab', 'ayesha-heart.jpg',
'Ayesha was born with a congenital heart defect and needs urgent open-heart surgery to survive past this year.',
'Ayesha giggles through most of her days, but climbing even a few stairs leaves her breathless and blue-lipped. Doctors at Punjab Institute of Cardiology confirmed a ventricular septal defect that has gone untreated since birth because her family, daily-wage labourers, could never afford the surgery. Her father sold his motorcycle, his only means of getting to work, to pay for initial tests. With this operation, Ayesha has every chance of living a full, normal life.',
850000, 612000, 'Active', 1, 1),

('Education Support for Ahmed', 'Education', 'Faisalabad, Punjab', 'ahmed-education.jpg',
'Ahmed lost his father last year and had to drop out of school to work. This fund covers his school fees, books, and uniform for two years.',
'Ahmed was ranked first in his class before his father, the family''s sole earner, passed away suddenly. Within weeks, Ahmed swapped his textbooks for a spot at a tea stall. This campaign covers two full years of tuition, books, uniforms, and transport.',
180000, 96000, 'Active', 2, 1),

('Monthly Food Support for Fatima''s Family', 'Food & Essentials', 'Multan, Punjab', 'fatima-food.jpg',
'A widowed mother of five needs consistent monthly grocery support to keep her household fed through the year.',
'Fatima''s husband passed away from tuberculosis two years ago, leaving her to raise five children on whatever cleaning work she can find. This campaign funds a full year of monthly ration packs.',
240000, 240000, 'Completed', 3, 1),

('Wheelchair for Bilal', 'Medical Equipment', 'Rawalpindi, Punjab', 'bilal-wheelchair.jpg',
'A road accident left Bilal paralyzed from the waist down. A proper motorized wheelchair would restore his independence.',
'Bilal was a delivery rider saving up for his own repair shop when a speeding truck hit him. A motorized wheelchair would mean Bilal could get to physiotherapy, the market, and even a part-time job again.',
210000, 143500, 'Active', 4, 1),

('Kidney Treatment for Muhammad', 'Medical', 'Karachi, Sindh', 'aslam-kidney.jpg',
'Muhammad requires ongoing dialysis and a kidney transplant. His family cannot cover the treatment costs.',
'Muhammad worked as a school van driver for eighteen years. Now he needs thrice-weekly dialysis just to stay alive, with a transplant as the only long-term solution.',
1200000, 405000, 'Active', 5, 1),

('Rebuilding Khalid''s Home', 'Housing', 'Muzaffargarh, Punjab', 'khalid-home.jpg',
'Last year''s floods destroyed Khalid''s mud home entirely. His family has been living in a tent since.',
'When the floodwaters rose last monsoon, Khalid had minutes to get his family to higher ground. A year later, they''re still living under a tarpaulin tent. This campaign funds a single-room brick and cement house.',
650000, 289000, 'Active', 6, 1),

('Clean Water for Village Noor', 'Community Infrastructure', 'Tharparkar, Sindh', 'village-noor-water.jpg',
'This village currently walks over 3km daily for water. A solar-powered tube well would bring clean water directly to the village.',
'In Village Noor, fetching water is a full-time job, mostly done by young girls who miss school. A solar-powered tube well would put clean water within a five-minute walk for every household.',
950000, 780000, 'Active', 7, 1),

('Cataract Surgery for Elderly Patients', 'Medical', 'Sialkot, Punjab', 'cataract-camp.jpg',
'A free cataract surgery camp to restore sight to 15 elderly patients who cannot afford treatment on their own.',
'Cataracts are one of the most treatable causes of blindness in the world. This campaign funds a dedicated camp to perform 15 cataract surgeries, giving grandparents back their sight.',
300000, 300000, 'Completed', 8, 1),

('Prosthetic Limb for Shahzaib', 'Medical Equipment', 'Peshawar, KPK', 'shahzaib-prosthetic.jpg',
'Shahzaib lost his leg in a factory accident. A prosthetic limb would let him return to work and daily life.',
'Shahzaib was operating machinery when a mechanical fault led to amputation. A well-fitted prosthetic limb and physiotherapy would let him walk independently again and return to earning a living.',
320000, 168000, 'Active', 9, 1),

('Sewing Machine for Sana', 'Livelihood', 'Gujranwala, Punjab', 'sana-sewing.jpg',
'A divorced mother of two skilled in tailoring needs a sewing machine to start her own home-based business.',
'Sana learned tailoring from her mother as a teenager. She already has three neighbors lined up as customers, she just needs a machine of her own.',
45000, 45000, 'Completed', 10, 1),

('Education for Ali & Sara', 'Education', 'Islamabad, ICT', 'ali-sara-education.jpg',
'Orphaned siblings living with their elderly grandmother need full school sponsorship to continue their education.',
'Ali and Sara lost both parents in a bus accident three years ago. This campaign fully sponsors both children''s education for the current academic year.',
150000, 87000, 'Active', 11, 1),

('Cancer Treatment for Rabia', 'Medical', 'Hyderabad, Sindh', 'rabia-cancer.jpg',
'A mother of three diagnosed with stage 2 breast cancer needs chemotherapy and follow-up treatment to recover.',
'Rabia noticed a lump eight months ago but delayed seeing a doctor. She needs four more chemotherapy sessions plus follow-up scans. Her three children are the reason she says she has to fight through this.',
700000, 412000, 'Active', 12, 1);

-- ========================================
-- 4. PROJECT UPDATES (sample — a few per project)
-- ========================================
INSERT INTO ProjectUpdates (ProjectId, UpdateDate, Title, Content) VALUES
(1, '2026-06-02', 'Pre-surgery tests completed', 'Ayesha has completed all pre-operative tests. Surgery is tentatively scheduled for early August pending full funding.'),
(1, '2026-06-20', '70% funded!', 'Thanks to over 300 generous donors, we''ve crossed 70% of the goal.'),

(5, '2026-04-10', 'Dialysis ongoing', 'Muhammad is currently receiving dialysis three times a week thanks to partial funding. Transplant matching is underway.'),
(5, '2026-06-18', 'Donor match found', 'A compatible kidney donor (his younger brother) has been confirmed by doctors. Surgery can proceed as soon as funds allow.'),

(7, '2026-05-20', 'Site survey complete', 'Engineers have surveyed and approved the drilling site at the center of the village.'),
(7, '2026-06-25', '82% funded — drilling begins soon', 'Drilling equipment has been booked and will mobilize as soon as remaining funds are secured.');


UPDATE Projects SET Story = 'Ayesha giggles through most of her days, but climbing even a few stairs leaves her breathless and blue-lipped. Doctors at Punjab Institute of Cardiology confirmed a ventricular septal defect that has gone untreated since birth because her family, daily-wage labourers, could never afford the surgery. Her father sold his motorcycle, his only means of getting to work, to pay for initial tests. Now the family has exhausted every option except the surgery itself. With this operation, Ayesha''s cardiologists say she has every chance of living a full, normal life, running, playing, and growing up without the fear that colors every one of her parents'' days right now.'
WHERE ProjectId = 1;

UPDATE Projects SET Story = 'Ahmed was ranked first in his class before his father, the family''s sole earner, passed away suddenly from a heart attack. Within weeks, Ahmed swapped his textbooks for a spot at a tea stall, working 10-hour shifts to help his mother and two younger sisters survive. His teacher tracked him down months later and found him still practicing math problems on scraps of paper during breaks. This campaign covers two full years of tuition, books, uniforms, and transport enough time for Ahmed to catch back up and sit his matriculation exams with his class, not years behind them.'
WHERE ProjectId = 2;

UPDATE Projects SET Story = 'Fatima''s husband passed away from tuberculosis two years ago, leaving her to raise five children, the youngest just two years old, on whatever cleaning work she can find. Some months she manages three houses of work. Other months, none. Her eldest daughter, 12, often skips meals so her younger siblings can eat. This campaign funds a full year of monthly ration packs, flour, rice, lentils, oil, and milk. So, the family has one less crisis to face every single month.'
WHERE ProjectId = 3;

UPDATE Projects SET Story = 'Bilal was a delivery rider saving up for his own motorcycle repair shop when a speeding truck hit him on the ring road. He survived, but the accident damaged his spine permanently. For the past year he''s been confined to a borrowed, broken manual wheelchair that his brother has to push everywhere. A proper motorized wheelchair would mean Bilal could get himself to physiotherapy, to the market, even back to a part-time job independence he hasn''t felt since the accident.'
WHERE ProjectId = 4;

UPDATE Projects SET Story = 'Muhammad worked as a school van driver for eighteen years, ferrying the same neighborhood kids to and from class every single day. When his kidneys began failing, he kept driving as long as he physically could, refusing to burden his family. Now he needs thrice-weekly dialysis just to stay alive, with a transplant as the only long-term solution. His two sons have both left college to work full-time, but their combined income barely covers half the dialysis costs, let alone the transplant.'
WHERE ProjectId = 5;

UPDATE Projects SET Story = 'When the floodwaters rose last monsoon, Khalid had minutes to get his wife, four children, and elderly mother to higher ground. They watched their home built by Khalid''s father decades ago, dissolve into the water. A year later, the family is still living under a tarpaulin tent on the same plot of land, exposed to heat, rain, and encroaching wildlife. This campaign funds a single-room brick and cement house, built to withstand future flooding, giving this family walls and a roof again.'
WHERE ProjectId = 6;

UPDATE Projects SET Story = 'In Village Noor, fetching water is a full-time job, mostly done by young girls who walk over three kilometers each way, often missing school entirely. The nearest water source is brackish and frequently makes children sick. A solar-powered tube well, requiring no fuel costs the community can''t afford, would put clean water within a five-minute walk for every household freeing up hours each day and, more importantly, keeping kids in school and out of hospital beds.'
WHERE ProjectId = 7;

UPDATE Projects SET Story = 'Cataracts are one of the most treatable causes of blindness in the world. A 20-minute surgery can restore full vision. Yet across rural Sialkot, dozens of elderly residents have simply gone blind waiting, unable to afford even the modest cost of surgery. This campaign funds a dedicated camp partnering with a local eye hospital to perform 15 cataract surgeries, giving grandparents back the ability to see their grandchildren''s faces, read, and move around safely on their own.'
WHERE ProjectId = 8;

UPDATE Projects SET Story = 'Shahzaib was operating machinery at a textile factory when a mechanical fault led to a severe accident, resulting in the amputation of his right leg below the knee. He was the primary earner for his family of five. For the past eight months he''s used crutches to move around the house, unable to work or even attend his younger brother''s wedding. A well-fitted prosthetic limb, paired with a short physiotherapy program, would let Shahzaib walk independently again and return to earning a living.'
WHERE ProjectId = 9;

UPDATE Projects SET Story = 'Sana learned tailoring from her mother as a teenager, and it''s the one skill that''s stayed with her through a difficult divorce that left her raising two young children alone. She''s already got three neighbors lined up as regular customers. She just needs a machine of her own instead of borrowing her neighbor''s for a few hours a week. A single sewing machine and a starter kit of materials would let Sana build a steady, dignified income from home while caring for her kids.'
WHERE ProjectId = 10;

UPDATE Projects SET Story = 'Ali and Sara lost both parents in a bus accident three years ago and now live with their grandmother, who survives on a small pension. She has done everything she can to keep them fed and clothed, but school fees have become impossible to manage alongside rent and medical costs for her own health issues. This campaign fully sponsors both children''s education: fees, books, and uniforms for the current academic year, with their grandmother''s biggest wish being that they don''t fall behind the way circumstances have already forced her to fall behind on so much else.'
WHERE ProjectId = 11;

UPDATE Projects SET Story = 'Rabia noticed a lump eight months ago but delayed seeing a doctor, afraid of what a diagnosis and its cost. By the time she was examined, it had progressed to stage 2 breast cancer. Her husband drives a rickshaw and has already borrowed from every relative he can to cover the first two chemotherapy sessions. Rabia needs four more sessions plus follow-up scans to complete her treatment. Her three children, all under ten, are the reason she says she has to fight through this.'
WHERE ProjectId = 12;


INSERT INTO ProjectUpdates (ProjectId, UpdateDate, Title, Content) VALUES

(2, '2026-05-15', 'Ahmed re-enrolled!', 'With the first partial disbursement, Ahmed has officially re-enrolled at Govt. Boys High School for the new term.'),
(2, '2026-06-10', 'Books purchased', 'A full set of 9th-grade textbooks and a uniform were purchased this week. Ahmed sent us a photo. He''s smiling ear to ear.'),

(3, '2026-03-01', 'Campaign fully funded', 'Incredible response, this campaign was fully funded within three weeks. First ration pack has already been delivered.'),
(3, '2026-06-01', '4 months of deliveries complete', 'Fatima''s family has now received four consecutive months of groceries. Her children are back on a regular meal schedule.'),

(4, '2026-06-05', 'Wheelchair model selected', 'We''ve identified a durable, locally-serviceable motorized wheelchair model. Order will be placed once funding is complete.'),

(6, '2026-05-01', 'Land cleared, foundation started', 'With initial funds, the plot has been cleared and foundation work has begun. Local laborers from the village are helping directly.'),

(8, '2026-02-14', 'Camp held successfully', 'All 15 surgeries were completed in a single-day camp. Patients report significant vision improvement within 48 hours.'),
(8, '2026-03-01', 'Follow-up complete, full success', 'All patients attended their two-week follow-up. 14 of 15 report near-complete vision restoration.'),

(9, '2026-05-28', 'Measurements taken', 'Shahzaib visited the prosthetics center for initial measurements and casting. Fitting will begin once funding is complete.'),

(10, '2026-04-05', 'Machine delivered', 'Sana received her brand-new sewing machine and starter kit this week. She''s already taken her first two paid orders.'),

(11, '2026-06-01', 'New term fees paid', 'Both Ali and Sara''s tuition fees for the new term have been paid in full using funds raised so far. Books are next.'),

(12, '2026-05-10', 'Third chemo session completed', 'Rabia has completed her third session and is responding well according to her oncologist. Three sessions remain.'),
(12, '2026-06-22', 'Halfway funded for remaining sessions', 'Thank you to everyone donating, we''ve now covered enough for session four, scheduled for next week.');


SELECT UpdateId, ProjectId, Title, Content 
FROM NekiTrace.dbo.ProjectUpdates 
ORDER BY ProjectId;


DELETE FROM Projects WHERE Title = 'Test Project Delete Me';
DELETE FROM Beneficiaries WHERE FullName = 'Test Person';


INSERT INTO Beneficiaries (FullName, Age, Details, ImageUrl) VALUES
('Community Food Drive', NULL, 'General monthly food support fund', 'FoodDrive.jpg');

INSERT INTO Projects (Title, Category, Location, ImageUrl, Description, Story, Goal, Raised, Status, BeneficiaryId, CreatedByAdminId) VALUES
('Monthly Food Drive', 'Community Initiative', 'Multiple locations', 'FoodDrive.jpg',
'A general fund supporting monthly food distribution across several communities in need.',
'This ongoing campaign collects donations year-round to fund monthly grocery distributions across multiple communities facing food insecurity. Rather than supporting one specific family, contributions here go toward a shared pool used to restock ration packs wherever the need is greatest that month, covering staples like flour, rice, lentils, and cooking oil for dozens of households at a time.',
500000, 0, 'Active',
(SELECT BeneficiaryId FROM Beneficiaries WHERE FullName = 'Community Food Drive'), 1);

SELECT ProjectId FROM Projects WHERE Title = 'Monthly Food Drive';