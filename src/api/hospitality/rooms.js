const Rooms = [
  {
    id: 1,
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
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
    name: "Exclusive Deluxe Room",
    eng: "Exclusive Deluxe Room",
    price: 9800,
    amount: 0,
    cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(4).jpg",
    discount: 0.8,
    equipment: {
      wifi: true,
      bathtub: false,
      breakfast: true
    }
  },
  {
    id: 5,
    name: "Business Double Room",
    eng: "Business Double Room",
    price: 5600,
    amount: 0,
    cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (5).jpg",
    discount: 0.9,
    equipment: {
      wifi: true,
      bathtub: false,
      breakfast: false
    }
  },
  {
    id: 6,
    name: "Hot spring double Room",
    eng: "Hot spring double Room",
    price: 8400,
    amount: 0,
    cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (6).jpg",
    discount: 0.6,
    equipment: {
      wifi: true,
      bathtub: true,
      breakfast: true
    }
  },
  {
    id: 7,
    name: "Presidential Suite",
    eng: "Presidential Suite",
    price: 23000,
    amount: 0,
    cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (7).jpg",
    discount: 0.75,
    equipment: {
      wifi: true,
      bathtub: true,
      breakfast: true
    }
  },
  {
    id: 8,
    name: "Luxury four Room",
    eng: "Luxury four Room",
    price: 8500,
    amount: 0,
    cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (8).jpg",
    discount: 0.7,
    equipment: {
      wifi: true,
      bathtub: true,
      breakfast: false
    }
  }
];

const RoomSchema = {
  fields: [
    {
      type: "input",
      inputType: "text",
      label: "ID (disabled text field)",
      model: "id",
      readonly: true,
      disabled: true
    },
    {
      type: "input",
      inputType: "text",
      label: "Name",
      model: "name",
      placeholder: "Room Name",
      featured: true,
      required: true
    },
    {
      type: "input",
      inputType: "number",
      label: "Price",
      model: "price",
      placeholder: "Room Price",
      featured: true,
      required: true
    }
  ]
};

const RoomsType = [{ id: "Single" }, { id: "Suite" }, { id: "Double" }];

const getRoomsById = (id) => {

  let value = id * 1;

  return Rooms.find(x => x.id === value);
};

const getRooms = limit => {
  return limit ? Rooms.slice(0, limit) : Rooms;
};

export { Rooms, RoomSchema, RoomsType, getRoomsById, getRooms };
