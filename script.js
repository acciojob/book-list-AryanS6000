 const submitBtn = document.getElementById("submit");

 submitBtn.addEventListener("click", function () {

	 const title = document.getElementById("title").value.trim();
	 const author = document.getElementById("author").value.trim();
	 const isbn = document.getElementById("isbn").value.trim();

	 const tablebody = document.getElementById("book-list");
	 const row = document.createElement("tr");

	 row.innerHTML = `
	     <td>${title}</td>
		 <td>${author}</td>
         <td>${isbn}</td>
		 <td><button class = "delete">Clear</button></td>
		 `;
	 tablebody.appendChild(row);

	 document.getElementById("title").value ="";
	 document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";  
 });
document.getElementById("book-list").addEventListener("click", function (event) {
  // Agar clicked element ka class "delete" hai
  if (event.target.classList.contains("delete")) {
    // Us button ke parent row ko hata do
    const rowToDelete = event.target.parentElement.parentElement;
    rowToDelete.remove();
  }
});
