var body = $response.body;

body = '\/*\n@supported FB52119D4FA3\n*\/\n' + body;

$done(body);
