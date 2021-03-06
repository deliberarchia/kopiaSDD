Template.listRaport.rendered = function () {
};

Template.listRaport.events({
    'click .glyphicon-trash': function (event, template) {
        Session.set('raportInScope', this);
    },
    'click .glyphicon-pencil': function (event, template) {
        Session.set('raportInScope', this);
    }
});
Template.listRaport.helpers({
    'settings': function () {
        return {
            rowsPerPage: 20,
            showNavigation: 'always',
            showColumnToggles: false,
            enableRegex: false,
            fields: [
                {key: 'dataUtworzenia', label: TXV.CREATION_DATE, tmpl:Template.dataUtworzenia,sortDirection: 'descending',sortOrder:1},
                {key: '_id', label: TXV.TITLE, tmpl:Template.raportDetails},
                {key: 'autorFullName', label: TXV.AUTHOR},

            ]
        };
    },
    RaportListAdmin: function () {
        return Raport.find({idKwestia:Router.current().params._id});
    },
    email: function () {
        return getEmail(this);
    },
    kwestiaNazwa:function(){
        var issue=Kwestia.findOne({_id:Router.current().params._id});
        return issue ? issue.kwestiaNazwa : "";
    },
    raportCount: function () {
        return Raport.find().count();
    },
    isAdminUser: function () {
        return IsAdminUser();
    }
});

Template.dataUtworzenia.helpers({
   dataUtworzenia:function(){
       return moment(this.dataUtworzenia).format("DD-MM-YYYY, HH:mm");
   }
});

Template.raportDetails.helpers({
    raport:function(id){
        var report=Raport.findOne({_id:id});
        return report? report : null;
    }
});