module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  'vercel-deploy': {
    enabled: true,
    config: {
      deployHook: env('VERCEL_DEPLOY_HOOK'),
      apitoken: env('VERCEL_APITOKEN'),
      appfilter: env('VERCEL_APPFILTER'),
      teamfilter: env('VERCEL_TEAMFILTER'),
      roles: ['strapi-super-admin', 'strapi-editor', 'strapi-author'],
    },
  },
});
