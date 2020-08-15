const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync();
});

test('create genre', async () => {
    expect.assertions(1);
    const genre = await db.Genres.create({
        id: 1,
        name: 'Bobbie',
        description: 'Draper'
    });
    expect(genre.id).toEqual(1);
});

test('get genre', async () => {
    expect.assertions(1);
    const genre = await db.Genres.findByPk(1);
    expect(genre.name).toEqual('Bobbie');
});

test('delete genre', async () => {
    expect.assertions(1);
    await db.Genres.destroy({
        where: {
            id: 1
        }
    });
    const genre = await db.Genres.findByPk(1);
    expect(genre).toBeNull();
});


afterAll(async () => {
    await db.sequelize.close();
});