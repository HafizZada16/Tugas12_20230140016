function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var Alamat = document.getElementById("alamat").value; // Dikoreksi menjadi Alamat (A kapital) sesuai [cite: 19]
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;

    var formattedTanggal = "";
    if (tanggal) {
        formattedTanggal = tanggal;
    }

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + Alamat + // Menggunakan Alamat (A kapital) sesuai [cite: 19]
        "\nAngkatan : " + angkatan +
        "\nTanggal : " + formattedTanggal
    );
}