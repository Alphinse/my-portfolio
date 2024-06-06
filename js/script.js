 // Toggle & Responsive Navigation
 const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };

//   validasi form kontam
    // Ganti API key Google Maps Anda dengan yang Anda miliki
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";

    // Inisialisasi Google Maps
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: -6.217439, lng: 106.829322} // Ganti dengan koordinat lokasi Anda
    });

    // Menambahkan marker ke peta
    const marker = new google.maps.Marker({
        position: {lat: -6.217439, lng: 106.829322}, // Ganti dengan koordinat lokasi Anda
        map: map
    });

    // Menambahkan info window ke marker
    const infoWindow = new google.maps.InfoWindow({
        content: "Lokasi Anda" // Ubah teks sesuai keinginan
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Menangani input lokasi
    const lokasiInput = document.getElementById('lokasi');
    lokasiInput.addEventListener('input', function() {
        const address = lokasiInput.value;

        // Mencari lokasi berdasarkan alamat
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: address}, function(results, status) {
            if (status === 'OK') {
                const location = results[0].geometry.location;

                // Memindahkan marker ke lokasi baru
                marker.setPosition(location);

                // Memperbarui peta dengan zoom dan centering pada lokasi baru
                map.panTo(location);
                map.setZoom(17); // Atur tingkat zoom yang diinginkan
            }
        });
    });

// validasi email dan nomor telepon
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phoneNumber) {
  const re = /^[\d\+\-\(\)]+$/; // Validasi nomor telepon dasar, bisa diubah sesuai kebutuhan
  return re.test(phoneNumber);
}

// Contoh penggunaan
const userEmail = document.getElementById('email').value;
const userPhone = document.getElementById('phone').value;

if (validateEmail(userEmail) && validatePhone(userPhone)) {
  // Email dan nomor telepon valid, lanjutkan proses
  alert('Email dan nomor telepon valid!');
} else {
  // Email atau nomor telepon tidak valid, tampilkan pesan error
  alert('Email atau nomor telepon tidak valid!');
}
