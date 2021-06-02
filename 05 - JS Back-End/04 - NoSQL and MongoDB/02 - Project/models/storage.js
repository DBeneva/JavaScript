const Cube = require('./Cube');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit
        };

        next();
    }
}

async function getAll(query) {
    try {
        let cubes = await Cube
            .find({})
            .populate('accessories')
            .lean();

        if (query.search) {
            cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
        }
        if (query.from) {
            cubes = cubes.filter(c => c.difficulty >= Number(query.from));
        }
        if (query.to) {
            cubes = cubes.filter(c => c.difficulty <= Number(query.to));
        }
    
        return cubes;
    } catch (err) {
        console.error(err.message)
    }
}

async function getById(id) {
    return await Cube.findById(id).lean();
}

async function create(cube) {
    await new Cube({
        name: cube.name,
        description: cube.description,
        imageUrl: cube.imageUrl,
        difficulty: cube.difficulty,
        accessories: cube.accessories
    }).save();
}

async function edit(id, cube) {
    await Cube.findByIdAndUpdate(id, {
        $set: {
            name: cube.name,
            description: cube.description,
            imageUrl: cube.imageUrl,
            difficulty: cube.difficulty,
            accessories: cube.accessories
        }
    }).lean();
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit
};