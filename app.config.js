
export default ({ config }) => {
    return {
      ...config,
      extra: {
        baseUrl: process.env.NODE_ENV === 'production'
                ? 'https://api.example.com'
                : 'http://localhost:3000'
      },
    };
  };
  