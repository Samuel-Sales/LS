import imagemTeste from '../../assets/Goku.jpg';

const Card = ({ nome, preco, imagem }) => {
  return (
    <div className="max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden">
        <img className='w-full h-48 object-cover' src={imagem} alt="Foto do Produto" />
        <div className='p-4'>
            <h2 className='text-x1 font-semibold text-gray-800'>{nome}</h2>
            <h2 className='text-x1 font-semibold text-gray-800'>{preco}</h2>
            <button className='mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300'>Comprar</button>
        </div>
    </div>
  )
}

export default Card;