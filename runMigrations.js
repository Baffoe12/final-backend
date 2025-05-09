const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

async function runMigrations() {
  const sequelize = new Sequelize('postgresql://safedrive_db_ab9i_user:jjs6jpgKSij0Xn26i8deJGzKr103hGTn@dpg-d0efesidbo4c738lejqg-a.oregon-postgres.render.com/safedrive_db_ab9i', {
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
