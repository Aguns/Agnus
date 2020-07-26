const Booking = [
  {
    id: 1,
    code: "Room 1",
    room: 1,
    desc: "Quarto 1",    
    status: "Disponivel",
    notes: "sujo",
    adult: 1,
    kids:2,
    Room: {
      id: 1,
      type: "Suite",
      name: "Economy Double Room",
      eng: "Economy Double Room",
      price: 7000,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
      discount: 0.9,
      equipment: {
        wifi: false,
        bathtub: true,
        breakfast: true
      }
    }, 
    time:"2020-07-30"
  },
  {
    id: 2,
    code: "Room 2",
    desc: "Quarto 2",
    
    status: "Em Manutenção",
    adult: 2,
    kids:2,
    Room: {
      id: 2,
      type: "Double",
      name: "Sea view triple Room",
      eng: "Sea view triple Room",
      price: 7800,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(2).jpg",
      discount: 0.8,
      equipment: {
        wifi: true,
        bathtub: true,
        breakfast: false
      }
    }, 
    time:"2020-07-10"
  },
  {
    id: 3,
    code: "Room 3",
    desc: "Quarto 3",    
    status: "Reservado",
    adult: 2,
    kids:2,
    Room: {
      id: 3,
      type: "Single",
      name: "Elegant landscape Room",
      eng: "Elegant landscape Room",
      price: 5400,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(3).jpg",
      discount: 0.85,
      equipment: {
        wifi: false,
        bathtub: true,
        breakfast: true
      }
    }, 
    time:"2020-07-28"
  },
  {
    id: 4,
    code: "Room 4",
    room: 1,
    desc: "Quarto 1",    
    status: "Disponivel",
    notes: "sujo",
    adult: 2,
    kids:2,
    Room: {
      id: 1,
      type: "Suite",
      name: "Economy Double Room",
      eng: "Economy Double Room",
      price: 7000,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
      discount: 0.9,
      equipment: {
        wifi: false,
        bathtub: true,
        breakfast: true
      }
    }, 
    time:"2020-07-27"
  },
];

const getBookingById = id => {
  return id === undefined ? Booking[0] : Booking.find(x => x.id === id);
};

const getBooking = limit => {
  return limit ? Booking.slice(0, limit) : Booking;
};

export { Booking, getBookingById, getBooking };
