async function diningHall(){
    const request = await fetch('/api/dining/');
    const diningData = await request.json();
    const diningTable = document.querySelector('today');

    diningData.data.forEach(hall) => {
        const diningLocation = document.createElement('tr');
        diningLocation.innerHTML = `
        <th>${dhll.hall_id}</th>
        <th>${dhll.hall_name}</th>
        <th>${dhll.hall_address}</th>`
        diningTable.append(diningLocation);
    });
}

window.onload = diningHall();
