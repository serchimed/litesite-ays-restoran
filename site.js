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
if (_nav) { _nav.addEventListener("click", function(e) { if (e.target === this) { this.classList.toggle("open"); } }); }
var IS_MOBILE = (function () {
var dataString = [navigator.userAgent, navigator.vendor, navigator.platform, window.opera, ''].join(' ');
var mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Mobi|iOS|CriOS|FxiOS|CFNetwork|UCBrowser|Silk|Kindle|Tablet|Mac.*Mobile|MacIntel|Phone|samsung|SAMSUNG/i;
var isMobileDevice = mobileRegex.test(dataString);
var hasTouchPoints = navigator.maxTouchPoints > 0;
var hasTouchEvents = 'ontouchstart' in window || 'ontouchend' in document;
return isMobileDevice || hasTouchPoints || hasTouchEvents;
})();
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
function empty(el) { while (el.firstChild) { el.removeChild(el.firstChild); } }
function actionImg(src, title, action, id, cls) {
let e = img(src, title, cls);
e.setAttribute("data-action", action);
e.setAttribute("data-id", id);
return e;
}
let PRODUCTS={"ap8":{"name":"Acılı Antep Ezme","price":150,"weight":1,"img":"aperatif-antep-ezme.webp"},"ap7":{"name":"Bulgur Pilavı","price":150,"weight":1,"img":"aperatif-bulgur.webp"},"ap1":{"name":"Cips","price":180,"weight":1,"img":"aperatif-cips.webp"},"ap9":{"name":"Haydari","price":150,"weight":1,"img":"aperatif-haydari.webp"},"ap6":{"name":"Mantı","price":320,"weight":1,"img":"aperatif-manti.webp"},"ap2":{"name":"Mercimek Çorbası","price":120,"weight":1,"img":"aperatif-mercimek.webp"},"ap12":{"name":"Pirinç Pilavı","price":100,"weight":1,"img":"aperatif-pirinc-pilavi.webp"},"ap11":{"name":"Yoğurt","price":150,"weight":1,"img":"aperatif-yogurt.webp"},"dd1":{"name":"Adana Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-adana.webp"},"dt1":{"name":"Adana Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-adana.webp"},"dd6":{"name":"Ciğer Şiş Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-ciger-sis.webp"},"dt6":{"name":"Ciğer Şiş Dürüm (Tek Şiş)","price":400,"weight":1,"img":"durum-ciger-sis.webp"},"dd8":{"name":"Çıtır Tavuk Dürüm (Double)","price":400,"weight":1,"img":"durum-citir-tavuk.webp"},"dt8":{"name":"Çıtır Tavuk Dürüm (Tek Şiş)","price":300,"weight":1,"img":"durum-citir-tavuk.webp"},"dd3":{"name":"Dana Kuşbaşı Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-dana-kusabasi.webp"},"dt3":{"name":"Dana Kuşbaşı Dürüm (Tek Şiş)","price":400,"weight":1,"img":"durum-dana-kusabasi.webp"},"dd9":{"name":"Et Dönerli Soslu Dürüm (Double)","price":500,"weight":1,"img":"durum-et-donerli.webp"},"dt9":{"name":"Et Dönerli Soslu Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-et-donerli.webp"},"dd10":{"name":"Köfte Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-kofte.webp"},"dt10":{"name":"Köfte Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-kofte.webp"},"dd8":{"name":"Kuzu Kuşbaşı Dürüm (Double Şiş)","price":600,"weight":1,"img":"durum-kuzu-kusabasi.webp"},"dt8":{"name":"Kuzu Kuşbaşı Dürüm (Tek Şiş)","price":400,"weight":1,"img":"durum-kuzu-kusabasi.webp"},"dd7":{"name":"Tavuk Şiş Dürüm (Double Şiş)","price":400,"weight":1,"img":"durum-tavuk.webp"},"dd5":{"name":"Tavuk Şiş Dürüm (Double Şiş)","price":400,"weight":1,"img":"durum-tavuk-sis.webp"},"dt5":{"name":"Tavuk Şiş Dürüm (Tek Şiş)","price":300,"weight":1,"img":"durum-tavuk-sis.webp"},"dt7":{"name":"Tavuk Şiş Dürüm (Tek Şiş)","price":300,"weight":1,"img":"durum-tavuk.webp"},"dd2":{"name":"Urfa Dürüm (Double Şiş)","price":500,"weight":1,"img":"durum-urfa.webp"},"dt2":{"name":"Urfa Dürüm (Tek Şiş)","price":350,"weight":1,"img":"durum-urfa.webp"},"dr33":{"name":"Ayran/Kola/Fanta/Sprite 1 LT","price":190,"weight":1,"img":"icecek-1lt.webp"},"dr18":{"name":"Alkolsüz Kokteyl","price":400,"weight":1,"img":"icecek-alkolsuz-kokteyl.webp"},"dr17":{"name":"Alkollü Kokteyl","price":520,"weight":1,"img":"icecek-alkolu-kokteyl.webp","ord":0},"dr30":{"name":"Büyük Ayran","price":50,"weight":1,"img":"icecek-buyuk-ayran.webp"},"dr2":{"name":"Çikolata Milkshake","price":260,"weight":1,"img":"icecek-cikolata-milkshake.webp"},"dr7":{"name":"Çikolata Smoothie","price":260,"weight":1,"img":"icecek-cikolata-smoothie.webp"},"dr5":{"name":"Çilek Frozen","price":260,"weight":1,"img":"icecek-cilek-frozen.webp"},"dr37":{"name":"Çilekli Limonata","price":150,"weight":1,"img":"icecek-cilekli-limonata.webp"},"dr1":{"name":"Çilek Milkshake","price":260,"weight":1,"img":"icecek-cilek-milkshake.webp"},"dr6":{"name":"Çilek Smoothie","price":260,"weight":1,"img":"icecek-cilek-smoothie.webp"},"dr21":{"name":"Corona","price":275,"weight":1,"img":"icecek-corona.webp","ord":0},"dr19":{"name":"Efes Malt","price":250,"weight":1,"img":"icecek-efes-malt.webp","ord":0},"dr20":{"name":"Efes Pilsen","price":250,"weight":1,"img":"icecek-efes-pilsen.webp","ord":0},"dr25":{"name":"Fanta","price":90,"weight":1,"img":"icecek-fanta.webp"},"dr27":{"name":"Fuse Tea (Şeftali/Limon/Mango)","price":90,"weight":1,"img":"icecek-fuse-tea.webp"},"dr23":{"name":"Kola","price":90,"weight":1,"img":"icecek-kola.webp"},"dr24":{"name":"Kola Zero","price":90,"weight":1,"img":"icecek-kola-zero.webp"},"dr29":{"name":"Küçük Ayran","price":40,"weight":1,"img":"icecek-kucuk-ayran.webp"},"dr28":{"name":"Küçük Su","price":30,"weight":1,"img":"icecek-kucuk-su.webp"},"dr36":{"name":"Limonata","price":120,"weight":1,"img":"icecek-limonata.webp"},"dr22":{"name":"Miller","price":275,"weight":1,"img":"icecek-miller.webp","ord":0},"dr3":{"name":"Muz Milkshake","price":260,"weight":1,"img":"icecek-muz-milkshake.webp"},"dr8":{"name":"Muz Smoothie","price":260,"weight":1,"img":"icecek-muz-smoothie.webp"},"dr12":{"name":"Rakı Kadeh Double","price":400,"weight":1,"img":"icecek-raki-kadeh-double.webp","ord":0},"dr11":{"name":"Rakı Kadeh Tek","price":250,"weight":1,"img":"icecek-raki-kadeh-tek.webp","ord":0},"dr13":{"name":"Rakı Şişe 70 Cl","price":2500,"weight":70,"img":"icecek-raki-sise-70cl.webp","ord":0},"dr32":{"name":"Şalgam (Acılı/Acısız)","price":70,"weight":1,"img":"icecek-salgam.webp"},"dr10":{"name":"Kırmızı/Beyaz/Roze Şarap (Kadeh)","price":400,"weight":1,"img":"icecek-sarap-kadeh.webp","ord":0},"dr9":{"name":"Kırmızı/Beyaz Şarap (Şişe)","price":2000,"weight":1,"img":"icecek-sarap-sise.webp","ord":0},"dr4":{"name":"Şeftali Frozen","price":260,"weight":1,"img":"icecek-seftali-frozen.webp"},"dr35":{"name":"Sıcak Kahve","price":175,"weight":1,"img":"icecek-sicak-kahve.webp"},"dr31":{"name":"Soda (Sade/Limon)","price":50,"weight":1,"img":"icecek-soda.webp"},"dr34":{"name":"Soğuk Kahve","price":175,"weight":1,"img":"icecek-soguk-kahve.webp"},"dr26":{"name":"Sprite","price":90,"weight":1,"img":"icecek-sprite.webp"},"dr15":{"name":"Viski Kadeh Double","price":520,"weight":1,"img":"icecek-viski-kadeh-double.webp","ord":0},"dr14":{"name":"Viski Kadeh Tek","price":400,"weight":1,"img":"icecek-viski-kadeh-tek.webp","ord":0},"dr16":{"name":"Viski Şişe 70 Cl","price":5000,"weight":70,"img":"icecek-viski-sise-70cl.webp","ord":0},"m1":{"name":"Kremalı Tavuklu Mantarlı Makarna","price":550,"weight":1,"img":"makarna-kremali-tavuklu-mantar.webp"},"m4":{"name":"Penne Alla Pesto","price":380,"weight":1,"img":"makarna-penne-alla-pesto.webp"},"m6":{"name":"Penne All'Arabiatta","price":320,"weight":1,"img":"makarna-penne-all-arabiatta.webp"},"m2":{"name":"Sebzeli Noodle","price":420,"weight":1,"img":"makarna-sebzeli-noodle.webp"},"m5":{"name":"Tavuklu Fettucini","price":350,"weight":1,"img":"makarna-tavuklu-fettucini.webp"},"m3":{"name":"Tavuklu Noodle","price":420,"weight":1,"img":"makarna-tavuklu-noodle.webp"},"p1":{"name":"Adana Porsiyon (Acılı)","price":500,"weight":1,"img":"porsiyon-adana.webp"},"p5":{"name":"Ciğer Şiş Porsiyon","price":600,"weight":1,"img":"porsiyon-ciger-sis.webp"},"p3":{"name":"Dana Kuşbaşı Porsiyon","price":550,"weight":1,"img":"porsiyon-dana-kusabasi.webp"},"p7":{"name":"Izgara Köfte Porsiyon","price":550,"weight":1,"img":"porsiyon-izgara-kofte.webp"},"p8":{"name":"Kanat Porsiyon","price":500,"weight":1,"img":"porsiyon-kanat.webp"},"p11":{"name":"Karışık Izgara (2 Kişilik)","price":1800,"weight":2,"img":"porsiyon-karisik-2.webp"},"p12":{"name":"Karışık Izgara (4 Kişilik)","price":3000,"weight":4,"img":"porsiyon-karisik-4.webp"},"p6":{"name":"Kuzu Kuşbaşı Porsiyon","price":700,"weight":1,"img":"porsiyon-kuzu-kusabasi.webp"},"p13":{"name":"Kuzu Pirzola Şiş Porsiyon","price":1100,"weight":1,"img":"porsiyon-kuzu-pirzola.webp"},"p10":{"name":"Tavuk Izgara","price":500,"weight":1,"img":"porsiyon-tavuk-izgara.webp"},"p4":{"name":"Tavuk Şiş Porsiyon","price":500,"weight":1,"img":"porsiyon-tavuk-sis.webp"},"p2":{"name":"Urfa Porsiyon (Acısız)","price":500,"weight":1,"img":"porsiyon-urfa.webp"},"s1":{"name":"Akdeniz Salatası","price":250,"weight":1,"img":"salata-akdeniz.webp"},"s4":{"name":"Çoban Salata","price":200,"weight":1,"img":"salata-coban.webp"},"s2":{"name":"Peynirli Salata","price":300,"weight":1,"img":"salata-peynirli.webp"},"s3":{"name":"Sezar Salata","price":350,"weight":1,"img":"salata-sezar.webp"}};
let BASKET_CONFIG={"warning":"Ürünlerinizi sepete ekledikten sonra,<br/>'WhatsApp'tan Siparişini İlet' butonuna tıklayarak<br/>siparişinizi ve adres bilgilerinizi tarafımıza iletebilir,<br/>alışverişinizi kolayca tamamlayabilirsiniz.","waWarning":"WhatsApp kullanmıyorsanız,<br/>sipariş ve sorularınız için bize +90 5XX XXX XX XX sabit numaramızdan ulaşabilirsiniz.","shippingWarning":"Yakın çevredeki siparişlerde teslimat ücretsizdir.","isBasketDesc":false,"paymentOptions":["Nakit", "Kredi Kartı"],"currency":"₺","waNumber":"905XXXXXXXXX","productsPage":"","timezone":"Europe/Istanbul","labels":{"addToBasket":"Sepete Ekle","basket":"Sepet","myBasket":"Sepetim","itemSuffix":"ürün","for":"için","openBasket":"Sepeti Aç","closeBasket":"Sepeti Kapat","subtotal":"Ara Toplam","shipping":"Teslimat","freeShipping":"Ücretsiz","total":"Toplam","delete":"Sil","unit":"Adet","whatsAppOrder":"WhatsApp'tan Siparişini İlet","whatsAppGreeting":"Merhaba, sipariş vermek istiyorum:","telegramOrder":"Telegram'dan Siparişini İlet","telegramGreeting":"Merhaba, sipariş vermek istiyorum:","emptyBasket":"Sepetinizde henüz ürün yok","productsLinkText":"Menümüz","emptyBasketDesc":"sayfasını ziyaret ederek beğendiğiniz ürünleri sepetinize ekleyebilirsiniz.","waiterLabel":"Garson","tableLabel":"Masa","basketDescPlaceholder":"Not ekle (isteğe bağlı)","basketDescTooltip":"Belirtmek istediğiniz bir şey varsa WhatsApp'tan da mesaj gönderebilirsiniz.","paymentLabel":"Ödeme Yöntemi","noteLabel":"Not","happyHourTimezoneWarning":"Bu indirim restoran saatine göredir. Cihazınızın saati farklı olabilir.","discountProgressPrefix":"daha fazla al,","discountProgressSuffix":"indirim kazan","notForOnlineOrder":"Online siparişe kapalıdır"}};
let CAMPAIGN_CONFIG = [];
window.TABLE_NO = (new URLSearchParams(location.search)).get('t') || '';
window.WAITER_NAME = localStorage.getItem('waiter') || '';
(function() {
let basketSection = document.getElementById("basket");
if (!basketSection) { return; }
let C = BASKET_CONFIG;
let warningText = C.warning || "";
let waWarningText = C.waWarning || "";
let currencySymbol = C.currency || "\u20BA";
let waNumber = C.waNumber || "";
let tgUsername = C.tgUsername || "";
let labels = C.labels || {};
let L = function(k) { return labels[k]; };
let addToBasketText = L("addToBasket");
let badge;
let basketOpen = false;
let lastQty = 0;
let navEl;
let emptyEl, descEl, wrapEl, toggleBtnEl, toggleInfoEl, contentEl, itemsEl, totalsEl, descInputEl;
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
function getItems(cart) {
if (!cart) { cart = getCart(); }
let items = [];
for (let id in cart) {
let prod = PRODUCTS[id];
if (prod) {
items.push({
id: id, name: prod.name, price: prod.price,
weight: prod.weight, img: prod.img, quantity: cart[id],
ord: prod.ord
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
function calcSubtotal(items) {
let s = 0;
for (let i = 0; i < items.length; i++) { s += items[i].price * items[i].quantity; }
return s;
}
function filterDiscountLines(lines) {
let result = [];
for (let i = 0; i < lines.length; i++) { if (!lines[i].isFree) { result.push(lines[i]); } }
return result;
}
function totalWeightKg(items) {
let w = 0;
for (let i = 0; i < items.length; i++) { w += items[i].weight * items[i].quantity; }
return w / 1000;
}
function getShopTime() {
let tz = C.timezone || "";
let now = new Date();
if (!tz) { return { h: now.getHours(), m: now.getMinutes(), day: now.getDay() }; }
let parts = new Intl.DateTimeFormat("en-US", {
timeZone: tz, hour: "2-digit", minute: "2-digit", weekday: "short", hour12: false
}).formatToParts(now);
let h = 0, m = 0, dayStr = "";
for (let i = 0; i < parts.length; i++) {
if (parts[i].type === "hour") { h = parseInt(parts[i].value, 10); }
if (parts[i].type === "minute") { m = parseInt(parts[i].value, 10); }
if (parts[i].type === "weekday") { dayStr = parts[i].value; }
}
let dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
return { h: h, m: m, day: (dayMap[dayStr] !== undefined ? dayMap[dayStr] : now.getDay()) };
}
function calculateDiscount(items, subtotal) {
let totalDiscount = 0;
let lines = [];
let freeShipping = false;
let happyHourActive = false;
let hints = [];
for (let ci = 0; ci < CAMPAIGN_CONFIG.length; ci++) {
let c = CAMPAIGN_CONFIG[ci];
if (c.type === "tier_discount") {
let tiers = (c.tiers || []).slice().sort(function(a, b) { return a.minOrderTotal - b.minOrderTotal; });
let applied = false;
for (let ti = tiers.length - 1; ti >= 0; ti--) {
if (subtotal >= tiers[ti].minOrderTotal) {
let amount = tiers[ti].discountType === "percentage"
? Math.round(subtotal * tiers[ti].discountAmount / 100)
: tiers[ti].discountAmount;
totalDiscount += amount;
lines.push({ label: c.label, amount: amount });
applied = true;
break;
}
}
if (!applied) {
for (let ti = 0; ti < tiers.length; ti++) {
if (subtotal < tiers[ti].minOrderTotal) {
let remaining = tiers[ti].minOrderTotal - subtotal;
let discAmt = tiers[ti].discountType === "percentage"
? tiers[ti].discountAmount + "%"
: fmt(tiers[ti].discountAmount) + " " + currencySymbol;
hints.push(fmt(remaining) + " " + currencySymbol + " " + L("discountProgressPrefix") + " " + discAmt + " " + L("discountProgressSuffix"));
break;
}
}
}
}
else if (c.type === "multi_unit") {
let pid = c.productId;
let cartItem = null;
for (let ii = 0; ii < items.length; ii++) {
if (items[ii].id === pid) { cartItem = items[ii]; break; }
}
let tiers = (c.tiers || []).slice().sort(function(a, b) { return a.minQuantity - b.minQuantity; });
let currentQty = cartItem ? cartItem.quantity : 0;
let applied = false;
for (let ti = tiers.length - 1; ti >= 0; ti--) {
if (currentQty >= tiers[ti].minQuantity) {
let lineTotal = cartItem.price * cartItem.quantity;
let amount = Math.min(tiers[ti].discountPerUnit * cartItem.quantity, lineTotal);
totalDiscount += amount;
lines.push({ label: c.label, amount: amount });
applied = true;
break;
}
}
if (!applied) {
for (let ti = 0; ti < tiers.length; ti++) {
if (currentQty < tiers[ti].minQuantity) {
let remaining = tiers[ti].minQuantity - currentQty;
let prodName = (PRODUCTS[pid] && PRODUCTS[pid].name) || pid;
hints.push(remaining + " " + L("unit") + " " + prodName + " " + L("discountProgressPrefix") + " " + fmt(tiers[ti].discountPerUnit) + " " + currencySymbol + "/" + L("unit") + " " + L("discountProgressSuffix"));
break;
}
}
}
}
else if (c.type === "free_shipping") {
let wKg = totalWeightKg(items);
let conditions = c.conditions || [];
let met = false;
for (let coi = 0; coi < conditions.length; coi++) {
let cond = conditions[coi];
if (cond.minWeight && wKg >= cond.minWeight) { met = true; break; }
if (cond.minOrderTotal && subtotal >= cond.minOrderTotal) { met = true; break; }
}
if (met) {
freeShipping = true;
lines.push({ label: c.label, amount: 0, isFree: true });
} else {
for (let coi = 0; coi < conditions.length; coi++) {
let cond = conditions[coi];
if (cond.minWeight && wKg < cond.minWeight) {
let remaining = Math.round((cond.minWeight - wKg) * 100) / 100;
let hint = (cond.hintTemplate || "").replace("{remaining}", remaining);
if (hint) { hints.push(hint); }
}
if (cond.minOrderTotal && subtotal < cond.minOrderTotal) {
let remaining = cond.minOrderTotal - subtotal;
let hint = (cond.hintTemplate || "").replace("{remaining}", fmt(remaining));
if (hint) { hints.push(hint); }
}
}
}
}
else if (c.type === "happy_hour") {
let t = getShopTime();
let sched = c.schedule || {};
let days = sched.days || [];
let dayNames = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
let dayName = dayNames[t.day];
let inDay = false;
for (let di = 0; di < days.length; di++) { if (days[di] === dayName) { inDay = true; break; } }
let startParts = (sched.startTime || "00:00").split(":");
let endParts = (sched.endTime || "00:00").split(":");
let startMin = parseInt(startParts[0], 10) * 60 + parseInt(startParts[1], 10);
let endMin = parseInt(endParts[0], 10) * 60 + parseInt(endParts[1], 10);
let nowMin = t.h * 60 + t.m;
let inTime = nowMin >= startMin && nowMin < endMin;
if (inDay && inTime) {
let amount = c.discountType === "percentage"
? Math.round(subtotal * c.discountValue / 100)
: c.discountValue;
totalDiscount += amount;
lines.push({ label: c.label, amount: amount });
happyHourActive = true;
}
}
}
return { totalDiscount: totalDiscount, lines: lines, freeShipping: freeShipping, happyHourActive: happyHourActive, hints: hints };
}
function render() {
let cart = getCart();
let items = getItems(cart);
let qty = 0;
for (let i = 0; i < items.length; i++) { qty += items[i].quantity; }
renderButtons(cart);
renderBadge(qty);
renderBasket(items);
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
if (lastQty === 0) { return; }
basketOpen = true;
renderBasket(getItems());
basketSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("header").append(badge);
}
function renderBadge(qty) {
lastQty = qty;
badge.querySelector("span").textContent = qty;
if (qty > 0) { show(badge); }
else { hide(badge); }
}
function updateBadgePosition() {
if (!badge) { return; }
let badgeH = badge.offsetHeight || 80;
if (lastQty === 0) {
badge.style.top = "calc(50% - " + (badgeH / 2) + "px)";
return;
}
let rect = basketSection.getBoundingClientRect();
let badgeTop = rect.top - badgeH / 2;
if (navEl) {
let nc = navEl.getBoundingClientRect().top + navEl.offsetHeight / 2;
if (nc > 0) { badgeTop = Math.min(nc - badgeH / 2, badgeTop); }
}
badgeTop = Math.max(10, Math.min(badgeTop, window.innerHeight - badgeH - 10));
badge.style.top = badgeTop + "px";
}
function initBasketDOM() {
emptyEl = div("empty hidden");
emptyEl.append(img("/img/basket.png", L("basket")), txt(p, L("emptyBasket")));
let descP = p();
let pLink = a();
pLink.href = C.productsPage || "/pages/urunlerimiz.html";
pLink.textContent = L("productsLinkText");
descP.append(pLink, " " + L("emptyBasketDesc"));
emptyEl.append(descP);
basketSection.append(emptyEl);
if (warningText && !C.restaurantMode) {
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
updateBadgePosition();
});
wrapEl.append(toggleBtnEl);
contentEl = div("hidden");
itemsEl = div("items");
totalsEl = div("totals");
contentEl.append(itemsEl, totalsEl);
if (C.isBasketDesc && !C.restaurantMode) {
let descWrap = div("basket-desc-wrap");
descInputEl = document.createElement("textarea");
descInputEl.className = "basket-desc-input";
descInputEl.placeholder = L("basketDescPlaceholder");
descInputEl.title = L("basketDescTooltip");
descInputEl.rows = 2;
descWrap.append(descInputEl);
contentEl.append(descWrap);
}
let payOpts = C.paymentOptions || [];
if (payOpts.length > 1 && !C.restaurantMode) {
let payWrap = div("payment-options-wrap");
let radioGroup = div("payment-radios");
for (let pi = 0; pi < payOpts.length; pi++) {
let lbl = document.createElement("label");
let radio = document.createElement("input");
radio.type = "radio";
radio.name = "basket-payment";
radio.value = payOpts[pi];
if (pi === 0) { radio.checked = true; }
lbl.append(radio, " " + payOpts[pi]);
radioGroup.append(lbl);
}
payWrap.append(radioGroup);
contentEl.append(payWrap);
}
let waBtn = txt(button, L("whatsAppOrder"), "wa");
waBtn.addEventListener("click", function() { sendWhatsApp.apply(null, getOrderArgs()); });
contentEl.append(waBtn);
if (tgUsername) {
let tgBtn = txt(button, L("telegramOrder"), "tg");
tgBtn.addEventListener("click", function() { sendTelegram.apply(null, getOrderArgs()); });
contentEl.append(tgBtn);
}
if (waWarningText && !C.restaurantMode) {
let warn = h6();
parseBr(waWarningText, warn);
contentEl.append(warn);
}
if (window.WAITER_NAME || window.TABLE_NO) {
let infoEl = div("table-info");
if (window.WAITER_NAME) { infoEl.append(txt(span, L("waiterLabel") + ": " + window.WAITER_NAME)); }
if (window.TABLE_NO) { infoEl.append(txt(span, L("tableLabel") + ": " + window.TABLE_NO)); }
contentEl.append(infoEl);
}
wrapEl.append(contentEl);
basketSection.append(wrapEl);
}
function renderBasket(items) {
if (items.length === 0) {
show(emptyEl);
if (descEl) { hide(descEl); }
hide(wrapEl);
basketOpen = false;
hide(contentEl);
toggleBtnEl.classList.remove("open");
updateBadgePosition();
return;
}
hide(emptyEl);
if (descEl) { show(descEl); }
show(wrapEl);
if (basketOpen) { show(contentEl); }
else { hide(contentEl); }
toggleBtnEl.classList.toggle("open", basketOpen);
empty(itemsEl);
let subtotal = calcSubtotal(items);
for (let i = 0; i < items.length; i++) {
let item = items[i];
let lineTotal = item.price * item.quantity;
let row = div();
let del = actionImg("/img/delete.png", L("delete"), "delete", item.id, "del");
let qc = div("qty-ctrl");
let qMinus = actionImg("/img/minus.png", "-", "minus", item.id);
let qPlus = actionImg("/img/plus.png", "+", "plus", item.id);
qc.append(qMinus, txt(span, item.quantity), qPlus);
row.append(del, img("/img/products/" + item.img, item.name), txt(b, item.name), qc, txt(span, fmt(lineTotal) + " " + currencySymbol));
if (item.ord === 0) {
row.append(txt(small, L("notForOnlineOrder"), "not-for-order"));
}
itemsEl.append(row);
}
let totalQty = 0;
for (let i = 0; i < items.length; i++) { totalQty += items[i].quantity; }
toggleInfoEl.textContent = "(" + totalQty + " " + L("itemSuffix") + " " + L("for") + " " + L("total") + " " + fmt(subtotal) + " " + currencySymbol + ")";
empty(totalsEl);
let discountResult = calculateDiscount(items, subtotal);
let discountTotal = discountResult.totalDiscount;
let dLines = filterDiscountLines(discountResult.lines);
if (C.restaurantMode) {
if (discountTotal > 0) {
for (let di = 0; di < dLines.length; di++) {
totalsEl.append(makeRow(dLines[di].label + ":", "-" + fmt(dLines[di].amount) + " " + currencySymbol, "discount"));
}
}
totalsEl.append(makeRow(L("total") + ":", fmt(subtotal - discountTotal) + " " + currencySymbol, "total"));
} else {
let shipping = discountResult.freeShipping ? 0 : calculateShippingPrice(items);
let total = subtotal - discountTotal + shipping;
totalsEl.append(makeRow(L("subtotal") + ":", fmt(subtotal) + " " + currencySymbol));
if (discountTotal > 0) {
for (let di = 0; di < dLines.length; di++) {
totalsEl.append(makeRow(dLines[di].label + ":", "-" + fmt(dLines[di].amount) + " " + currencySymbol, "discount"));
}
}
let freeShippingCampaign = discountResult.freeShipping
? (discountResult.lines.filter(function(l) { return l.isFree; })[0] || {}).label || L("freeShipping")
: null;
let shippingLabel = freeShippingCampaign || (shipping > 0 ? fmt(shipping) + " " + currencySymbol : L("freeShipping"));
totalsEl.append(makeRow(L("shipping") + ":", shippingLabel));
totalsEl.append(makeRow(L("total") + ":", fmt(total) + " " + currencySymbol, "total"));
}
for (let hi = 0; hi < discountResult.hints.length; hi++) {
let hintEl = div("campaign-hint");
hintEl.textContent = discountResult.hints[hi];
totalsEl.append(hintEl);
}
if (discountResult.happyHourActive && C.timezone) {
let warnEl = div("happy-hour-warning");
warnEl.textContent = L("happyHourTimezoneWarning");
totalsEl.append(warnEl);
}
updateBadgePosition();
}
function updateLinks() {
let qs = location.search;
let links = document.querySelectorAll("a[href]");
for (let i = 0; i < links.length; i++) {
let link = links[i];
let href = link.getAttribute("href");
if (!href) { continue; }
if (href.charAt(0) === "#") { continue; }
if (href.indexOf("://") !== -1) { continue; }
if (href.indexOf("mailto:") === 0) { continue; }
if (href.indexOf("tel:") === 0) { continue; }
let hashPos = href.indexOf("#");
let hash = hashPos !== -1 ? href.substring(hashPos) : "";
let base = hashPos !== -1 ? href.substring(0, hashPos) : href;
base = base.split("?")[0];
link.setAttribute("href", base + qs + hash);
}
}
function getSelectedPayment() {
let opts = C.paymentOptions || [];
if (opts.length === 0) { return ""; }
if (opts.length === 1) { return opts[0]; }
let radios = document.querySelectorAll('input[name="basket-payment"]');
for (let r = 0; r < radios.length; r++) {
if (radios[r].checked) { return radios[r].value; }
}
return opts[0];
}
function getBasketDesc() {
if (!descInputEl) { return ""; }
return descInputEl.value.trim();
}
function getOrderArgs() {
let items = getItems();
let subtotal = calcSubtotal(items);
let discountResult = calculateDiscount(items, subtotal);
let shipping = (C.restaurantMode || discountResult.freeShipping) ? 0 : calculateShippingPrice(items);
return [items, subtotal, discountResult, shipping, subtotal - discountResult.totalDiscount + shipping];
}
function buildOrderMsg(greetingKey, items, subtotal, discountResult, shipping, total) {
let msg = "";
if (window.WAITER_NAME) { msg += "[" + L("waiterLabel") + ": " + window.WAITER_NAME + "]\n"; }
if (window.TABLE_NO) { msg += "[" + L("tableLabel") + ": " + window.TABLE_NO + "]\n"; }
msg += L(greetingKey) + "\n\n";
for (let i = 0; i < items.length; i++) {
msg += "*" + items[i].quantity + " x " + items[i].name + "*: " + fmt(items[i].price * items[i].quantity) + " " + currencySymbol + "\n";
}
let allLines = discountResult ? discountResult.lines : [];
let dLines = filterDiscountLines(allLines);
if (!C.restaurantMode) {
let freeLabel = (discountResult && discountResult.freeShipping)
? ((allLines.filter(function(l) { return l.isFree; })[0] || {}).label || L("freeShipping"))
: null;
msg += L("shipping") + ": " + (freeLabel || (shipping > 0 ? fmt(shipping) + " " + currencySymbol : L("freeShipping"))) + "\n";
}
msg += L("total") + ": *" + fmt(total) + " " + currencySymbol + "*";
let extras = [];
let payment = getSelectedPayment();
if (payment) { extras.push(L("paymentLabel") + ": *" + payment + "*"); }
for (let di = 0; di < dLines.length; di++) {
extras.push(dLines[di].label + ": *-" + fmt(dLines[di].amount) + " " + currencySymbol + "*");
}
let desc = getBasketDesc();
if (desc) { extras.push(L("noteLabel") + ": " + desc); }
if (extras.length > 0) { msg += "\n\n" + extras.join("\n"); }
return msg;
}
function sendWhatsApp(items, subtotal, discountResult, shipping, total) {
let encoded = encodeURIComponent(buildOrderMsg("whatsAppGreeting", items, subtotal, discountResult, shipping, total));
if (IS_MOBILE) { window.open("https://wa.me/" + waNumber + "?text=" + encoded, "_blank"); }
else { window.open("https://web.whatsapp.com/send?phone=" + waNumber + "&text=" + encoded, "_blank"); }
}
function sendTelegram(items, subtotal, discountResult, shipping, total) {
let encoded = encodeURIComponent(buildOrderMsg("telegramGreeting", items, subtotal, discountResult, shipping, total));
window.open("https://t.me/" + tgUsername + "?text=" + encoded, "_blank");
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
document.addEventListener("DOMContentLoaded", function() {
createBadge();
navEl = document.querySelector("nav");
let fb = document.querySelector("button[data-id]");
if (fb) { addToBasketText = fb.textContent.trim(); }
initBasketDOM();
if (getItems().length > 0) { basketOpen = true; }
render();
window.addEventListener("scroll", updateBadgePosition, { passive: true });
window.addEventListener("resize", updateBadgePosition, { passive: true });
document.addEventListener("click", function(e) {
let a = e.target;
while (a && a.tagName !== "A") { a = a.parentElement; }
if (!a || !a.hasAttribute("data-ci")) { return; }
let ci = parseInt(a.getAttribute("data-ci"), 10);
if (isNaN(ci) || ci < 0 || ci >= CAMPAIGN_CONFIG.length) { return; }
let c = CAMPAIGN_CONFIG[ci];
if (!c || !c.addProducts || !c.addProducts.length) {
e.preventDefault();
basketOpen = true;
renderBasket(getItems());
basketSection.scrollIntoView({ behavior: "smooth" });
return;
}
let items = getItems();
let subtotal = calcSubtotal(items);
let disc = calculateDiscount(items, subtotal);
let alreadyApplied = false;
if (c.type === "free_shipping") { alreadyApplied = disc.freeShipping; }
else {
for (let li = 0; li < disc.lines.length; li++) {
if (disc.lines[li].label === c.label) { alreadyApplied = true; break; }
}
}
e.preventDefault();
if (!alreadyApplied) {
let cart = getCart();
for (let i = 0; i < c.addProducts.length; i++) {
let ap = c.addProducts[i];
cart[ap.id] = (cart[ap.id] || 0) + ap.qty;
}
setCart(cart);
}
basketOpen = true;
renderBasket(getItems());
basketSection.scrollIntoView({ behavior: "smooth" });
});
});
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
(function() {
var catsEl = document.querySelector('.filter-cats');
var tagsEl = document.querySelector('.filter-tags');
if (!catsEl) return;
var selectedCats = [];
var selectedTags = [];
function getItems() {
return document.querySelectorAll('ul.prd li');
}
function applyFilter() {
var items = getItems();
for (var i = 0; i < items.length; i++) {
var item = items[i];
var cat = item.dataset.cat || '';
var tags = item.dataset.tags ? item.dataset.tags.split(' ') : [];
var catOk = !selectedCats.length || selectedCats.indexOf(cat) !== -1;
var tagOk = !selectedTags.length || selectedTags.some(function(t) { return tags.indexOf(t) !== -1; });
item.hidden = !(catOk && tagOk);
}
// Hide empty groups
var groups = document.querySelectorAll('.cat-group');
for (var g = 0; g < groups.length; g++) {
var visible = groups[g].querySelectorAll('li:not([hidden])');
groups[g].hidden = visible.length === 0;
}
}
function updateTagRow() {
if (!tagsEl) return;
var chips = tagsEl.querySelectorAll('.chip');
for (var i = 0; i < chips.length; i++) {
var chip = chips[i];
var tag = chip.dataset.tag;
var relevant = false;
if (!selectedCats.length) {
relevant = true;
} else {
var items = getItems();
for (var j = 0; j < items.length; j++) {
var item = items[j];
if (selectedCats.indexOf(item.dataset.cat || '') !== -1) {
var tags = item.dataset.tags ? item.dataset.tags.split(' ') : [];
if (tags.indexOf(tag) !== -1) { relevant = true; break; }
}
}
}
chip.hidden = !relevant;
if (!relevant) {
chip.classList.remove('active');
var idx = selectedTags.indexOf(tag);
if (idx !== -1) selectedTags.splice(idx, 1);
}
}
}
catsEl.addEventListener('click', function(e) {
var chip = e.target.closest ? e.target.closest('.chip') : e.target;
if (!chip || !chip.classList.contains('chip')) return;
var cat = chip.dataset.cat;
if (cat === '') {
selectedCats = [];
selectedTags = [];
var allCatChips = catsEl.querySelectorAll('.chip');
for (var i = 0; i < allCatChips.length; i++) allCatChips[i].classList.remove('active');
if (tagsEl) {
var allTagChips = tagsEl.querySelectorAll('.chip');
for (var j = 0; j < allTagChips.length; j++) allTagChips[j].classList.remove('active');
}
chip.classList.add('active');
} else {
var allBtn = catsEl.querySelector('[data-cat=""]');
if (allBtn) allBtn.classList.remove('active');
var idx = selectedCats.indexOf(cat);
if (idx === -1) { selectedCats.push(cat); chip.classList.add('active'); }
else { selectedCats.splice(idx, 1); chip.classList.remove('active'); }
if (!selectedCats.length && allBtn) allBtn.classList.add('active');
}
updateTagRow();
applyFilter();
});
if (tagsEl) {
tagsEl.addEventListener('click', function(e) {
var chip = e.target.closest ? e.target.closest('.chip') : e.target;
if (!chip || !chip.classList.contains('chip')) return;
var tag = chip.dataset.tag;
var idx = selectedTags.indexOf(tag);
if (idx === -1) { selectedTags.push(tag); chip.classList.add('active'); }
else { selectedTags.splice(idx, 1); chip.classList.remove('active'); }
applyFilter();
});
}
})();
