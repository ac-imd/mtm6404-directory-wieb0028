const list = function(clients) {
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            ${client.name}
            <strong>$${client.balance}</strong>
        </li>`
    ).join('');
};
const order = function(clients, property) {
    return clients.sort((a, b) => {
        if (a[property]<
            b[property]) {
            return -1
            } else if (a[property]>
                b[property]) {
                return 1
            } else {
                return 0
            }
    })
};
const total = clients.reduce((acc, client) => {
    return acc + clients.balance
        }, 0);
const info = function(clients, index) {
    return clients.find(client => client.index === index);
};
const search = function(clients, query) {
        return clients.filter
        (client => client.name.toLowerCase())
        return clients.filter
        (client => client.query.toLowerCase())
    
};