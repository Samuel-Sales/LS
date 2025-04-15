import { useEffect, useState } from "react";
import Card from "../../components/CardProdutos/Card"
import { getProdutos } from "../../services/api";

const Main = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await getProdutos();
        setProdutos(data);
      } catch (error) {
        alert('Erro ao carregar produtos');
      }
    };
    fetchProdutos();
  }, [])

  return (
    <main className="flex-grow">
      <h1>Produtos</h1>
      <section className="flex flex-wrap justify-between">
        <ul>
          {produtos.map((produto) => (
            <li key={produto._id}>
              <Card nome={produto.nome} preco={produto.preco} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main