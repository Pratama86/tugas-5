function tebakAngka() {
    
    const angkaAcak = Math.floor(Math.random() * 5) + 1;

 
    let tebakan = prompt("Tebak angka antara 1 sampai 5:");

    tebakan = Number(tebakan);

    if (tebakan === angkaAcak) {
        alert("Tebakan Anda benar!");
    } else {
        alert(`Tebakan Anda salah! Angka yang benar adalah ${angkaAcak}.`);
    }
}

tebakAngka();
