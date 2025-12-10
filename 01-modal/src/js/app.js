const openBtn = document.getElementById("open-btn");
const closeBtn = document.querySelectorAll('[data-btn="close"]');
const containerModal = document.getElementById("container-modal");

window.addEventListener("keyup", e => {
  if (e.code === "Escape") closeModal();
});

openBtn.addEventListener("click", openModal);

containerModal.addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

closeBtn.forEach(btn => {
  btn.addEventListener("click", closeModal);
});

function openModal() {
  containerModal.classList.remove("opacity-0", "pointer-events-none");
  containerModal.classList.add("opacity-100");
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  containerModal.classList.remove("opacity-100");
  containerModal.classList.add("opacity-0", "pointer-events-none");
  document.body.style.overflow = '';
}
