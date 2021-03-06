Template.ZRTemplate.helpers({
    hasAccess:function(){
        if(!Meteor.userId())
            return "disabled";
        return Meteor.user().profile.userType==USERTYPE.CZLONEK ? "" : "disabled";
    },
    getZRName:function(idZR,status){
        var zespolR=null;
        if(status==KWESTIA_STATUS.REALIZOWANA)
            zespolR = ZespolRealizacyjny.findOne({_id: idZR});
        else
            zespolR= ZespolRealizacyjnyDraft.findOne({_id:idZR});

        if (zespolR){
            return zespolR.nazwa;
        }
    },
    isInKoszOrZrealizowana:function(czyAktywny,status){
        return czyAktywny==false || status==KWESTIA_STATUS.ZREALIZOWANA || status==KWESTIA_STATUS.ARCHIWALNA ? true :false;
    },
    statusGlosowanaOsobowaRealizowanaZrealizowana:function(status,typ,czyAktywny){
        return status==KWESTIA_STATUS.GLOSOWANA || status==KWESTIA_STATUS.OSOBOWA ||
        status==KWESTIA_STATUS.REALIZOWANA || status==KWESTIA_STATUS.ZREALIZOWANA || typ==KWESTIA_TYPE.ACCESS_HONOROWY || status==KWESTIA_STATUS.ARCHIWALNA || czyAktywny==false ? true : false;
    },
    pierwszyCzlonekFullName: function(idZR){
        return getCzlonekFullName(0,idZR,"ZRDraft");
    },
    drugiCzlonekFullName: function(idZR){
        return getCzlonekFullName(1,idZR,"ZRDraft");
    },
    trzeciCzlonekFullName: function(idZR){
        return getCzlonekFullName(2,idZR,"ZRDraft");
    },
    isActualUser:function(index,idZR){
        var userID=getZRData(index,idZR,"ZRDraft");
        if(userID){
            if(userID!=Meteor.userId())
                return "disabled";
            return this.status==KWESTIA_STATUS.GLOSOWANA ? "disabled" :"";
        }
        return "disabled";
    },
    isInZRFoo:function(idZr){
        var zrDraft=ZespolRealizacyjny.findOne({_id:idZr});
        if(zrDraft){
            return _.contains(zrDraft.zespol,Meteor.userId()) ? true :false;
        }
    },
    isInZR:function(idZr){
        if(Meteor.user().profile.userType!==USERTYPE.CZLONEK)
            return "disabled";
        var zrDraft=ZespolRealizacyjnyDraft.findOne({_id:idZr});
        if(zrDraft){
            return _.contains(zrDraft.zespol,Meteor.userId()) ? "disabled" :"";
        }
    },
    getZRCzlonkowie:function(idZR,status){
        var zespol=null;
        var text=null;
        if(status==KWESTIA_STATUS.GLOSOWANA || status==KWESTIA_STATUS.OSOBOWA || status==KWESTIA_STATUS.OCZEKUJACA || status==KWESTIA_STATUS.STATUSOWA) {
            zespol = ZespolRealizacyjnyDraft.findOne({_id: idZR});
        }
        else {
            zespol = ZespolRealizacyjny.findOne({_id: idZR});
        }
        var data=[];
        if(zespol){
            for(var i=0;i<zespol.zespol.length;i++){
                var user=Users.findOne({_id:zespol.zespol[i]});
                data.push(user.profile.fullName);
            }
        }
        return data;
    },
    getZRCzlonkowieKosz:function(zespol){
        var data="";
        _.each(zespol.czlonkowie,function(czlonek){
           data+=czlonek+",";
        });
        return data;
    },
    myZR:function(zespolArray){
        var array=[];
        var i=1;
        zespolArray.forEach(function(czlonek){
            var obj={
                member:czlonek,
                number:i
            };
            array.push(obj);
            i++;
        });
        return array;
    }
});

Template.ZRTemplate.events({
    'click #czlonek1': function () {
        zespolId=this.idZR;
        var idUser=getZRData(0,this.idZR,"ZRDraft");
        if(idUser==Meteor.userId()){
            rezygnujZRAlert(getZRData(0,zespolId,"ZRDraft"),this.idKwestia);
        }
        else {
            var z = ZespolRealizacyjnyDraft.findOne({_id: zespolId});
            var zespolToUpdate = z.zespol.slice();
            if (z.zespol.length > 0) {
                GlobalNotification.error({
                    title: TXV.ERROR,
                    content: TXV.FIRST_MEM_IMPL_TEAM_EXIS,
                    duration: 4
                });
                return false;
            }
            else {
                if (addCzlonekToZespolRealizacyjnyNotificationNew(Meteor.userId(), zespolToUpdate, 2, zespolId) == false) {
                    bladNotification();
                }
            }
        }
    },
    'click #czlonek2': function () {

        zespolId=this.idZR;
        var idUser=checkIfInZR(zespolId,Meteor.userId());
        if(idUser==Meteor.userId()) {//to znaczy,że już jestem w zespole i mogę zrezygnować
            rezygnujZRAlert(checkIfInZR(zespolId,Meteor.userId()),this.idKwestia);
        }
        else {
            var z = ZespolRealizacyjnyDraft.findOne({_id: zespolId});

            var zespolToUpdate = z.zespol.slice();
            var liczba = 3 - z.zespol.length - 1;

            if (isUserInZespolRealizacyjnyNotification(Meteor.userId(), zespolToUpdate) == false) {
                if (isUserCountInZespolRealizacyjnyNotification(Meteor.userId(), zespolToUpdate, 2) == false) {

                    if (addCzlonekToZespolRealizacyjnyNotificationNew(Meteor.userId(), zespolToUpdate, liczba, zespolId) == false) {
                        bladNotification();
                    }
                }
            }
        }

    },
    'click #czlonek3': function () {

        zespolId=this.idZR;
        var idUser=checkIfInZR(zespolId,Meteor.userId());
        if(idUser==Meteor.userId()) {
            rezygnujZRAlert(checkIfInZR(zespolId,Meteor.userId()),this.idKwestia);
        }
        else {
            var z = ZespolRealizacyjnyDraft.findOne({_id: zespolId});

            var zespolToUpdate = z.zespol.slice();
            var liczba = 3 - z.zespol.length - 1;

            if (isUserInZespolRealizacyjnyNotification(Meteor.userId(), zespolToUpdate) == false) {//jeżeli nie jest w zespole
                if (isUserCountInZespolRealizacyjnyNotification(Meteor.userId(), zespolToUpdate, 2) == false) {
                    if (addCzlonekToZespolRealizacyjnyNotificationNew(Meteor.userId(), zespolToUpdate, liczba, zespolId) == false) {
                        bladNotification();
                    }
                }
            }
        }
    },
    'click #listaZR': function(){
        $("#listZespolRealizacyjny").modal("show");
    }
});