const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development: {
      baseApi: '/api',
      mockApi: 'https://www.fastmock.site/mock/300283cb590d2022f75682f11a1848b0/api',
    },
    test: {
      baseApi: '//test.future.com/api',
      mockApi: 'https://www.fastmock.site/mock/300283cb590d2022f75682f11a1848b0/api',
    },
    prod: {
      baseApi: '//future.com/api',
      mockApi: 'https://www.fastmock.site/mock/300283cb590d2022f75682f11a1848b0/api',
    },
}

export default {
    env,
    mock: false,
    ...EnvConfig[env]
}