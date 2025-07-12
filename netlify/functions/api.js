// Netlify serverless function to handle API requests
exports.handler = async function(event, context) {
  // Extract the path and query parameters
  const path = event.path.replace('/.netlify/functions/api', '');
  const method = event.httpMethod;

  // Basic routing
  try {
    if (path === '/api/data' && method === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'hle!',
          data: {
            message: 'Message and email sent successfully!',
          }
        })
      };
    }
    
    else if (path === '/api/contact' && method === 'POST') {
      // This would normally call your contact processing logic
      // For now, just return a success message
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Message sent successfully (serverless function)!',
        })
      };
    }
    
    else if (path === '/api/google' && method === 'POST') {
      // This would normally call your reCAPTCHA verification logic
      // For now, just return a success message
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Captcha verification success (serverless function)!',
        })
      };
    }
    
    // Default case - route not found
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Not Found' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server Error', message: error.message })
    };
  }
}; 