// test object
var test = {
    fname: "john",
    lname: "doe",
    age: 100,
    display: function(){
        console.log("in function");
        return this.fname + " " + this.lname;
    }
};
console.log(test.display());

// hotel reservation 
var guestgroup = new Array();
$('#submitreservation').click(reservation);
function reservation(){
    var guest={
        name: $('#guestname').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        numberguest: $('#num').val(),
        room: $('#room').val()
// completed this
    };
    alert(guest.name + " Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}