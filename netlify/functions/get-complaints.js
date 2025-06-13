const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const FORM_ID = 'complaints';
  const AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;
  const resp = await fetch(
    \`https://api.netlify.com/api/v1/forms/\${FORM_ID}/submissions\`,
    { headers: { Authorization: \`Bearer \${AUTH_TOKEN}\` } }
  );
  if (!resp.ok) {
    return { statusCode: resp.status, body: await resp.text() };
  }
  const submissions = await resp.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(submissions),
  };
};
