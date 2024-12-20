import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer'


export default function Projetos () {

    function handlemenu () {
        if(menu.style.display == 'grid'){
            menu.style.display = 'none'
        }else{
            menu.style.display = 'grid'
        }
    }

    return(
        <>
            <div className='grid grid-flow-col content-around grid-rows-6 gap-8 w-screen m-auto pt-10 md:grid-rows-2' >
            <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>CRUD PythonSQL</Card.Title>
        <Card.Text>
          Projeto CRUD para treinar meus conhecimentos em Python conectando ao um banco de dados, que no caso e o MySQL
        </Card.Text>
        <Button variant="secondary" href='https://github.com/GabrielGotinha/crud' target='_blank' className='mt-3'>Visite</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>API Node.js</Card.Title>
        <Card.Text>
          Api desenvolvida para criar, editar, pesquisar e deletar videos. Tec: Node.js, Fastify, API RESTfull, PostgreSQL
        </Card.Text>
        <Button variant="secondary" className='mt-3' href='https://api-restfull-em-node-js.onrender.com/videos'>Visite</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Login Context API</Card.Title>
        <Card.Text>
          Resolve o problema de login complicado, utilizando o localstorage, ajuda na hora da requisição api. TEC: React.js, contextapi, JS
        </Card.Text>
        <Button variant="secondary" className='mt-3' href='https://login-liard-nine.vercel.app/' target='_blank'>Visite</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Biblioteca de Filmes</Card.Title>
        <Card.Text>
        Projeto de uma biblioteca de filmes desenvolvida em React, com integrações de API para exibir dados dinâmicos, rotas e interface intuitiva. Tec:React, JavaScript, HTML, CSS, React Hooks, Redux, Requisições API
        </Card.Text>
        <Button variant="secondary" className='mt-3' href='https://projeto-filmes-gules.vercel.app/'>Visite</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Auto-Complete de CEP</Card.Title>
        <Card.Text>
        Resolve o problema, autocompleta o bairro, rua, etc, fazendo assim o cliente perder menos tempo digitando para realizar uma compra. TEC: bootstrap, JS
        </Card.Text>
        <Button variant="secondary" className='mt-3' href='https://projeto-cep-cyan.vercel.app/' target='_blank'>Visite</Button>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>    
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE.
        </Card.Text>
        <Button variant="secondary" className='mt-3'>EM BREVE</Button>
      </Card.Body>
    </Card>

            </div>
            <div className='flex justify-center mt-6'><Button variant="dark" onClick={handlemenu}>Ver mais</Button></div>

        <div id='menu' style={{display: 'none'}} className='grid-flow-col content-around  gap-2 mt-10 grid-rows-3 w-screen md:grid-rows-1 '>
        <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
      </Card.Body>
    </Card>
    <Card bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EM BREVE</Card.Title>
        <Card.Text>
          EM BREVE
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

        <Footer/>
        </>
    )
}