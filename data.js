/* ================================================
   data.js — OMAN Community Data
   
   ✏️ FILE INI BERISI SEMUA DATA KONTEN WEBSITE
   Edit di sini untuk mengubah info class, ras, level, dll.
   ================================================ */

// ================================================
// CLASS DATA
// ✏️ CARA MENGGANTI GAMBAR CLASS:
// Ubah nilai "image" menjadi path gambar kamu.
// Contoh: "assets/class-warrior.jpg"
// atau URL Supabase: "https://xxxx.supabase.co/storage/v1/object/public/images/warrior.jpg"
// Jika tidak ada gambar, tampilkan emoji dari "emoji"
// ================================================
const CLASS_DATA = {
  warrior: {
    name: "Warrior",
    emoji: "⚔️",
    badge: "MELEE · DAMAGE · FRONTLINE",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/WARIOR%20PIC.jpg", // ✏️ GANTI: "assets/class-warrior.jpg"
    description: "Warrior adalah tulang punggung setiap party. Dengan kekuatan fisik yang tak tertandingi dan armor tebal, Warrior hadir di garis terdepan medan perang, menerima pukulan keras demi melindungi rekan-rekannya.",
    focus: "Tank / DPS Melee",
    weapon: "Pedang Satu Tangan, Pedang Dua Tangan, Kapak",
    specialty: "Pertahanan ekstrem & serangan fisik brutal",
    playstyle: "Frontline tanking, mengalihkan perhatian musuh",
    stats: { STR: 90, VIT: 85, INT: 20, AGI: 45, LUK: 30 }
  },
  mage: {
    name: "Mage",
    emoji: "🔮",
    badge: "RANGED · MAGIC · BURST",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/mage%20pic.jpg", // ✏️ GANTI: "assets/class-mage.jpg"
    description: "Mage adalah master sihir yang mampu memanggil kekuatan elemen dari jarak jauh. Dengan damage burst tertinggi di antara semua class, seorang Mage yang terampil dapat menghancurkan musuh sebelum mereka sempat mendekat.",
    focus: "Magic DPS Ranged",
    weapon: "Staff, Tongkat Kristal, Buku Sihir",
    specialty: "Serangan sihir elemen (Api, Es, Petir)",
    playstyle: "Backline mage, kontrol area dengan AoE",
    stats: { STR: 20, VIT: 30, INT: 95, AGI: 50, LUK: 60 }
  },
  archer: {
    name: "Archer",
    emoji: "🏹",
    badge: "RANGED · AGILITY · SCOUT",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Archer%20pic1.jpg", // ✏️ GANTI: "assets/class-archer.jpg"
    description: "Archer adalah petarung jarak jauh yang mengandalkan kecepatan dan ketepatan. Dengan mata elang dan tangan yang stabil, tidak ada sasaran yang luput dari bidikan Archer. Mereka juga berperan sebagai scout andalan di dungeon.",
    focus: "Ranged DPS / Utility Scout",
    weapon: "Busur Panjang, Busur Pendek, Crossbow",
    specialty: "Serangan crit jarak jauh, debuff & pelambat",
    playstyle: "Mid-range DPS, mengeksploitasi kelemahan musuh",
    stats: { STR: 55, VIT: 40, INT: 35, AGI: 90, LUK: 75 }
  },
  priest: {
    name: "Priest",
    emoji: "✨",
    badge: "SUPPORT · HEAL · BUFF",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Priest%20Pic.jpg", // ✏️ GANTI: "assets/class-priest.jpg"
    description: "Priest adalah jiwa dari setiap party. Tanpa Priest, tidak ada party yang mampu bertahan lama di dungeon. Mereka menyembuhkan luka, membuang kutukan, dan memberikan berkah kepada rekan setimnya.",
    focus: "Healer / Buffer Support",
    weapon: "Tongkat Suci, Kitab Doa, Scepter",
    specialty: "Heal masif, buff party, cleanse debuff",
    playstyle: "Backline support, menjaga party tetap hidup",
    stats: { STR: 25, VIT: 60, INT: 88, AGI: 40, LUK: 70 }
  },
  guardian: {
    name: "Guardian",
    emoji: "🛡️",
    badge: "MELEE · TANK · PROTECTOR",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Guardian%20pic.jpg", // ✏️ GANTI: "assets/class-guardian.jpg"
    description: "Guardian adalah pelindung sejati. Berbeda dari Warrior yang juga bisa menyerang dengan brutal, Guardian sepenuhnya berdedikasi untuk melindungi rekannya. Mereka memiliki kemampuan taunt terkuat dan pertahanan yang hampir tidak bisa ditembus.",
    focus: "Pure Tank / Protector",
    weapon: "Perisai Besar, Pedang Pendek, Tombak",
    specialty: "Taunt musuh, menyerap damage, shield party",
    playstyle: "Full tank, menjadi tembok bagi party",
    stats: { STR: 60, VIT: 95, INT: 25, AGI: 30, LUK: 40 }
  },
  comingsoon: {
    name: "Coming soon",
    emoji: "⏳",
    badge: "EXCLUSIVE · MYSTERY",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Unknown%20pic.jpg", // ✏️ GANTI: "assets/class-comingsoon.jpg"
    description: "Class baru yang akan segera hadir di dunia OMAN. Tetap pantau terus perkembangan mereka!",
    focus: "Exclusive class with unique mechanics",
    weapon: "TBA",
    specialty: "TBA",
    playstyle: "TBA",
    stats: { STR: 0, VIT: 0, INT: 0, AGI: 0, LUK: 0 }
  }
};

// ================================================
// RAS DATA
// ✏️ CARA MENGGANTI GAMBAR RAS:
// Ubah nilai "image" menjadi path gambar kamu.
// Contoh: "assets/race-human.jpg"
// ================================================
const RACE_DATA = [
  {
    id: "human",
    name: "Human",
    emoji: "👤",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Human%20pic11.jpg", // ✏️ GANTI: "assets/race-human.jpg"
    trait: "Adaptable",
    description: "Ras paling umum dan serbaguna di dunia OMAN. Human tidak memiliki kelemahan ekstrem maupun kelebihan ekstrem, namun kemampuan adaptasi mereka membuatnya cocok dengan class apapun.",
    special: "🌟 All-Rounder: Bonus 10% EXP dari semua aktivitas. Bisa memilih class apapun tanpa penalti stat."
  },
  {
    id: "elf",
    name: "Elf",
    emoji: "🌿",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Elf%20pic1.jpg", // ✏️ GANTI: "assets/race-elf.jpg"
    trait: "Nature's Grace",
    description: "Ras kuno yang hidup selaras dengan alam. Elf memiliki telinga runcing, penglihatan tajam, dan keanggunan alami. Mereka dikenal sebagai pemanah dan penyihir alam yang handal.",
    special: "🌿 Nature's Grace: +15 INT. Kemampuan Bersatu dengan Alam (regenerasi 2HP/ronde di area hutan)."
  },
  {
    id: "dwarf",
    name: "Dwarf",
    emoji: "⛏️",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Dwarf%20pic.jpg", // ✏️ GANTI: "assets/race-dwarf.jpg"
    trait: "Ironforge",
    description: "Ras berbadan pendek namun sangat kuat. Dwarf adalah ahli smithing dan crafting terbaik di dunia OMAN. Mereka hidup di bawah gunung dan memiliki ketahanan luar biasa terhadap racun.",
    special: "⛏️ Ironforge: +20 VIT. Bonus 20% hasil crafting & mining. Imun terhadap Poison Lvl 1–3."
  },
  {
    id: "wolfkin",
    name: "Wolfkin",
    emoji: "🐺",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Wolfkin%20pic1.jpg", // ✏️ GANTI: "assets/race-wolfkin.jpg"
    trait: "Pack Hunter",
    description: "Ras setengah manusia setengah serigala yang hidup dalam kelompok clan. Wolfkin sangat agresif dalam pertempuran dan memiliki naluri berburu yang tajam. Kekuatan mereka meningkat saat bersama anggota clan.",
    special: "🐺 Pack Hunter: +7 STR & 5 AGI. Bonus damage +15% saat bersama 2+ anggota party dari clan yang sama."
  },
  {
    id: "darkelf",
    name: "Dark Elf",
    emoji: "🌑",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Darkelf%20pic.jpg", // ✏️ GANTI: "assets/race-darkelf.jpg"
    trait: "Shadow Veil",
    description: "Elf yang terbuang dari komunitas mereka dan memilih jalan kegelapan. Dark Elf menguasai sihir gelap dan kemampuan stealth. Mereka adalah assassin dan dark mage yang paling ditakuti.",
    special: "🌑 Shadow Veil: +15 AGI. Mampu mengaktifkan Stealth selama 30 detik (1x per sesi)."
  },
  {
    id: "faeborn",
    name: "Faeborn",
    emoji: "🧚",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Pixie%20pic.jpg", // ✏️ GANTI: "assets/race-faeborn.jpg"
    trait: "Fairy Dust",
    description: "Ras berwujud mungil dengan sayap transparan. Faeborn adalah keturunan peri dari alam ajaib. Mereka memiliki kemampuan sihir ilusi yang luar biasa dan bisa terbang singkat.",
    special: "🧚 Fairy Dust: +20 LUK & INT. Kemampuan Illusion (membingungkan 1 musuh selama 2 ronde). Bisa terbang rendah."
  },
  {
    id: "undead",
    name: "Undead",
    emoji: "💀",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Undead%20pic.jpg", // ✏️ GANTI: "assets/race-undead.jpg"
    trait: "Deathless",
    description: "Ras yang telah melewati kematian namun kembali untuk tujuan tertentu. Undead tidak merasakan sakit dan tidak memerlukan makanan. Skeleton, zombie, dan lich termasuk dalam Ras Undead.",
    special: "💀 Deathless: Imun terhadap Stun & Fear. Saat HP mencapai 0, bangkit kembali dengan 10% HP (1x per sesi)."
  },
  {
    id: "comingsoon",
    name: "Coming Soon",
    emoji: "⏳",
    image: "https://hyutzatopojxwpyvdclp.supabase.co/storage/v1/object/public/OMAN%20IMG/Unknown%20pic.jpg",
    trait: "Exclusive",
    description: "Ras baru yang akan segera hadir di dunia OMAN. Tetap pantau terus perkembangan mereka!",
    special: "⏳ Exclusive: Bonus unik yang hanya tersedia untuk ras ini."
  }
];

// ================================================
// LEVEL TABLE DATA
// ✏️ Ubah data di sini untuk menyesuaikan sistem level
// Format: [level, nama_pangkat, exp_dibutuhkan, bonus]
// ================================================
const LEVEL_TABLE = [
  [1,  "Petualang Baru",   0,       "Akses area starter"],
  [5,  "Petualang",        500,     "+1 Skill Slot"],
  [10, "Pejuang",          1500,    "Buka Dungeon Lvl 1"],
  [15, "Pemberani",        3000,    "+5% semua stat"],
  [20, "Veteran",          6000,    "Buka Guild System"],
  [25, "Elite",            10000,   "Buka Dungeon Lvl 2"],
  [30, "Champion",         15000,   "+10% semua stat"],
  [35, "Hero",             22000,   "Buka Area Tersembunyi"],
  [40, "Legend",           30000,   "Buka Dungeon Lvl 3"],
  [50, "Grand Master",     50000,   "Title Eksklusif + Skin Khusus"],
];
