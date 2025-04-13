import Card from "../../components/CardProdutos/Card"

const Main = () => {
  return (
    <main className="flex-grow">
        <h1>Produtos</h1>
        <section className="flex flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    </main>
  )
}

export default Main