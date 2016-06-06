import server from 'server'
import io from 'app/IO'
import routes from 'app/Routes'

routes.initialize()
io.initialize()

server.listen(3000 , () => console.log('Servidor iniciado con Express en el puerto 3000') )
