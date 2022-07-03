module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['qDDnsHLiU9Ed2A9Md5b8AA==','k9DVjtqmrfJqwaS3qKwFPw==','5LYlg+fgvOrBpXcbPNPgMA==','KxeeapCUfiPCQc9EajZX3Q==']),
  },
});
