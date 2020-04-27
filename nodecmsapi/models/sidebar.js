var mongoose = require('mongoose');

//Sidebar Schema
var SidebarSchema = mongoose.Schema({
    content: {
        type: String
    }
}, { collection: 'Sidebar' });

module.exports = mongoose.model("Sidebar", SidebarSchema);