import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { createAuth } from "@keystone-next/auth";
import { withItemData, statelessSessions} from "@keystone-next/keystone/session";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // TODO: Add in inital roles
    }
});

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
    async onConnect(keystone) {
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    }
  },
  lists: createSchema({
    // Schema items go in here
    User,
    Product,
    ProductImage
  }),
  ui: {
    // Show UI only for people who pass this test
    isAccessAllowed: ({ session }) => {
        return !!session?.data;
    },
  },
  // TODO: Add session values here.
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id name email`
})
}));
