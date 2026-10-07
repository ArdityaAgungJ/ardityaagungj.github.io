(function () {
  // English text lives in index.html; Indonesian translations are here.
  var id = {
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.experience": "Pengalaman",
    "nav.projects": "Proyek",
    "nav.education": "Pendidikan",
    "nav.contact": "Kontak",

    "hero.eyebrow": "Halo, saya",
    "hero.lead": "Saya membangun aplikasi web skala produksi, RESTful API, dan sistem enterprise — mulai dari POS dan koperasi hingga ERP, inventaris, dan kiosk.",
    "hero.location": "📍 Bantul, Yogyakarta, Indonesia",
    "hero.years": "Pengalaman 6+ tahun",
    "hero.email": "Kirim email",

    "about.title": "Tentang",
    "about.body": "Full Stack Developer berpengalaman lebih dari 6 tahun dalam merancang, membangun, dan mengelola aplikasi web skala produksi, arsitektur RESTful API, integrasi sistem enterprise, dan optimasi basis data. Memiliki spesialisasi mendalam pada ekosistem PHP (CodeIgniter 3 &amp; 4) dan JavaScript/TypeScript modern (Next.js, React, React Native, Tailwind CSS, Vue.js). Berhasil mengembangkan berbagai platform kompleks seperti sistem Point of Sale (POS), Koperasi, Retail, ERP/Inventory &amp; Produksi, Kiosk operasional, serta integrasi sistem pihak ketiga (Accurate, Firebase, payment gateway).",

    "skills.title": "Keahlian",
    "skills.lang": "Bahasa Pemrograman",
    "skills.fw": "Framework &amp; Frontend",
    "skills.db": "Basis Data",
    "skills.db.design": "Desain Database",
    "skills.db.query": "Optimasi Query",
    "skills.db.index": "Indexing",
    "skills.api": "API &amp; Integrasi",
    "skills.api.otp": "OTP &amp; Autentikasi",
    "skills.api.3rd": "API Pihak Ketiga",
    "skills.tools": "Tools &amp; Metodologi",
    "skills.tools.arch": "Arsitektur POS &amp; Enterprise",

    "exp.title": "Pengalaman",
    "exp.period": "Feb 2020 – Sekarang",
    "exp.b1": "Merancang, mengembangkan, dan memelihara arsitektur end-to-end untuk berbagai platform web, enterprise software, dan aplikasi seluler klien skala korporat.",
    "exp.b2": "Membangun RESTful API berskala besar yang aman dan efisien menggunakan PHP (CodeIgniter 3 &amp; 4) untuk menghubungkan backend dengan antarmuka web dan mobile.",
    "exp.b3": "Mengembangkan antarmuka modern yang responsif dan performan menggunakan Next.js, React, Tailwind CSS, dan React Native.",
    "exp.b4": "Integrasi kompleks dengan sistem ERP/akuntansi (Accurate), autentikasi, serta layanan push notification (Firebase).",
    "exp.b5": "Mengoptimalkan basis data MySQL, manajemen skema relasional, dan penanganan transaksi data bervolume tinggi.",

    "proj.title": "Proyek Pilihan",
    "proj.rbc.period": "Mar 2026 – Sekarang",
    "proj.rbc.sub": "Platform Manajemen Koperasi",
    "proj.rbc.desc": "Sistem koperasi end-to-end: backend API, web admin, portal anggota, dan aplikasi mobile Account Officer — keanggotaan, tabungan, pinjaman, deposito, persetujuan berjenjang, akuntansi, kepegawaian &amp; absensi, operasional cabang, dan pelacakan KPI.",
    "proj.ssb.period": "Nov 2024 – Sep 2026",
    "proj.ssb.sub": "Platform Operasional, Inventory &amp; Produksi",
    "proj.ssb.desc": "Platform web untuk manajemen inventaris, stock adjustment, alur produksi, dan job order, dengan import produk massal, manajemen cabang &amp; hak akses, sinkronisasi purchase receipt, dan integrasi langsung dengan Accurate.",
    "proj.els.period": "Agu 2025 – 2026",
    "proj.els.sub": "Platform Operasional Internal &amp; Kiosk",
    "proj.els.desc": "Backend, portal web internal, dan aplikasi kiosk untuk transaksi kasir, penetapan harga, manajemen promo, dan penukaran hadiah — plus invoice, notifikasi, dan autentikasi OTP.",
    "proj.hb.period": "Nov 2025 – Mei 2026",
    "proj.hb.sub": "Platform Retail &amp; Integrasi POS",
    "proj.hb.desc": "Operasional retail: alur pembayaran, kasir POS, kalkulasi diskon bertingkat, export transaksi, katalog produk, dan pencetakan struk, dengan transaksi penjualan tersinkron ke Accurate.",
    "proj.hc.period": "Sep 2025 – Nov 2025",
    "proj.hc.sub": "Platform Purchasing &amp; Inventory",
    "proj.hc.desc": "Modul purchasing dan inventaris: kontrol stok, mesin rekomendasi pembelian, basis data vendor, fluktuasi harga, dan sinkronisasi Accurate.",
    "proj.iox.period": "Apr 2024 – Okt 2024",
    "proj.iox.sub": "Operasional Balap Offroad",
    "proj.iox.desc": "Web portal dan API untuk balap offroad: dashboard monitoring, registrasi peserta, pencatatan checkpoint real-time, sistem voting, filter/export data, dan broadcast pengumuman.",
    "proj.soda.sub": "POS Multi-Klien · PT Era Solusi Data",
    "proj.soda.desc": "Web Merchant, Warehouse, Admin, Reseller, dan backend API SODA POS, serta solusi Web POS kustom untuk swalayan, koperasi, POS Siap Cetak Inspiration, Coday Lab, dan Samila Resto.",
    "proj.other.period": "Lainnya",
    "proj.other.title": "Proyek Tambahan &amp; Layanan Mikro",
    "proj.other.fb": "<strong>Firebase Notification Service (2024)</strong> — layanan mikro terpusat untuk push notification real-time.",
    "proj.other.dw": "<strong>De Wave Backoffice &amp; Petty Cash (2026)</strong> — modul pencatatan petty cash dan backoffice cabang.",

    "edu.title": "Pendidikan",
    "edu.akprind": "S1 Teknik Informatika",
    "edu.akprind.gpa": "IPK 3.83 / 4.00 — Cumlaude",
    "edu.ugm.name": "Universitas Gadjah Mada — Sekolah Vokasi",
    "edu.ugm": "D3 Metrologi dan Instrumentasi",
    "edu.ugm.gpa": "IPK 3.57 / 4.00",

    "contact.title": "Mari bekerja sama",
    "contact.body": "Terbuka untuk proyek baru, kolaborasi, maupun posisi full-time. Cara tercepat menghubungi saya adalah lewat email."
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var en = {};
  nodes.forEach(function (el) { en[el.getAttribute("data-i18n")] = el.innerHTML; });
  var dict = { en: en, id: id };

  function apply(lang) {
    var d = dict[lang] || en;
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (d[key] != null) el.innerHTML = d[key];
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var initial = saved || ((navigator.language || "").toLowerCase().indexOf("id") === 0 ? "id" : "en");
  if (initial !== "en") apply(initial);

  document.getElementById("lang-toggle").addEventListener("click", function () {
    apply(document.documentElement.lang === "en" ? "id" : "en");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
