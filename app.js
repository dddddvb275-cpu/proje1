import { main as veriyiGetir, state } from "./ana.js"; // İsim çakışmasını engellemek için 'as' kullanabilirsin
import { render } from "./render.js";

async function mait() {
    // 1. Veriyi çek
    await veriyiGetir(); 
    
    // 2. Input'u fonksiyon içinde seç (Sayfa yüklendikten sonra)
    const input = document.getElementById("search");
    
    // 3. Olay dinleyiciyi ekle
    input.addEventListener("input", (e) => {
        let searchTerm = e.target.value.toLowerCase().trim();
        let filter = state.province.filter((item) => 
            item.name.toLowerCase().includes(searchTerm)
        );
        render(filter);
    });

    // 4. İlk ekran
    render(state.province);
}

mait();