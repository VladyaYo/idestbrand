module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8081),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5e7de9cf09eaad468148712d07772926'),
    },
  },
});
