/* ============================================ */
/* OMAN: A New Beginning - Website JavaScript   */
/* ============================================ */
/* File ini menangani semua interaktivitas website */
/* Mulai dari navigasi, modal, galeri, dan animasi */

/* ============================================ */
/* BAGIAN 1: TUNGGU HALAMAN SELESAI DIMUAT     */
/* ============================================ */
/* Semua kode harus menunggu sampai HTML dan CSS selesai dimuat */
/* Ini mencegah error cannot read property of null */
document.addEventListener('DOMContentLoaded', function() {
    
    /* ======================================== */
    /* BAGIAN 2: MOBILE MENU (HAMBURGER MENU)  */
    /* ======================================== */
    /* Mengambil elemen tombol menu dan daftar menu */
    var menuToggle = document.getElementById('menuToggle');
    var navMenu = document.getElementById('navMenu');
    
    /* Cek apakah elemen menuToggle ada di halaman */
    if (menuToggle && navMenu) {
        /* Ketika tombol menu diklik */
        menuToggle.addEventListener('click', function() {
            /* Toggle: jika menu tersembunyi, tampilkan. Jika tampil, sembunyikan */
            navMenu.classList.toggle('active');
            console.log('Menu toggled'); /* Untuk debugging */
        });
    } else {
        console.log('Menu elements not found'); /* Debugging jika error */
    }
    
    /* ======================================== */
    /* BAGIAN 3: NAVIGASI HALAMAN              */
    /* ======================================== */
    /* Fungsi untuk menampilkan halaman yang dipilih */
    function showPage(pageId) {
        /* Sembunyikan semua halaman terlebih dahulu */
        var allPages = document.querySelectorAll('.page');
        allPages.forEach(function(page) {
            page.classList.remove('active');
        });
        
        /* Tampilkan halaman yang diminta */
        var targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            /* Scroll ke atas halaman dengan animasi halus */
            window.scrollTo({
                top: targetPage.offsetTop - 80, /* Kurangi 80px untuk header */
                behavior: 'smooth'
            });
            console.log('Showing page: ' + pageId); /* Debugging */
        } else {
            console.log('Page not found: ' + pageId); /* Debugging */
        }
    }
    
    /* ======================================== */
    /* BAGIAN 4: EVENT LISTENER UNTUK LINK NAVIGASI */
    /* ======================================== */
    /* Ambil semua link navigasi */
    var navLinks = document.querySelectorAll('.nav-link');
    
    /* Loop setiap link navigasi */
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            /* Mencegah perilaku default link (loncat ke anchor) */
            event.preventDefault();
            
            /* Hapus class active dari semua link */
            navLinks.forEach(function(l) {
                l.classList.remove('active');
            });
            
            /* Tambahkan class active ke link yang diklik */
            this.classList.add('active');
            
            /* Ambil ID halaman dari atribut data-page */
            var pageId = this.getAttribute('data-page');
            
            /* Jika halaman ada, tampilkan */
            if (pageId) {
                showPage(pageId);
            }
            
            /* Tutup menu mobile jika terbuka */
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    /* ======================================== */
    /* BAGIAN 5: TANGANI HALAMAN YANG DIAKSES LANGSUNG VIA URL */
    /* ======================================== */
    /* Misalnya: website.com/#class-system */
    function handleHashChange() {
        var hash = window.location.hash.substring(1); /* Hapus tanda # */
        if (hash) {
            showPage(hash);
        }
    }
    
    /* Jalankan saat halaman dimuat */
    handleHashChange();
    
    /* Jalankan saat hash di URL berubah */
    window.addEventListener('hashchange', handleHashChange);
    
    /* ======================================== */
    /* BAGIAN 6: KLIK GAMBAR DI HALAMAN CLASS  */
    /* ======================================== */
    /* Tangani klik pada kartu class */
    var classCards = document.querySelectorAll('.class-card');
    classCards.forEach(function(card) {
        card.addEventListener('click', function() {
            /* Ambil nama class dari kelas CSS (warrior, mage, dll) */
            var classNames = ['warrior', 'mage', 'archer', 'priest', 'guardian'];
            var className = '';
            
            classNames.forEach(function(name) {
                if (card.classList.contains(name)) {
                    className = name;
                }
            });
            
            if (className) {
                showClassDetail(className);
            }
        });
    });
    
    /* ======================================== */
    /* BAGIAN 7: KLIK GAMBAR DI HALAMAN RACE   */
    /* ======================================== */
    /* Tangani klik pada kartu race */
    var raceCards = document.querySelectorAll('.race-card');
    raceCards.forEach(function(card) {
        card.addEventListener('click', function() {
            /* Ambil nama race dari atribut onclick (jika ada) */
            var onclickAttr = card.getAttribute('onclick');
            if (onclickAttr) {
                /* Ekstrak parameter dari showRaceDetail('parameter') */
                var match = onclickAttr.match(/showRaceDetail\('(.+?)'\)/);
                if (match && match[1]) {
                    showRaceDetail(match[1]);
                }
            }
        });
    });
    
    /* ======================================== */
    /* BAGIAN 8: TUTUP MODAL DENGAN KLIK OUTSIDE */
    /* ======================================== */
    window.addEventListener('click', function(event) {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
}); /* TUTUP DOMContentLoaded */

/* ============================================ */
/* BAGIAN 9: FUNGSI-FUNGSI GLOBAL              */
/* ============================================ */
/* Fungsi di luar DOMContentLoaded agar bisa dipanggil dari HTML */

/* Fungsi untuk menampilkan detail class di modal */
function showClassDetail(className) {
    console.log('Showing detail for class: ' + className); /* Debugging */
    
    /* Data detail untuk setiap class */
    var classData = {
        warrior: {
            icon: '⚔️',
            name: 'Warrior',
            focus: 'Frontline DPS / Tank',
            weapon: 'Greatsword, Dual Axes, War Hammer',
            specialty: 'Berserker Mode: ATK meningkat 50% selama 3 turn (cooldown: 5 turn)',
            skills: ['Power Strike (Single Target Damage)', 'Whirlwind Slash (AoE Damage)', 'Battle Cry (Party ATK Buff)', 'Iron Skin (Self DEF Boost)'],
            description: 'Warrior adalah prajurit garis depan yang mengandalkan kekuatan fisik dan ketahanan luar biasa. Cocok untuk pemain yang suka bertarung langsung dan melindungi rekan tim.',
            stats: { ATK: 9, DEF: 8, SPD: 5, HP: 9 }
        },
        mage: {
            icon: '🔮',
            name: 'Mage',
            focus: 'Magic DPS / Area Damage',
            weapon: 'Magic Staff, Crystal Orb, Grimoire',
            specialty: 'Arcane Burst: Magic damage +100% ke semua musuh (cooldown: 8 turn)',
            skills: ['Fireball (Single Target)', 'Blizzard (AoE Damage + Slow)', 'Teleport (Escape/Reposition)', 'Mana Shield (Damage Absorber)'],
            description: 'Mage adalah pengguna sihir dengan damage area dahsyat. Meski rapuh, kekuatan magisnya mampu menghancurkan kelompok musuh sekaligus.',
            stats: { ATK: 9, DEF: 3, SPD: 6, HP: 4 }
        },
        archer: {
            icon: '🏹',
            name: 'Archer',
            focus: 'Ranged DPS / Critical Damage',
            weapon: 'Longbow, Crossbow, Elven Bow',
            specialty: 'Precision Shot: 100% Critical Rate untuk 1 serangan (cooldown: 4 turn)',
            skills: ['Multi Arrow (Multi Target)', 'Poison Shot (Damage Over Time)', 'Eagle Eye (Accuracy Buff)', 'Trap (Crowd Control)'],
            description: 'Archer adalah penembak jitu dengan kecepatan dan ketepatan tinggi. Ideal untuk pemain yang suka menjaga jarak dan memberikan damage konsisten.',
            stats: { ATK: 7, DEF: 4, SPD: 9, HP: 5 }
        },
        priest: {
            icon: '✨',
            name: 'Priest',
            focus: 'Healer / Support',
            weapon: 'Holy Staff, Sacred Tome, Blessed Mace',
            specialty: 'Divine Blessing: Heal 40% HP seluruh party + cleanse semua debuff (cooldown: 6 turn)',
            skills: ['Holy Heal (Single/Multi Heal)', 'Purification (Remove Debuffs)', 'Blessing (Party Buff)', 'Resurrection (Revive Ally)'],
            description: 'Priest adalah tulang punggung tim yang menjaga party tetap hidup. Support dan healing-nya vital untuk pertarungan panjang.',
            stats: { ATK: 4, DEF: 6, SPD: 5, HP: 8 }
        },
        guardian: {
            icon: '🛡️',
            name: 'Guardian',
            focus: 'Tank / Protector',
            weapon: 'Tower Shield, War Mace, Lance',
            specialty: 'Unbreakable Wall: Immune semua damage + taunt musuh selama 1 turn (cooldown: 10 turn)',
            skills: ['Shield Bash (Stun)', 'Taunt (Force Enemy Focus)', 'Fortress Stance (DEF Buff)', 'Guardian Angel (Ally Protection)'],
            description: 'Guardian adalah benteng hidup dengan pertahanan tertinggi. Mereka adalah pelindung utama yang menyerap damage untuk tim.',
            stats: { ATK: 6, DEF: 10, SPD: 3, HP: 10 }
        }
    };
    
    /* Ambil data class yang diminta */
    var data = classData[className];
    
    /* Jika data tidak ditemukan, tampilkan error dan hentikan */
    if (!data) {
        console.error('Class data not found for: ' + className);
        alert('Data class tidak ditemukan!');
        return;
    }
    
    /* Cek apakah modal dan konten modal ada */
    var modal = document.getElementById('classDetailModal');
    var content = document.getElementById('classDetailContent');
    
    if (!modal || !content) {
        console.error('Modal elements not found');
        alert('Modal tidak ditemukan di halaman!');
        return;
    }
    
    /* Buat HTML konten modal */
    var html = '';
    html += '<h2>' + data.icon + ' ' + data.name + '</h2>';
    html += '<hr>';
    html += '<div style="margin: 20px 0;">';
    html += '<h3>🎯 Fokus Peran</h3>';
    html += '<p>' + data.focus + '</p>';
    html += '<br>';
    html += '<h3>⚔️ Senjata Khas</h3>';
    html += '<p>' + data.weapon + '</p>';
    html += '<br>';
    html += '<h3>💫 Kekhasan (Special Ability)</h3>';
    html += '<p>' + data.specialty + '</p>';
    html += '<br>';
    html += '<h3>📜 Daftar Skill</h3>';
    html += '<ul>';
    data.skills.forEach(function(skill) {
        html += '<li>' + skill + '</li>';
    });
    html += '</ul>';
    html += '<br>';
    html += '<h3>📖 Deskripsi</h3>';
    html += '<p>' + data.description + '</p>';
    html += '</div>';
    
    /* Tampilkan stats dalam bentuk progress bar */
    html += '<h3>📊 Stats</h3>';
    html += '<div style="margin-top: 10px;">';
    
    /* ATK */
    html += '<p>⚔️ ATK: ' + data.stats.ATK + '/10</p>';
    html += '<div style="background:#eee; height:20px; border-radius:10px; margin:5px 0;">';
    html += '<div style="background:#e74c3c; width:' + (data.stats.ATK * 10) + '%; height:100%; border-radius:10px;"></div>';
    html += '</div>';
    
    /* DEF */
    html += '<p>🛡️ DEF: ' + data.stats.DEF + '/10</p>';
    html += '<div style="background:#eee; height:20px; border-radius:10px; margin:5px 0;">';
    html += '<div style="background:#3498db; width:' + (data.stats.DEF * 10) + '%; height:100%; border-radius:10px;"></div>';
    html += '</div>';
    
    /* SPD */
    html += '<p>⚡ SPD: ' + data.stats.SPD + '/10</p>';
    html += '<div style="background:#eee; height:20px; border-radius:10px; margin:5px 0;">';
    html += '<div style="background:#2ecc71; width:' + (data.stats.SPD * 10) + '%; height:100%; border-radius:10px;"></div>';
    html += '</div>';
    
    /* HP */
    html += '<p>❤️ HP: ' + data.stats.HP + '/10</p>';
    html += '<div style="background:#eee; height:20px; border-radius:10px; margin:5px 0;">';
    html += '<div style="background:#e67e22; width:' + (data.stats.HP * 10) + '%; height:100%; border-radius:10px;"></div>';
    html += '</div>';
    
    html += '</div>';
    
    /* Masukkan HTML ke konten modal */
    content.innerHTML = html;
    
    /* Tampilkan modal */
    modal.classList.add('active');
    console.log('Modal opened for class: ' + className);
}

/* Fungsi untuk menampilkan detail race */
function showRaceDetail(raceName) {
    console.log('Showing detail for race: ' + raceName);
    
    /* Data untuk setiap race */
    var raceData = {
        human: { 
            name: 'Human', 
            trait: 'Adaptability', 
            bonus: 'EXP +10% dari semua sumber',
            desc: 'Ras paling adaptif yang mampu berkembang dalam berbagai situasi. Bonus EXP membuat mereka lebih cepat naik level dibanding ras lain.'
        },
        elf: { 
            name: 'Elf', 
            trait: "Nature's Blessing", 
            bonus: 'HP Regen +5% per turn di area hutan',
            desc: 'Penjaga hutan kuno dengan koneksi mendalam ke alam. Sangat kuat saat bertarung di lingkungan alami.'
        },
        dwarf: { 
            name: 'Dwarf', 
            trait: 'Master Crafters', 
            bonus: 'Crafting success rate +15%',
            desc: 'Pengrajin ulung dari pegunungan dengan keahlian metalurgi tak tertandingi. Ahli dalam membuat senjata dan armor berkualitas.'
        },
        wolfkin: { 
            name: 'Wolfkin', 
            trait: 'Pack Hunter', 
            bonus: 'ATK +20% saat party dengan 3+ member',
            desc: 'Keturunan serigala dengan insting berburu dan loyalitas tinggi pada kelompoknya. Sangat kuat dalam pertarungan tim.'
        },
        'dark-elf': { 
            name: 'Dark Elf', 
            trait: 'Shadow Affinity', 
            bonus: 'Critical Rate +15% di malam hari atau dungeon gelap',
            desc: 'Elf dari dunia bawah tanah dengan kemampuan stealth superior. Mematikan dalam kegelapan.'
        },
        dragonkin: { 
            name: 'Dragonkin', 
            trait: "Dragon's Fury", 
            bonus: 'Damage +25% saat HP di bawah 30%',
            desc: 'Keturunan naga dengan kekuatan destruktif yang bangkit saat terdesak. Semakin terluka, semakin berbahaya.'
        },
        celestial: { 
            name: 'Celestial', 
            trait: 'Divine Light', 
            bonus: 'Immune terhadap curse dan debuff 1 kali per battle',
            desc: 'Makhluk surgawi yang dilindungi kekuatan ilahi. Perlindungan alami terhadap efek negatif membuat mereka tangguh.'
        },
        undead: { 
            name: 'Undead', 
            trait: 'Undying Will', 
            bonus: '50% chance bertahan dengan 1 HP dari serangan fatal',
            desc: 'Mayat hidup dengan tekad kuat menolak kematian. Kemampuan unik untuk bertahan dari serangan mematikan.'
        },
        beastfolk: { 
            name: 'Beastfolk', 
            trait: 'Primal Instinct', 
            bonus: 'SPD +20% selama 3 turn pertama pertarungan',
            desc: 'Ras beastman dengan kecepatan dan insting predator alami. Sangat cepat di awal pertarungan.'
        },
        spirit: { 
            name: 'Spirit', 
            trait: 'Elemental Flow', 
            bonus: 'Elemental damage +30%, physical damage diterima +25%',
            desc: 'Entitas elemental dengan kekuatan alam murni. Kuat dalam serangan elemental namun rentan terhadap serangan fisik.'
        }
    };
    
    var data = raceData[raceName];
    
    if (data) {
        /* Tampilkan dalam alert (bisa diganti dengan modal yang lebih bagus) */
        var message = 
            'RAS: ' + data.name + '\n\n' +
            '⭐ Special Trait: ' + data.trait + '\n\n' +
            '📈 Bonus: ' + data.bonus + '\n\n' +
            '📖 Deskripsi:\n' + data.desc;
        
        alert(message);
    } else {
        console.error('Race data not found: ' + raceName);
    }
}

/* Fungsi untuk menutup modal */
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        console.log('Modal closed: ' + modalId);
    }
}

/* ============================================ */
/* BAGIAN 10: LIGHTBOX / GALERI GAMBAR         */
/* ============================================ */
/* Fungsi untuk membuka lightbox gambar */
function openLightbox(imageSrc) {
    console.log('Opening lightbox for: ' + imageSrc);
    
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightbox.classList.add('active');
    } else {
        console.error('Lightbox elements not found');
    }
}

/* Fungsi untuk menutup lightbox */
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        console.log('Lightbox closed');
    }
}

/* ============================================ */
/* BAGIAN 11: FUNGSI BANTUAN LAINNYA          */
/* ============================================ */
/* Fungsi untuk reset semua halaman (kembali ke home) */
function goToHome() {
    var homePage = document.getElementById('home');
    var allPages = document.querySelectorAll('.page');
    
    if (homePage) {
        /* Sembunyikan semua halaman */
        allPages.forEach(function(page) {
            page.classList.remove('active');
        });
        
        /* Tampilkan home */
        homePage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/* Debugging: Log saat semua script selesai dimuat */
console.log('✅ OMAN Website JavaScript loaded successfully!');
console.log('📋 Available functions:');
console.log('  - showClassDetail(className)');
console.log('  - showRaceDetail(raceName)');
console.log('  - closeModal(modalId)');
console.log('  - openLightbox(imageSrc)');
console.log('  - closeLightbox()');
console.log('  - goToHome()');