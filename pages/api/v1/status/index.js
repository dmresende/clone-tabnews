// /api/status
function status (resquest, response){
  response.status(200).json({chave: 'Status OK'});
}

export default status;