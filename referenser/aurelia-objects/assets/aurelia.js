/* =========================================================
   AURELIA OBJECTS — konceptreferens byggd av Limuna Studio.
   All produktdata är fiktiv/skapad för demo och beskriver
   inte riktiga LuminaHome-produkter.
   ========================================================= */
window.Aurelia = (function () {
  "use strict";

  var STORAGE_KEY = "aurelia_objects_cart_v1";

  /* ---------------- kategorier ---------------- */
  var CATEGORIES = [
    { slug: "taklampor", label: "Taklampor", icon: "pendant", desc: "Ljus som faller mjukt över hela rummet." },
    { slug: "bordslampor", label: "Bordslampor", icon: "table", desc: "Punktbelysning med skulptural karaktär." },
    { slug: "golvlampor", label: "Golvlampor", icon: "floor", desc: "Stående ljuskällor som formar rummets atmosfär." },
    { slug: "vagglampor", label: "Vägglampor", icon: "wall", desc: "Diskret, riktad glöd monterad på väggen." },
    { slug: "tillbehor", label: "Tillbehör", icon: "bulb", desc: "Ljuskällor och detaljer som fulländar helheten." }
  ];

  /* ---------------- produkter (fiktiv demodata) ---------------- */
  var PRODUCTS = [
    {
      id: "aurelia-halo",
      name: "Aurelia Halo",
      category: "taklampor",
      icon: "pendant",
      tag: "Bästsäljare",
      price: 3490,
      oldPrice: null,
      colors: [
        { name: "Champagnemässing", hex: "#C7A467", mat: "mat-brass" },
        { name: "Mattsvart", hex: "#2C2119", mat: "mat-black" }
      ],
      materials: "Mässing med borstad champagnefinish, mundblåst opalglas.",
      dimensions: "Diameter 38 cm · Höjd 42 cm · Sladdlängd 150 cm (justerbar)",
      lightSource: "E27, dimbar (ljuskälla ingår ej)",
      stock: "in",
      description: "En rund, mjukt sluten taklampa där ljuset sprids ombonat genom det mundblåsta opalglaset. Aurelia Halo är formgiven för att vara ett lugnt fokus i rummet — lika vacker släckt som tänd.",
      accessories: ["aurelia-filament"],
      related: ["aurelia-drop", "aurelia-dune", "aurelia-muse"]
    },
    {
      id: "aurelia-drop",
      name: "Aurelia Drop",
      category: "taklampor",
      icon: "pendant-cluster",
      tag: "Ny",
      price: 3890,
      oldPrice: null,
      colors: [
        { name: "Rökfärgat glas", hex: "#6B5B4A", mat: "mat-glass" },
        { name: "Champagnemässing", hex: "#C7A467", mat: "mat-brass" }
      ],
      materials: "Handblåst rökfärgat glas, detaljer i borstad mässing.",
      dimensions: "Tre skärmar, Ø 12–18 cm · Total höjd 60 cm · Sladdlängd 180 cm",
      lightSource: "3 × E14, dimbar (ljuskällor ingår ej)",
      stock: "low",
      description: "Tre asymmetriskt hängande glober skapar ett organiskt kluster ovanför matbordet eller köksön. Det rökfärgade glaset dämpar ljuset till en varm, intim ton.",
      accessories: ["aurelia-filament"],
      related: ["aurelia-halo", "aurelia-arc", "aurelia-ember"]
    },
    {
      id: "aurelia-dune",
      name: "Aurelia Dune",
      category: "bordslampor",
      icon: "table",
      tag: null,
      price: 1890,
      oldPrice: null,
      colors: [
        { name: "Travertin / natur", hex: "#D9C6A8", mat: "mat-ceramic" },
        { name: "Travertin / espresso", hex: "#4A3A2C", mat: "mat-oak" }
      ],
      materials: "Sockel i travertinmarmor, handsydd skärm i naturligt linne.",
      dimensions: "Bas Ø 18 cm · Höjd 52 cm · Skärm Ø 26 cm",
      lightSource: "E27, dimbar (ljuskälla ingår ej)",
      stock: "in",
      description: "Den tunga travertinsockeln ger Aurelia Dune en lugn, jordnära känsla, medan linneskärmen sprider ett varmt och diffust sken. En lampa som känns lika bra att ta i som att se.",
      accessories: ["aurelia-filament"],
      related: ["aurelia-ember", "aurelia-halo", "aurelia-muse"]
    },
    {
      id: "aurelia-ember",
      name: "Aurelia Ember",
      category: "bordslampor",
      icon: "table",
      tag: "Rea",
      price: 1290,
      oldPrice: 1490,
      colors: [
        { name: "Sandglaserad keramik", hex: "#CBB08A", mat: "mat-ceramic" },
        { name: "Djupgrön glasyr", hex: "#3E4A3E", mat: "mat-oak" }
      ],
      materials: "Handglaserad stengodskeramik, skärm i räfflat linne.",
      dimensions: "Bas Ø 14 cm · Höjd 34 cm · Skärm Ø 20 cm",
      lightSource: "E14, dimbar (ljuskälla ingår ej)",
      stock: "in",
      description: "En mindre accentlampa för sängbordet eller hyllan. Den handglaserade ytan gör varje exemplar unikt i nyans och struktur.",
      accessories: ["aurelia-filament"],
      related: ["aurelia-dune", "aurelia-muse", "aurelia-halo"]
    },
    {
      id: "aurelia-arc",
      name: "Aurelia Arc",
      category: "golvlampor",
      icon: "floor",
      tag: "Bästsäljare",
      price: 4290,
      oldPrice: null,
      colors: [
        { name: "Espressoek / mässing", hex: "#4A3A2C", mat: "mat-oak" },
        { name: "Mattsvart / mässing", hex: "#2C2119", mat: "mat-black" }
      ],
      materials: "Böjd stålarm i borstad mässing, fot i massiv oljad ek.",
      dimensions: "Fot Ø 34 cm · Höjd 178 cm · Räckvidd 90 cm",
      lightSource: "E27, dimbar (ljuskälla ingår ej)",
      stock: "in",
      description: "Den svepande armen bär ljuset dit du behöver det — över soffan, läsfåtöljen eller matbordet — utan att en sladd syns i golvet. Ett skulpturalt blickfång även när den inte lyser.",
      accessories: ["aurelia-filament"],
      related: ["aurelia-drop", "aurelia-muse", "aurelia-dune"]
    },
    {
      id: "aurelia-muse",
      name: "Aurelia Muse",
      category: "vagglampor",
      icon: "wall",
      tag: null,
      price: 1590,
      oldPrice: null,
      colors: [
        { name: "Alabaster", hex: "#EFE9DE", mat: "mat-alabaster" },
        { name: "Champagnemässing", hex: "#C7A467", mat: "mat-brass" }
      ],
      materials: "Slipad alabastersten med infattning i mässing.",
      dimensions: "Bredd 24 cm · Höjd 14 cm · Utsprång 11 cm",
      lightSource: "G9, ej dimbar (ljuskälla ingår ej)",
      stock: "out",
      description: "Ljuset vandrar genom den slipade alabastern och ger väggen en mjuk, levande glöd — perfekt som stämningsljus i hallen eller längs en trappa.",
      accessories: ["aurelia-filament"],
      related: ["aurelia-halo", "aurelia-arc", "aurelia-ember"]
    },
    {
      id: "aurelia-filament",
      name: "Aurelia Filament",
      category: "tillbehor",
      icon: "bulb",
      tag: null,
      price: 249,
      oldPrice: null,
      colors: [
        { name: "Bärnstensfärgat glas", hex: "#C7864A", mat: "mat-glass" },
        { name: "Klart glas", hex: "#E9E4DA", mat: "mat-glass" }
      ],
      materials: "Dimbar LED-ljuskälla med synlig spiralfilament, mundblåst glaskupa.",
      dimensions: "E27 · 4 W (motsv. 30 W) · 1800 K varmt sken",
      lightSource: "Dimbar, fungerar med de flesta dimmer­standarder",
      stock: "in",
      description: "Den varma, filamentklädda glödtråden är lika mycket detalj som ljuskälla — designad för att synas i öppna armaturer som Aurelia Halo och Aurelia Drop.",
      accessories: [],
      related: ["aurelia-halo", "aurelia-drop", "aurelia-arc"]
    }
  ];

  function byId(id) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
    return null;
  }
  function categoryOf(slug) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].slug === slug) return CATEGORIES[i];
    return null;
  }
  function countInCategory(slug) {
    return PRODUCTS.filter(function (p) { return p.category === slug; }).length;
  }
  function money(n) {
    return n.toLocaleString("sv-SE") + " kr";
  }

  var STOCK_LABEL = { in: "I lager", low: "Få kvar i lager", out: "Tillfälligt slut" };

  /* ---------------- SVG-ikonbibliotek ----------------
     Bespoke linjeillustrationer i varumärkets kulör istället
     för produktfoto — nätverksåtkomst till bildbanker/LuminaHome.se
     var blockerad i den här sessionen. */
  var ICONS = {
    pendant:
      '<rect x="44" y="1" width="12" height="4" rx="2" class="stroke" stroke-width="1.6"/>' +
      '<line x1="50" y1="5" x2="50" y2="29" class="stroke" stroke-width="1.6"/>' +
      '<path d="M31 29 H69 L58 54 H42 Z" class="stroke" stroke-width="1.6"/>' +
      '<circle cx="50" cy="64" r="10" class="fill-champagne" fill-opacity="0.55"/>',
    "pendant-cluster":
      '<rect x="18" y="1" width="64" height="4" rx="2" class="stroke" stroke-width="1.4"/>' +
      '<line x1="28" y1="5" x2="28" y2="33" class="stroke" stroke-width="1.4"/>' +
      '<circle cx="28" cy="40" r="8" class="stroke" stroke-width="1.4"/>' +
      '<circle cx="28" cy="40" r="4" class="fill-champagne" fill-opacity="0.55"/>' +
      '<line x1="50" y1="5" x2="50" y2="49" class="stroke" stroke-width="1.4"/>' +
      '<circle cx="50" cy="58" r="10" class="stroke" stroke-width="1.4"/>' +
      '<circle cx="50" cy="58" r="5" class="fill-champagne" fill-opacity="0.55"/>' +
      '<line x1="72" y1="5" x2="72" y2="26" class="stroke" stroke-width="1.4"/>' +
      '<circle cx="72" cy="33" r="7" class="stroke" stroke-width="1.4"/>' +
      '<circle cx="72" cy="33" r="3.5" class="fill-champagne" fill-opacity="0.55"/>',
    table:
      '<rect x="38" y="84" width="24" height="6" rx="3" class="stroke" stroke-width="1.6"/>' +
      '<rect x="47" y="54" width="6" height="30" class="stroke" stroke-width="1.6"/>' +
      '<path d="M30 54 H70 L61 27 H39 Z" class="stroke" stroke-width="1.6"/>' +
      '<circle cx="50" cy="44" r="8" class="fill-champagne" fill-opacity="0.5"/>',
    floor:
      '<line x1="28" y1="97" x2="72" y2="97" class="stroke" stroke-width="1.6"/>' +
      '<line x1="50" y1="97" x2="50" y2="66" class="stroke" stroke-width="1.6"/>' +
      '<path d="M50 66 C 50 28, 26 22, 40 12" class="stroke" stroke-width="1.6" fill="none"/>' +
      '<path d="M32 8 L50 14 L38 26 Z" class="stroke" stroke-width="1.6"/>' +
      '<circle cx="40" cy="15" r="7" class="fill-champagne" fill-opacity="0.5"/>',
    wall:
      '<rect x="6" y="38" width="7" height="24" rx="2" class="stroke" stroke-width="1.6"/>' +
      '<line x1="13" y1="50" x2="38" y2="50" class="stroke" stroke-width="1.6"/>' +
      '<path d="M38 34 H76 L66 66 H48 Z" class="stroke" stroke-width="1.6"/>' +
      '<circle cx="57" cy="50" r="9" class="fill-champagne" fill-opacity="0.5"/>',
    bulb:
      '<circle cx="50" cy="42" r="24" class="stroke" stroke-width="1.6"/>' +
      '<path d="M39 58 H61 M41 65 H59 M43 72 H57" class="stroke" stroke-width="1.6"/>' +
      '<path d="M40 34 L50 48 L60 32" class="stroke" stroke-width="1.6" fill="none"/>' +
      '<circle cx="50" cy="42" r="15" class="fill-champagne" fill-opacity="0.4"/>',
    bag:
      '<path d="M28 36 H72 L68 88 H32 Z" class="stroke" stroke-width="1.6"/>' +
      '<path d="M38 36 V26 a12 12 0 0 1 24 0 V36" class="stroke" stroke-width="1.6" fill="none"/>',
    search:
      '<circle cx="43" cy="43" r="26" class="stroke" stroke-width="1.6"/>' +
      '<line x1="62" y1="62" x2="84" y2="84" class="stroke" stroke-width="1.6"/>',
    check:
      '<path d="M20 52 L42 72 L80 28" class="stroke" stroke-width="1.6" fill="none"/>'
  };

  function iconInner(type) { return ICONS[type] || ICONS.pendant; }

  function iconSVG(type, extraAttrs) {
    return '<svg viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" ' +
      (extraAttrs || "") + ">" + iconInner(type) + "</svg>";
  }

  /* visual(): en "produktbild"-panel byggd av illustration + glöd, ersätter foto */
  function visual(opts) {
    opts = opts || {};
    var cls = "visual" + (opts.dark ? " dark" : "") + (opts.className ? " " + opts.className : "");
    if (opts.texture) {
      return '<div class="' + cls + " texture " + opts.texture + '">' +
        (opts.label ? '<span class="tex-label">' + opts.label + "</span>" : "") +
        "</div>";
    }
    return '<div class="' + cls + '">' +
      '<div class="glow-orb"></div>' +
      iconSVG(opts.icon || "pendant") +
      "</div>";
  }

  /* ---------------- varukorg (localStorage) ---------------- */
  function getCartRaw() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) { return []; }
  }
  function saveCartRaw(items) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch (e) {}
    document.dispatchEvent(new CustomEvent("aurelia:cart-updated"));
  }
  function lineKey(id, colorName) { return id + "::" + (colorName || "default"); }

  function addToCart(id, colorName, qty) {
    qty = qty || 1;
    var items = getCartRaw();
    var key = lineKey(id, colorName);
    var found = null;
    for (var i = 0; i < items.length; i++) if (items[i].key === key) found = items[i];
    if (found) found.qty += qty;
    else items.push({ key: key, id: id, colorName: colorName || null, qty: qty });
    saveCartRaw(items);
  }
  function setQty(key, qty) {
    var items = getCartRaw();
    if (qty <= 0) items = items.filter(function (l) { return l.key !== key; });
    else items.forEach(function (l) { if (l.key === key) l.qty = qty; });
    saveCartRaw(items);
  }
  function removeLine(key) {
    saveCartRaw(getCartRaw().filter(function (l) { return l.key !== key; }));
  }
  function clearCart() { saveCartRaw([]); }

  function cartLines() {
    return getCartRaw().map(function (l) {
      var p = byId(l.id);
      if (!p) return null;
      return { key: l.key, product: p, colorName: l.colorName, qty: l.qty, lineTotal: p.price * l.qty };
    }).filter(Boolean);
  }
  function cartCount() { return cartLines().reduce(function (n, l) { return n + l.qty; }, 0); }
  function cartSubtotal() { return cartLines().reduce(function (n, l) { return n + l.lineTotal; }, 0); }

  /* ---------------- produktkort / kategori-kort ---------------- */
  function stockBadge(stock) {
    return '<span class="badge ' + stock + '"><span class="dot"></span>' + STOCK_LABEL[stock] + "</span>";
  }

  function productCardHTML(p) {
    var cat = categoryOf(p.category);
    return (
      '<div class="product-card reveal">' +
        '<a href="produkt.html?id=' + p.id + '">' +
          visual({ icon: p.icon, className: "" }).replace(
            '<div class="glow-orb"></div>',
            '<div class="glow-orb"></div>' + stockBadge(p.stock) +
            '<div class="quick-add"><button class="btn dark block sm" type="button" data-quick-add="' + p.id + '">Lägg i varukorg</button></div>'
          ) +
        '</a>' +
        '<div class="kicker">' + cat.label + (p.tag ? " · " + p.tag : "") + '</div>' +
        '<a href="produkt.html?id=' + p.id + '"><h3>' + p.name + '</h3></a>' +
        '<div class="price-row">' +
          (p.oldPrice ? '<span class="old">' + money(p.oldPrice) + '</span>' : '') +
          '<span>' + money(p.price) + '</span>' +
        '</div>' +
        '<div class="swatches">' + p.colors.map(function (c) {
          return '<span class="swatch" style="background:' + c.hex + '" title="' + c.name + '"></span>';
        }).join('') + '</div>' +
      '</div>'
    );
  }

  function categoryCardHTML(cat) {
    return (
      '<a class="cat-card reveal" href="produkter.html?kategori=' + cat.slug + '">' +
        visual({ icon: cat.icon }) +
        '<h3>' + cat.label + '</h3>' +
        '<div class="count">' + countInCategory(cat.slug) + ' produkter</div>' +
      '</a>'
    );
  }

  function renderCategoryGrid(el) {
    if (!el) return;
    el.innerHTML = CATEGORIES.map(categoryCardHTML).join("");
  }
  function renderProductGrid(el, products) {
    if (!el) return;
    el.innerHTML = products.map(productCardHTML).join("");
  }

  /* ---------------- toast ---------------- */
  var toastTimer = null;
  function showToast(msg) {
    var el = document.getElementById("aureliaToast");
    if (!el) return;
    el.innerHTML = iconSVG("check", 'style="width:16px;height:16px;flex-shrink:0"') + "<span>" + msg + "</span>";
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2600);
  }

  /* ---------------- chrome: header, cart drawer, footer ---------------- */
  function headerHTML(active) {
    function link(href, label, key) {
      return '<a href="' + href + '" class="' + (active === key ? "is-active" : "") + '">' + label + "</a>";
    }
    return (
      '<div class="demo-ribbon">' +
        '<strong>AURELIA OBJECTS</strong> — konceptprojekt i Limuna Studios referensportfölj. Inga riktiga betalningar genomförs. ' +
        '<a href="../../index.html#arbeten">Till Limuna Studio →</a>' +
      "</div>" +
      '<header class="site" id="siteHeader"><div class="wrap nav">' +
        '<a href="index.html" class="logo">Aurelia<small>Objects</small></a>' +
        '<nav class="links">' +
          link("index.html", "Hem", "hem") +
          link("produkter.html", "Kollektion", "kollektion") +
          link("inspiration.html", "Inspiration", "inspiration") +
          link("index.html#om-varumarket", "Om oss", "om") +
        "</nav>" +
        '<div class="nav-actions">' +
          '<button class="icon-btn" id="searchToggle" aria-label="Sök" type="button">' + iconSVG("search") + "</button>" +
          '<button class="icon-btn" id="cartToggle" aria-label="Varukorg" type="button">' + iconSVG("bag") +
            '<span class="cart-count" id="cartCount">0</span>' +
          "</button>" +
          '<button class="menu-toggle" id="menuToggle" aria-label="Meny" aria-expanded="false" type="button"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</div>" +
      '<div class="wrap mobile-nav" id="mobileNav">' +
        link("index.html", "Hem", "hem") +
        link("produkter.html", "Kollektion", "kollektion") +
        link("inspiration.html", "Inspiration", "inspiration") +
        link("index.html#om-varumarket", "Om oss", "om") +
      "</div>" +
      "</header>"
    );
  }

  function footerHTML() {
    return (
      '<footer class="site"><div class="wrap">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<div class="logo">Aurelia<small>Objects</small></div>' +
            '<p>Genomtänkt belysning där form, funktion och atmosfär möts. Ett konceptprojekt framtaget av Limuna Studio.</p>' +
          "</div>" +
          '<div><h4>Kollektion</h4><ul>' +
            CATEGORIES.map(function (c) { return '<li><a href="produkter.html?kategori=' + c.slug + '">' + c.label + "</a></li>"; }).join("") +
          "</ul></div>" +
          '<div><h4>Info</h4><ul>' +
            '<li><a href="inspiration.html">Inspiration</a></li>' +
            '<li><a href="produkter.html">Hela kollektionen</a></li>' +
            '<li><a href="index.html#om-varumarket">Om varumärket</a></li>' +
            '<li><a href="kassa.html">Kassa (demo)</a></li>' +
          "</ul></div>" +
          '<div><h4>Kundservice</h4><ul>' +
            '<li><a href="#">Leverans &amp; retur</a></li>' +
            '<li><a href="#">Vanliga frågor</a></li>' +
            '<li><a href="#">Kontakta oss</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          '<span>© 2026 Aurelia Objects — konceptreferens av Limuna Studio</span>' +
          '<span>Detta är en demosajt. Inga produkter säljs på riktigt.</span>' +
        "</div>" +
      "</div></footer>"
    );
  }

  function cartDrawerHTML() {
    return (
      '<div class="cart-overlay" id="cartOverlay"></div>' +
      '<aside class="cart-drawer" id="cartDrawer" aria-hidden="true">' +
        '<div class="cart-head"><h3>Din varukorg</h3><button class="icon-btn" id="cartClose" aria-label="Stäng" type="button">' +
          '<svg viewBox="0 0 100 100" fill="none"><line x1="25" y1="25" x2="75" y2="75" class="stroke" stroke-width="6"/><line x1="75" y1="25" x2="25" y2="75" class="stroke" stroke-width="6"/></svg>' +
        "</button></div>" +
        '<div class="cart-items" id="cartItems"></div>' +
        '<div class="cart-foot" id="cartFoot"></div>' +
      "</aside>"
    );
  }

  function searchOverlayHTML() {
    return (
      '<div class="search-overlay" id="searchOverlay">' +
        '<div class="search-panel">' +
          '<button class="search-close" id="searchClose" aria-label="Stäng sök" type="button">' +
            '<svg width="20" height="20" viewBox="0 0 100 100" fill="none"><line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" stroke-width="6"/><line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" stroke-width="6"/></svg>' +
          "</button>" +
          '<input type="text" id="searchInput" placeholder="Sök lampor, material, kollektion…" autocomplete="off">' +
          '<div class="search-results" id="searchResults"></div>' +
        "</div>" +
      "</div>"
    );
  }

  function renderCartDrawer() {
    var lines = cartLines();
    var itemsEl = document.getElementById("cartItems");
    var footEl = document.getElementById("cartFoot");
    var countEl = document.getElementById("cartCount");
    if (countEl) {
      var n = cartCount();
      countEl.textContent = n;
      countEl.classList.toggle("show", n > 0);
    }
    if (!itemsEl || !footEl) return;
    if (!lines.length) {
      itemsEl.innerHTML = '<div class="cart-empty">Din varukorg är tom.<br><a href="produkter.html" class="btn outline sm" style="margin-top:18px;">Utforska kollektionen</a></div>';
      footEl.innerHTML = "";
      return;
    }
    itemsEl.innerHTML = lines.map(function (l) {
      return (
        '<div class="cart-line" data-key="' + l.key + '">' +
          visual({ icon: l.product.icon }) +
          '<div class="cart-line-body">' +
            '<div class="name">' + l.product.name + "</div>" +
            (l.colorName ? '<div class="variant">' + l.colorName + "</div>" : "") +
            '<div class="cart-line-foot">' +
              '<div class="qty-stepper">' +
                '<button type="button" data-step="-1">−</button><span>' + l.qty + '</span><button type="button" data-step="1">+</button>' +
              "</div>" +
              '<div>' + money(l.lineTotal) + "</div>" +
            "</div>" +
            '<button class="remove" type="button" data-remove>Ta bort</button>' +
          "</div>" +
        "</div>"
      );
    }).join("");

    var subtotal = cartSubtotal();
    footEl.innerHTML =
      '<div class="cart-subtotal"><span>Delsumma</span><b>' + money(subtotal) + "</b></div>" +
      '<div class="cart-shipping-note">Frakt och ev. rabattkoder beräknas i kassan. Demo — ingen betalning genomförs.</div>' +
      '<a href="kassa.html" class="btn dark block">Till kassan</a>';

    itemsEl.querySelectorAll("[data-step]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var line = btn.closest(".cart-line");
        var key = line.getAttribute("data-key");
        var current = cartLines().filter(function (l) { return l.key === key; })[0];
        if (!current) return;
        setQty(key, current.qty + parseInt(btn.getAttribute("data-step"), 10));
      });
    });
    itemsEl.querySelectorAll("[data-remove]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        removeLine(btn.closest(".cart-line").getAttribute("data-key"));
      });
    });
  }

  function openCart() {
    document.getElementById("cartOverlay").classList.add("is-open");
    document.getElementById("cartDrawer").classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    document.getElementById("cartOverlay").classList.remove("is-open");
    document.getElementById("cartDrawer").classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function initChrome(active) {
    var headerMount = document.getElementById("site-header");
    var footerMount = document.getElementById("site-footer");
    if (headerMount) headerMount.outerHTML = headerHTML(active);
    if (footerMount) footerMount.outerHTML = footerHTML();

    document.body.insertAdjacentHTML("beforeend", cartDrawerHTML() + searchOverlayHTML() +
      '<div class="toast" id="aureliaToast"></div>');

    var header = document.getElementById("siteHeader");
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    }, { passive: true });

    var menuToggle = document.getElementById("menuToggle");
    var mobileNav = document.getElementById("mobileNav");
    menuToggle.addEventListener("click", function () {
      var open = !mobileNav.classList.contains("is-open");
      mobileNav.classList.toggle("is-open", open);
      menuToggle.classList.toggle("is-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    document.getElementById("cartToggle").addEventListener("click", openCart);
    document.getElementById("cartClose").addEventListener("click", closeCart);
    document.getElementById("cartOverlay").addEventListener("click", closeCart);

    var searchToggle = document.getElementById("searchToggle");
    var searchOverlay = document.getElementById("searchOverlay");
    var searchInput = document.getElementById("searchInput");
    var searchResults = document.getElementById("searchResults");
    function openSearch() {
      searchOverlay.classList.add("is-open");
      setTimeout(function () { searchInput.focus(); }, 50);
      runSearch("");
    }
    function closeSearch() { searchOverlay.classList.remove("is-open"); }
    searchToggle.addEventListener("click", openSearch);
    document.getElementById("searchClose").addEventListener("click", closeSearch);
    searchOverlay.addEventListener("click", function (e) { if (e.target === searchOverlay) closeSearch(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeSearch(); closeCart(); }
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openSearch(); }
    });
    function runSearch(q) {
      q = q.trim().toLowerCase();
      var results = !q ? PRODUCTS.slice(0, 5) : PRODUCTS.filter(function (p) {
        var cat = categoryOf(p.category);
        return p.name.toLowerCase().indexOf(q) > -1 ||
          cat.label.toLowerCase().indexOf(q) > -1 ||
          p.materials.toLowerCase().indexOf(q) > -1;
      });
      if (!results.length) {
        searchResults.innerHTML = '<div class="search-empty">Inga träffar för "' + q + '". Prova t.ex. "taklampa" eller "mässing".</div>';
        return;
      }
      searchResults.innerHTML = results.map(function (p) {
        var cat = categoryOf(p.category);
        return '<a class="search-result" href="produkt.html?id=' + p.id + '">' +
          visual({ icon: p.icon, className: "" }).replace('class="visual', 'class="thumb visual') +
          '<span><span class="name">' + p.name + '</span><br><span class="cat">' + cat.label + '</span></span>' +
          '<span class="price">' + money(p.price) + "</span>" +
        "</a>";
      }).join("");
    }
    searchInput.addEventListener("input", function () { runSearch(searchInput.value); });

    document.addEventListener("aurelia:cart-updated", renderCartDrawer);
    renderCartDrawer();

    document.body.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-quick-add]");
      if (!btn) return;
      e.preventDefault();
      var p = byId(btn.getAttribute("data-quick-add"));
      if (!p) return;
      addToCart(p.id, p.colors[0].name, 1);
      showToast(p.name + " tillagd i varukorgen");
    });

    initReveal();
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }
  function observeNew() { initReveal(); }

  /* ---------------- accordion ---------------- */
  function initAccordion(root) {
    (root || document).querySelectorAll(".accordion-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.closest(".accordion-item").classList.toggle("is-open");
      });
    });
  }

  /* ---------------- produktsida ---------------- */
  function initProductPage() {
    var params = new URLSearchParams(window.location.search);
    var product = byId(params.get("id")) || PRODUCTS[0];
    var state = { colorIndex: 0, qty: 1 };

    var cat = categoryOf(product.category);
    document.title = product.name + " — Aurelia Objects";

    document.getElementById("breadcrumb").innerHTML =
      '<a href="index.html">Hem</a><span>/</span><a href="produkter.html?kategori=' + cat.slug + '">' + cat.label + '</a><span>/</span><span>' + product.name + "</span>";

    var gallery = [
      { icon: product.icon, label: "Helbild" },
      { icon: product.icon, dark: true, label: "Miljö" },
      { texture: product.colors[0].mat, label: "Material" },
      { icon: product.icon, label: "Detalj" }
    ];
    var mainEl = document.getElementById("pdpMain");
    var thumbsEl = document.getElementById("pdpThumbs");

    function paintGallery(activeIdx) {
      mainEl.innerHTML = visual(Object.assign({ className: "pdp-gallery-main" }, gallery[activeIdx]));
      thumbsEl.innerHTML = gallery.map(function (g, i) {
        return visual(Object.assign({ className: "pdp-thumb" + (i === activeIdx ? " is-active" : "") }, g))
          .replace('class="visual', 'data-thumb="' + i + '" class="visual');
      }).join("");
      thumbsEl.querySelectorAll("[data-thumb]").forEach(function (el) {
        el.addEventListener("click", function () { paintGallery(parseInt(el.getAttribute("data-thumb"), 10)); });
      });
    }
    paintGallery(0);

    document.getElementById("pdpKicker").textContent = cat.label + (product.tag ? " · " + product.tag : "");
    document.getElementById("pdpTitle").textContent = product.name;
    document.getElementById("pdpDesc").textContent = product.description;

    function paintPrice() {
      document.getElementById("pdpPrice").innerHTML =
        (product.oldPrice ? '<span class="old">' + money(product.oldPrice) + "</span>" : "") +
        "<span>" + money(product.price) + "</span>";
    }
    paintPrice();

    var colorWrap = document.getElementById("pdpColors");
    var colorLabel = document.getElementById("pdpColorLabel");
    function paintColors() {
      colorLabel.textContent = product.colors[state.colorIndex].name;
      colorWrap.innerHTML = product.colors.map(function (c, i) {
        return '<button type="button" class="swatch-btn' + (i === state.colorIndex ? " is-active" : "") + '" data-color="' + i + '" title="' + c.name + '"><span class="inner" style="background:' + c.hex + '"></span></button>';
      }).join("");
      colorWrap.querySelectorAll("[data-color]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.colorIndex = parseInt(btn.getAttribute("data-color"), 10);
          gallery[2].texture = product.colors[state.colorIndex].mat;
          paintColors();
          paintGallery(2);
        });
      });
    }
    paintColors();

    var stockLine = document.getElementById("pdpStock");
    stockLine.innerHTML = '<span class="dot" style="background:var(--' + (product.stock === "in" ? "ok" : product.stock === "low" ? "low" : "out") + ')"></span>' + STOCK_LABEL[product.stock];

    var qtyEl = document.getElementById("pdpQty");
    document.getElementById("pdpQtyMinus").addEventListener("click", function () { state.qty = Math.max(1, state.qty - 1); qtyEl.textContent = state.qty; });
    document.getElementById("pdpQtyPlus").addEventListener("click", function () { state.qty = state.qty + 1; qtyEl.textContent = state.qty; });

    var addBtn = document.getElementById("pdpAdd");
    if (product.stock === "out") { addBtn.disabled = true; addBtn.textContent = "Tillfälligt slut"; }
    addBtn.addEventListener("click", function () {
      addToCart(product.id, product.colors[state.colorIndex].name, state.qty);
      showToast(product.name + " tillagd i varukorgen");
      openCart();
    });

    document.getElementById("pdpSpecs").innerHTML =
      "<table class=\"spec-table\">" +
      "<tr><td>Material</td><td>" + product.materials + "</td></tr>" +
      "<tr><td>Mått</td><td>" + product.dimensions + "</td></tr>" +
      "<tr><td>Färg</td><td>" + product.colors.map(function (c) { return c.name; }).join(" / ") + "</td></tr>" +
      "<tr><td>Ljuskälla</td><td>" + product.lightSource + "</td></tr>" +
      "<tr><td>Lagerstatus</td><td>" + STOCK_LABEL[product.stock] + " (demo)</td></tr>" +
      "</table>";
    document.getElementById("pdpMaterialText").textContent = product.materials;

    var accessoryEl = document.getElementById("pdpAccessories");
    var accessoryProducts = product.accessories.map(byId).filter(Boolean);
    if (accessoryProducts.length) {
      accessoryEl.innerHTML = accessoryProducts.map(function (a) {
        return '<div class="accessory-card">' + visual({ icon: a.icon }) +
          '<div><div class="name">' + a.name + '</div><div class="price">' + money(a.price) + '</div></div>' +
          '<button class="btn outline sm" type="button" data-quick-add="' + a.id + '">Lägg till</button></div>';
      }).join("");
      document.getElementById("pdpAccessoriesWrap").classList.remove("hidden");
    }

    var relatedEl = document.getElementById("pdpRelated");
    renderProductGrid(relatedEl, product.related.map(byId).filter(Boolean));

    initAccordion(document.getElementById("pdpAccordion"));
    observeNew();

    var stickyBar = document.getElementById("stickyBuy");
    if (stickyBar) {
      document.getElementById("stickyName").textContent = product.name;
      document.getElementById("stickyPrice").textContent = money(product.price);
      document.getElementById("stickyAdd").addEventListener("click", function () {
        addToCart(product.id, product.colors[state.colorIndex].name, state.qty);
        showToast(product.name + " tillagd i varukorgen");
        openCart();
      });
      var infoBlock = document.getElementById("pdpBuyRow");
      window.addEventListener("scroll", function () {
        var r = infoBlock.getBoundingClientRect();
        stickyBar.classList.toggle("show", r.bottom < 0 && window.innerWidth <= 960);
      }, { passive: true });
    }
  }

  /* ---------------- kollektionssida (filter/sök/sortering) ---------------- */
  function initShopPage() {
    var params = new URLSearchParams(window.location.search);
    var state = { category: params.get("kategori") || "alla", sort: "utvalda", q: "" };

    var chipRow = document.getElementById("shopChips");
    chipRow.innerHTML = ['<button class="chip" data-cat="alla">Alla</button>']
      .concat(CATEGORIES.map(function (c) { return '<button class="chip" data-cat="' + c.slug + '">' + c.label + "</button>"; }))
      .join("");

    var searchBox = document.getElementById("shopSearch");
    var sortSelect = document.getElementById("shopSort");
    var grid = document.getElementById("shopGrid");
    var countEl = document.getElementById("shopCount");
    var emptyEl = document.getElementById("shopEmpty");

    function apply() {
      chipRow.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("is-active", c.getAttribute("data-cat") === state.category);
      });
      var list = PRODUCTS.filter(function (p) {
        var matchCat = state.category === "alla" || p.category === state.category;
        var q = state.q.toLowerCase();
        var matchQ = !q || p.name.toLowerCase().indexOf(q) > -1 || p.materials.toLowerCase().indexOf(q) > -1 || categoryOf(p.category).label.toLowerCase().indexOf(q) > -1;
        return matchCat && matchQ;
      });
      if (state.sort === "pris-lag") list.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === "pris-hog") list.sort(function (a, b) { return b.price - a.price; });
      if (state.sort === "namn") list.sort(function (a, b) { return a.name.localeCompare(b.name, "sv"); });

      countEl.textContent = list.length + (list.length === 1 ? " produkt" : " produkter");
      if (!list.length) {
        grid.innerHTML = "";
        emptyEl.classList.remove("hidden");
      } else {
        emptyEl.classList.add("hidden");
        renderProductGrid(grid, list);
        observeNew();
      }
    }

    chipRow.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-cat]");
      if (!btn) return;
      state.category = btn.getAttribute("data-cat");
      var url = new URL(window.location);
      if (state.category === "alla") url.searchParams.delete("kategori"); else url.searchParams.set("kategori", state.category);
      window.history.replaceState({}, "", url);
      apply();
    });
    searchBox.addEventListener("input", function () { state.q = searchBox.value; apply(); });
    sortSelect.addEventListener("change", function () { state.sort = sortSelect.value; apply(); });

    apply();
  }

  /* ---------------- kassa (demo) ---------------- */
  function initCheckoutPage() {
    var lines = cartLines();
    var summaryEl = document.getElementById("orderSummary");
    var formPanel = document.getElementById("checkoutForm");
    var confirmPanel = document.getElementById("confirmPanel");

    if (!lines.length) {
      document.getElementById("checkoutEmpty").classList.remove("hidden");
      formPanel.classList.add("hidden");
      document.querySelector(".order-summary").classList.add("hidden");
      return;
    }

    function paintSummary() {
      lines = cartLines();
      var subtotal = cartSubtotal();
      var shipping = subtotal > 2000 ? 0 : 99;
      summaryEl.innerHTML = lines.map(function (l) {
        return '<div class="order-line">' + visual({ icon: l.product.icon }) +
          '<div class="name">' + l.product.name + (l.colorName ? " — " + l.colorName : "") + '</div>' +
          '<div class="qty">× ' + l.qty + '</div>' +
          '<div>' + money(l.lineTotal) + "</div></div>";
      }).join("") +
      '<div class="order-total-row"><span>Delsumma</span><span>' + money(subtotal) + '</span></div>' +
      '<div class="order-total-row"><span>Frakt</span><span>' + (shipping === 0 ? "Fri frakt" : money(shipping)) + '</span></div>' +
      '<div class="order-total-row grand"><span>Att betala</span><span>' + money(subtotal + shipping) + "</span></div>";
    }
    paintSummary();
    document.addEventListener("aurelia:cart-updated", paintSummary);

    document.querySelectorAll(".pay-method").forEach(function (m) {
      m.addEventListener("click", function () {
        document.querySelectorAll(".pay-method").forEach(function (x) { x.classList.remove("is-active"); });
        m.classList.add("is-active");
      });
    });

    document.getElementById("checkoutSubmit").addEventListener("click", function (e) {
      e.preventDefault();
      var form = document.getElementById("checkoutFormEl");
      if (!form.reportValidity()) return;
      formPanel.classList.add("hidden");
      document.querySelector(".order-summary").classList.add("hidden");
      confirmPanel.classList.remove("hidden");
      document.getElementById("confirmOrderNo").textContent = "AUR-" + Math.floor(100000 + Math.random() * 899999);
      clearCart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return {
    CATEGORIES: CATEGORIES,
    PRODUCTS: PRODUCTS,
    byId: byId,
    categoryOf: categoryOf,
    money: money,
    visual: visual,
    iconSVG: iconSVG,
    renderCategoryGrid: renderCategoryGrid,
    renderProductGrid: renderProductGrid,
    productCardHTML: productCardHTML,
    addToCart: addToCart,
    cartLines: cartLines,
    cartCount: cartCount,
    cartSubtotal: cartSubtotal,
    showToast: showToast,
    initChrome: initChrome,
    initReveal: initReveal,
    observeNew: observeNew,
    initAccordion: initAccordion,
    initProductPage: initProductPage,
    initShopPage: initShopPage,
    initCheckoutPage: initCheckoutPage
  };
})();
