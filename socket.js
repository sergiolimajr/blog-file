module.exports = function (socket) {
  socket.on('textoclient', function (data) {
    socket.emit('textoserver', marked(data));
  });

  socket.on('tituloclient', function (data) {
    socket.emit('tituloserver', data);
  });
};
