const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

async function runMigrations() {
  const sequelize = new Sequelize('postgresql://safedrive_fxzi_user:0cdeIgId9jNv4sgLgcWK0lmgKyr4GwWT@dpg-d0663gqli9vc73e1lum0-a.oregon-postgres.render.com/safedrive_fxzi', {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: console.log,
  });

  const umzug = new Umzug({
    migrations: {
      glob: 'migrations/*.js',
      resolve: ({ name, path, context }) => {
        const migration = require(path);
        return {
          name,
          up: async () => migration.up(context, Sequelize),
          down: async () => migration.down(context, Sequelize),
        };
      },
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
  });

  try {
    console.log('Running migrations...');
    await umzug.up();
    console.log('Migrations completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await sequelize.close();
  }
}

runMigrations();
