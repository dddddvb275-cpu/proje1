export function render(data) {
    let div = document.getElementById("provinces");
    
    // Her render öncesi div'i temizle, yoksa veriler alt alta birikir
    div.innerHTML = ""; 

    data.forEach((item) => {
        // Yeni elementleri oluştur
        let dik= document.createElement("div");
        dik.classList.add("province-card"); // CSS class ekle
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        
        // DİKKAT: Burada backtick (`) kullandık
        li.textContent = `${item.name} - yaşayan kişi sayısı: ${item.population}`;

        let h2 = document.createElement("h2");
        // phoneAreaCodes dizi olduğu için join ile birleştiriyoruz, yanına bölgeyi ekliyoruz
        h2.textContent = `Alan Kodları: ${item.phoneAreaCodes.join(", ")} | Bölge: ${item.region.tr}`;
        
        // DOM'a ekle
        dik.appendChild(h2);
        ul.appendChild(li);
        dik.appendChild(ul);
        div.appendChild(dik);
    });
}