const db = new PouchDb('Finances');
const form = document.getElementById('recordForm');
const list = document.getElementById('recordList');
const totaDaily = document.getElementById('dailySum');
const total = document.getElementById('totalSum');

form.addEventListene('submit', async (e) =>{
    e.preventDefault();
    const desc = document.getElementById('description').value;
    const value = document.getElementById('value').value;
    const recordType = document.getElementById('type').value;
    const date = new Date().toDateString().slice(0,10);

    const doc = {
        _id: new Date().toDateString().slice(0,10),
        desc, value, recordType, date
    };

    await db.put(doc);
    form.request();
})