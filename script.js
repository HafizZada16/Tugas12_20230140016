function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var Alamat = document.getElementById("alamat").value;
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
        "\nAlamat : " + Alamat +
        "\nAngkatan : " + angkatan +
        "\nTanggal : " + formattedTanggal
    );

    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("programming").checked = true; 
    document.getElementById("alamat").value = "";
    document.getElementById("angkatan").value = "2020"; 
    document.getElementById("tanggal").value = "";
}