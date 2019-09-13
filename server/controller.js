module.exports = {
    listHouses: async (req, res) => {
        const houses = await req.app.get('db').get_houses();
        return res.status(200).send(houses);
    },
    addHouses: async (req, res) => {
        const {property_name, address, city, state, zip} = req.body;
        const house = await req.app.get('db').add_house([property_name, address, city, state, zip]);
        return res.status(200).send(house);
    }
}