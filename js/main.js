/* ==========================================================================
   Portfolio Lenny Baremond — scripts (JavaScript natif, sans framework)
   Tu n'as normalement pas besoin de modifier ce fichier :
   les contenus sont dans js/data.js
   ========================================================================== */
(function () {
  "use strict";

  var PROJETS = window.PROJETS || [];
  var CONTACT = window.CONTACT || {};

  var CATS = {
    graphisme: "Graphisme",
    video: "Vidéo"
  };

  /* ---------- Utilitaires ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function getProjet(id) {
    for (var i = 0; i < PROJETS.length; i++) if (PROJETS[i].id === id) return PROJETS[i];
    return null;
  }

  function tagsHTML(p) {
    return p.categories.map(function (c) {
      var label = (c === "web" && p.tagLabel) ? p.tagLabel : CATS[c];
      return '<span class="tag tag--' + c + '">' + esc(label) + "</span>";
    }).join("");
  }

  /* Récupère l'identifiant d'une vidéo YouTube, quel que soit le format du lien */
  function youtubeId(url) {
    if (!url) return null;
    var m = String(url).match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
    return m ? m[1] : null;
  }

  /* ---------- Image manquante -> emplacement visible avec le nom du fichier ---------- */
  function placeholderFor(img) {
    if (img.dataset.missing) return;
    img.dataset.missing = "1";
    var path = img.getAttribute("src") || "";
    var ph = document.createElement("div");
    ph.className = "ph " + (img.className || "");
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", img.getAttribute("alt") || "Image à venir");
    ph.innerHTML =
      '<span class="ph__icon" aria-hidden="true">✦</span>' +
      '<span class="ph__text">Image à ajouter</span>' +
      '<code class="ph__path">' + esc(path) + "</code>";
    img.replaceWith(ph);
  }

  /* data-fallback="chemin" : si l'image (ex. une miniature) manque, on essaie
     d'abord ce chemin (ex. l'original) avant d'afficher le cadre hachuré. */
  function onImageFail(img) {
    var fb = img.dataset.fallback;
    if (fb && img.getAttribute("src") !== fb) {
      img.addEventListener("error", function () { placeholderFor(img); }, { once: true });
      img.src = fb;
      return;
    }
    placeholderFor(img);
  }

  function watchImages(ctx) {
    $$("img", ctx).forEach(function (img) {
      if (!img.getAttribute("src") || img.dataset.watched) return;
      img.dataset.watched = "1";
      if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) onImageFail(img);
      else img.addEventListener("error", function () { onImageFail(img); }, { once: true });
    });
  }

  /* Une légende encore "[à compléter]" n'est jamais affichée sur le site */
  function isTodo(str) { return !str || String(str).trim().indexOf("[") === 0; }

  /* ---------- Liens de contact centralisés (data-link="email|telephone|linkedin|instagram") ----------
     Les valeurs viennent de CONTACT (js/data.js). Une valeur vide ou "[à compléter]"
     ne donne jamais de lien mort : masquée dans le pied de page, non cliquable ailleurs. */
  function fillContactLinks() {
    $$("[data-link]").forEach(function (a) {
      var key = a.dataset.link;
      var val = String(CONTACT[key] || "").trim();
      var txt = a.querySelector("[data-contact-text]");
      var todo = !val || val.indexOf("[") === 0;

      if (todo) {
        var li = a.closest(".socials li");
        if (li) { li.hidden = true; return; }
        a.removeAttribute("href");
        a.classList.add("is-todo");
        if (txt) txt.textContent = "[à compléter]";
        return;
      }

      if (txt) txt.textContent = val.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
      if (key === "email") {
        a.href = "mailto:" + val;
      } else if (key === "telephone") {
        a.href = "tel:" + val.replace(/[^\d+]/g, "");
      } else {
        a.href = val;
        a.target = "_blank";
        a.rel = "noopener";
      }
    });
  }

  /* ---------- Menu ---------- */
  function initMenu() {
    var burger = $(".burger");
    var nav = $("#menu");
    if (!burger || !nav) return;

    function close() {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
      document.body.classList.remove("menu-open");
    }
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      burger.setAttribute("aria-label", open ? "Ouvrir le menu" : "Fermer le menu");
      document.body.classList.toggle("menu-open", !open);
    });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    // Lien actif
    var page = location.pathname.split("/").pop() || "index.html";
    if (page === "projet.html") page = "projets.html";
    $$("a", nav).forEach(function (a) {
      if (a.getAttribute("href") === page) a.setAttribute("aria-current", "page");
    });

    // Ombre du header au scroll
    var header = $(".site-header");
    function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Apparition douce au scroll ---------- */
  var revealObserver = null;
  function initReveal(ctx) {
    var els = $$(".reveal:not(.is-visible)", ctx);
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Carte projet ---------- */
  function cardHTML(p, i) {
    return (
      '<div class="card-wrap reveal" style="--d:' + (i % 3) * 80 + 'ms" data-cats="' + p.categories.join(" ") + '">' +
      '<article class="card">' +
        '<a class="card__link" href="projet.html?id=' + encodeURIComponent(p.id) + '">' +
          '<div class="card__media"><img src="' + esc(p.cover) + '" alt="" loading="lazy"></div>' +
          '<div class="card__body">' +
            '<div class="tags">' + tagsHTML(p) + "</div>" +
            "<h3 class=\"card__title\">" + esc(p.titre) + "</h3>" +
            '<p class="card__text">' + esc(p.sousTitre) + "</p>" +
            '<span class="card__more">Voir le projet <span aria-hidden="true">→</span></span>' +
          "</div>" +
        "</a>" +
      "</article></div>"
    );
  }

  /* ---------- Accueil : projets mis en avant ---------- */
  function initFeatured() {
    var box = $("[data-featured]");
    if (!box) return;
    var ids = window.PROJETS_ACCUEIL || [];
    box.innerHTML = ids.map(getProjet).filter(Boolean).map(cardHTML).join("");
    watchImages(box);
  }

  /* ---------- Page Projets : grille + filtres ---------- */
  function initGallery() {
    var grid = $("[data-projects]");
    if (!grid) return;
    grid.innerHTML = PROJETS.map(cardHTML).join("");
    watchImages(grid);

    var buttons = $$(".filter");
    var count = $("[data-count]");

    function apply(cat) {
      var n = 0;
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === cat)); });
      $$(".card-wrap", grid).forEach(function (card) {
        var show = cat === "tous" || card.dataset.cats.split(" ").indexOf(cat) !== -1;
        card.hidden = !show;
        if (show) {
          n++;
          card.classList.remove("pop");
          void card.offsetWidth; // relance l'animation
          card.classList.add("pop");
        }
      });
      if (count) count.textContent = n + (n > 1 ? " projets" : " projet");
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var cat = b.dataset.filter;
        apply(cat);
        var url = new URL(location.href);
        if (cat === "tous") url.searchParams.delete("cat"); else url.searchParams.set("cat", cat);
        history.replaceState(null, "", url);
      });
    });

    var start = new URLSearchParams(location.search).get("cat");
    apply(start && (CATS[start]) ? start : "tous");
  }

  /* ---------- Page d'un projet ---------- */
  function listHTML(items) {
    return "<ul class=\"list\">" + items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }

  function videoHTML(v) {
    var id = youtubeId(v.url);
    /* En local (fichier ouvert directement, file://), YouTube bloque le lecteur
       intégré (erreur 153) : on affiche alors une miniature cliquable. */
    var local = location.protocol === "file:";
    var inner = id && local
      ? '<a class="video__thumb" href="https://www.youtube.com/watch?v=' + id + '" target="_blank" rel="noopener">' +
        '<img src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="' + esc(v.titre || "Vidéo YouTube") + '" loading="lazy">' +
        '<span class="video__play" aria-hidden="true">▶</span><span class="video__hint">Regarder sur YouTube</span></a>'
      : id
      ? '<iframe src="https://www.youtube.com/embed/' + id + '?rel=0" title="' + esc(v.titre) +
        '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      : '<div class="video__empty"><span class="ph__icon" aria-hidden="true">▶</span>' +
        "<span>Vidéo à venir</span><code class=\"ph__path\">Colle le lien YouTube dans js/data.js</code></div>";
    return '<figure class="video reveal"><div class="video__frame">' + inner + "</div>" +
      (v.titre ? "<figcaption>" + esc(v.titre) + "</figcaption>" : "") + "</figure>";
  }

  function initProjet() {
    var root = $("[data-projet]");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var p = getProjet(id);

    if (!p) {
      root.innerHTML =
        '<section class="page-hero wrap"><h1>Projet introuvable</h1>' +
        '<p class="lead">Ce projet n\'existe pas ou a changé d\'adresse.</p>' +
        '<a class="btn" href="projets.html">Voir tous les projets</a></section>';
      return;
    }

    document.title = p.titre + " · Lenny Baremond";
    var metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", p.titre + " : " + p.sousTitre);

    var idx = PROJETS.indexOf(p);
    var prev = PROJETS[(idx - 1 + PROJETS.length) % PROJETS.length];
    var next = PROJETS[(idx + 1) % PROJETS.length];
    var mainCat = p.categories[0];

    var videos = (p.youtube || []);
    var html = "";

    html +=
      '<section class="project-hero project-hero--' + mainCat + '">' +
        '<div class="wrap">' +
          '<a class="back" href="projets.html"><span aria-hidden="true">←</span> Tous les projets</a>' +
          '<div class="tags">' + tagsHTML(p) + "</div>" +
          "<h1>" + esc(p.titre) + "</h1>" +
          '<p class="lead">' + esc(p.sousTitre) + "</p>" +
          '<ul class="infos">' + (p.infos || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
        "</div>" +
      "</section>";

    if (videos.length) {
      html += '<section class="wrap videos videos--' + (videos.length > 1 ? "duo" : "solo") + '" aria-label="Vidéos">' +
        videos.map(videoHTML).join("") + "</section>";
    }

    html += '<div class="wrap project-layout">';

    // Textes
    var n = 0;
    function num() { n++; return '<span class="num">' + (n < 10 ? "0" : "") + n + "</span> "; }

    html += '<div class="project-info">';
    html += '<section class="block reveal"><h2>' + num() + 'Contexte</h2><p>' + esc(p.contexte) + "</p></section>";
    html += '<section class="block reveal"><h2>' + num() + 'Mon rôle</h2>' + listHTML(p.role);
    if (p.groupe && p.groupe.length) {
      html += '<div class="groupe"><h3>Réalisé en groupe</h3>' + listHTML(p.groupe) + "</div>";
    }
    html += "</section>";
    if (p.logiciels && p.logiciels.length) {
      html += '<section class="block reveal"><h2>' + num() + esc(p.logicielsTitre || "Logiciels") + '</h2><ul class="chips">' +
        p.logiciels.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul></section>";
    }
    html += '<section class="block reveal"><h2>' + num() + 'Ce que j\'ai appris</h2>' + listHTML(p.appris) + "</section>";
    html += '<section class="block block--result reveal"><h2>' + num() + 'Résultat</h2><p>' + esc(p.resultat) + "</p>";
    if (p.liens && p.liens.length) {
      html += '<div class="ext-links">' + p.liens.map(function (l) {
        return '<a class="btn btn--small" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + ' <span aria-hidden="true">↗</span></a>';
      }).join("") + "</div>";
    }
    html += "</section></div>";

    // Visuels
    html += '<section class="project-gallery" aria-label="Visuels du projet"><h2 class="sr-only">Visuels</h2>';
    html += (p.images || []).map(function (img, i) {
      return '<figure class="shot reveal" style="--d:' + (i % 2) * 80 + 'ms">' +
        '<button class="shot__btn" type="button" data-index="' + i + '" aria-label="Agrandir : ' + esc(img.legende) + '">' +
        '<img src="' + esc(img.src) + '" alt="' + esc(img.legende) + '" loading="lazy"></button>' +
        (img.legende ? "<figcaption>" + esc(img.legende) + "</figcaption>" : "") + "</figure>";
    }).join("");
    html += "</section></div>";

    // Projet précédent / suivant
    html +=
      '<nav class="wrap pager" aria-label="Autres projets">' +
        '<a class="pager__link" href="projet.html?id=' + prev.id + '"><span class="pager__label">← Projet précédent</span><strong>' + esc(prev.titre) + "</strong></a>" +
        '<a class="pager__link pager__link--next" href="projet.html?id=' + next.id + '"><span class="pager__label">Projet suivant →</span><strong>' + esc(next.titre) + "</strong></a>" +
      "</nav>";

    root.innerHTML = html;
    watchImages(root);
    initLightbox(root, p.images || []);
  }

  /* ---------- Page À propos : galerie Photographie ---------- */
  /* Les originaux sont dans images/photos/. Si le script outils/reduire-photos.ps1
     a été lancé, le site utilise automatiquement les versions allégées
     (miniatures/ pour la grille, grandes/ pour la visionneuse) et revient
     à l'original pour toute photo qui n'a pas encore sa version réduite. */
  var PHOTOS_DIR = "images/photos/";

  function initPhotos() {
    var box = $("[data-photos]");
    if (!box) return;
    var photos = (window.PHOTOS || []).filter(function (p) { return p && p.fichier; }).map(function (p) {
      var f = String(p.fichier).trim();
      var jpg = f.replace(/\.[^.]+$/, "") + ".jpg"; // le script produit toujours du .jpg
      return {
        original: PHOTOS_DIR + f,
        mini: PHOTOS_DIR + "miniatures/" + jpg,
        src: PHOTOS_DIR + "grandes/" + jpg,
        fallback: PHOTOS_DIR + f,
        legende: isTodo(p.legende) ? "" : p.legende,
        alt: p.alt || (isTodo(p.legende) ? "Photographie de Lenny Baremond" : p.legende)
      };
    });

    box.innerHTML = photos.map(function (p, i) {
      return '<div class="card-wrap photo reveal" style="--d:' + (i % 4) * 70 + 'ms">' +
        '<button class="card photo__btn" type="button" data-index="' + i + '" aria-label="Agrandir la photo ' + (i + 1) + " : " + esc(p.alt) + '">' +
          '<span class="card__media photo__media"><img src="' + esc(p.mini) + '" data-fallback="' + esc(p.original) + '" alt="' + esc(p.alt) + '" loading="lazy" decoding="async"></span>' +
          (p.legende ? '<span class="photo__caption">' + esc(p.legende) + "</span>" : "") +
        "</button></div>";
    }).join("");
    watchImages(box);
    initLightbox(box, photos, ".photo__btn");
  }

  /* ---------- Visionneuse d'images ---------- */
  /* images : [{ src, legende, alt?, fallback? }] — fallback = image de secours
     si src est introuvable (ex. version réduite pas encore générée). */
  function initLightbox(root, images, btnSelector) {
    var box = $(".lightbox");
    if (!box || !images.length) return;
    var imgEl = $(".lightbox__img", box);
    var cap = $(".lightbox__caption", box);
    var current = 0;
    var lastFocus = null;
    btnSelector = btnSelector || ".shot__btn";

    function preload(i) {
      var it = images[(i + images.length) % images.length];
      var pre = new Image();
      if (it.fallback) pre.onerror = function () { pre.onerror = null; pre.src = it.fallback; };
      pre.src = it.src;
    }

    function show(i) {
      current = (i + images.length) % images.length;
      var it = images[current];
      var legende = isTodo(it.legende) ? "" : it.legende;
      var texte = (legende ? legende + "  ·  " : "") + (current + 1) + " / " + images.length;
      function missing() {
        imgEl.onerror = null;
        imgEl.hidden = true;
        cap.textContent = "Image à ajouter : " + (it.fallback || it.src) + "  ·  " + (current + 1) + " / " + images.length;
      }
      imgEl.hidden = false;
      imgEl.onerror = it.fallback ? function () { imgEl.onerror = missing; imgEl.src = it.fallback; } : missing;
      imgEl.src = it.src;
      imgEl.alt = it.alt || it.legende || "";
      cap.textContent = texte;
      if (images.length > 1) { preload(current + 1); preload(current - 1); }
    }
    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      box.hidden = false;
      document.body.classList.add("no-scroll");
      $(".lightbox__close", box).focus();
    }
    function close() {
      box.hidden = true;
      document.body.classList.remove("no-scroll");
      if (lastFocus) lastFocus.focus();
    }

    root.addEventListener("click", function (e) {
      var btn = e.target.closest(btnSelector);
      if (!btn) return;
      if ($(".ph", btn)) return; // image pas encore ajoutée
      open(Number(btn.dataset.index));
    });
    $(".lightbox__close", box).addEventListener("click", close);
    $(".lightbox__prev", box).addEventListener("click", function () { show(current - 1); });
    $(".lightbox__next", box).addEventListener("click", function () { show(current + 1); });
    // Clic à côté de la photo (fond sombre ou zone vide autour) = fermer
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.tagName === "FIGURE") close();
    });

    // Balayage du doigt sur mobile : gauche = suivante, droite = précédente
    var startX = null, startY = 0;
    box.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { startX = null; return; }
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      startX = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ---------- Lancement ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    fillContactLinks();
    initMenu();
    initFeatured();
    initGallery();
    initProjet();
    initPhotos();
    watchImages(document);
    initReveal(document);
    var y = $("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
