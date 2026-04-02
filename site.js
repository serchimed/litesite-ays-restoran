function calculateShippingPrice(items) {
return 0;
}
(function() {
let imgs = document.querySelectorAll("img[data-src]");
if (!imgs.length) { return; }
let observer = new IntersectionObserver(function(entries) {
for (let i = 0; i < entries.length; i++) {
if (entries[i].isIntersecting) {
let img = entries[i].target;
let real = new Image();
real.onload = function() {
this._target.src = this._target.dataset.src;
this._target.removeAttribute("data-src");
};
real._target = img;
real.src = img.dataset.src;
observer.unobserve(img);
}
}
});
for (let i = 0; i < imgs.length; i++) { observer.observe(imgs[i]); }
})();
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("/sw.js");
navigator.serviceWorker.ready.then(function(reg) {
setTimeout(function() {
reg.active.postMessage("cache-all");
}, 60000);
});
}
window.addEventListener("offline", function() {
document.querySelectorAll(".off").forEach(function(el) {
el.style.visibility = "visible";
});
});
window.addEventListener("online", function() {
document.querySelectorAll(".off").forEach(function(el) {
el.style.visibility = "hidden";
});
});
let _nav = document.querySelector("nav");
let _btn = document.getElementById("menu-btn");
let _icon = document.getElementById("menu-icon");
let _header = document.querySelector("header");
if (_btn && _nav) {
_btn.addEventListener("click", function() {
_nav.classList.toggle("open");
if (_icon) {
_icon.src = _nav.classList.contains("open") ? "/img/menu-close.png" : "/img/menu-open.png";
}
});
_nav.querySelectorAll("a").forEach(function(a) {
a.addEventListener("click", function() {
_nav.classList.remove("open");
if (_icon) { _icon.src = "/img/menu-open.png"; }
});
});
}
if (_header) {
var _hasHero = document.querySelector(".hero");
if (!_hasHero) {
_header.classList.add("scrolled");
}
window.addEventListener("scroll", function() {
if (!_hasHero) { return; }
if (window.scrollY > 50) {
_header.classList.add("scrolled");
} else {
_header.classList.remove("scrolled");
}
}, { passive: true });
}
function _el(tag, cls) {
let e = document.createElement(tag);
if (cls) { e.className = cls; }
return e;
}
function div(cls) { return _el("div", cls); }
function span(cls) { return _el("span", cls); }
function b(cls) { return _el("b", cls); }
function i(cls) { return _el("i", cls); }
function em(cls) { return _el("em", cls); }
function p(cls) { return _el("p", cls); }
function a(cls) { return _el("a", cls); }
function h5(cls) { return _el("h5", cls); }
function h6(cls) { return _el("h6", cls); }
function small(cls) { return _el("small", cls); }
function button(cls) { return _el("button", cls); }
function img(src, title, cls) {
let e = _el("img", cls);
if (src) { e.src = src; }
if (title) { e.alt = title; e.title = title; }
return e;
}
function txt(fn, text, cls) {
let e = fn(cls);
e.textContent = text;
return e;
}
function show(e) { e.classList.remove("hidden"); }
function hide(e) { e.classList.add("hidden"); }
function makeRow(label, value, cls) {
let row = div(cls);
row.append(txt(span, label), txt(b, value));
return row;
}
function parseBr(text, parent) {
let parts = text.split(/<br\s*\/?>/i);
for (let i = 0; i < parts.length; i++) {
if (i > 0) { parent.append(document.createElement("br")); }
parent.append(parts[i]);
}
}
function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
function empty(el) { el.replaceChildren(); }
function actionImg(src, title, action, id, cls) {
let e = img(src, title, cls);
e.setAttribute("data-action", action);
e.setAttribute("data-id", id);
return e;
}
let PRODUCTS={"ap3":{"name":"Acılı Antep Ezme","price":150,"weight":1,"img":"aperatif-acili-antep-ezme.jpg"},"ap2":{"name":"Bulgur Pilavı","price":150,"weight":1,"img":"aperatif-bulgur-pilavi.jpg"},"ap1":{"name":"Cips","price":180,"weight":1,"img":"aperatif-cips.jpg"},"ap5":{"name":"Çoban Salata","price":200,"weight":1,"img":"aperatif-coban-salata.jpg"},"ap4":{"name":"Haydari","price":150,"weight":1,"img":"aperatif-haydari.jpg"},"ap6":{"name":"Yoğurt","price":150,"weight":1,"img":"aperatif-yogurt.jpg"},"b3":{"name":"Corona","price":275,"weight":1,"img":"bira-corona.jpg"},"b1":{"name":"Efes Malt","price":250,"weight":1,"img":"bira-efes-malt.jpg"},"b2":{"name":"Efes Pilsen","price":250,"weight":1,"img":"bira-efes-pilsen.jpg"},"b4":{"name":"Miller","price":275,"weight":1,"img":"bira-miller.jpg"},"c1":{"name":"Mercimek Çorbası","price":120,"weight":1,"img":"corba-mercimek.jpg"},"dd1":{"name":"Adana Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-adana.jpg"},"dt1":{"name":"Adana Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-adana.jpg"},"dd7":{"name":"AYS Tavuk Dürüm (Double Şiş)","price":400,"weight":1,"img":"durum-ays-tavuk.jpg"},"dt7":{"name":"AYS Tavuk Dürüm (Tek Şiş)","price":300,"weight":1,"img":"durum-ays-tavuk.jpg"},"dd6":{"name":"Çıtır Tavuk Dürüm (Double Şiş)","price":400,"weight":1,"img":"durum-citir-tavuk.jpg"},"dt6":{"name":"Çıtır Tavuk Dürüm (Tek Şiş)","price":300,"weight":1,"img":"durum-citir-tavuk.jpg"},"dd3":{"name":"Dana Kuşbaşı Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-dana-kusabasi.jpg"},"dt3":{"name":"Dana Kuşbaşı Dürüm (Tek Şiş)","price":400,"weight":1,"img":"durum-dana-kusabasi.jpg"},"dd4":{"name":"Et Dönerli Soslu Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-et-donerli.jpg"},"dt4":{"name":"Et Dönerli Soslu Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-et-donerli.jpg"},"dd9":{"name":"Köfte Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-kofte.jpg"},"dt9":{"name":"Köfte Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-kofte.jpg"},"dd8":{"name":"Kuzu Kuşbaşı Dürüm (Double Şiş)","price":600,"weight":1,"img":"durum-kuzu-kusabasi.jpg"},"dt8":{"name":"Kuzu Kuşbaşı Dürüm (Tek Şiş)","price":400,"weight":1,"img":"durum-kuzu-kusabasi.jpg"},"dd5":{"name":"Tavuk Şiş Dürüm (Double Şiş)","price":400,"weight":1,"img":"durum-tavuk-sis.jpg"},"dt5":{"name":"Tavuk Şiş Dürüm (Tek Şiş)","price":300,"weight":1,"img":"durum-tavuk-sis.jpg"},"dd2":{"name":"Urfa Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-urfa.jpg"},"dt2":{"name":"Urfa Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-urfa.jpg"},"ms5":{"name":"Çilek Frozen","price":260,"weight":1,"img":"frozen-cilek.jpg"},"ms4":{"name":"Şeftali Frozen","price":260,"weight":1,"img":"frozen-seftali.jpg"},"ic17":{"name":"Ayran/Kola/Fanta/Sprite 1LT","price":190,"weight":1,"img":"icecek-1lt.jpg"},"ic3":{"name":"Alkollü Kokteyl","price":520,"weight":1,"img":"icecek-alkol-kokteyl.jpg"},"ic4":{"name":"Alkolsüz Kokteyl","price":400,"weight":1,"img":"icecek-alkolsuz-kokteyl.jpg"},"ic14":{"name":"Büyük Ayran","price":50,"weight":500,"img":"icecek-ayran.jpg"},"ic2":{"name":"Çilekli Limonata","price":150,"weight":1,"img":"icecek-cilekli-limonata.jpg"},"ic9":{"name":"Fanta","price":90,"weight":1,"img":"icecek-fanta.jpg"},"ic11":{"name":"Fuse Tea","price":90,"weight":1,"img":"icecek-fuse-tea.jpg"},"ic7":{"name":"Kola","price":90,"weight":1,"img":"icecek-kola.jpg"},"ic8":{"name":"Kola Zero","price":90,"weight":1,"img":"icecek-kola-zero.jpg"},"ic13":{"name":"Küçük Ayran","price":40,"weight":200,"img":"icecek-ayran.jpg"},"ic12":{"name":"Küçük Su","price":30,"weight":330,"img":"icecek-su.jpg"},"ic1":{"name":"Limonata","price":120,"weight":1,"img":"icecek-limonata.jpg"},"ic16":{"name":"Şalgam","price":70,"weight":1,"img":"icecek-salgam.jpg"},"ic6":{"name":"Sıcak Kahve","price":175,"weight":1,"img":"icecek-sicak-kahve.jpg"},"ic15":{"name":"Soda","price":50,"weight":1,"img":"icecek-soda.jpg"},"ic5":{"name":"Soğuk Kahve","price":175,"weight":1,"img":"icecek-soguk-kahve.jpg"},"ic10":{"name":"Sprite","price":90,"weight":1,"img":"icecek-sprite.jpg"},"ms2":{"name":"Çikolata Milkshake","price":260,"weight":1,"img":"milkshake-cikolata.jpg"},"ms1":{"name":"Çilek Milkshake","price":260,"weight":1,"img":"milkshake-cilek.jpg"},"ms3":{"name":"Muz Milkshake","price":260,"weight":1,"img":"milkshake-muz.jpg"},"p1":{"name":"Adana Porsiyon (Acılı)","price":500,"weight":1,"img":"porsiyon-adana.jpg"},"p5":{"name":"Ciğer Şiş Porsiyon","price":600,"weight":1,"img":"porsiyon-ciger-sis.jpg"},"p3":{"name":"Dana Kuşbaşı Porsiyon","price":550,"weight":1,"img":"porsiyon-dana-kusabasi.jpg"},"p7":{"name":"Izgara Köfte Porsiyon","price":550,"weight":1,"img":"porsiyon-izgara-kofte.jpg"},"p8":{"name":"Kanat Porsiyon","price":500,"weight":1,"img":"porsiyon-kanat.jpg"},"p11":{"name":"Karışık Izgara (2 Kişilik)","price":1800,"weight":2,"img":"porsiyon-karisik.jpg"},"p12":{"name":"Karışık Izgara (4 Kişilik)","price":3000,"weight":4,"img":"porsiyon-karisik.jpg"},"p6":{"name":"Kuzu Kuşbaşı Porsiyon","price":700,"weight":1,"img":"porsiyon-kuzu-kusabasi.jpg"},"p9":{"name":"Kuzu Pirzola Şiş Porsiyon","price":1100,"weight":1,"img":"porsiyon-kuzu-pirzola.jpg"},"p10":{"name":"Tavuk Izgara","price":500,"weight":1,"img":"porsiyon-tavuk-izgara.jpg"},"p4":{"name":"Tavuk Şiş Porsiyon","price":500,"weight":1,"img":"porsiyon-tavuk-sis.jpg"},"p2":{"name":"Urfa Porsiyon (Acısız)","price":500,"weight":1,"img":"porsiyon-urfa.jpg"},"r2":{"name":"Rakı Kadeh Double","price":400,"weight":1,"img":"raki-kadeh.jpg"},"r1":{"name":"Rakı Kadeh Tek","price":250,"weight":1,"img":"raki-kadeh.jpg"},"r3":{"name":"Rakı Şişe 70 Cl","price":2500,"weight":700,"img":"raki-sise.jpg"},"s1":{"name":"Şarap (Kadeh)","price":400,"weight":1,"img":"sarap-kadeh.jpg"},"s2":{"name":"Şarap (Şişe)","price":2000,"weight":1,"img":"sarap-sise.jpg"},"ms7":{"name":"Çikolata Smoothie","price":260,"weight":1,"img":"smoothie-cikolata.jpg"},"ms6":{"name":"Çilek Smoothie","price":260,"weight":1,"img":"smoothie-cilek.jpg"},"ms8":{"name":"Muz Smoothie","price":260,"weight":1,"img":"smoothie-muz.jpg"},"v2":{"name":"Viski Kadeh Double","price":520,"weight":1,"img":"viski-kadeh.jpg"},"v1":{"name":"Viski Kadeh Tek","price":400,"weight":1,"img":"viski-kadeh.jpg"},"v3":{"name":"Viski Şişe 70 Cl","price":5000,"weight":700,"img":"viski-sise.jpg"}};
let BASKET_CONFIG={"warning":"Ürünlerinizi sepete ekledikten sonra,<br/>'WhatsApp'tan Siparişini İlet' butonuna tıklayarak<br/>siparişinizi ve adres bilgilerinizi tarafımıza iletebilir,<br/>alışverişinizi kolayca tamamlayabilirsiniz.","waWarning":"WhatsApp kullanmıyorsanız,<br/>sipariş ve sorularınız için bize siparis@alan-adiniz.com adresimizden ulaşabilirsiniz.","shippingWarning":"Yakın çevredeki siparişlerde teslimat ücretsizdir.","currency":"₺","waNumber":"905XXXXXXXXX","tgUsername":"kullanici-adiniz","productsPage":"/pages/urunlerimiz.html","labels":{"addToBasket":"Sepete Ekle","basket":"Sepet","myBasket":"Sepetim","itemSuffix":"ürün","for":"için","openBasket":"Sepeti Aç","closeBasket":"Sepeti Kapat","subtotal":"Ara Toplam","shipping":"Teslimat","freeShipping":"Ücretsiz","total":"Toplam","delete":"Sil","unit":"Adet","whatsAppOrder":"WhatsApp'tan Siparişini İlet","whatsAppGreeting":"Merhaba, sipariş vermek istiyorum:","telegramOrder":"Telegram'dan Siparişini İlet","telegramGreeting":"Merhaba, sipariş vermek istiyorum:","emptyBasket":"Sepetinizde henüz ürün yok","productsLinkText":"Menümüz","emptyBasketDesc":"sayfasını ziyaret ederek beğendiğiniz ürünleri sepetinize ekleyebilirsiniz."}};
(function() {
let basketSection = document.getElementById("basket");
if (!basketSection) { return; }
let C = BASKET_CONFIG;
let warningText = C.warning || "";
let waWarningText = C.waWarning || "";
let shippingWarningText = C.shippingWarning || "";
let currencySymbol = C.currency || "\u20BA";
let waNumber = C.waNumber || "";
let tgUsername = C.tgUsername || "";
let labels = C.labels || {};
let L = function(k) { return labels[k]; };
let addToBasketText = L("addToBasket");
let badge;
let basketOpen = false;
let emptyEl, descEl, wrapEl, toggleBtnEl, toggleInfoEl, contentEl, itemsEl, totalsEl;
let lastItems, lastSubtotal, lastShipping, lastTotal;
let cachedLinks;
function getCart() {
let params = new URLSearchParams(location.search);
let cart = {};
params.forEach(function(val, key) {
if (PRODUCTS[key]) {
let qty = parseInt(val, 10);
if (qty > 0) { cart[key] = qty; }
}
});
return cart;
}
function setCart(cart) {
let params = new URLSearchParams(location.search);
let toRemove = [];
params.forEach(function(val, key) {
if (PRODUCTS[key]) { toRemove.push(key); }
});
for (let r = 0; r < toRemove.length; r++) params.delete(toRemove[r]);
for (let id in cart) {
if (cart[id] > 0) { params.set(id, cart[id]); }
}
let qs = params.toString();
let url = location.pathname + (qs ? "?" + qs : "") + location.hash;
history.replaceState(null, "", url);
render();
}
function getTotalQty(cart) {
if (!cart) { cart = getCart(); }
let total = 0;
for (let id in cart) total += cart[id];
return total;
}
function getItems(cart) {
if (!cart) { cart = getCart(); }
let items = [];
for (let id in cart) {
let prod = PRODUCTS[id];
if (prod) {
items.push({
id: id, name: prod.name, price: prod.price,
weight: prod.weight, img: prod.img, quantity: cart[id]
});
}
}
return items;
}
function addToBasket(id) {
let cart = getCart();
cart[id] = (cart[id] || 0) + 1;
basketOpen = true;
setCart(cart);
}
function updateQty(id, delta) {
let cart = getCart();
let qty = (cart[id] || 0) + delta;
if (qty <= 0) { delete cart[id]; }
else { cart[id] = qty; }
setCart(cart);
}
function removeItem(id) {
let cart = getCart();
delete cart[id];
setCart(cart);
}
function render() {
let cart = getCart();
renderButtons(cart);
renderBadge(cart);
renderBasket(cart);
updateLinks();
}
function renderButtons(cart) {
let buttons = document.querySelectorAll("button[data-id]");
for (let i = 0; i < buttons.length; i++) {
let btn = buttons[i];
let id = btn.getAttribute("data-id");
let qty = cart[id] || 0;
if (qty > 0) {
btn.className = "qty-ctrl";
empty(btn);
let minus = actionImg("/img/minus.png", "-", "minus", id);
let qtyEl = txt(span, qty + " " + L("unit"));
let plus = actionImg("/img/plus.png", "+", "plus", id);
btn.append(minus, qtyEl, plus);
} else {
btn.className = "";
btn.textContent = addToBasketText;
}
}
}
function createBadge() {
badge = a("hidden");
badge.id = "basket-badge";
badge.href = "#basket";
badge.append(img("/img/basket.png", L("basket")), txt(span, "0"));
badge.addEventListener("click", function(e) {
e.preventDefault();
if (getTotalQty() === 0) { return; }
basketOpen = true;
renderBasket();
setTimeout(function() {
var top = basketSection.getBoundingClientRect().top + window.pageYOffset;
window.scrollTo({ top: top, behavior: "smooth" });
}, 80);
});
document.body.append(badge);
}
function renderBadge(cart) {
let total = getTotalQty(cart);
badge.querySelector("span").textContent = total;
if (total > 0) { show(badge); }
else { hide(badge); }
}
function initBasketDOM() {
emptyEl = div("empty hidden");
emptyEl.append(img("/img/basket.png", L("basket")), txt(p, L("emptyBasket")));
basketSection.append(emptyEl);
if (warningText) {
descEl = h5("hidden");
parseBr(warningText, descEl);
basketSection.append(descEl);
}
wrapEl = div("wrap hidden");
toggleBtnEl = button();
toggleInfoEl = i();
toggleBtnEl.append(txt(b, L("basket")), toggleInfoEl, em());
toggleBtnEl.addEventListener("click", function() {
basketOpen = !basketOpen;
if (basketOpen) { show(contentEl); }
else { hide(contentEl); }
toggleBtnEl.classList.toggle("open", basketOpen);
});
wrapEl.append(toggleBtnEl);
contentEl = div("hidden");
itemsEl = div("items");
totalsEl = div("totals");
contentEl.append(itemsEl, totalsEl);
let waBtn = txt(button, L("whatsAppOrder"), "wa");
waBtn.addEventListener("click", function() {
if (lastItems) { sendWhatsApp(lastItems, lastSubtotal, lastShipping, lastTotal); }
});
contentEl.append(waBtn);
if (tgUsername) {
let tgBtn = txt(button, L("telegramOrder"), "tg");
tgBtn.addEventListener("click", function() {
if (lastItems) { sendTelegram(lastItems, lastSubtotal, lastShipping, lastTotal); }
});
contentEl.append(tgBtn);
}
if (waWarningText) {
let warn = h6();
parseBr(waWarningText, warn);
contentEl.append(warn);
}
wrapEl.append(contentEl);
basketSection.append(wrapEl);
}
function renderBasket(cart) {
let items = getItems(cart);
if (items.length === 0) {
show(emptyEl);
if (descEl) { hide(descEl); }
hide(wrapEl);
basketOpen = false;
hide(contentEl);
toggleBtnEl.classList.remove("open");
return;
}
hide(emptyEl);
if (descEl) { show(descEl); }
show(wrapEl);
if (basketOpen) { show(contentEl); }
else { hide(contentEl); }
toggleBtnEl.classList.toggle("open", basketOpen);
empty(itemsEl);
let subtotal = 0, totalQty = 0;
for (let i = 0; i < items.length; i++) {
let item = items[i];
let lineTotal = item.price * item.quantity;
subtotal += lineTotal;
totalQty += item.quantity;
let row = div();
let del = actionImg("/img/delete.png", L("delete"), "delete", item.id, "del");
let qc = div("qty-ctrl");
let qMinus = actionImg("/img/minus.png", "-", "minus", item.id);
let qPlus = actionImg("/img/plus.png", "+", "plus", item.id);
qc.append(qMinus, txt(span, item.quantity), qPlus);
row.append(del, img("/img/products/" + item.img, item.name), txt(b, item.name), qc, txt(span, fmt(lineTotal) + " " + currencySymbol));
itemsEl.append(row);
}
toggleInfoEl.textContent = "(" + totalQty + " " + L("itemSuffix") + " " + L("for") + " " + L("total") + " " + fmt(subtotal) + " " + currencySymbol + ")";
empty(totalsEl);
let shipping = calculateShippingPrice(items);
let total = subtotal + shipping;
lastItems = items;
lastSubtotal = subtotal;
lastShipping = shipping;
lastTotal = total;
totalsEl.append(makeRow(L("subtotal") + ":", fmt(subtotal) + " " + currencySymbol));
totalsEl.append(makeRow(L("shipping") + ":", shipping > 0 ? fmt(shipping) + " " + currencySymbol : L("freeShipping")));
if (shippingWarningText) {
totalsEl.append(txt(small, shippingWarningText));
}
totalsEl.append(makeRow(L("total") + ":", fmt(total) + " " + currencySymbol, "total"));
}
function updateLinks() {
let qs = location.search;
if (!cachedLinks) {
let all = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
cachedLinks = [];
for (let i = 0; i < all.length; i++) {
let href = all[i].getAttribute("href");
let hashPos = href.indexOf("#");
cachedLinks.push({
el: all[i],
base: (hashPos !== -1 ? href.substring(0, hashPos) : href).split("?")[0],
hash: hashPos !== -1 ? href.substring(hashPos) : ""
});
}
}
for (let i = 0; i < cachedLinks.length; i++) {
let l = cachedLinks[i];
l.el.setAttribute("href", l.base + qs + l.hash);
}
}
function buildOrderMessage(items, subtotal, shipping, total, greetingKey) {
let msg = L(greetingKey) + "\n";
for (let i = 0; i < items.length; i++) {
msg += items[i].quantity + "x " + items[i].name + " - " + fmt(items[i].price * items[i].quantity) + " " + currencySymbol + "\n";
}
msg += L("subtotal") + ": " + fmt(subtotal) + " " + currencySymbol + "\n";
msg += L("shipping") + ": " + (shipping > 0 ? fmt(shipping) + " " + currencySymbol : L("freeShipping")) + "\n";
msg += L("total") + ": " + fmt(total) + " " + currencySymbol;
return msg;
}
function sendWhatsApp(items, subtotal, shipping, total) {
let msg = buildOrderMessage(items, subtotal, shipping, total, "whatsAppGreeting");
window.open("https://wa.me/" + waNumber + "?text=" + encodeURIComponent(msg), "_blank");
}
function sendTelegram(items, subtotal, shipping, total) {
let msg = buildOrderMessage(items, subtotal, shipping, total, "telegramGreeting");
window.open("https://t.me/" + tgUsername + "?text=" + encodeURIComponent(msg), "_blank");
}
document.addEventListener("click", function(e) {
let t = e.target;
if (t.tagName === "IMG" && t.hasAttribute("data-action")) {
e.stopPropagation();
let action = t.getAttribute("data-action");
let id = t.getAttribute("data-id");
if (action === "plus") { updateQty(id, 1); }
else if (action === "minus") { updateQty(id, -1); }
else if (action === "delete") { removeItem(id); }
return;
}
let btn = t;
while (btn && btn.tagName !== "BUTTON") { btn = btn.parentElement; }
if (btn && btn.hasAttribute("data-id") && !btn.classList.contains("qty-ctrl")) {
addToBasket(btn.getAttribute("data-id"));
}
});
createBadge();
let fb = document.querySelector("button[data-id]");
if (fb) { addToBasketText = fb.textContent.trim(); }
initBasketDOM();
if (getTotalQty() > 0) { basketOpen = true; }
render();
})();
(function(){
var els = document.querySelectorAll('ul.prd li, .pdt, details, article');
if (!('IntersectionObserver' in window)) {
els.forEach(function(e){ e.classList.add('visible'); });
return;
}
els.forEach(function(e){ e.classList.add('reveal'); });
var io = new IntersectionObserver(function(entries){
entries.forEach(function(en){
if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
});
}, { threshold: 0.08 });
els.forEach(function(e){ io.observe(e); });
})();
