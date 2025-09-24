const products = [
  {id:1, title:"PlayStation 5", price:"€450", seller:"Carlos", category:"consola", img:"assets/prod1.jpg"},
  {id:2, title:"Gaming PC RTX 3070", price:"€1200", seller:"Lucía", category:"pc", img:"assets/prod2.jpg"},
  {id:3, title:"Teclado Mecánico RGB", price:"€70", seller:"Mario", category:"accesorio", img:"assets/prod3.jpg"},
  {id:4, title:"Auriculares HyperX", price:"€60", seller:"Ana", category:"accesorio", img:"assets/prod4.jpg"},
];

const grid = document.getElementById("productGrid");
if(grid){
  function renderProducts(list){
    grid.innerHTML = "";
    list.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">${p.price}</p>
        <p class="seller">Vendido por ${p.seller}</p>
      `;
      card.onclick = () => {
        window.location.href = "product.html?id=" + p.id;
      };
      grid.appendChild(card);
    });
  }

  renderProducts(products);

  document.getElementById("searchInput").addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(term));
    renderProducts(filtered);
  });

  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      if(cat==="all") renderProducts(products);
      else renderProducts(products.filter(p => p.category===cat));
    });
  });
}