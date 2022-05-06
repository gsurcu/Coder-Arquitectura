const { infoLogger, warnLogger, errorLogger} = require('../logger/index')

const infoLog = async (req, res, next) => {
  infoLogger.log('info','',{metodo: req.method, ruta: req.originalUrl})
  next()
}
const warnLog = async (req, res) => {
  warnLogger.log('warn','',{metodo: req.method, ruta: req.originalUrl})
  res.status(404).json({
    error: -2,
    descripcion: `La ruta ${req.baseUrl} con el metodo ${req.method} no esta implementado`,
  });
}
const errorLog = async (err) => {
  errorLogger.log('error', err)
}

module.exports = {
  infoLog,
  warnLog,
  errorLog,
}