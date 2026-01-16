const services = [
    { name: "Saman Plumbing", type: "Plumber", phone: "0771234567", area: "Kegalle" },
    { name: "Nimal Electricals", type: "Electrician", phone: "0719876543", area: "Kandy" },
    { name: "Kamal Home Clean", type: "Cleaner", phone: "0755555555", area: "Colombo" },
    { name: "Sunil AC Repair", type: "Technician", phone: "0782223333", area: "Galle" }
];

const serviceList = document.getElementById("serviceList");

function displayServices(list) {
    serviceList.innerHTML = "";
    list.forEach(service => {
        serviceList.innerHTML += `
            <div class="card">
                <h3>${service.name}</h3>
                <p><strong>Service:</strong> ${service.type}</p>
                <p><strong>Area:</strong> ${service.area}</p>
                <p><strong>Phone:</strong> ${service.phone}</p>
            </div>
        `;
    });
}

function searchService() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filtered = services.filter(service =>
        service.type.toLowerCase().includes(input)
    );
    displayServices(filtered);
}

// Load all services on page load
displayServices(services);
