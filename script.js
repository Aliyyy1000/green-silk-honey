// Optional popup for "Shop Now" button
const shopBtn = document.querySelector('.hero .btn');
if (shopBtn) {
  shopBtn.addEventListener('click', () => {
    alert("Redirecting you to WhatsApp to place your honey order 🍯");
  });
}
