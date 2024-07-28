module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:5173'],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Access-Control-Allow-Origin'
      ],
    },
  },
];
