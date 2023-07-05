function klik(element) {
  element.classList.toggle("clicked");

  const menuElements = document.getElementsByClassName("menu");
  const clickedItems = [];

  for (let i = 0; i < menuElements.length; i++) {
    if (menuElements[i].classList.contains("clicked")) {
      clickedItems.push(menuElements[i]);
    }
  }

  let total = 0;

  for (let i = 0; i < clickedItems.length; i++) {
    const item = clickedItems[i];
    const harga = parseInt(item.children[1].textContent.slice(3));
    total += harga;
  }

  const rows = document.getElementsByTagName("tr");
  const lastRow = rows[rows.length - 1];
  const totalElement =
    lastRow.getElementsByTagName("td")[
      lastRow.getElementsByTagName("td").length - 1
    ];
  totalElement.textContent = "Rp " + total;
}
