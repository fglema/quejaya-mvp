exports.handler = async () => {
  try {
    const FORM_ID = 'complaints';
    const TOKEN   = process.env.NETLIFY_AUTH_TOKEN;

    // Fetch Netlify Forms submissions
    const res = await fetch(
      `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` }
      }
    );
    if (!res.ok) {
      return {
        statusCode: res.status,
        body: `Error fetching submissions: ${res.statusText}`
      };
    }
    const submissions = await res.json();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(submissions)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `Function error: ${err.message}`
    };
  }
};
