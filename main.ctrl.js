angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'My Client Organizer';
    vm.searchInput = '';
    vm.clients = [
        {
            name: 'Avific',
            year: 2010,
            favorite: true
        },
         {
            name: 'Fortosis',
            year: 2005,
            favorite: true
        },
		 {
            name: 'Hypope',
            year: 2010,
            favorite: false
        },
		 {
            name: 'Tambu Inc',
            year: 2006,
            favorite: true
        },
		 {
            name: 'Zoomm',
            year: 2011,
            favorite: true
        },
        {
            name: 'Colize',
            year: 2014,
            favorite: true
        },
        {
            name: 'Metamm Inc',
            year: 2004,
            favorite: false
        }
    ];

    vm.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Name Ascending',
        key: 'name',
        reverse: false
    },
    {
        id: 4,
        title: 'Name Descending',
        key: 'name',
        reverse: true
    }
];
vm.order = vm.orders[0];
vm.new = {};
vm.addShow = function() {
    vm.clients.push(vm.new);
    vm.new = {};
};
});