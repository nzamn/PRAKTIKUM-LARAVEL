/*
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
};

/*
 * Fungsi untuk download file menggunakan Promise
 * @returns {Promise<string>} - Sebuah Promise yang akan mengembalikan nama file
 */
const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "windows-10.exe";
            resolve(result);
        }, 3000);
    });
};

/*
 * Fungsi utama untuk menjalankan proses download menggunakan Async/Await
 */
const main = async () => {
    try {
        const result = await download(); // Menunggu hasil dari fungsi download
        showDownload(result); // Menampilkan hasil setelah download selesai
    } catch (error) {
        console.error("Terjadi kesalahan saat proses download:", error);
    }
};

// Memulai proses download
main();
