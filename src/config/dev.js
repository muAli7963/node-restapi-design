 const config = {
  secrets: {
    jwt: 'everythigispossible',
    jwtExp: '10d'
  },
  dbUrl: 'mongodb://localhost:27017/api-design',
  port: 3000
}

module.exports = {config}